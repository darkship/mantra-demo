import React from 'react';
import RulesetItem from '../containers/ruleset_item'
class RulesetList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-group">
        {this.props.ruleSets.map(r=>(<RulesetItem key={r._id} ruleSet={r}/>))}
      </div>
    );
  }
}

export default RulesetList;
