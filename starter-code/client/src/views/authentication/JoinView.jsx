import React, { Component } from 'react';

import { join as joinService } from './../../services/authentication';

class AuthenticationJoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const user = await joinService({ email, password });
      this.props.changeAuthenticationStatus(user);
      this.props.history.push(`/private`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleFormSubmission}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
          />
          <input
            type="name"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />
          <input
            type="username"
            placeholder="Username"
            value={this.state.name}
            name="username"
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
          <button>Join!</button>
        </form>
      </main>
    );
  }
}

export default AuthenticationJoinView;
