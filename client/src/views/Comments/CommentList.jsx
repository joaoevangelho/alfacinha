import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import {
  list as listservice,
  remove as removeCommentService
} from "../../services/comments";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import "./style.css";
import CommentCreateView from "./CommentCreateView";

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      showForm: true
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteTrigger = this.onDeleteTrigger.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  async componentDidMount() {
    const resid = this.props.match.params.id;
    // console.log('RES ID: ', resid);
    const list = await listservice(resid);
    this.setState({
      commentList: list
    });
  }

  async onSubmit() {
    console.log("CLICKED");
    // this.setState({ commentList: !this.state.commentList });
    const resid = this.props.match.params.id;
    // console.log('RES ID: ', resid);
    const list = await listservice(resid);
    this.setState({
      commentList: list
    });
  }

  async onDeleteTrigger(commentId) {
    const resid = this.props.match.params.id;
    try {
      await removeCommentService(commentId);
      const list = await listservice(resid);
      this.setState({
        commentList: list
      });
    } catch (error) {
      console.log(error);
    }
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    //console.log(this.props);
    const comments = this.state.commentList;

    return (
      <div className="MinPageHeight mt-3 pr-2 CommentListW">
        {/* <div className="MinPageHeight mt-4 pt-4"> */}
        <h4 className="mt-3">Comments</h4>
        {comments &&
          comments.map(comment => (
            <div className="CommentListW">
              <div className="UserComment card text-dark">
                <div className="row">
                  <div className="UserPicUsername p-0 w-100 d-flex justify-content-start">
                    <img
                      className="CommentUserIcon"
                      src={comment.user.image}
                      alt="userIcon"
                    />
                    {/* </div>
                <div className="col-sm-8 d-flex justify-content-start"> */}
                    <p className="my-auto">
                      {comment.user.name}{" "}
                      <small> ({comment.user.username})</small>
                    </p>
                  </div>
                </div>
                <div className="mb-0 pb-0">
                  <div className="CommentTxt">
                    <p className="mb-0 pb-0">{comment.text}</p>
                  </div>
                  {/* <h5 className="card-title">{comment.user.name}</h5> */}
                  {comment.image && (
                    <img
                      className="CommentImg"
                      src={comment.image}
                      alt="Comment pic"
                    />
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn MyBtn DeleteCommentBtn btn-sm "
                  onClick={() => this.onDeleteTrigger(comment._id)}
                >
                  Delete Comment
                </button>
              </div>
            </div>
          ))}

        <CommentCreateView {...this.props} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
