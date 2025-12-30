import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQs.scss";

const faqData = [
  {
    question: "What services does NVK Construction & Consultancy provide?",
    answer:
      "NVK Construction & Consultancy offers end-to-end services including building licence & approvals, architectural and structural design, 2D & 3D planning, construction, interiors, consultancy, PEB works, and tensile structures.",
  },
  {
    question: "Do you handle building approvals and licences?",
    answer:
      "Yes, we take complete responsibility for building licence approvals and statutory permissions, ensuring compliance with all local authorities and regulations.",
  },
  {
    question: "Do you provide both residential and commercial construction?",
    answer:
      "Yes, we undertake residential, commercial, industrial, and interior projects with the same commitment to quality, safety, and timely delivery.",
  },
  {
    question: "What materials do you use for construction?",
    answer:
      "We use premium-quality, tested materials sourced from trusted suppliers to ensure durability, structural safety, and long-term performance.",
  },
  {
    question: "Do you offer turnkey construction solutions?",
    answer:
      "Yes, we provide complete turnkey solutions covering planning, design, approvals, construction, interiors, and final handover.",
  },
  {
    question: "How do you ensure quality and safety on-site?",
    answer:
      "Our projects follow strict quality checks, safety protocols, and engineering standards at every stage, supported by skilled and technically trained professionals.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="tag">FAQ's</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to common questions about our construction process,
          services, and quality standards at <strong>NVK Construction & Consultancy</strong>.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="icon">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
