import React, { Component } from 'react';
import { list as listservice } from '../../services/comments';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
  }

  async componentDidMount() {
    const resid = this.props.match.params.id;
    console.log('RES ID: ', resid);
    const list = await listservice(resid);
    this.setState({
      commentList: list
    });
    console.log('LIST ', this.state.commentList);
  }
  render() {
    const comments = this.state.commentList;
    return (
      <div>
        <h1>LISTVIEW</h1>
        {comments &&
          comments.map(comment => (
            <div>
              <p>{comment.user.username}</p>
              <img src={comment.user.image} />
              <p>{comment.text}</p>
            </div>
          ))}
      </div>
    );
  }
}
