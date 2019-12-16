import React, { Component } from 'react';

import "./style.css";

class ErrorView extends Component {
  render() {
    const errorMessageMap = {
      404: 'Page not found',
      401: 'User not authorized',
      500: 'Server error'
    };
    const defaultErrorMessage = 'Unknown error';
    const code = this.props.match.params.code;
    const message = errorMessageMap[code] || defaultErrorMessage;
    return (
      <main className="MinPageHeight m-5 p-5">
        <h2>Something went wrong...</h2>
        <h5>{message}</h5>
      </main>
    );
  }
}

export default ErrorView;
