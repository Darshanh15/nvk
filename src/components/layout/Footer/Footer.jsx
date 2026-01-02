import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "./footer.scss";

import logo from "../../../assets/logo.png";
// import cpmy from "../../data/cmy";
import cmpy from "../../../data/cmpy";

// const data = {
//   socialicons : [
//     whatappnum : "919532543787",
//     facebook : "https://www.facebook.com/share/1Add8KBYdn/",
//     instagram : "https://www.instagram.com/gowdru_darshuu?igsh=ZWZyNDZzOTFpdGZh",
//     mailid : "darshanhgowda5@gmail.com"
//     mailsubject : "Welcome%20to%20NVK%20Construction&body=Hello%20NVK%20Team,%0A%0AI%20am%20interested%20in%20your%20construction%20services.",
//     youtube : "https://www.youtube.com/@soundsofsadhana"
//   ]
// }

import { data } from "./data"; // adjust path if needed

const {
  facebook,
  instagram,
  mailId,
  mailSubject,
  mailBody,
  whatsappNumber,
  youtube,
} = data.socialIcons;

const { contactUs } = data;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Description */}
        <div className="footer-section about">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <p>We convert visions into celebrations - every time..</p>

          
          {/* <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1Add8KBYdn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/gowdru_darshuu?igsh=ZWZyNDZzOTFpdGZh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=darshanhgowda5@gmail.com&subject=Welcome%20to%20NVK%20Construction&body=Hello%20NVK%20Team,%0A%0AI%20am%20interested%20in%20your%20construction%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/919731543787?text=Hello%20NVK%20Construction%20%26%20Consultancy,%20I%20am%20interested%20in%20your%20services.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.youtube.com/@soundsofsadhana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div> */}

          <div className="social-icons">
            {/* Facebook */}
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            {/* Instagram */}
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            {/* Email (Gmail – most reliable) */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mailId}&subject=${encodeURIComponent(
                mailSubject
              )}&body=${encodeURIComponent(mailBody)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello NVK Construction & Consultancy, I am interested in your services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/* YouTube */}
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/ServicesPage">Services</Link>
            </li>
            <li>
              <Link to="/gallary">Gallary</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/ServicesPage">Support Services</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              contactUs.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt /> {contactUs.address}
          </a>

          <a href={`tel:${contactUs.phoneNumbers[0].replace(/\s+/g, "")}`}>
            <FaPhoneAlt /> {contactUs.phoneNumbers.join(" / ")}
          </a>

          <a href={`mailto:${contactUs.emailId}`}>
            <FaEnvelope /> {contactUs.emailId}
          </a>

          
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {cmpy.name} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
