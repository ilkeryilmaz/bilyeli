import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import * as AppActionCreators from 'actions/count';
import { routeCodes } from 'config/routes';

import Logo from 'Assets/img/logo.svg';
import './Home.scss';

class Home extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  state = {
    title: 'Examples',
  };

  render() {
    const { title } = this.state;
    const { counter, increment, decrement } = this.props;

    return (
      <Fragment>
        <h1>{title}</h1>
        <section className='section'>
          <h3 className='section__title'>React Router:</h3>
          <Link to={routeCodes.DETAIL}>Go to subpage</Link>
        </section>
        <section className='section'>
          <h3 className='section__title'>Redux Thunk with Immutable:</h3>
          <Button primary handleClick={increment}>
            +
          </Button>
          <span>{counter}</span>
          <Button secondary handleClick={decrement}>
            -
          </Button>
        </section>
        <section className='section'>
          <h3 className='section__title'>Css with scss:</h3>
          <div className='section__box' />
        </section>
        <section className='section'>
          <h3 className='section__title'>File loader (png, jpg, gif, ttf, eot, svg, woff):</h3>
          <img src={Logo} alt='Logo' width='150' />
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
