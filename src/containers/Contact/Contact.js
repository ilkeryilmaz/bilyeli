import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact</title>
        </Helmet>

        <h1>Contact</h1>
        <a href='mailto:mail@site.com'>mail@site.com</a>
      </div>
    );
  }
}
