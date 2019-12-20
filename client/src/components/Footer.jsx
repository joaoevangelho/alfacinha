import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import './style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer py-2 bg-dark">
        <Row className="d-flex justify-content-between align-items-center">
          <Nav className="flex-column py-2 mx-3">
            <div className="text-center">
              <Image
                fluid
                className="FooterImg"
                src="/images/alfacinha-logo1.png"
                alt="01"
              />

              {/* <p className="mx-2 text-secondary">
                Follow us: */}
              <div>
                <a
                  href="https://www.facebook.com/Alfacinha-100341914808752"
                  target="blank"
                  className="fa fa-facebook mx-1"
                ></a>
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  className="fa fa-instagram mx-1"
                ></a>
                <a
                  href="https://twitter.com/Alfacinha9"
                  target="blank"
                  className="fa fa-twitter mx-1"
                ></a>
              </div>
              {/* </p> */}
            </div>
          </Nav>
          <Nav className="flex-column text-left mx-3 my-2">
            <Nav.Item className="py-1 px-3 text-secondary font-weight-bold">
              Useful Links:
            </Nav.Item>
            <Nav.Link
              href="https://www.worldwildlife.org/"
              target="blank"
              className="py-0 px-3 text-secondary nav-link"
            >
              <small>World Wide Fund</small>
            </Nav.Link>
            <Nav.Link
              href="https://veggiefest.pt/"
              target="blank"
              className="py-0 px-3 text-secondary nav-link"
            >
              <small>Veggie Fest</small>
            </Nav.Link>
            <Nav.Link
              href="https://www.peta.org/"
              target="blank"
              className="py-0 px-3 text-secondary nav-link"
            >
              <small>PeTA</small>
            </Nav.Link>
            <Nav.Link
              href="https://www.leapingbunny.org/"
              target="blank"
              className="py-0 px-3 text-secondary nav-link"
            >
              <small>Leaping Bunny</small>
            </Nav.Link>
            <Nav.Link
              href="https://www.crueltyfreeinternational.org/"
              target="blank"
              className="py-0 px-3 text-secondary nav-link"
            >
              <small>Cruelty Free International</small>
            </Nav.Link>
          </Nav>

          {/* <Nav className="flex-column mr-5 text-right">
            <Nav.Item>
              <p className="text-secondary">Have any suggestions?</p>
              <Button className="MyBtn">Contact Us</Button>
            </Nav.Item>
          </Nav> */}
        </Row>
      </footer>
    );
  }
}

export default Footer;
