import React from "react";
import {
  FaBuilding,
  FaDraftingCompass,
  FaDrawPolygon,
  FaCubes,
  FaHammer,
  FaUserTie,
  FaWarehouse,
  FaBezierCurve,
} from "react-icons/fa";


import './subservices.scss'

const services = [
  {
    title: "Building Licence & Approvals",
    icon: <FaBuilding />,
  },
  {
    title: "2D Planning",
    icon: <FaDraftingCompass />,
  },
  {
    title: "Architectural & Structural Design",
    icon: <FaDrawPolygon />,
  },
  {
    title: "3D Elevation",
    icon: <FaCubes />,
  },
  {
    title: "Construction & Interiors",
    icon: <FaHammer />,
  },
  {
    title: "Consultancy",
    icon: <FaUserTie />,
  },
  {
    title: "PEB Works",
    icon: <FaWarehouse />,
  },
  {
    title: "Tensile Structures",
    icon: <FaBezierCurve />,
  },
];

function SubServices() {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="tag">OUR SERVICES</span>
        <h2>What We Offer</h2>
        <p>
          We provide end-to-end construction, architectural and design
          solutions tailored to your needs.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubServices