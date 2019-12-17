import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Homepage from './views/Homepage/Homepage';
import AuthenticationLoginView from './views/Authentication/LogInView';
import AuthenticationJoinView from './views/Authentication/JoinView';
import AuthenticationUserProfileView from './views/User/UserProfileView';

import RestaurantListView from './views/Restaurants/RestaurantListView';
import SingleRestaurantView from './views/Restaurants/SingleRestaurantView';

import ShopListView from './views/Shops/ShopListView';
import SingleShopView from './views/Shops/SingleShopView';

import EventListView from './views/Events/EventListView';
import SingleEventView from './views/Events/SingleEventView';

import ErrorView from './views/ErrorView';

import { loadUserInformation as loadUserInformationService } from './services/authentication';

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
      console.log(error);
      // console.log('IS THIS IT?', error);
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
                path="/user-profile"
                render={props => (
                  <AuthenticationUserProfileView
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
              <Route path="/shop-list" exact component={ShopListView} />
              <Route path="/event-list" exact component={EventListView} />
              <Route
                path="/restaurant/:id"
                exact
                render={props => (
                  <SingleRestaurantView {...props} user={this.state.user} />
                )}
              />
              <Route path="/shop/:id" exact component={SingleShopView} />
              <Route path="/event/:id" exact component={SingleEventView} />
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
