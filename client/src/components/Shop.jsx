import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Shop extends Component {
  render() {
    const name = this.props.name;
    const image = this.props.image;
    const location = this.props.location;
    const contacts = this.props.contacts;
    return (
      <div
        key={name}
        className="card ml-3 mb-5 mr-5 "
        style={{ maxWidth: '540px' }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={image} className="card-img" alt={name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Link to={`/shop-list/${name}`}>
                <h5 className="card-title">{name}</h5>
              </Link>
              <p className="card-text">Location: {location}</p>
              <p className="card-text">
                <small className="text-muted">Contact: {contacts}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
