import React from "react";
import "./Hero.scss";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-subtitle">Creative Designer</div>
        <h1>Transforming Ideas Into Beautiful Experiences</h1>
        <p className="subtitle">
          I craft digital experiences that captivate, engage, and inspire
          through thoughtful design and innovative solutions
        </p>
        <a href="#portfolio" className="cta-button">
          Explore My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToAbout}></div>
    </section>
  );
};

export default Hero;
