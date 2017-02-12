import React from 'react';


class IpDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  edit(){
  this.props.edit(this.props.ip)
  }
  delete(){
  this.props.delete(this.props.ip)
  }
  render() {
    return (
      <div className='ip-display'>
      <div className='ip-desc'>
          <div className='ip-name'>
            {this.props.ip.name}
          </div>
          <div className='ip-host'>
            {this.props.ip.host}
          </div>
        </div>
      <div className='ip-buttons'>
          <div className='btn-group'>
              <button type='button' className='btn btn-default' onClick={this.edit.bind(this)}>Edit</button>
              <button type='button' className='btn btn-default' onClick={this.delete.bind(this)}>Delete</button>
            </div>
        </div>


</div>
    );
  }
}

export default IpDisplay;
