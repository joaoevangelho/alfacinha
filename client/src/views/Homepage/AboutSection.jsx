import React, { Component, Fragment } from 'react';
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import './style.css';

class AboutSection extends Component {
  render() {
    return (
      <Fragment>
        <Carousel className="AboutCarouselBgLayer1">
          {/* <Carousel.Item className="AboutCarouselBgLayer2">
            <img
                className="d-block w-100"
                src="/images/01.jpg"
                alt="First slide"
              />
            <Carousel.Caption className="text-dark">
              <h3>Why go green?</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
          <Carousel.Item className="AboutCarouselBgLayer2">
            <div className="row m-4 p-3">
              <div className="col-sm-2"></div>
              <div className="col-sm-4">
                <h6>
                  10 THINGS YOU CAN DO TO HELP SAVE OUR PLANET
                  <small>
                    <sup>[1]</sup>
                  </small>
                </h6>
                <ol className="AboutList mb-3 pl-5">
                  <li>Eat Sustainably</li>
                  <li>Reduce your waste</li>
                  <li>Watch what you buy</li>
                  <li>Travel responsibly</li>
                  <li>Volunteer for our world</li>
                  <li>Find ways to donate</li>
                  <li>Use your voice</li>
                  <li>Be informed</li>
                  <li>Be political</li>
                  <li>Make a pledge</li>
                </ol>

                <small className="text-dark pl-4">
                  <a
                    className="DataSources"
                    href="https://www.theguardian.com/lifeandstyle/2010/jul/18/vegetarianism-save-planet-environment"
                  >
                    [1] Source - WWF
                  </a>
                </small>
              </div>
              <div className="col-sm-4">
                <Image
                  fluid
                  className="CarouselImg"
                  src="/images/lastpic.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="col-sm-2"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="AboutCarouselBgLayer2">
            <div className="row m-4 p-3 d-flex justify-content-center align-items-center">
              <div className="col-sm-2"></div>
              <div className="col-sm-4">
                <h4 className="align-middle text-center font-weight-light">
                  It will be our generation that is responsible for the
                  irreversible elimination of oceanic wildlife, and the
                  destruction of the natural world as we know it. The only time
                  to act is know.
                </h4>
              </div>
              <div className="col-sm-4">
                <Image
                  fluid
                  className="CarouselImg"
                  src="/images/about2.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="col-sm-2"></div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Fragment>
    );
  }
}

export default AboutSection;
