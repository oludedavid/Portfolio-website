import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

type SideBarProps = {
  handleExperienceTab: () => void;
  handleSkillsTab: () => void;
  handleProjectsTab: () => void;
};

const SideBar: React.FC<SideBarProps> = ({
  handleExperienceTab,
  handleSkillsTab,
  handleProjectsTab,
}) => {
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
              alt="portfolio icon"
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
