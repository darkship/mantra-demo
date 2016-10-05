import React from 'react';

class SiteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activeClass=""
    return (
      
        <a href={'/modules/crawler/site/'+this.props.site._id} className={"list-group-item "+(this.props.isactive?"active":"")}>{this.props.site.title}</a>
    );
  }
}

export default SiteItem;
