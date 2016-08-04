import React from 'react';
import RuleItem from '../containers/rule_item';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class RuleList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
	return(
	  <div className='rulelist'>
	    {this.props.rule_ids.map((_id,index)=>(<RuleItem key={_id} _id={_id} active={this.props.currentRule==_id?'active':''} index={index} editor={this.props.editor}/> ))}
	  </div>
	);
	}
}

export default DragDropContext(HTML5Backend)(RuleList);
