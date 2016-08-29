import React from 'react';
import IpEditor from './ip_editor'

class IpUpdate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IpEditor {...this.props} {...this.props.editor}>
        <div className='btn-group'>
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" className="btn btn-default" onClick={this.props.hide}>Cancel</button>
        </div>
      </IpEditor>
    );
  }
}

export default IpUpdate;
