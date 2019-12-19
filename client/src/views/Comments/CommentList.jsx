import React, { Component } from "react";
import { list as listservice } from "../../services/comments";
import "./style.css";
import CommentCreateView from "./CommentCreateView";

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
    this.onSubmit = this.onSubmit.bind(this);
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
    this.setState({ commentList: !this.state.commentList });
    const resid = this.props.match.params.id;
    // console.log('RES ID: ', resid);
    const list = await listservice(resid);
    this.setState({
      commentList: list
    });
  }

  render() {
    console.log(this.props);
    const comments = this.state.commentList;
    // const user = this.props.user;
    return (
      <div className="pl-4 ml-4">
        <h1>Comments</h1>
        {comments &&
          comments.map(comment => (
            <div className="UserComment card mb-3 text-dark w-75">
              <div className="row no-gutters">
                <div className="col-md-2">
                  <img
                    className="CommentUserIcon"
                    src={comment.user.image}
                    alt="userIcon"
                  />
                </div>
                <div className="col-md-8 ml-2">
                  <h5 className="card-title">{comment.user.name}</h5>
                  {comment.image && (
                    <img
                      className="CommentImg"
                      src={comment.image}
                      alt="Comment pic"
                    />
                  )}
                  <div className="card-text">
                    <p>{comment.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <CommentCreateView {...this.props} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
