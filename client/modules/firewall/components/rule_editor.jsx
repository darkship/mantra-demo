import React from 'react';
import Input from '/client/modules/core/components/input'
import {Typeahead,Tokenizer} from 'react-typeahead';

class RuleEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  setAction(e){
    this.props.setAction(e.target.value);
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <Input name='name' className='form-control' type='text' value={this.props.title} size='255' autoFocus={this.props.autoFocus} onChange={this.props.setTitle} required='required'/>
        </div>
        <div className='row'>
          <div className='form-group col-xs-6'>
            <label htmlFor='inbound_host'>Inbound host</label>
            <Input name='inbound_host'type='text' className='form-control' placeholder='Inbound host' value={this.props.inbound_host} onChange={this.props.setInboundHost} required='required' pattern='^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$' title='Ip address'/>
            <Tokenizer options={['John', 'Paul', 'George', 'Ringo']} maxVisible={2} value={this.props.inbound_host}/>
          </div>
          <div className='form-group col-xs-6'>
            <label htmlFor='inbound_port'>Inbound port</label>
            <Input name='inbound_port'type='number' className='form-control' placeholder='Inbound host' min='0' max='65535' value={this.props.inbound_port} onChange={this.props.setInboundPort} required='required'/>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-xs-6'>
            <label htmlFor='outbound_host'>Outbound host</label>
            <Input name='outbound_host'type='text' className='form-control' placeholder='Outbound host' value={this.props.outbound_host} onChange={this.props.setOutboundHost} required='required' pattern='^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$' title='Ip address'/>
          </div>
          <div className='form-group col-xs-6'>
            <label htmlFor='outbound_port'>Outbound port</label>
            <Input name='outbound_port'type='number' className='form-control' placeholder='Outbound host' min='0' max='65535' value={this.props.outbound_port} onChange={this.props.setOutBoundPort} required='required'/>
          </div>
          <div className='form-group col-xs-12'>
            <select className="form-control" required value={this.props.action} onChange={this.setAction.bind(this)}>
              <option value="">Select Action</option>
              <option value='drop' >Drop</option>
              <option value='reject' >Reject</option>
              <option value='allow' >Allow</option>
            </select>
          </div>
        </div>
        {(this.props.children)}
      </form>
    );
  }
}

export default RuleEditor;
