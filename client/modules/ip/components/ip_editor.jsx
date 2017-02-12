import React from 'react';
import Input from '/client/modules/core/components/input';
import IpInput from './ip_input';


class IpEditor extends React.Component{
constructor(props) {
    super(props);
  }
onSubmit(e){
e.preventDefault()
this.props.onSubmit();
}
render(){
return(
  <form className='form-inline' onSubmit={this.onSubmit.bind(this)}>
<div className='form-group'>
<label htmlFor="name">Name</label>&nbsp;
<Input id='name' name='name' type="text" className="form-control"  placeholder="Name" onChange={this.props.onChangeName} value={this.props.name} required='required' />&nbsp;
</div>
<div className='form-group'>
<label htmlFor="host">Host</label>&nbsp;
<IpInput id='host'  className="form-control"  placeholder="Host" onChange={this.props.onChangeHost} value={this.props.host}/>&nbsp;
</div>
{this.props.children}
</form>
)
}
}

export default IpEditor;
