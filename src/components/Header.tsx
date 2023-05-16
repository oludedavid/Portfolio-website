import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
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
          <p className="header__contact">+4917620176480</p>
        </li>
        <li className="header__menu-item">
          <p className="header__contact">odavidolumide@gmail.com</p>
        </li>
      </ul>
    </header>
  );
};

export default Header;
