import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";

import HeroViewSection from "./HeroViewSection";
import AboutSection from "./AboutSection";
import RestaurantsSection from "./RestaurantsSection";
import ShopsSection from "./ShopsSection";
import EventsSection from "./EventsSection";
import ContactSection from "./ContactSection";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <HeroViewSection />
        <AboutSection />
        <RestaurantsSection />
        <ShopsSection />
        <EventsSection />
        <ContactSection />
      </Fragment>
    );
  }
}

export default Homepage;
