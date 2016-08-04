import React from 'react';
import RuleEditor from './rule_editor'

class RuleUpdate  extends React.Component {
    constructor(props) {
        super(props);
    }
    hideCreator(){
	    this.props.hideEditor(this.props.rule);
	 }
	 updateRule(e){
	 	e.preventDefault();
	 	this.props.updateRule(this.props.rule);
	 }
    render() {
        return (<RuleEditor  {...this.props} {...this.props.editor} onSubmit={this.updateRule.bind(this)}>
              <div className='btn-group'>
                  <button key='create' type='submit' className='btn btn-primary'>Update</button>
                  <button key='cancel' type='button' className='btn btn-default' onClick={this.hideCreator.bind(this)}>Cancel</button>
                </div>
            </RuleEditor>)
    }
}



export default RuleUpdate;
