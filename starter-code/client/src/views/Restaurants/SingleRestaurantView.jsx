import React, { Component } from "react";
import { loadRestaurant as restaurantApi } from "../../services/restaurantZomato";
import CommentList from "./../Comments/CommentList";
import Button from "react-bootstrap/Button";
import MapBox from "./../../components/MapBox";

// import { loadUserInformation as loadUserInformationService } from "./../../services/authentication";
import { addToFavorites as addToFavoritesService } from "./../../services/authentication";

import "./style.css";

class singleRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      user: this.props.user,
      // user: null,
      favorites: null
    };
    this.addToFavoritesButton = this.addToFavoritesButton.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    // console.log("singleRest", id);
    try {
      // const user = await loadUserInformationService();
      const singleRestaurant = await restaurantApi(id);
      //console.log('response from api', singleRestaurant);
      this.setState({
        restaurant: singleRestaurant,
        user: this.props.user
      });
    } catch (error) {
      console.log(error);
      this.props.history.push("/error/404");
    }
  }

  async addToFavoritesButton(event, name) {
    event.preventDefault();
    const favoriteRestaurantId = this.props.match.params.id;
    console.log("addToFavoritesButton STATE", favoriteRestaurantId, name);
    try {
      await addToFavoritesService(favoriteRestaurantId, name);
      await this.props.loadUser();
      // console.log("USER JOINVIEW", user);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const restaurant = this.state.restaurant;
    const user = this.state.user;
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
                <MapBox
                  lat={restaurant.location.latitude}
                  lng={restaurant.location.longitude}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">Cuisines: {restaurant.cuisines}</p>
                  <p className="card-text">Type: {restaurant.establishment}</p>
                  <p className="card-text">
                    Average cost: {restaurant.average_cost_for_two / 2}
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
                    Zomato Rating{/*  (1-5) */}:{" "}
                    {restaurant.user_rating.aggregate_rating} (
                    {restaurant.user_rating.rating_text})
                  </p>
                  {/* <p className="card-text">
                    Number of votes: {restaurant.user_rating.votes}
                  </p> */}
                  {/* <p className="card-text">On Zomato: {restaurant.url}</p> */}
                  {user && (
                    <div>
                      {(!this.props.user.favorites.id && (
                        <Button
                          onClick={event => {
                            this.addToFavoritesButton(event, restaurant.name);
                          }}
                          className="btn MyBtn"
                        >
                          Remove from Favorites
                        </Button>
                      )) || (
                        <Button
                          onClick={event => {
                            this.addToFavoritesButton(event, restaurant.name);
                          }}
                          className="btn MyBtn"
                        >
                          Add to Favorites
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <br />
          <CommentList {...this.props} />
          {/* <CommentCreateView {...this.props} /> */}
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
