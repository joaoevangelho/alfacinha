import React, { Component } from "react";
import { listRestaurants } from "./../services/restaurantZomato";

class RestaurantList extends Component {
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
      <div>
        {vegRestaurants &&
          vegRestaurants.map(restaurant => (
            <div>{restaurant.restaurant.name}</div>
          ))}
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="restaurantes/1">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="restaurantes/2">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="restaurantes/3">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="restaurantes/4">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="restaurantes/5">
                5
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default RestaurantList;
