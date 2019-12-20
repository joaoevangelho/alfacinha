import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Homepage from './views/Homepage/Homepage';

import AuthenticationLoginView from './views/Authentication/LogInView';
import AuthenticationJoinView from './views/Authentication/JoinView';

import UserProfileView from './views/User/UserProfileView';
import UserEditProfileView from './views/User/UserEditProfileView';

import RestaurantListView from './views/Restaurants/RestaurantListView';
import SingleRestaurantView from './views/Restaurants/SingleRestaurantView';

import ShopListView from './views/Shops/ShopListView';
import SingleShopView from './views/Shops/SingleShopView';

// import EventListView from './views/Events/EventListView';
// import SingleEventView from './views/Events/SingleEventView';

import ErrorView from './views/ErrorView';

import { loadUserInformation as loadUserInformationService } from './services/authentication';
const NavBarWithRouter = withRouter(Navbar);

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
    this.loadUser = this.loadUser.bind(this);
  }

  async componentDidMount() {
    try {
      await this.loadUser();
    } catch (error) {
      console.log(error);
      // console.log('IS THIS IT?', error);
    }
  }

  async loadUser() {
    try {
      const user = await loadUserInformationService();
      this.setState({
        user,
        loaded: true
      });
    } catch (error) {
      console.log(error);
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
          {
            <NavBarWithRouter
              user={this.state.user}
              changeAuthenticationStatus={this.changeAuthenticationStatus}
            />
          }
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
              <Route path="/error/:code" component={ErrorView} />
              <Route path="/" exact component={Homepage} />
              <Route
                path="/restaurant-list"
                exact
                component={RestaurantListView}
              />
              <Route path="/shop-list" exact component={ShopListView} />
              {/* <Route path="/event-list" exact component={EventListView} /> */}
              <Route
                path="/restaurant/:id"
                exact
                render={props => (
                  <SingleRestaurantView
                    {...props}
                    user={this.state.user}
                    loadUser={this.loadUser}
                  />
                )}
              />
              <Route
                path="/shop-list/:name"
                exact
                render={props => (
                  <SingleShopView
                    {...props}
                    user={this.state.user}
                    loadUser={this.loadUser}
                  />
                )}
              />
              <Route
                path="/user-profile/edit"
                render={props => (
                  <UserEditProfileView
                    {...props}
                    user={this.state.user}
                    loadUser={this.loadUser}

                    // component={UserEditProfileView}
                  />
                )}
              />
              <Route
                // path="/:userId"
                // exact
                // component={UserProfileView}
                // path="/user-profile"
                path="/user-profile"
                render={props => (
                  <UserProfileView {...props} user={this.state.user} />
                )}
              />

              <Route path="/shop/:id" exact component={SingleShopView} />
              {/* <Route path="/event/:id" exact component={SingleEventView} /> */}
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
