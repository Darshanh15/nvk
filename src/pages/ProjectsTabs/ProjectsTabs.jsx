import React, { useState } from "react";
import "./ProjectsTabs.scss";

const TABS = ["Web Design", "Graphics", "Web Coding"];

const DATA = {
  "Web Design": {
    headers: ["Project Title", "Budget", "Deadline", "Client"],
    rows: [
      ["Website Redesign", "$1,500 to $2,200", "2022 Dec 12", "Web Biz"],
      ["Website Renovation", "$2,500 to $3,600", "2022 Dec 10", "Online Ads"],
      ["Marketing Plan", "$2,500 to $4,200", "2022 Dec 8", "Web Biz"],
      ["All-new Website", "$3,000 to $6,600", "2022 Dec 2", "Web Presence"],
    ],
  },

  Graphics: {
    headers: ["Project Title", "Budget", "Deadline", "Client"],
    rows: [
      ["Graphics Redesign", "$500 to $800", "2022 Nov 24", "Media One"],
      ["Digital Graphics", "$1,500 to $3,000", "2022 Nov 18", "Second Media"],
      ["New Artworks", "$2,200 to $4,400", "2022 Nov 10", "Artwork Push"],
      ["Complex Arts", "$1,100 to $2,400", "2022 Nov 3", "Media One"],
    ],
  },

  "Web Coding": {
    headers: ["Project Title", "Budget", "Estimated", "Technology"],
    rows: [
      ["Backend Coding", "$2,000 to $5,000", "2022 Nov 28", "PHP MySQL"],
      ["New Web App", "$1,500 to $3,000", "2022 Nov 18", "Python Programming"],
      ["Frontend Interactions", "$3,000 to $6,000", "2022 Nov 10", "JavaScripts"],
      ["Video Creations", "$1,800 to $4,400", "2022 Nov 3", "Multimedia"],
    ],
  },
};

const ProjectsTabs = () => {
  const [activeTab, setActiveTab] = useState("Web Design");

  return (
    <section className="projects-tabs">
      <div className="projects-container">
        {/* LEFT */}
        <div className="projects-left">
          {/* TABS */}
          <div className="tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TABLE */}
          <div className="table-wrapper">
            <div className="table-header">
              {DATA[activeTab].headers.map((h, i) => (
                <span key={i}>{h}</span>
              ))}
            </div>

            {DATA[activeTab].rows.map((row, i) => (
              <div className="table-row" key={i}>
                {row.map((cell, j) => (
                  <span key={j} className={j === 0 ? "title" : ""}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="projects-right">
          <h2>
            Please tell us about your <br />
            idea and how you want it <br />
            to be
          </h2>

          <p>
            You are allowed to use this template for your websites.
            You are <strong>NOT allowed</strong> to redistribute the
            template ZIP file on any other template websites.
          </p>

          <p>
            Thank you for downloading and using our templates.
            Please tell your friends about our website.
          </p>

          <button className="discover-btn">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTabs;
