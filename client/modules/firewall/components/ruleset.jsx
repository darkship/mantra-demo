import React from 'react';
import RulesetHeader from './ruleset_header';
import RuleNew from '../containers/rule_new';
import RuleList from './rule_list';

const Ruleset = ({ruleSet,updateTitle,deleteRuleSet,currentRule,editor}) => 
  {
    return ruleSet? 
  	(<div>
    	<RulesetHeader ruleSet={ruleSet} updateTitle={updateTitle} deleteRuleSet={deleteRuleSet}/>
    	<hr/>
    	<RuleNew/>
    	<hr/>
    	<RuleList rule_ids={ruleSet.rule_ids} currentRule={currentRule} editor={editor}/>
    	
  	</div>):(null)
  }
;

export default Ruleset;
