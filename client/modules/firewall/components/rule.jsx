import React from 'react';
import RuleDisplay from './rule_display';
import RuleEditor from './rule_editor';

class Rule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tmp=this.props.isEditing? RuleEditor:RuleDisplay;
    return (
      <div className='rule'>
        <tmp {...this.props}/>
      </div>
    );
  }
}

export default Rule;
