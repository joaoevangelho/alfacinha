import React, { Component } from "react";

import { logIn as logInService } from "./../../services/authentication";

class AuthenticationLogInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { username, password } = this.state;
    try {
      const user = await logInService({ username, password });
      console.log(user);

      this.props.changeAuthenticationStatus(user);
      this.props.history.push(`/private`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main className="pt-5 m-5">
        <form onSubmit={this.handleFormSubmission}>
          <input
            type="text"
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
          <button>Log In</button>
        </form>
      </main>
    );
  }
}

export default AuthenticationLogInView;
