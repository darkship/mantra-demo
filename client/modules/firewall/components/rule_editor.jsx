import React from 'react';
import Input from '/client/modules/core/components/input'
class RuleEditor extends React.Component {
  constructor(props) {
    super(props);
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
            <Input name='inbound_host'type='text' className='form-control' placeholder='Inbound host' value={this.props.inbound_host} onChange={this.props.setInboundHost} required='required'/>
          </div>
          <div className='form-group col-xs-6'>
            <label htmlFor='inbound_port'>Inbound port</label>
            <Input name='inbound_port'type='number' className='form-control' placeholder='Inbound host' max='9999' value={this.props.inbound_port} onChange={this.props.setInboundPort} required='required'/>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-xs-6'>
            <label htmlFor='outbound_host'>Outbound host</label>
            <Input name='outbound_host'type='text' className='form-control' placeholder='Outbound host' value={this.props.outbound_host} onChange={this.props.setOutboundHost} required='required'/>
          </div>
          <div className='form-group col-xs-6'>
            <label htmlFor='outbound_port'>Outbound port</label>
            <Input name='outbound_port'type='number' className='form-control' placeholder='Outbound host' max='9999' value={this.props.outbound_port} onChange={this.props.setOutBoundPort} required='required'/>
          </div>
        </div>
        {(this.props.children)}
      </form>
    );
  }
}

export default RuleEditor;
