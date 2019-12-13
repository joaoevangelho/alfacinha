import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron
          // id="home"
          fluid
          className="py-5 mb-0 GreenBg d-flex justify-content-center align-items-center"
        >
          <div className="w-100 pb-5 pt-2">
            <Row className="pt-5">
              <Col md={1}></Col>
              <Col /* className="text-light" */>
                <h3 className="pl-5">Welcome to</h3>
                <h1 className="display-1 PurpleTxt font-weight-bold lh-75">ALFACINHA</h1>
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

        <Carousel id="problem" className="BeigeBg carousel-inner">
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
                  GO GREEN
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
        <Jumbotron
          // id="home"
          fluid
          className="py-5 mb-0 BeigeBg d-flex justify-content-center align-items-center"
        >
          <div className="w-100 pb-5 pt-2">
            <Row className="pt-5">
              <Col md={1}></Col>
              <Col /* className="text-light" */>
                <h3 className="pl-5">Restaurants</h3>
                <Link to="/restaurant-list">See list of restaurants here</Link>
                {/* <h1 className="display-1 lh-75">ALFACINHA</h1> */}
              </Col>
            </Row>
            <Row>
              <Col md={4} lg={4} xl={4}></Col>
              <Col /* className="text-light" */>
                {/* <h1 className="pl-5 font-weight-normal">
                  Your green guide to Lisbon
                </h1>
                <Link to="/restaurant-list">Restaurant List</Link> */}
              </Col>
            </Row>
          </div>
        </Jumbotron>
        <Jumbotron
          // id="home"
          fluid
          className="py-5 mb-0 GreenBg d-flex justify-content-center align-items-center"
        >
          <div className="w-75">
            <Row>
              <Col md={1}></Col>
              <Col className="d-flex justify-content-between align-items-center">
                <h5>Have any suggestions for us? Let us know!</h5>
                <Button className="MyBtn">Contact Us</Button>
              </Col>
            </Row>
            <Row>
              <Col md={4} lg={4} xl={4}></Col>
              <Col /* className="text-light" */>
               {/*  <h1 className="pl-5 font-weight-normal">
                  Your green guide to Lisbon
                </h1> */}
              </Col>
            </Row>
          </div>
        </Jumbotron>
        
      </Fragment>
    );
  }
}

export default Homepage;
