import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Alfacinha</h1>
        <Link to="/restaurant-list">Restaurant List</Link>
        
        
      </div>
    )
  }
}

export default Homepage;
