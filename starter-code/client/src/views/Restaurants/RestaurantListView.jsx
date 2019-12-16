import React, { Component } from "react";
import { listRestaurants } from "../../services/restaurantZomato";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

import "./style.css";
import Button from "react-bootstrap/Button";

class RestaurantListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingState: false,
      restaurants: null,
      limit: 15
    };
    this.onLoadMore = this.onLoadMore.bind(this);
    this.renderRestaurants = this.renderRestaurants.bind(this);
  }

  async componentDidMount() {
    const vegetarianRestaurants = await listRestaurants();
    this.setState({
      restaurants: vegetarianRestaurants
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (prevState !== this.state) {
      const vegetarianRestaurants = await listRestaurants();
      this.setState({
        restaurants: vegetarianRestaurants
      });
    }
  }

  onLoadMore() {
    console.log("load more");

    this.setState({
      ...this.state,
      limit: this.state.limit + 10
    });
  }

  renderRestaurants() {
    console.log("limit", this.state.limit);
    return this.state.restaurants.slice(0, this.state.limit).map(restaurant => {
      return (
        <div
          key={restaurant.restaurant.id}
          className="card mb-3"
          style={{ maxWidth: "540px" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={restaurant.restaurant.featured_image}
                className="card-img"
                alt="Restaurant"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link to={`/restaurant/${restaurant.restaurant.id}`}>
                  <h5 className="card-title">{restaurant.restaurant.name}</h5>
                </Link>
                <p className="card-text">{restaurant.restaurant.cuisines}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Contact: {restaurant.restaurant.phone_numbers}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="d-flex flex-wrap m-3 p-3">
        {!this.state.restaurants && (
          <ReactLoading type={"bars"} color={"white"} />
        )}
        {this.state.restaurants && (
          <div>
            {this.renderRestaurants()}
            <Button className="MyBtn LogoutBtn mx-2" onClick={this.onLoadMore}>
              Load
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default RestaurantListView;
