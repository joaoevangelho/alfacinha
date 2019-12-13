import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
// import { Link } from "react-router-dom";

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
        bg="dark"
        className="TransparentBg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <Image
            className="LogoImg"
            fluid
            src="/images/alfacinha-logo2.png"
            alt="BrandLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="mr-auto"> */}
          {/* 
            <Nav.Link href="#features">Log In</Nav.Link>
            <Nav.Link href="#pricing">Join</Nav.Link> */}
          {/* 
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          {/* </Nav> */}

          {(user && (
            <Fragment>
              <Nav className="ml-auto">
                <Nav.Link className="mx-2" href="/private">
                  My Profile
                </Nav.Link>
                <Nav.Link
                  type="button"
                  onClick={this.onLogOutTrigger}
                  className="btn MyBtn mx-2"
                  href="/login"
                >
                  {/* <Button onClick={this.onLogOutTrigger}>Log Out</Button> */}
                  Log Out
                </Nav.Link>
              </Nav>
            </Fragment>
          )) || (
            <Nav className="ml-auto">
              <Nav.Link className="mx-2" href="/login">
                Log In
              </Nav.Link>
              <Nav.Link className="mx-2" href="/join">
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
