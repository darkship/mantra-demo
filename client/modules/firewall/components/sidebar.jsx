import React from 'react';

import RulesetNew from '../containers/ruleset_new';
import RulesetList from '../containers/ruleset_list';

import SidebarToggler from './sidebar_toggler';

class Sidebar extends React.Component {
	constructor(props) {
	    super(props);
	  }
  	toggleExpend(){
  		this.props.toggleExpend(this.props.isExpended);
  	}
	render(){
		const animate=this.props.isExpended?'expend':'retract'
		return (
	  <aside className={'aside '+animate}>
	    <div className={'sidebarContent '+animate}>
	    	<RulesetNew/>
	    	<RulesetList/>
	    </div>
	    <SidebarToggler onClick={this.toggleExpend.bind(this)} isExpended={this.props.isExpended}/>
	  </aside>
	);
	}
}

export default Sidebar;
