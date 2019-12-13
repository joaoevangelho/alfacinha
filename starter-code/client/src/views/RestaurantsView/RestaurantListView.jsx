import React, { Component } from 'react';
import { listRestaurants } from '../../services/restaurantZomato';
import { Link } from 'react-router-dom';
import Pagination from './../../components/Pagination';

class RestaurantListView extends Component {
  constructor(props) {
    super(props);
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
      console.log('Error in service.');
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
              style={{ maxWidth: '540px' }}
            >
              <div className="row no-gutters">
                <div className="BgHack col-md-4">
                  <img
                    src={restaurant.restaurant.featured_image}
                    className="card-img"
                    alt="Restaurant"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <Link to={`/restaurant/${restaurant.restaurant.id}`}>
                      <h5 className="card-title">
                        {restaurant.restaurant.name}
                      </h5>
                    </Link>
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
      </div>
    );
  }
}
export default RestaurantListView;
