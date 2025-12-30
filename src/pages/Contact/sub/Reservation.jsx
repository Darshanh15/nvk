import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Reservation.scss";

const Reservation = () => {
  return (
    <section className="reservation-section">
      <div className="overlay"></div>

      <div className="reservation-container">
        {/* LEFT CONTENT */}
        <div className="reservation-left">
          <span className="tag">CONTACT US</span>

          <h2>
            Here You Can Make A Reservation <br />
            Or Just walkin to our NVK
          </h2>

          <p>
            Donec pretium est orci, non vulputate arcu hendrerit a.
            Fusce a eleifend risus, namei sollicitudin urna diam,
            sed commodo purus porta ut.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <h4>Phone Numbers</h4>
              <p>+91 80508 53666</p>
              <p>+91 99002 38556</p>
            </div>

            <div className="contact-card">
              <div className="icon">
                <FaEnvelope />
              </div>
              <h4>Emails</h4>
              <p>nvkc2020@gmail.com</p>
              <p>nvkc2020@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="reservation-form">
          <h3>Table Reservation</h3>

          <form>
            <div className="form-grid">
              <input type="text" placeholder="Your Name*" required />
              <input type="email" placeholder="Your Email Address" />

              <input type="tel" placeholder="Phone Number*" required />
              <input type="number" placeholder="Number Of Guests" />

              <input type="date" />
              <input type="time" />
            </div>

            <textarea placeholder="Message"></textarea>

            <button type="submit">Make A Reservation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
