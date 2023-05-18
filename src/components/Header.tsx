import React from "react";

type HeaderProps = {
  toggle: boolean;
  toggleMenu: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggle, toggleMenu }) => {
  return (
    <header className="head">
      <h1 className="header__logo text-gradient">Dave.</h1>
      <ul className="header__menu">
        <li className="header__menu-item">
          <a
            href="https://www.linkedin.com/in/david-olude-5585a8145/"
            target="_blank"
            className="header__menu-link"
          >
            <figure className="header__icon">
              <img
                className="header__icon-image"
                src={process.env.PUBLIC_URL + "/images/linkedin.png"}
                alt="LinkedIn"
              />
            </figure>
          </a>
        </li>
        <li className="header__menu-item">
          <a
            href="https://github.com/oludedavid?tab=repositories"
            target="_blank"
            className="header__menu-link"
          >
            <figure className="header__icon">
              <img
                className="header__icon-image"
                src={process.env.PUBLIC_URL + "/images/github.png"}
                alt="GitHub"
              />
            </figure>
          </a>
        </li>
        <li className="header__menu-item">
          <p className="header__contact">odavidolumide@gmail.com</p>
        </li>
      </ul>
      <button
        className="burger-menu-container"
        onClick={() => {
          toggleMenu();
        }}
      >
        <img
          className="header__icon-image burger-menu"
          src={process.env.PUBLIC_URL + "/images/menu.png"}
          alt="GitHub"
        />
      </button>
    </header>
  );
};

export default Header;
