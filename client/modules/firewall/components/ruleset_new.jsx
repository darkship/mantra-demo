import React from 'react';

class RulesetNew extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='newruleset'><button type="button" className='btn btn-primary' onClick={this.props.onClick}>New Ruleset</button></div>
    );
  }
}

export default RulesetNew;
