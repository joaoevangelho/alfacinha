import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

class ShopsSection extends Component {
  render() {
    return (
      <Fragment>
        <div className="w-100 py-3 px-5 mb-0 BeigeBg text-left ">
          <Row className="d-flex justify-content-between align-items-center">
            <Col sm={8} className="text-right">
              <h5>Shops</h5>
              <Link to="/shops-list">
                <Button className="ReadMoreBtn mx-2">Read more</Button>
              </Link>
            </Col>
            <Col sm={4}>
              <Image
                className="HomepageCenterImg my-3"
                fluid
                src="/images/02.jpg"
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
