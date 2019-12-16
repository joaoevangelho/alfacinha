import React, { Component } from 'react';

import "./style.css";

class UserProfileView extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="MinPageHeight pt-5 m-5">
        {user && (
          <div>
          <h1>User Profile</h1>
            {/* <img src={user.image}/> */}
            <h1>{user.name}</h1>
            <h5>{user.username}</h5>
            <h5>{user.email}</h5>
          </div>
        ) || (
          <p>There's no user logged in</p>
        )}
      </div>
    );
  }
}

export default UserProfileView;
