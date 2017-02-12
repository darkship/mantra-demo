import React from 'react';

/**
 * Input
 */
class Input extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * catches the onchange event
   * @param {event} e
   */
  onChange(e) {
    this.props.onChange(e.target.value);
  }

  /**
   * renders an input
   * @return {XML}
   */
  render() {
    return (<input {...this.props} onChange={this.onChange.bind(this)}/>);
  }
}

export default Input;
