import React, { Component } from "react";
import Image from "react-bootstrap/Image";

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
      this.props.history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main className="pt-5 m-5 text-center d-flex justify-content-center">
        <form
          onSubmit={this.handleFormSubmission}
          className="form-signin LoginJoinForm"
        >
          <Image
            fluid
            className="mb-4 LoginJoinImg"
            src="/images/alfacinha-logo1.png"
            alt=""
          />
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={this.state.username}
            name="username"
            className="form-control mb-3"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="password" id="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={this.state.password}
            name="password"
            className="form-control mb-3"
            onChange={this.handleInputChange}
            required
          />
          <button className="btn btn-lg MyBtn btn-block mb-5">Log In</button>
          {/* <p class="mt-5 mb-3 text-muted">&copy; 2019</p> */}
        </form>
      </main>
    );
  }
}

export default AuthenticationLogInView;
