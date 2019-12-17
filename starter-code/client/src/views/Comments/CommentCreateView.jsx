import React, { Component } from 'react';

import { create as createCommentService } from './../../services/comments';

class CommentEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      text: '',
      restaurant: ''
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
      ...this.state,
      image: file
    });
  }

  render() {
    const { text } = this.state;
    return (
      <main>
        <form onSubmit={this.handleFormSubmission}>
          <textarea
            placeholder="Comment"
            value={text || ''}
            name="text"
            onChange={this.handleInputChange}
          ></textarea>
          <input type="file" name="image" onChange={this.handleFileChange} />
          <button>Create comment</button>
        </form>
      </main>
    );
  }
}

export default CommentEditView;
