// import React, { useEffect, useState } from "react";
// import "./navbar.scss";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       {/* Navigation */}
//       <nav className={scrolled ? "navbar scrolled" : "navbar"}>
//         <div className="nav-container">
//           <div className="logo">Personal Shape</div>

//           <ul className="nav-links">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>

//           <div
//             className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span className="hamburger"></span>
//             <span className="hamburger"></span>
//             <span className="hamburger"></span>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
//         <ul className="mobile-nav-links">
//           <li onClick={closeMenu}><a href="#home">Home</a></li>
//           <li onClick={closeMenu}><a href="#about">About</a></li>
//           <li onClick={closeMenu}><a href="#portfolio">Portfolio</a></li>
//           <li onClick={closeMenu}><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHome, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.scss";
// import logo from "../../assets/logo.jpeg";
// import logo from "../../assets/logo1.png";
import logo from "../../../assets/logo.png";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeAllMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "About us", path: "/about" },
    // { name: "About us", path: "/about" },
    // { name: "Services", path: "/services" },
   
    // {
    //   name: "Other Services",
    //   subMenu: [
    //     { name: "Digital Marketing", path: "/Service" },
    //     { name: "Branding", path: "/branding" },
    //     { name: "Content Writing", path: "/Content-Writing" 
    //     },
    //   ],
    // },
    { name: "Services", path: "/Services" },
    { name: "Gallary", path: "/Gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <Link to="/" onClick={closeAllMenus}>
//             <img src={logo} alt="Logo" />
//           </Link>
//         </div>

//         <div className={`navbar-menu ${mobileMenuOpen ? "open" : ""}`}>
//           <ul>
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 {item.subMenu ? (
//                   <>
//                     <span onClick={toggleDropdown}>
//                       {item.name} {dropdownOpen ? "-" : "+"}
//                     </span>
//                     {dropdownOpen && (
//                       <ul className="dropdown-menu">
//                         {item.subMenu.map((sub, i) => (
//                           <li key={i}>
//                             <Link to={sub.path} onClick={closeAllMenus}>
//                               {sub.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 ) : (
//                   <Link to={item.path} onClick={closeAllMenus}>
//                     {item.icon && item.icon} {item.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="navbar-icons">
//           {/* <FaSearch className="search-icon"/> */}
//           {!mobileMenuOpen && (
//             <FaBars className="mobile-menu-icon" onClick={toggleMobileMenu} />
//           )}
//           {mobileMenuOpen && (
//             <FaTimes className="close-btn" onClick={toggleMobileMenu} />
//           )}
//         </div>
//       </nav>
//     </>
//   );
// ... keep imports and state as before

return (
  <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeAllMenus}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Mobile sliding menu */}
      <div className={`navbar-menu ${mobileMenuOpen ? "open" : ""}`}>
        {/* CLOSE button moved inside the menu so it's always on top of the panel */}
        {mobileMenuOpen && (
          <button
            className="close-btn inside-menu-close"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        )}

        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subMenu ? (
                <>
                  <span onClick={toggleDropdown}>
                    {item.name} {dropdownOpen ? "-" : "+"}
                  </span>
                  {dropdownOpen && (
                    <ul className="dropdown-menu">
                      {item.subMenu.map((sub, i) => (
                        <li key={i}>
                          <Link to={sub.path} onClick={closeAllMenus}>
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} onClick={closeAllMenus}>
                  {item.icon && item.icon} {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right icons: keep hamburger outside so it shows when menu closed */}
      <div className="navbar-icons">
        {!mobileMenuOpen && (
          <FaBars className="mobile-menu-icon" onClick={toggleMobileMenu} />
        )}
      </div>
    </nav>
  </>
);

}

export default Navbar;