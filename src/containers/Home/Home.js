import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AppActionCreators from 'actions/count';

class Home extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <Fragment>
        <h1>Bilyeli</h1>
        <p>Boilerplate for React/Redux app.</p>

        <h2>Examples:</h2>

        <h3>Redux:</h3>
        <button type='button' onClick={ increment }>+</button>
        <span>{ counter }</span>
        <button type='button' onClick={ decrement }>-</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.appReducer.counter,
});

const mapDispatchToProps = dispatch => bindActionCreators(AppActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
