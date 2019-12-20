import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// import { Link } from "react-router-dom";

import "./style.css";

import { logOut as logOutService } from "./../services/authentication";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };

    this.onLogOutTrigger = this.onLogOutTrigger.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  componentDidUpdate(previousProps) {
    if (previousProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        expanded: false
      });
    }
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
        expanded={this.state.expanded}
        collapseOnSelect
        expand="lg"
        fixed="top"
        // bg="dark"
        className="TransparentBg"
        // variant="dark"
        // variant="light"
      >
        <Nav.Link as={Link} to="/">
          <Image
            className="LogoImg"
            fluid
            src="/images/logo1.png"
            // src="/images/alfacinha-logo2.png"
            alt="BrandLogo"
          />
        </Nav.Link>
        <Navbar.Toggle
          onClick={this.handleToggleMenu}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              className="mx-2 text-dark font-weight-bold NavLinksText"
              /* href="#restaurants" */ to="/restaurant-list"
            >
              RESTAURANTS
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="mx-2 text-dark font-weight-bold NavLinksText"
              /* href="#shops" */ to="/shop-list"
            >
              SHOPS
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              className="mx-2 text-white"
              to="/event-list"
            >
              Events
            </Nav.Link> */}

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
                <Nav.Link
                  as={Link}
                  className="mx-2 text-dark font-weight-bold NavLinksText"
                  to="/user-profile"
                >
                  MY PROFILE
                </Nav.Link>
                {/*    <Nav.Link type="button" onClick={this.onLogOutTrigger} className="btn MyBtn mx-2" href="/">
                  Log Out
                </Nav.Link> */}
                <Button
                  as={Link}
                  className="MyBtn LogoutBtn font-weight-bold NavLinksText"
                  onClick={this.onLogOutTrigger}
                  to="/"
                >
                  LOG OUT
                </Button>
              </Nav>
            </Fragment>
          )) || (
            <Nav className="ml-auto">
              <Nav.Link
                as={Link}
                className="mx-2 text-dark font-weight-bold NavLinksText"
                to="/login"
              >
                Log In
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="mx-2 text-dark font-weight-bold NavLinksText"
                to="/join"
              >
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
