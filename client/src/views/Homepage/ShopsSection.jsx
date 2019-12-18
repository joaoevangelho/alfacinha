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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                beatae impedit, perferendis eaque ratione rem provident maiores
                rerum. Deserunt libero voluptas beatae sint quos commodi
                inventore blanditiis, ratione dolorem iusto!
              </p>
              <Link to="/shop-list">
                <Button className="ReadMoreBtn w-50 mr-5">READ MORE</Button>
              </Link>
            </Col>
            <Col sm={8}>
              <Image
                className="HomepageCenterImg"
                fluid
                src="/images/shops9.jpg"
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
