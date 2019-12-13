import React, { Component } from "react";
import { listRestaurants } from "../../services/restaurantZomato";
import { Link } from "react-router-dom";
import Pagination from "./../../components/Pagination";

class RestaurantListView extends Component {
  constructor() {
    super();
    this.state = {
      vegetarianRestaurants: null
    };
  }

  async componentDidMount() {
    try {
      const vegetarianRestaurants = await listRestaurants();
      this.setState({
        vegetarianRestaurants
      });
    } catch (error) {
      console.log(error);
      console.log("Error in service.");
    }
  }

  render() {
    const vegRestaurants = this.state.vegetarianRestaurants;
    console.log(vegRestaurants);
    return (
      <div className="d-flex flex-wrap">
        {vegRestaurants &&
          vegRestaurants.map(restaurant => (
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
                    alt="Image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.restaurant.name}</h5>
                    <p className="card-text">
                      {restaurant.restaurant.cuisines}
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
          ))}
        <div>
          <Pagination />
          {/* <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <Link to="/restaurants/1" className="page-link" size="sm">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link to="/restaurants/2" className="page-link" size="sm">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link to="/restaurants/3" className="page-link" size="sm">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link to="/restaurants/4" className="page-link" size="sm">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link to="/restaurants/5" className="page-link" size="sm">
                  5
                </Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    );
  }
}
export default RestaurantListView;
