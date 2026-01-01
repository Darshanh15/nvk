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
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a 
  href=""
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>
            {/* <a href="jmtechsolution2024@gmail.com"><FaEnvelope /></a> */}

            {/* it will be take only mail id */}
            {/* <a href="mailto:jmtechsolution2024@gmail.com?subject=Project Inquiry&body=Hello, I am interested in your services."><FaEnvelope /></a> */}

            {/* it will be take only mail id and subject and body also*/}
            <a
              href="."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            {/* <a href="#">
              <FaYoutube />
            </a> */}
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
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
        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/ServicesPage">Support Services</Link>
            </li>
            {/* <li><Link to="/production">Production</Link></li>
            <li><Link to="/management">Management</Link></li>
            <li><Link to="/promotion">Promotion</Link></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section ">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> {cmpy.address}
          </p>
          <p>
            <FaPhoneAlt /> {cmpy.mobile}
          </p>
          <p>
            <FaEnvelope /> {cmpy.mail}
          </p>
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
