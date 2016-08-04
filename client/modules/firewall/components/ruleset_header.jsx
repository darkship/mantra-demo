import React from 'react';
import Input from '/client/modules/core/components/input';
class RulesetHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    	title:props.ruleSet.title,
    	ruleSet:props.ruleSet
    };
  }
  updateTitle(title){
  	const _id=this.props.ruleSet._id;
  	this.props.updateTitle(_id,title)
  	this.setState({...this.state,title})//fix cursor jump while writing
  }
  componentWillReceiveProps(nextProps){
  	if(nextProps.ruleSet._id!=this.state.ruleSet._id)
  	{
  		this.setState({
  			title:nextProps.ruleSet.title,
    		ruleSet:nextProps.ruleSet
    	});
  	}
  }
  deleteRuleSet()
  {
  	const _id=this.props.ruleSet._id;
  	this.props.deleteRuleSet(_id)
  }
  render(){
   return(<div className="input-group">
  		<Input id={'rulleset-header-'+this.props.ruleSet._id} type='text' value={this.state.title} className='form-control' onChange={this.updateTitle.bind(this)}/>
  		<span className="input-group-btn">
        	<button className="btn btn-default" type="button" onClick={this.deleteRuleSet.bind(this)}><span className='glyphicon glyphicon-trash'></span></button>
      </span>
	</div>
	)
	}
}

export default RulesetHeader;
