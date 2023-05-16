import React from "react";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__menu-link">
          <Link to="/" className="link">
            <img
              className="icon sidebar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/home.png"}
              alt="home icon"
            />
            Home
          </Link>
        </li>
        <li className="sidebar__menu-link">
          <Link to="/about" className="link">
            <img
              className="icon sidebar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/about.png"}
              alt="about icon"
            />
            About
          </Link>
        </li>
        <li className="sidebar__menu-link">
          <Link to="/portfolio" className="link">
            <img
              className="icon sidebar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/resume.png"}
              alt="resume icon"
            />
            Portfolio
          </Link>
        </li>
        <li className="sidebar__menu-link">
          <Link to="/contact-me" className="link">
            <img
              className="icon sidebar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/contact.png"}
              alt="contact icon"
            />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
