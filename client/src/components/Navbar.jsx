import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// import { Link } from "react-router-dom";

import './style.css';

import { logOut as logOutService } from './../services/authentication';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onLogOutTrigger = this.onLogOutTrigger.bind(this);
  }

  async onLogOutTrigger() {
    try {
      await logOutService();
      this.props.changeAuthenticationStatus(null);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const user = this.props.user;
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        // bg="dark"
        className="TransparentBg"
        variant="dark"
        // variant="light"
      >
        <Nav.Link as={Link} to="/">
          <Image
            className="LogoImg"
            fluid
            src="/images/alfacinha-logo2.png"
            alt="BrandLogo"
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              className="mx-2"
              /* href="#restaurants" */ to="/restaurant-list"
            >
              Restaurants
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="mx-2"
              /* href="#shops" */ to="/shop-list"
            >
              Shops
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="mx-2"
              /* href="#events" */ to="/event-list"
            >
              Events
            </Nav.Link>

            {/* <NavDropdown title="What are you looking for?" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#restaurants">Restaurants</NavDropdown.Item>
            <NavDropdown.Item href="#shops">Shops</NavDropdown.Item>
            <NavDropdown.Item href="#events">Events</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          </Nav>

          {(user && (
            <Fragment>
              <Nav className="ml-auto">
                <Nav.Link as={Link} className="mx-2" to="/user-profile">
                  My Profile
                </Nav.Link>
                {/*    <Nav.Link type="button" onClick={this.onLogOutTrigger} className="btn MyBtn mx-2" href="/">
                  Log Out
                </Nav.Link> */}
                <Button
                  as={Link}
                  className="MyBtn LogoutBtn mx-2"
                  onClick={this.onLogOutTrigger}
                  to="/"
                >
                  Log Out
                </Button>
              </Nav>
            </Fragment>
          )) || (
            <Nav className="ml-auto">
              <Nav.Link as={Link} className="mx-2" to="/login">
                Log In
              </Nav.Link>
              <Nav.Link as={Link} className="mx-2" to="/join">
                Join
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
