import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        {/* PHONE */}
        <div className="info-card">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <h3>Phone</h3>
          <p>
            Vivamus ut tellus mi. Nulla nec cursus elit,
            id vulputate nec cursus augue.
          </p>
          <span className="highlight">+91 805085 3666</span>
        </div>

        {/* EMAIL */}
        <div className="info-card">
          <div className="icon">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
          <p>
            Vivamus ut tellus mi. Nulla nec cursus elit,
            id vulputate nec cursus augue.
          </p>
          <span className="highlight">nvkc2020@gmail.com</span>
        </div>

        {/* LOCATION */}
        <div className="info-card">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <h3>Location</h3>
          <p>
            #640, 8TH B MAIN ROAD SANEGURUVANAHALLI, <br /> BASAVESHWARA NAGARA, BENGALURU - 560079
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight link"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
