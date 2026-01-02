import React from "react";
import "./SectionTitle.scss";
import logo from '../../../assets/logo.png'; // adjust path only once

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <img src={logo} alt="section logo" className="section-title__logo" />

      {/* Main title */}
      <h3 className="section-title__main">{title}</h3>
    </div>
  );
};

export default SectionTitle;
