import React, { Component } from 'react';

import './style.css';

class ErrorView extends Component {
  render() {
    // const errorMessageMap = {
    //   404: 'Page not found',
    //   401: 'User not authorized',
    //   500: 'Server error'
    // };
    // const defaultErrorMessage = 'Unknown error';
    // const code = this.props.match.params.code;
    // const message = errorMessageMap[code] || defaultErrorMessage;
    return (
      <main className="MinPageHeight backimg">
        <div className="centered">
          <h1 className="four-o-four">404</h1>
          <h1>We are sorry, </h1>
          <h5>but this page can not be found. Keep helping our planet.</h5>
          <br />
          <h5> Thank you for your support</h5>
        </div>
      </main>
    );
  }
}

export default ErrorView;

//{message}
