import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./style.css";

class ShopsSection extends Component {
  render() {
    return (
      <Fragment>
        <div id="shops" className="w-100 text-left ">
          <Row className="d-flex justify-content-between align-items-center">
            <Col sm={4} className="text-right p-3">
              <h5 className="mr-5">SHOPS</h5>
              <p className="text-justify mx-5">
                Reusable water bottles and coffee cups, silicone food storage
                bags, second-hand vintage clothes, cruelty-free beauty
                products... All of these sustainable options will help you help
                the planet, and we'll help you find them.
              </p>
              <Link to="/shop-list">
                <Button className="ReadMoreBtn w-50 mr-5">READ MORE</Button>
              </Link>
            </Col>
            <Col sm={8}>
              <Image
                className="HomepageCenterImg"
                fluid
                src="/images/shops4.jpg"
                alt="BrandLogo"
              />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default ShopsSection;
