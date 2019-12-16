import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./style.css";

class EventsSection extends Component {
  render() {
    return (
      <Fragment>
        <div id="events" className="w-100 text-right ">
          <Row className="d-flex justify-content-between align-items-center">
            <Col sm={8}>
              <Image
                className="HomepageCenterImg"
                fluid
                src="/images/events9.jpg"
                alt="BrandLogo"
              />
            </Col>
            <Col sm={4} className="text-left p-3">
              <h5 className="ml-5">EVENTS</h5>
              <p className="text-justify mx-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                beatae impedit, perferendis eaque ratione rem provident maiores
                rerum. Deserunt libero voluptas beatae sint quos commodi
                inventore blanditiis, ratione dolorem iusto!
              </p>
              <Link to="/event-list">
                <Button className="ReadMoreBtn w-50 ml-5">READ MORE</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default EventsSection;
