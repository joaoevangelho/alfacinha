import React, { Component } from "react";

import { join as joinService } from "./../../services/authentication";

class AuthenticationJoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: ""
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
    const { email, password, username, name } = this.state;
    try {
      const user = await joinService({ email, password, username, name });
      console.log(user);
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
            required
          />
          <input
            type="name"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="username"
            placeholder="Username"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            required
          />
          <button>Join!</button>
        </form>
      </main>
    );
  }
}

export default AuthenticationJoinView;
