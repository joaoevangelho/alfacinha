import React, { Component, Fragment } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";

import "./style.css";

class AboutSection extends Component {
  render() {
    return (
      <Fragment>
        <Carousel className="CarouselBgLayer1">
          <Carousel.Item className="CarouselBgLayer2 bg-secondary">
            {/* <img
                className="d-block w-100"
                src="/images/01.jpg"
                alt="First slide"
              /> */}
            <Carousel.Caption className="text-dark">
              <h3>Why go green?</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="CarouselBgLayer2 bg-secondary">
            {/* <img
                className="d-block w-100"
                src="/images/01.jpg"
                alt="Second slide"
              /> */}

            <Carousel.Caption className="text-dark">
              <h3>There's no planet B</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="CarouselBgLayer2 bg-secondary">
            {/* <img
                className="d-block w-100"
                src="/images/01.jpg"
                alt="Third slide"
              /> */}

            <Carousel.Caption className="text-dark">
              <h3>Kindness</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Fragment>
    );
  }
}

export default AboutSection;
