import React, { Component, Fragment } from 'react';
import HeroViewSection from './HeroViewSection';
import AboutSection from './AboutSection';
import RestaurantsSection from './RestaurantsSection';
import ShopsSection from './ShopsSection';
// import EventsSection from "./EventsSection";
// import ContactSection from "./ContactSection";

import './style.css';

class Homepage extends Component {
  render() {
    window.scrollTo(0, 0);

    return (
      <Fragment>
        <HeroViewSection />
        <AboutSection />
        <RestaurantsSection />
        <ShopsSection />
        {/* <EventsSection /> */}
      </Fragment>
    );
  }
}

export default Homepage;
