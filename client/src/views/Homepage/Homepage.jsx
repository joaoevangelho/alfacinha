import React, { Component, Fragment } from "react";
import HeroViewSection from "./HeroViewSection";
import AboutSection from "./AboutSection";
import RestaurantsSection from "./RestaurantsSection";
import ShopsSection from "./ShopsSection";
// import EventsSection from "./EventsSection";
// import ContactSection from "./ContactSection";

import "./style.css";

class Homepage extends Component {
  render() {
    window.scrollTo(0, 0);

    return (
      <Fragment>
        <div className="HomepageBg">
          <HeroViewSection />
          <AboutSection />
          <RestaurantsSection />
          <ShopsSection />
          {/* <EventsSection /> */}
        </div>
      </Fragment>
    );
  }
}

export default Homepage;
