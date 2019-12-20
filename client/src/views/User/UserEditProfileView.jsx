import React, { Component, Fragment } from "react";
import Image from "react-bootstrap/Image";

import { edit as editUserService } from "./../../services/user";
// import {
//   edit as editUserService,
//   remove as removeUserService
// } from './../../services/user';

class UserEditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: this.props.user,
      name: "",
      email: "",
      aboutMe: "",
      image: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    // this.onDeleteTrigger = this.onDeleteTrigger.bind(this);
  }

  async componentDidMount() {
    console.log(this.props.user);
    this.setState({
      name: this.props.user.name,
      email: this.props.user.email,
      aboutMe: this.props.user.aboutMe,
      image: this.props.user.image
    });
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
    console.log("WHAT UUUUUP", event.target.files);
    const file = event.target.files[0];
    console.log(file);
    this.setState({
      ...this.state,

      image: file
    });
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    // const user = this.state.user;
    let editedUser = {
      name: this.state.name,
      email: this.state.email,
      aboutMe: this.state.aboutMe,
      image: this.state.image
    };
    // console.log("ID HERE", id);
    try {
      await editUserService(editedUser);
      await this.props.loadUser();
      this.props.history.push(`/user-profile`);
    } catch (error) {
      console.log(error);
    }
  }

  //   async onDeleteTrigger() {
  // //    const id = this.state.user._id;
  //     //console.log('user id delete', id);
  //     // const id = this.props.match.params.id;
  //     try {
  //       await removeUserService(id);
  //       // await this.props.loadUser();
  //       // this.props.history.push(`/`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  render() {
    // console.log("i am in the edit view", this.state.user);
    // console.log("user image", this.state.user.image);
    const user = this.state;
    return (
      <Fragment>
        <main className="pt-5 mt-5 mx-5 text-center d-flex justify-content-center">
          {user && (
            <Fragment>
              <form
                onSubmit={this.handleFormSubmission}
                className="form-signin EditViewForm"
              >
                <div className="mb-4">
                  <p>
                    <Image
                      fluid
                      src={user.image}
                      className="EditViewImg m-0 p-0"
                    />
                  </p>
                  <p className="EditViewImgCaption">Current profile image</p>
                </div>
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
                ></textarea>
                <button className="btn MyBtn EditViewBtn mb-5 w-100">
                  Save changes
                </button>
                <br />
              </form>
            </Fragment>
          )}
        </main>
        {/* <div className="mx-5 my-2 text-center d-flex justify-content-center">
          <button
            className="btn MyBtn EditViewBtn mb-2"
            onClick={this.onDeleteTrigger}
          >
            Delete account
          </button>
        </div> */}
      </Fragment>
    );
  }
}

export default UserEditProfileView;
