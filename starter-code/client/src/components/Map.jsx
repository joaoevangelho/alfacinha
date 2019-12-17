import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Markers from "./Markers";
import { loadRestaurant as restaurantApi } from "../services/restaurantZomato";
import singleRestaurant from "../views/Restaurants/SingleRestaurantView";

class SimpleMap extends Component {
  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11,
  //   restaurant: null
  // };
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11,
      marker: [],
      restaurant: null
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id props", id);
    try {
      const singleRestaurant = await restaurantApi(id);
      console.log(singleRestaurant);
      this.setState({
        restaurant: singleRestaurant,
        marker: { lat: 59.951, lng: 30.32 }
      });
    } catch (error) {
      console.log(error);
      this.props.history.push("/error/404");
    }
  }

  render() {
    const restaurant = this.state.restaurant;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "30vh", width: "100%" }}>
        {restaurant && (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAmFlg0hUn3AkPBctCd3i0Y8JtScF2tPGQ",
              language: "en"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Markers
              lat={restaurant.location.lat}
              lng={restaurant.location.lng}
            />
          </GoogleMapReact>
        )}
      </div>
    );
  }
}

export default SimpleMap;
