import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RestaurantList from "./views/RestaurantList";
// import { loadUserInformation as loadUserInformationService } from "./services/authentication";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantList />
      </div>
    );
  }
}

export default App;
