import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./style.css";

class RestaurantsSection extends Component {
  render() {
    return (
      <Fragment>
        <div id="restaurants" className="w-100 text-right">
          <Row className="d-flex justify-content-between align-items-center">
            <Col sm={8}>
              <Image
                className="HomepageCenterImg"
                fluid
                src="/images/food9.jpg"
                alt="BrandLogo"
              />
            </Col>
            <Col sm={4} className="text-left p-3">
              <h5 className="ml-5">RESTAURANTS</h5>
              <p className="text-justify mx-5">
                Reducing meat consumption is good for our health and for the
                environment, so why not give new flavors a try? Find a list of
                restaurants with lots of tasty vegetarian and vegan options,
                wether you're in the mood for a snack, a quick meal at lunch
                break or a nice dinner with friends.
              </p>
              <Link to="/restaurant-list">
                <Button className="ReadMoreBtn w-50 mx-5">READ MORE</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default RestaurantsSection;
