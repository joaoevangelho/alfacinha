import React, { Component, Fragment } from 'react';
// import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";

class AboutSection extends Component {
  render() {
    return (
      <Fragment>
        <Carousel className="BeigeBg carousel-inner">
          <Carousel.Item className="mh-100 pt-5 mt-5">
            <Carousel.Caption className="h-100">
              <Row>
                <Col>
                  <h1 className="display-4 font-weight-bold text-left text-dark">
                    THERE'S NO PLANET B
                  </h1>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={5} lg={4}></Col>
                <Col>
                  <p className="text-left text-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti sunt velit suscipit voluptatem iusto autem placeat
                    omnis a consequuntur dolor, hic soluta repudiandae veritatis
                    odit reiciendis harum! Animi, commodi nesciunt.
                  </p>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="mh-100 pt-5 mt-5">
            <Carousel.Caption className="h-100">
              <Row>
                <h2 className="display-5 font-weight-normal text-left text-dark mb-5">
                  WHY GO GREEN?
                </h2>
              </Row>
              <Row>
                <Col>
                  <Image
                    fluid
                    className="CarouselImg d-block w-100"
                    src="/images/01.jpg"
                    alt="01"
                  />
                </Col>
                <Col>
                  <Image
                    fluid
                    className="CarouselImg d-block w-100"
                    src="/images/02.jpg"
                    alt="02"
                  />
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
      </Fragment>
    )
  }
}

export default AboutSection;
