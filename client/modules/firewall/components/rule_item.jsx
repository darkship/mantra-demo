import React from 'react';
import RuleDisplay from './rule_display';
import RuleUpdate from './rule_update';

class RuleItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'rule '+this.props.active}>
        {this.props.editor && this.props.editor._id==this.props.rule._id?
          (<RuleUpdate {...this.props}/>):
          (<RuleDisplay {...this.props}/>)}
      </div>
    );
  }
}

export default RuleItem;
