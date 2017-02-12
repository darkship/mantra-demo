import React from 'react';
import RuleEditor from './rule_editor'
class RuleNew extends React.Component{
  constructor(props) {
    super(props);
  }
  create(e)
  {
  e.preventDefault();
  this.props.create()
  }
  render(){
  const autofocus='autofocus';
  return (
  <div>
  {this.props.isShowCreator?
  (
  <RuleEditor {...this.props} onSubmit={this.create.bind(this)}>
            <div className='btn-group'>
              <button key='create' type='submit' className='btn btn-primary'>Create</button>
              <button key='cancel' type='button' className='btn btn-default' onClick={this.props.hideCreator}>Cancel</button>
            </div>
</RuleEditor>
):
  (
  <button type='button' className='btn btn-primary' onClick={this.props.showCreator}>New rule</button>
)
  }
  </div>
  )
  }
}

export default RuleNew;
