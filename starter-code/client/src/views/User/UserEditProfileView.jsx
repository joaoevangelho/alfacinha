import React, { Component } from "react";

import { edit as editUserService } from "./../../services/user";
import { load as loadUserService } from "./../../services/user";
import { remove as removeUserService } from "./../../services/user";
// import { loadUserInformation as loadUserInformationService } from "./../../services/authentication";

class UserEditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.onDeleteTrigger = this.onDeleteTrigger.bind(this);
  }

  async componentDidMount() {
    console.log(this.props);    
    try {
      const user = await loadUserService();
      this.setState({
        user
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    this.setState({
      // [name]: value
      user: {
        ...this.state.user,
        [name]: value
      }
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
    const user = this.state.user;
    const id = this.props.match.params.id;
    try {
      await editUserService(id, user);
      this.props.history.push(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  async onDeleteTrigger() {
    const id = this.props.match.params.id;
    try {
      await removeUserService(id);
      this.props.history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user = this.state.user;
    return (
      <main className="MinPageHeight m-5 p-5">
        {user && (
          <form
            onSubmit={this.handleFormSubmission}
            className="form-signin w-50"
          >
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={user.name || ""}
              className="form-control mb-3"
              name="name"
              onChange={this.handleInputChange}
              required
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={user.email || ""}
              className="form-control mb-3"
              name="email"
              onChange={this.handleInputChange}
              required
            />

            <label htmlFor="aboutMe" className="sr-only">
              About Me
            </label>
            <textarea
              type="text"
              placeholder="About Me"
              value={user.aboutMe || ""}
              className="form-control mb-3"
              name="aboutMe"
              onChange={this.handleInputChange}
              required
            ></textarea>

            <label htmlFor="image" className="sr-only">
              Image
            </label>
            <input
              type="file"
              placeholder="image"
              value={user.image || ""}
              className="form-control mb-3"
              name="image"
              onChange={this.handleFileChange}
              required
            />

            <button className="btn MyBtn w-25 mb-2">Edit user</button>
            <br/>
            <button className="btn MyBtn w-25 mb-2" onClick={this.onDeleteTrigger}>
          Delete user
        </button>
          </form>
        )}
        
      </main>
    );
  }
}

export default UserEditProfileView;
