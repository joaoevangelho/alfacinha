import React, { Component } from 'react';
import { list as listservice } from '../../services/comments';
import './style.css';

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
            <div
              className="card mb-3  text-white bg-success "
              style={{ maxWidth: '540px' }}
            >
              <div className="row no-gutters">
                <div className="col-md-2">
                  <img className="card-img" src={comment.user.image} />
                </div>
                <div className="col-md-8 ml-2">
                  <h5 className="card-title">{comment.user.name}</h5>
                  <div className="card-text">
                    <p>{comment.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}



