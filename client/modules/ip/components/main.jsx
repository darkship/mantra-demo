import React from 'react';
import IpList from '../containers/ip_list';
import IpNew from '../containers/ip_new';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IpNew />
        <IpList filter={this.props.filter}/>
      </div>
    );
  }
}

export default Main;
