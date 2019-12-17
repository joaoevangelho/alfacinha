import React, { Component } from "react";

import { create as createCommentService } from "./../../services/comments";

class CommentEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      text: "",
      restaurant: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleInputChange(event) {
    const resId = this.props.match.params.id;
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [name]: value,
      restaurant: resId
    });
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { text, image } = this.state;
    const resId = this.props.match.params.id;
    try {
      const commentDocument = await createCommentService({
        text,
        image,
        restaurant: resId
      });

      this.props.history.push(`/restaurant/${resId}`);
    } catch (error) {
      console.log(error);
    }
  }

  handleFileChange(event) {
    const file = event.target.files[0];
    this.setState({
      image: file
    });
  }

  render() {
    const { text, image } = this.state;
    return (
      <main className="pl-4 ml-4">
        <form onSubmit={this.handleFormSubmission} className="form-signin w-50">
        <label htmlFor="text" id="txt" className="sr-only">
            Comment
          </label>
          <textarea
            placeholder="Write your comment here"
            value={text || ""}
            name="text"
            className="form-control mb-3"
            onChange={this.handleInputChange}
          ></textarea>
          <label htmlFor="image" id="image" className="sr-only">
            Image
          </label>
          <input
            type="file"
            name="image"
            className="form-control mb-3"
            onChange={this.handleFileChange}
          />
          <button className="btn btn-lg MyBtn btn-block mb-5">
            Comment
          </button>
        </form>
      </main>
    );
  }
}

export default CommentEditView;
