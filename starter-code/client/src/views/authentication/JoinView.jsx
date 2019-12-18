import React, { Component } from "react";
import Image from "react-bootstrap/Image";

import { join as joinService } from "../../services/authentication";

import "./style.css";

class AuthenticationJoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      aboutMe: "",
      email: "",
      password: "",
      image: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleFileChange(event) {
    console.dir(event.target.files);
    const file = event.target.files[0];
    this.setState({
      image: file
    });
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { email, password, username, name, image, aboutMe } = this.state;
    // console.log(this.state);
    try {
      const user = await joinService({
        email,
        password,
        username,
        name,
        image,
        aboutMe
      });
      // console.log("USER JOINVIEW", user);
      this.props.changeAuthenticationStatus(user);
      this.props.history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // const user = this.state.user;
    return (
      <main className="pt-5 mt-5 mx-5 text-center d-flex justify-content-center">
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
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            name="email"
            className="form-control mb-3"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            className="form-control mb-3"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="username"
            placeholder="Username"
            value={this.state.username}
            name="username"
            className="form-control mb-3"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="name"
            placeholder="Name"
            value={this.state.name}
            name="name"
            className="form-control mb-3"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="name" className="sr-only">
            About Me
          </label>
          <textarea
            type="text"
            placeholder="Write something here"
            value={this.state.aboutMe}
            name="aboutMe"
            className="form-control mb-3"
            onChange={this.handleInputChange}
            required
          ></textarea>
          <label htmlFor="image" className="sr-only">
            Image
          </label>
          <input
            type="file"
            placeholder="Profile Picture"
            name="image"
            className="form-control mb-3"
            onChange={this.handleFileChange}
          />
          <button className="btn btn-lg MyBtn btn-block mb-5">Join</button>
          {/* <p class="mt-5 mb-3 text-muted">&copy; 2019</p> */}
        </form>
      </main>
    );
  }
}

export default AuthenticationJoinView;
