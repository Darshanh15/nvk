// import React from "react";
// import "./BusinessGrowth.scss";

// import CountUp from "./CountUp";

// const stats = [
//   { value: "945", label: "Work Hours" },
//   { value: "1280", label: "Great Reviews" },
//   { value: "578", label: "Projects Done" },
//   { value: "26", label: "Awards Won" },
// ];

// const BusinessGrowth = () => {
//   return (
//     <section className="business-section">
//       <div className="overlay"></div>

//       <div className="business-container">
//         {/* LEFT CONTENT */}
//         <div className="business-left">
//           <span className="tagline">LOREM IPSUM DOLOR SIT AMET</span>

//           <h2>
//             Our solutions for your <br />
//             <span>business growth</span>
//           </h2>

//           <p>
//             Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit
//             nec congue elementum. Nulla luctus laoreet porta. Maecenas at nisi
//             tempus, porta metus vitae, faucibus augue.
//           </p>

//           <p>
//             Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis,
//             odio velit molestie nunc, ut posuere ante tortor ut neque.
//           </p>

//           <button className="read-more">READ MORE</button>
//         </div>

//         {/* RIGHT STATS */}
//         <div className="business-right">
//           {stats.map((item, index) => (
//             <div className="stat-card" key={index}>
//               <h3>{item.value}</h3>
//               <p>{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessGrowth;


import React from "react";
import CountUp from "./CountUp";
import "./BusinessGrowth.scss";

const stats = [
  { value: 945, label: "Work Hours" },
  { value: 1280, label: "Great Reviews" },
  { value: 578, label: "Projects Done" },
  { value: 26, label: "Awards Won" },
];

const BusinessGrowth = () => {
  return (
    <section className="business-section">
      <div className="overlay"></div>

      <div className="business-container">
        {/* LEFT */}
        <div className="business-left">
          <span className="tagline">LOREM IPSUM DOLOR SIT AMET</span>

          <h2>
            Our solutions for your <br />
            <span>business growth</span>
          </h2>

          <p>
            Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit
            nec congue elementum. Nulla luctus laoreet porta.
          </p>

          <p>
            Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis.
          </p>

          <button className="read-more">READ MORE</button>
        </div>

        {/* RIGHT */}
        <div className="business-right">
          {stats.map((item, i) => (
            <div className="stat-card" key={i}>
              <h3>
                <CountUp end={item.value} />
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;
