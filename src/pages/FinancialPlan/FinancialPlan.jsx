import React from "react";
import "./FinancialPlan.scss";

import img from '../../assets/images/calculator-image.png'

const FinancialPlan = () => {
  return (
    <section className="financial-section">
      <div className="financial-overlay"></div>

      <div className="financial-container">
        {/* LEFT IMAGE */}
        <div className="financial-left">
          <img
            src={img}
            alt="Financial Advisor"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="financial-right">
          <span className="tag">YOUR FREEDOM</span>
          <h2>Get A Financial Plan</h2>

          <form className="financial-form">
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Your Reason</label>
              <select>
                <option>Choose an Option</option>
                <option>Investment</option>
                <option>Business Growth</option>
                <option>Tax Planning</option>
              </select>
            </div>

            <button type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinancialPlan;
