import React from 'react';
import IpUpdate from './ip_update';
import IpDisplay from './ip_display'

class IpItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"ip-item "+this.props.active}>
        {this.props.editor && this.props.editor._id==this.props.ip._id?
          (<IpUpdate {...this.props}/>):
          (<IpDisplay {...this.props}/>)}
      </div>
    );
  }
}

export default IpItem;
