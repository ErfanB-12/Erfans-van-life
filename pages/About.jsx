import React from "react";
import { Link } from "react-router-dom";

import aboutImage from "../assets/images/about-hero.png";

export function About() {
  return (
    <div className="about-container">
      <img src={aboutImage} alt="image" />
      <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉),
      </p>

      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
      <div className="link-section">
        <h3>Your destination is waiting.<br/> Your van is ready.</h3>
        <Link to="/vans">Explore our vans</Link>
      </div>
    </div>
  );
}
