import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Images/mevchargerslogo.png";
import "./navbar.css";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggleClick = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="navbar-right">
        <div className={`links-container-${showLinks ? "" : "hidden"}`}>
          <Link to="/">Home</Link>
          <Link to="/chargers">Chargers</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">+971 501 679 410</Link>
        </div>
        <button className="menu-btn" onClick={handleToggleClick}>
          <FaBars color="#41C969" />
        </button>
      </div>
    </div>
  );
}
