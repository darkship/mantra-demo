import React from 'react';
import RuleDisplay from './rule_display';
import RuleEditor from './rule_editor';

/**
 * Rule
 */
class Rule extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * html for rule
   * @return {XML}
   */
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
