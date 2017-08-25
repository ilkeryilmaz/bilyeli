import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class Home extends Component {
  constructor() {
    super();

    this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
  }

  handleTestButtonClick() {
    alert('Congratulations 👏');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <h1>Home</h1>
        <button onClick={ this.handleTestButtonClick }>
          Click Me
        </button>
      </div>
    );
  }
}

Home.Proptypes = {
  counter: PropTypes.number,
  dispatch: PropTypes.func,
};
