import React, { useState } from "react";
import "./BestDeal.scss";

import img1 from '../../assets/images/constraction1.jpg'
import img2 from '../../assets/images/constraction2.jpg'
import img3 from '../../assets/images/constraction3.jpeg'
const DEALS = {
  Apartment: {
    stats: {
      space: "540 m2",
      floor: "3",
      rooms: "8",
      parking: "Yes",
      payment: "Bank",
    },
    image: img1,
    title: "All Info About Apartment",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quis ed ipsum suspendisse.",
    desc2:
      "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch.",
  },

  "Villa House": {
    stats: {
      space: "250 m2",
      floor: "26th",
      rooms: "5",
      parking: "Yes",
      payment: "Bank",
    },
    image: img2,
    title: "Detail Info About New Villa",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua.",
    desc2:
      "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter.",
  },

  Penthouse: {
    stats: {
      space: "320 m2",
      floor: "34th",
      rooms: "6",
      parking: "Yes",
      payment: "Bank",
    },
    image: img3,
    title: "Extra Info About Penthouse",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut kinfolk tonx seitan.",
    desc2:
      "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter.",
  },
};

const BestDeal = () => {
  const [activeTab, setActiveTab] = useState("Apartment");
  const data = DEALS[activeTab];

  return (
    <section className="best-deal">
      {/* HEADER */}
      <div className="deal-header">
        <div>
          <span className="tag">| BEST DEAL</span>
          <h2>
            Find Your Best Deal <br /> Right Now!
          </h2>
        </div>

        <div className="tabs">
          {Object.keys(DEALS).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="deal-content">
        {/* LEFT CARD */}
        <div className="info-card">
          <p><span>Total Flat Space</span><b>{data.stats.space}</b></p>
          <p><span>Floor number</span><b>{data.stats.floor}</b></p>
          <p><span>Number of rooms</span><b>{data.stats.rooms}</b></p>
          <p><span>Parking Available</span><b>{data.stats.parking}</b></p>
          <p><span>Payment Process</span><b>{data.stats.payment}</b></p>
        </div>

        {/* IMAGE */}
        <div className="deal-image">
          <img src={data.image} alt={activeTab} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="deal-text">
          <h3>{data.title}</h3>
          <p>{data.desc1}</p>
          <p>{data.desc2}</p>

          {/* <button className="visit-btn">
            <span>📅</span> Schedule a visit
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default BestDeal;
