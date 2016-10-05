import React from "react";
import Input from "/client/modules/core/components/input"
import Switch from "react-bootstrap-switch"
class Site extends React.Component {
  constructor(props) {
    super(props);
  }
  setTitle(title){
    this.props.setTitle(this.props.site,title)
  }
  setPageUrl(pageUrl){
    this.props.setPageUrl(this.props.site,pageUrl)
  }
  setMinPage(minPage){
    this.props.setMinPage(this.props.site,parseInt(minPage))
  }
  setMaxPage(maxPage){
    this.props.setMaxPage(this.props.site,parseInt(maxPage))
  }
   setVideoUrlRegex(videoUrlRegex){
    this.props.setVideoUrlRegex(this.props.site,videoUrlRegex)
  }
  remove()
  {
    this.props.remove(this.props.site)
  }
  crawl()
  {
   this.props.crawl(this.props.site) 
  }
  setTagSelector(tagSelector){
    this.props.setTagSelector(this.props.site,tagSelector)
  }
  setActorSelector(actorSelector){
    this.props.setActorSelector(this.props.site,actorSelector)
  }
  toggleSafe(){
      this.props.toggleSafe(this.props.site);
  }
  render() {
    return (
      <div className='container-fluid'>
        <form className="form-horizontal">
          <div className="form-group">
            <div className='col-xs-offset-1 col-xs-7'>
              <div className="input-group">
                <Input onChange={this.setTitle.bind(this)} value={this.props.site.title} className="form-control"/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.remove.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="pageUrl" className="col-xs-2 control-label">Page url</label>
            <div className='col-xs-6'>
              <Input id='pageUrl' name='pageUrl' onChange={this.setPageUrl.bind(this)} value={this.props.site.pageUrl} className="form-control" placeholder="title"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="minPage" className="col-xs-2 control-label">Min Page Number</label>
            <div className="col-xs-1">
              <Input id='minPage' name='minPage' type="Number" onChange={this.setMinPage.bind(this)} value={this.props.site.minPage} className="form-control" placeholder="Page min number"/>
            </div>
            <label htmlFor="maxPage" className="col-xs-2 control-label">Max Page Number</label>
            <div className='col-xs-1'>
              <Input id='maxPage' name='maxPage' type="Number" onChange={this.setMaxPage.bind(this)} value={this.props.site.maxPage} className="form-control" placeholder="Page max number"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="regex" className="col-xs-2 control-label">Video page regex</label>
            <div className='col-xs-6'>
              <Input onChange={this.setVideoUrlRegex.bind(this)} value={this.props.site.videoUrlRegex} className="form-control" placeholder="video page regex"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="tag" className="col-xs-2 control-label">CSS Tag Selector</label>
            <div className='col-xs-2'>
              <Input onChange={this.setTagSelector.bind(this)} value={this.props.site.tagSelector} className="form-control" placeholder="CSS tag selector"/>
            </div>
            <label htmlFor="tag" className="col-xs-2 control-label">CSS Actor Selector</label>
            <div className='col-xs-2'>
              <Input onChange={this.setActorSelector.bind(this)} value={this.props.site.actorSelector} className="form-control" placeholder="CSS actor selector"/>
            </div>
          </div>
          <div className="form-group">
            <div className='col-xs-offset-2 col-xs-10'>
              <button type="button" className='btn btn-default' onClick={this.crawl.bind(this)}>Crawl</button>
            </div>
          </div>
          <div className="form-group">
            <div className='col-xs-offset-2 col-xs-10'>
              <Switch value={this.props.site.unsafe} onText="Unsafe" offText="safe" onChange={this.toggleSafe.bind(this)}/>
            </div>
          </div>
        </form>
        <div className='row'>
          <div className='col-xs-12'>
            <p>
              Video count :{this.props.video_count}
            </p>
            <p>
              {this.props.crawlqueue?
                ("Queue size :"+this.props.crawlqueue.queueItemSize||0)
                :
                (null) }
            </p>
          </div>
        </div> 
      </div>
    );
  }
}

export default Site;
