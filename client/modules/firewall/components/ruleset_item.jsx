import React from 'react';

class RulesetItem extends React.Component {
  constructor(props) {
    super(props);
  }
  goToRuleSet(e){
    e.preventDefault();
    this.props.goToRuleSet(this.props.ruleSet._id)
  }
  render() {
    const activeClass=this.props.activeRuleSet==this.props.ruleSet._id?"active":"";
    return (
      <a href="#" onClick={this.goToRuleSet.bind(this)} className={"list-group-item "+activeClass}>
        {this.props.ruleSet.title}
      </a>
    );
  }
}

export default RulesetItem;
