import React from 'react';


/**
 * Utility to wrap stateless component and allow functional stateless components
 * to be tested using reagent
 * @param {object} Wrapped - React component
 * @constructor
 */
const StatelessWrapper = (Wrapped) => class extends React.Component {
  /**
   * render
   * @return {XML}
   */
  render() {
    return <Wrapped {...this.props} />;
  }
};
export default StatelessWrapper;
