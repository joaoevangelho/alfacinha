/* import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <Link to="/login" size="sm">
            Log In
          </Link>
          <Link to="/join" size="sm">
            Join
          </Link>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar; */

import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      /*       <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="light"
        className="justify-content-between px-4 DarkGreyBg"
      >
        <Navbar.Brand href="#home">
          <img className="LogoImg" src="/images/alfacinha-logo2.png" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end ml-auto">
            <Nav.Link href="#problem" className="pr-4">
              Log In
            </Nav.Link>
            <Nav.Link href="#about" className="pr-4">
              Join
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
          <Nav className="ml-auto">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/join">Join</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
