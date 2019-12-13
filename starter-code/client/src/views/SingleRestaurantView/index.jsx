// import React, { Component } from 'react';
// import { listRestaurants } from '../../services/restaurantZomato';

import './style.css';
// import RestaurantListView from '../RestaurantsView/RestaurantListView';

// class SingleRestaurantView extends Component {
//   render() {
//     return (
//       <div className="m-5 p-5">
//         <h1>Single Restaurant</h1>
//         <h2>{}</h2>
//       </div>
//     );
//   }
// }

// export default SingleRestaurantView;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadRestaurant as restaurantApi } from './../../services/restaurantZomato';

class singleRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log('singleRest', id);

    try {
      const singleRestaurant = await restaurantApi(id);
      console.log('response from api', singleRestaurant);

      this.setState({
        restaurant: singleRestaurant
      });
    } catch (error) {
      console.log(error);
      this.props.history.push('/error/404');
    }
  }
  render() {
    const restaurant = this.state.restaurant;
    const id = this.props.match.params.id;
    console.log('hello', restaurant);
    return (
      <main>
        {restaurant && (
          <div>
            <div>
              <h1>Single Restaurant</h1> este texto está escondido atrás da
              navbar. temos de corrigir!!
            </div>
            <div>
              <h1>{restaurant.name}</h1>
            </div>
            <div class="row">
              <div class="col-4">
                <img
                  class="rest-img"
                  src={restaurant.featured_image}
                  alt="Rest"
                />
              </div>
              <div class="col-8">
                <p>Address: {restaurant.location.address}</p>
                <p>Hood: {restaurant.location.locality_verbose}</p>
                <p>Cuisines: {restaurant.cuisines}</p>
                <p>Phone Contact: {restaurant.phone_numbers}</p>
                <p>
                  User Rating (1-5): {restaurant.user_rating.aggregate_rating} -
                  {restaurant.user_rating.rating_text}
                </p>
                <p>Number of votes: {restaurant.user_rating.votes}</p>
                <p>
                  Average cost for 2: {restaurant.average_cost_for_two}
                  {restaurant.currency}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }
}
export default singleRestaurant;
