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

  state = {
    title: 'Home',
    slogan: 'Boilerplate for React/Redux app.',
  }

  render() {
    const { title, slogan } = this.state;
    const { counter, increment, decrement } = this.props;

    return (
      <Fragment>
        <h1>{ title }</h1>
        <p>{ slogan }</p>

        <h2>Examples:</h2>
        <section>
          <h3>Redux Thunk and Immutable:</h3>
          <button type='button' onClick={ increment }>+</button>
          <span>{ counter }</span>
          <button type='button' onClick={ decrement }>-</button>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.appReducer.get('counter'),
});

const mapDispatchToProps = dispatch => bindActionCreators(AppActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
