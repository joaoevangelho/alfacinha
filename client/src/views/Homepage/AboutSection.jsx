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
            {/* <img
                className="d-block w-100"
                src="/images/01.jpg"
                alt="Second slide"
              /> */}

            <Carousel.Caption className="text-dark">
              <h5>
              10 THINGS YOU CAN DO TO HELP SAVE OUR PLANET
                <small><sup>[1]</sup></small>
              </h5>
              <ol className="AboutList mb-3">
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

              <small className="text-dark"> 
                <a className="DataSources" href="https://www.theguardian.com/lifeandstyle/2010/jul/18/vegetarianism-save-planet-environment">
                  [1] Source - WWF
                </a>
              </small>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="AboutCarouselBgLayer2">
            {/* <img
                className="d-block w-100"
                src="/images/01.jpg"
                alt="Third slide"
              /> */}

            <Carousel.Caption className="text-dark d-flex justify-content-center align-items-center">
              {/* <h3>Kindness</h3> */}
              <h5 >
              IT WILL BE OUR GENERATION THAT IS RESPONSIBLE FOR THE IRREVERSIBLE ELIMINATION OF OCEANIC WILDLIFE, AND THE DESTRUCTION OF THE NATURAL WORLD AS WE KNOW IT.
THE ONLY TIME TO ACT IS NOW.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Fragment>
    );
  }
}

export default AboutSection;
