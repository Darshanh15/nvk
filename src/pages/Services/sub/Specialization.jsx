import React from "react";
import {
  FaHardHat,
  FaCogs,
  FaDraftingCompass,
  FaShieldAlt,
} from "react-icons/fa";
import "./Specialization.scss";

const specializationData = [
  {
    icon: <FaHardHat />,
    title: "Skilled & Trained Workforce",
    desc: "Technically trained professionals ensuring precision, safety, and quality execution.",
  },
  {
    icon: <FaCogs />,
    title: "Premium Materials",
    desc: "Use of high-quality, tested construction materials for long-lasting durability.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Engineering Excellence",
    desc: "Strong engineering knowledge combined with accurate planning and design.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Quality Assurance",
    desc: "Strict quality checks and safety standards at every stage of construction.",
  },
];

const Specialization = () => {
  return (
    <section className="specialization-section">
      <div className="specialization-header">
        <span className="tag">SPECIALIZATION</span>
        <h2>Our Area of Expertise</h2>
        <p>
          At <strong>NVK Construction & Consultancy</strong>, we specialize in
          delivering high-quality construction through premium materials and
          skilled, technically trained labour. Our team ensures every project
          meets the highest standards of safety, durability, and excellence.
        </p>
        <p>
          We are committed to maintaining quality at every stage of planning,
          design, and execution to deliver the best results.
        </p>
      </div>

      <div className="specialization-grid">
        {specializationData.map((item, index) => (
          <div className="specialization-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialization;
