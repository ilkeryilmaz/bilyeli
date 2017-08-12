import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div>
        <Button>Button</Button>
        <Button to='/about'>About</Button>
      </div>
    );
  }
}
