import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./views/Homepage";
import AuthenticationLoginView from "./views/authentication/LogInView";
import AuthenticationJoinView from "./views/authentication/JoinView";
import AuthenticationPrivateView from "./views/authentication/PrivateView";
import RestaurantListView from "./views/restaurants/RestaurantListView";
import ErrorView from "./views/ErrorView";

import { loadUserInformation as loadUserInformationService } from "./services/authentication";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loaded: false
    };
    this.changeAuthenticationStatus = this.changeAuthenticationStatus.bind(
      this
    );
    this.verifyAuthentication = this.verifyAuthentication.bind(this);
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({
        user,
        loaded: true
      });
    } catch (error) {
      console.log("IS THIS IT?", error);
    }
  }

  changeAuthenticationStatus(user) {
    this.setState({
      user
    });
  }

  verifyAuthentication() {
    return this.state.user;
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar
            user={this.state.user}
            changeAuthenticationStatus={this.changeAuthenticationStatus}
          />
          {this.state.loaded && (
            <Switch>
              {/* <ProtectedRoute
            path="/create"
            // component={NoteCreateView}
            render={props => <NoteCreateView {...props} />}
            verify={this.verifyAuthentication}
            redirect="/error/401"
          /> */}
              <Route
                path="/join"
                render={props => (
                  <AuthenticationJoinView
                    {...props}
                    changeAuthenticationStatus={this.changeAuthenticationStatus}
                  />
                )}
              />
              <Route
                path="/login"
                render={props => (
                  <AuthenticationLoginView
                    {...props}
                    changeAuthenticationStatus={this.changeAuthenticationStatus}
                  />
                )}
              />
              <Route
                path="/private"
                render={props => (
                  <AuthenticationPrivateView
                    {...props}
                    user={this.state.user}
                  />
                )}
              />
              <Route path="/error/:code" component={ErrorView} />
              <Route path="/" exact component={Homepage} />
              <Route
                path="/restaurant-list"
                exact
                component={RestaurantListView}
              />
              <Redirect to="/error/404" />
            </Switch>
          )}
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
