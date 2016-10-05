import {Videos,Sites} from '/lib/collections';
import {Mongo} from 'meteor/mongo';

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Crawler from "crawler";
import url from 'url';
import {_} from 'lodash'


const oldPush=Crawler.prototype._pushToQueue;
Crawler.prototype._pushToQueue=function()
{
	this.emit('queueItemSize.change',this.queueItemSize, +1);
	oldPush.apply(this,arguments);
}
const oldRelease=Crawler.prototype._release;
Crawler.prototype._release=function()
{
	this.emit('queueItemSize.change',this.queueItemSize, -1);
	oldRelease.apply(this,arguments);
}


const Queues=new Mongo.Collection(null)

Meteor.publish("crawlqueue",function(site_id){
	 let self=this;
	Queues.find({_id:site_id}).observe({
		added:(doc)=>{
			self.added("crawlqueue",doc._id,doc)
		},
		changed:(newDoc)=>{
			self.changed("crawlqueue",newDoc._id,newDoc)
		},
	})
	this.ready()
})

let current={}
export default function () {
  Meteor.methods({
    'crawl.crawl':function(site_id) {
    	const userId=this.userId;

    	const site=Sites.findOne(site_id)

    	if(!site)
    	{
    		throw new Meteor.Error(404,"Site not found")
    	}
    	if(site.isCrawling)
    	{
    		throw new Meteor.Error(401,"Already crawling")
    	}
    	let c =new Crawler();

    	c.on('queueItemSize.change',Meteor.bindEnvironment(function(queueItemSize,inc){
    		Queues.upsert({_id:site_id,user_id:userId},{$inc:{queueItemSize:inc}},function(e,n){
    			if(e)
    				console.error(e)
    		})
    	}))
    	const videoPageCB=Meteor.bindEnvironment((pageUrl,error, result,$)=>{
    		if(error)
    		{
    			console.error(error);
    			return
    		}
    		if(!$)
    		{
    			console.error("no $ for "+pageUrl);
    			return
    		}
    		const title=$('title').html();
    		const url=$('video').children().attr('src');
    		const tags=$(site.tagSelector).map((i,s)=>$(s).html()).get()
    		const actors=$(site.actorSelector).map((i,s)=>$(s).html()).get()
				console.log("found title",title)
    		let v= new Videos({pageUrl,title,url,tags,actors,site_id})
    		v.save(function(err){
    			if(err && err.error==409)
    			{
    				//console.error('duplicate')
    			}else if(err){
    				console.log("error on save video")
    				console.error(err)
    			}
    		});

    	})
    	const pageCB=(page,error, result,$)=>{
    		if(error)
    				console.error(error)
					if(!$)
	    		{
	    			console.error("no $ for ",page);
	    			return
	    		}
    		const urls=$('a').map(function(i,a){
    			 const toQueueUrl = $(a).attr('href');
    			 if(toQueueUrl && toQueueUrl.match(site.videoUrlRegex))
    			 	return toQueueUrl
    		});
    		 $(_.uniq(urls)).each(function(index, u) {
            	c.queue({
            		uri:u,
            		callback:function(error, result,$){
            			videoPageCB(u,error, result,$)
            		}
            	});

		     });

    	}
    	for(let i=site.minPage;i<=site.maxPage;i++)
    	{
    		const uri=site.pageUrl.replace('{$}',i);
    		console.log(uri)

    		c.queue([{
			    uri,
			    callback: (error, result,$)=>{
			    	pageCB(uri,error, result,$)
			    }
			}]);
    	}

    },
  	'crawl.stop':(site_id)=>{

  	}
  });
}
