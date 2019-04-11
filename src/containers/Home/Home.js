import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  handleTestButtonClick = () => {
    alert('click');
  };

  render() {
    return (
      <Fragment>
        <h1>Home</h1>
        <button type='button' onClick={ this.handleTestButtonClick }>Click Me</button>
      </Fragment>
    );
  }
}

Home.Proptypes = {
  counter: PropTypes.number,
  dispatch: PropTypes.func,
};
