import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Not Found</title>
        </Helmet>

        <h1>Not Found</h1>
      </div>
    );
  }
}
