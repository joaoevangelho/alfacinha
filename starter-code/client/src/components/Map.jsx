// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// import Markers from "./Markers";
// import { loadRestaurant as restaurantApi } from "./../services/restaurantZomato";

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 50.7144134885,
//       lng: -9.150070063
//     },
//     zoom: 11
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       center: {
//         lat: "",
//         lng: ""
//       },
//       zoom: 11,
//       restaurant: null
//     };
//   }

//   getLocation() {
//     let myLatLng = {
//       lat: 38.7144134885,
//       lng: -9.150070063
//     };
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         myLatLng = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };

//         console.log("return value of if cond");
//         console.log(defaultProps);
//         return myLatLng;
//       });
//     } else {
//       console.log("return value of else cond");
//       console.log(myLatLng);
//       return myLatLng;
//     }
//   }

//   async componentDidMount() {
//     this.setState({
//       marker: { lat: this.props.lat, lng: this.props.lng }
//     });
//     console.log("GEOLOCATION", this.getLocation());
//   }

//   render() {
//     console.log("MAP PROPS", this.props);
//     const restaurant = this.state.restaurant;
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "30vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             key: "AIzaSyAmFlg0hUn3AkPBctCd3i0Y8JtScF2tPGQ",
//             language: "en"
//           }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <Markers lat={this.props.lat} lng={this.props.lng} />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;
