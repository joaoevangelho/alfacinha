import React, { Component, Fragment } from "react";

import Image from "react-bootstrap/Image";

import { edit as editUserService } from "./../../services/user";
// import { remove as removeUserService } from "./../../services/user";

class UserEditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
      // image: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    // this.onDeleteTrigger = this.onDeleteTrigger.bind(this);
  }

  /* async componentDidMount() {
    console.log(this.props);
    try {
      const user = await loadUserService();
      this.setState({
        user
      });
    } catch (error) {
      console.log(error);
    }
  } */

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  }

  handleFileChange(event) {
    console.dir(event.target.files);
    console.log("WHAT UUUUUP", event.target.files);
    const file = event.target.files[0];
    this.setState({
      image: file
    });
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const user = this.state.user;
    const image = this.state.image;
    const id = this.state.user._id;
    // console.log("ID HERE", id);
    try {
      await editUserService(id, user, image);
      await this.props.loadUser();
      this.props.history.push(`/user-profile`);
    } catch (error) {
      console.log(error);
    }
  }

/*   async onDeleteTrigger() {
    const id = this.state.user._id;
    // const id = this.props.match.params.id;
    try {
      await removeUserService(id);
      // await this.props.loadUser();
      this.props.history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  } */

  render() {
    // console.log("i am in the edit view", this.state.user);
    // console.log("user image", this.state.user.image);
    const user = this.state.user;
    return (
      <main className="MinPageHeight m-5 p-5">
        {user && (
          <Fragment>
            <Image fluid src={user.image} className="UserProfileEditImg mb-3" />
            <form
              onSubmit={this.handleFormSubmission}
              className="form-signin w-50"
            >
              <label htmlFor="image" className="sr-only">
                Image
              </label>
              <input
                type="file"
                placeholder="image"
                className="form-control mb-3"
                name="image"
                onChange={this.handleFileChange}
                // required
              />
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
              <button className="btn MyBtn w-50 mb-2">Edit user</button>
              <br />
            </form>
              <button
                className="btn MyBtn w-50 mb-2"
                onClick={this.onDeleteTrigger}
              >
                Delete user
              </button>
          </Fragment>
        )}
      </main>
    );
  }
}

export default UserEditProfileView;
