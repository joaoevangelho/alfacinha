import React, { Component } from 'react';

import { create as createCommentService } from './../../services/comments';

class CommentEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {
        restaurant: '',
        user: '',
        text: ''
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    console.log(this.props);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    this.setState({
      // [name]: value
      comments: {
        ...this.state.comments,
        [name]: value
      }
    });
    /*
    this.setState(previousState => ({
      note: {
        ...previousState.note,
        [name]: value
      }
    }));
    */
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const comments = this.state.comments;
    console.log(comments);
    try {
      const commentDocument = await createCommentService(comments);
      const id = commentDocument._id;
      this.props.history.push(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  // handleFileChange(event) {
  //   console.dir(event.target.files);
  //   const file = event.target.files[0];
  //   this.setState({
  //     comments: {
  //       ...this.state.comment,
  //       image: file
  //     }
  //   });
  // }

  render() {
    const comment = this.state.comment;
    return (
      <main>
        {comment && (
          <form onSubmit={this.handleFormSubmission}>
            <textarea
              placeholder="Comment"
              value={comment.text || ''}
              name="text"
              onChange={this.handleInputChange}
            ></textarea>
            <input type="file" name="image" onChange={this.handleFileChange} />
            <button>Create comment</button>
          </form>
        )}
      </main>
    );
  }
}

export default CommentEditView;
