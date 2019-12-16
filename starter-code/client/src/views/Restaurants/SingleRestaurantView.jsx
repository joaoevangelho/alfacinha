import React, { Component } from 'react';
import { loadRestaurant as restaurantApi } from '../../services/restaurantZomato';
import CommentCreateView from './../Comments/CommentCreateView';
import CommentList from './../Comments/CommentList';

import './style.css';

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
      //console.log('response from api', singleRestaurant);

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
    // const id = this.props.match.params.id;
    //console.log('hello', restaurant);
    return (
      <div className="MinPageHeight mt-4 pt-4">
        {restaurant && (
          <div className="SingleRestaurantCard card m-5 p-5">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={restaurant.featured_image}
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">Cuisines: {restaurant.cuisines}</p>
                  <p className="card-text">Type: {restaurant.establishment}</p>
                  <p className="card-text">
                    Average cost for 2: {restaurant.average_cost_for_two}
                    {restaurant.currency}
                  </p>
                  <p className="card-text">
                    Neighborhood: {restaurant.location.locality_verbose}
                  </p>
                  <p className="card-text">
                    Address: {restaurant.location.address}
                  </p>
                  <p className="card-text">
                    Contact: {restaurant.phone_numbers}
                  </p>
                  <p className="card-text">
                    Zomato Rating{/*  (1-5) */}:{' '}
                    {restaurant.user_rating.aggregate_rating} (
                    {restaurant.user_rating.rating_text})
                  </p>
                  {/* <p className="card-text">
                    Number of votes: {restaurant.user_rating.votes}
                  </p> */}
                  {/* <p className="card-text">On Zomato: {restaurant.url}</p> */}
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <br />
          COMENTÁRIOS NOS RESTAURANTES
          <CommentList {...this.props} />
          <CommentCreateView {...this.props} />
          {/* <div
            className="fb-comments"
            data-href="https://www.facebook.com/Alfacinha-100341914808752"
            data-width=""
            data-numposts="10"
          ></div> */}
          <br />
        </div>
      </div>
    );
  }
}
export default singleRestaurant;
