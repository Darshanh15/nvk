import React from "react";
import { FaPlay } from "react-icons/fa";

import './SubAbout.scss'

import img1 from '../../../assets/images/constraction1.jpg'
import img2 from '../../../assets/images/constraction2.jpg'
import img3 from '../../../assets/images/constraction3.jpeg'
import img4 from '../../../assets/images/constraction4.jpg'

function SubAbout() {
  return (
    <section className="about-section">

      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-left">
          <span className="about-tag">ABOUT US</span>

          <h2>
            We Leave A Delicious <br /> Memory For You
          </h2>

          <p>
            Klassy Cafe is one of the best restaurant HTML templates with
            Bootstrap v4.5.2 CSS framework. You can download and feel free to
            use this website template layout for your restaurant business.
            You are allowed to use this template for commercial purposes.
          </p>

          <p>
            You are NOT allowed to redistribute the template ZIP file on any
            template download website. Please contact us for more information.
          </p>

          <div className="about-food-images">
            <img src={img1} alt="food" />
            <img src={img2} alt="food" />
            <img src={img3} alt="food" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img
            src={img4}
            alt="Restaurant"
            className="about-main-img"
          />

          <div className="play-btn">
            <FaPlay />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubAbout