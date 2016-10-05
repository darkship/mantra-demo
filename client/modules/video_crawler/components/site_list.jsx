import React from 'react';
import SiteIem from '../containers/site_item';


class SiteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className='aside'>
        <div className='site-new'>
          <button className='btn btn-primary' onClick={this.props.createSite}>New</button>
        </div>
        <div className='site-list'>
          {this.props.sites.map(s=>(<SiteIem key={s._id} site={s} />))}
        </div>
      </aside>
    );
  }
}

export default SiteList;
