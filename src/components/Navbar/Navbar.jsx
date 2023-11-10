import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const handToggleClick = () => {
    setMenuActive(!isMenuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isMenuActive ? "menu-active" : ""}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="logo">
            <a href="index.html">
              <span className="logo-circle"></span> Baires
            </a>
          </div>
          <ul className={`menu ${isMenuActive ? "active" : ""}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={handleLinkClick}>
                home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={handleLinkClick}>
                about
              </a>
            </li>
            <li className="nav-item">
              <a href="#product" className="nav-link" onClick={handleLinkClick}>
                product
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleLinkClick}>
                contact
              </a>
            </li>
          </ul>
          <div className="menu-btn" onClick={handToggleClick}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
