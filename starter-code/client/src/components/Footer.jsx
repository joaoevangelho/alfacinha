import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class Footer extends Component {
  render() {
    return (
      <footer className="footer py-2 bg-dark mt-5">
        <Nav className="flex-column">
          <Nav.Link
            // href="https://www.un.org/sustainabledevelopment/"
            // target="blank"
            className="py-2 pl-4 text-secondary nav-link"
          >
            Go Green
          </Nav.Link>
          {/* 					<Nav.Link
						href="#"
						className="py-2 pl-4 text-secondary nav-link"
					>
						Link Two
					</Nav.Link>
					<Nav.Link
						href="#"
						className="py-2 pl-4 text-secondary nav-link"
					>
						Link Three
					</Nav.Link> */}
        </Nav>
      </footer>
    );
  }
}

export default Footer;
