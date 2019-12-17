import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Markers from "./Markers";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  constructor(props) {
    super(props);
    this.state = {
      marker: [],
      restaurants: null
    };
  }

  // async componentDidMount() {
  //   const id = this.props;
  //   console.log("id props", id);
  //   try {
  //     const singleRestaurant = await restaurantApi(id);
  //     console.log(singleRestaurant);
  //     this.setState({
  //       restaurant: singleRestaurant,
  //       marker: { lat: 59.951, lng: 30.32 }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     this.props.history.push("/error/404");
  //   }
  // }

  async componentDidMount() {
    // or you can set markers list somewhere else
    // please also set your correct lat & lng
    // you may only use 1 image for all markers, if then, remove the img_src attribute ^^
    this.setState({
      marker: { lat: 59.951, lng: 30.32 }
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAmFlg0hUn3AkPBctCd3i0Y8JtScF2tPGQ",
            language: "en"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Markers lat={this.state.marker.lat} lng={this.state.marker.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
