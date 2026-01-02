import React from "react";
import "./WhoWeAre.scss";

import img from '../../../assets/images/constraction2.jpg'

const WhoWeAre = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        {/* LEFT IMAGE */}
        <div className="who-image">
          <img src={img} alt="Who We Are" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="who-content">
          <span className="tag">WHO WE ARE</span>

          <h2>
            Get to know about <span>our company</span>
          </h2>

          <p>
            Curabitur pulvinar sem a leo tempus facilisis. Sed non sagittis
            neque. Nulla consequat tellus nibh, id molestie felis sagittis ut.
            Nam ullamcorper tempus ipsum in cursus.
          </p>

          <p>
            Praes end at dictum metus. Morbi id hendrerit lectus, nec dapibus
            ex. Etiam ipsum quam, luctus eu egestas eget, tincidunt
          </p>

          {/* <button className="read-more">READ MORE</button> */}
          <a
  href="/pdf/brochure.pdf"
  download="Brochure.pdf"
  className="download-link"
>
  Download Brochure
</a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
