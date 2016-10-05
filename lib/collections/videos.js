import {Mongo} from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

const Videos = Class.create({
  name: 'Url',
  secured: false,
  collection : new Mongo.Collection('videos'),
  fields:{
  	site_id:{
  		type:String
  	},
  	title:{
  		type:String
  	},
  	pageUrl:{
  		type:String,
  		index:1,
  	},
  	url:{
  		type:String,
  		optional: true,
  	},
  	tags:{
  		type:[String],
  		optional: true
  	},
  	actors:{
  		type:[String],
  		optional: true
  	},
  	downloaded:{
  		type:Boolean,
  		default:false
  	}
  },
  behaviors: {
  	timestamp: {
	    hasCreatedField: true,
	    createdFieldName: 'createdAt',
	    hasUpdatedField: true,
	    updatedFieldName: 'updatedAt'
  	}
  }
});

export default Videos;
