import React from 'react';
import IpItem from '../containers/ip_item';

class IpList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ip-list'>
    {
    this.props.ips.map(i=><IpItem key={i._id} ip={i} editor={this.props.editor} />)
}
  </div>
    );
  }
}
export default IpList;
