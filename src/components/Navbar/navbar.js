import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="navbar">
      <a href="https://niket-portfolio.vercel.app/">
      <img src={logo} alt="Logo" className="logoimage" /></a>
      <div className="desktop">
        <Link
          activeClass="active"
          to="intro"
          spy="true"
          smooth="true"
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy="true"
          smooth="true"
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy="true"
          smooth="true"
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        {/* k<Link className="desktopMenuListItem">Clients</Lin> */}
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behaviour: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      {isMobile ? (
        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : null}
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy="true"
          smooth="true"
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy="true"
          smooth="true"
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy="true"
          smooth="true"
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        {/* k<Link className="desktopMenuListItem">Clients</Lin> */}
      </div>
    </nav>
  );
};

export default Navbar;
