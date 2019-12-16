import React, { Component } from "react";
import { listRestaurants } from "../../services/restaurantZomato";
import SearchInput from "../../components/SearchInput";
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
      limit: 15,
      nameQuery: "",
      locationQuery: "",
      averageQuery: ""
    };
    this.onLoadMore = this.onLoadMore.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.renderRestaurants = this.renderRestaurants.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
  }

  async componentDidMount() {
    const vegetarianRestaurants = await listRestaurants();
    this.setState({
      restaurants: vegetarianRestaurants
    });
  }

  handleOnInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  filterBySearch(restaurant) {
    console.log(restaurant);
    return restaurant.restaurant.name
      .toLowerCase()
      .includes(this.state.nameQuery);
  }

  onLoadMore() {
    console.log("load more");

    this.setState({
      ...this.state,
      limit: this.state.limit + 10
    });
  }

  renderRestaurants() {
    return this.state.restaurants
      .filter(filteredRestaurantByName =>
        this.filterBySearch(filteredRestaurantByName)
      )
      .slice(0, this.state.limit)
      .map(restaurant => {
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
                  <p className="card-text">
                    Cousine: {restaurant.restaurant.cuisines}
                  </p>
                  <p className="card-text">
                    Location: {restaurant.restaurant.location.address}
                  </p>
                  <p className="card-text">
                    Average Cost:{" "}
                    {restaurant.restaurant.average_cost_for_two / 2}
                    {restaurant.restaurant.currency}
                  </p>
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
      <div className="d-flex flex-wrap mt-5 p-5 MinPageHeight">
        {/* <SearchInput {...this.state} onChange={this.handleOnInputChange} /> */}
        <SearchInput {...this.state} onChange={this.handleOnInputChange} />
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
