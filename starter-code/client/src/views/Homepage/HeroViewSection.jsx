import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

class HeroViewSection extends Component {
  render() {
    return (
      <div id="home">
        <Jumbotron
          fluid
          className="py-5 mb-0 GreenBg d-flex justify-content-center align-items-center w-100"
        >
          <div className="w-100 pb-5 pt-2">
            <Row className="pt-5">
              <Col md={1}></Col>
              <Col /* className="text-light" */>
                <h3 className="pl-5">Welcome to</h3>
                <h1 className="AlfacinhaTitleText display-1 PurpleTxt font-weight-bold LineH75">
                  ALFACINHA
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={4} lg={4} xl={4}></Col>
              <Col /* className="text-light" */>
                <h1 className="pl-5 font-weight-normal">
                  Your green guide to Lisbon
                </h1>
              </Col>
            </Row>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default HeroViewSection;
