import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

type NavBarProps = {
  toggle: boolean;
  toggleMenu: () => void;
  handleExperienceTab: () => void;
  handleSkillsTab: () => void;
  handleProjectsTab: () => void;
};

const NavBar: React.FC<NavBarProps> = ({
  handleExperienceTab,
  handleSkillsTab,
  handleProjectsTab,
  toggle,
  toggleMenu,
}) => {
  return (
    <nav className={`navbar ${toggle ? "toggle-show" : "toggle-hide"}  `}>
      <button
        className="navbar__logo"
        onClick={() => {
          toggleMenu();
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/close.png"}
          alt=""
          className="close-nav images"
        />
      </button>
      <ul className="navbar__menu">
        <li className="navbar__menu-link">
          <Link
            to="/"
            className="nav-link"
            onClick={() => {
              toggleMenu();
            }}
          >
            <img
              className="icon navbar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/home.png"}
              alt="home icon"
            />
            Home
          </Link>
        </li>
        <li className="navbar__menu-link">
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              toggleMenu();
            }}
          >
            <img
              className="icon navbar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/about.png"}
              alt="about icon"
            />
            About
          </Link>
        </li>
        <li className="navbar__menu-link">
          <Link
            to="/portfolio"
            className="nav-link"
            onClick={() => {
              toggleMenu();
            }}
          >
            <img
              className="icon navbar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/resume.png"}
              alt="portfolio icon"
            />
            Portfolio
          </Link>
        </li>
        <li className="navbar__menu-link">
          <Link
            to="/contact-me"
            className="nav-link"
            onClick={() => {
              toggleMenu();
            }}
          >
            <img
              className="icon navbar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/contact.png"}
              alt="contact icon"
            />
            Contact
          </Link>
        </li>
        <li className="navbar__menu-link">
          <HashLink
            to="/portfolio"
            className="nav-link"
            onClick={() => {
              handleSkillsTab();
            }}
          >
            <img
              className="icon navbar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/cv.png"}
              alt="contact icon"
            />
            Skills
          </HashLink>
        </li>
        <li className="navbar__menu-link">
          <HashLink
            to="/portfolio"
            className="nav-link"
            onClick={() => {
              handleProjectsTab();
            }}
          >
            <img
              className="icon navbar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/project.png"}
              alt="contact icon"
            />
            Projects
          </HashLink>
        </li>
        <li className="navbar__menu-link">
          <HashLink
            to="/portfolio"
            className="nav-link"
            onClick={() => {
              handleExperienceTab();
            }}
          >
            <img
              className="icon navbar__menu-link-icon"
              src={process.env.PUBLIC_URL + "/images/resume.png"}
              alt="resume icon"
            />
            Experiences
          </HashLink>
        </li>
        <li className="navbar__menu-link socials">
          <a
            href="https://github.com/oludedavid?tab=repositories"
            target="_blank"
            className="navbar__menu-link"
          >
            <figure className="navbar__icon">
              <img
                className="navbar__icon-image icon"
                src={process.env.PUBLIC_URL + "/images/github.png"}
                alt="GitHub"
              />
            </figure>
          </a>
          <a
            href="https://www.linkedin.com/in/david-olude-5585a8145/"
            target="_blank"
            className="navbar__menu-link"
          >
            <figure className="navbar__icon">
              <img
                className="navbar__icon-image icon"
                src={process.env.PUBLIC_URL + "/images/linkedin.png"}
                alt="LinkedIn"
              />
            </figure>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
