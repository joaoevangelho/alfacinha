import React, { Component } from "react";
import { list as listservice } from "../../services/comments";

import "./style.css";

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
  }

  async componentDidMount() {
    const resid = this.props.match.params.id;
    // console.log('RES ID: ', resid);
    const list = await listservice(resid);
    this.setState({
      commentList: list
    });
    // console.log('LIST ', this.state.commentList);
  }
  render() {
    const comments = this.state.commentList;
    return (
      <div className="pl-4 ml-4">
        <h1>Comments</h1>
        {comments &&
          comments.map(comment => (
            <div className="w-75 UserComment">
              <div className="my-auto">
                {<img
                  src={comment.image}
                  alt="User icon"
                  className="CommentUserIcon my-auto"
                />}
                {comment.user.username}
                {/* {comment.user.createdAt} */}
              </div>
              <hr/>
              <p>{comment.text}</p>
              <img
                src={comment.image}
                alt="Comment pic"
                className="CommentImg"
              />
            </div>
          ))}
      </div>
    );
  }
}
