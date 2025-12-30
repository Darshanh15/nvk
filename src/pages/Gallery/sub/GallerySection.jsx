// import React, { useState } from "react";
// import "./GallerySection.scss";

// import img1 from "../../assets/images/constraction1.jpg";
// import img2 from "../../assets/images/constraction1.jpg";
// import img3 from "../../assets/images/constraction1.jpg";
// import img4 from "../../assets/images/constraction1.jpg";
// import img5 from "../../assets/images/constraction1.jpg";
// import img6 from "../../assets/images/constraction1.jpg";
// import img7 from "../../assets/images/constraction1.jpg";
// import img8 from "../../assets/images/constraction1.jpg";

// const tabs = ["All", "Bedroom", "Modular Kitchen", "Living Room", "In-Progress", "other"];

// const images = [
//   { id: 1, src: img1, title: "3BHK Concorde Manhattans", category: "Bedroom" },
//   { id: 2, src: img2, title: "Luxury Living Room", category: "Living Room" },
//   { id: 3, src: img3, title: "Modern Living Space", category: "Living Room" },
//   { id: 4, src: img4, title: "Modular Kitchen Design", category: "Modular Kitchen" },
//   { id: 5, src: img5, title: "Premium Bedroom", category: "Bedroom" },
//   { id: 6, src: img6, title: "TV Unit Design", category: "Living Room" },
//   { id: 7, src: img7, title: "Dining Area", category: "Living Room" },
//   { id: 8, src: img8, title: "Ongoing Project", category: "In-Progress" },
//   { id: 8, src: img8, title: "Ongoing Project", category: "other" },
// ];

// const GallerySection = () => {
//   const [activeTab, setActiveTab] = useState("All");
//   const [selectedImg, setSelectedImg] = useState(null);

//   const filteredImages =
//     activeTab === "All"
//       ? images
//       : images.filter((img) => img.category === activeTab);

//   return (
//     <section className="gallery-section">
//       {/* TABS */}
//       <div className="gallery-tabs">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={activeTab === tab ? "active" : ""}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* GRID */}
//       <div className="gallery-grid">
//         {filteredImages.map((img) => (
//           <div
//             key={img.id}
//             className="gallery-item"
//             onClick={() => setSelectedImg(img)}
//           >
//             <img src={img.src} alt={img.title} />
//             <div className="overlay">
//               <span>{img.title}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL VIEW */}
//       {selectedImg && (
//         <div className="image-modal" onClick={() => setSelectedImg(null)}>
//           <img src={selectedImg.src} alt={selectedImg.title} />
//           <p>{selectedImg.title}</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default GallerySection;

import React, { useState, useMemo } from "react";
import "./GallerySection.scss";

import img1 from "../../../assets/images/constraction1.jpg";
import img2 from "../../../assets/images/constraction1.jpg";
import img3 from "../../../assets/images/constraction1.jpg";
import img4 from "../../../assets/images/constraction1.jpg";
import img5 from "../../../assets/images/constraction1.jpg";
import img6 from "../../../assets/images/constraction1.jpg";  
import img7 from "../../../assets/images/constraction1.jpg";
import img8 from "../../../assets/images/constraction1.jpg";

/* TABS */
const tabs = [
  "All",
  "Bedroom",
  "Modular Kitchen",
  "Living Room",
  "In-Progress",
  "Other",
];

/* IMAGES DATA */
const images = [
  { id: 1, src: img1, title: "3BHK Concorde Manhattans", category: "Bedroom" },
  { id: 2, src: img2, title: "Luxury Living Room", category: "Bedroom" },
  { id: 3, src: img3, title: "Modern Living Space", category: "Bedroom" },
  { id: 4, src: img4, title: "Modular Kitchen Design", category: "Modular Kitchen" },
  { id: 5, src: img5, title: "Premium Bedroom", category: "Bedroom" },
  { id: 6, src: img6, title: "TV Unit Design", category: "Living Room" },
  { id: 7, src: img7, title: "Dining Area", category: "Living Room" },
  { id: 8, src: img8, title: "Ongoing Project", category: "In-Progress" },
  { id: 9, src: img8, title: "Other Interior Work", category: "Bedroom" },
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  /* FILTER LOGIC (OPTIMIZED) */
  const filteredImages = useMemo(() => {
    if (activeTab === "All") return images;
    return images.filter((img) => img.category === activeTab);
  }, [activeTab]);

  return (
    <section className="gallery-section">
      {/* TABS */}
      <div className="gallery-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => setSelectedImg(img)}
          >
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // ✅ prevent auto close
          >
            <img src={selectedImg.src} alt={selectedImg.title} />
            <p>{selectedImg.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
