import React, { Component } from "react";

class Shop extends Component {
  render() {
    const id = this.props.id;
    const name = this.props.name;
    const image = this.props.image;
    const location = this.props.location;
    const contacts = this.props.contacts;
    return (
      <div className="product-item">
        <div className="product-item__header">
          <img src={image} alt={name} />
        </div>
        <div className="product-item__details">
          <h5>{name}</h5>
        </div>
        <div className="product-item__details">
          <h5>{location}</h5>
        </div>
        <div className="product-item__details">
          <h5>{contacts}</h5>
        </div>
      </div>
    );
  }
}

export default Shop;
