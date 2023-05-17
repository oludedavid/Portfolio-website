import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about__content-container">
        <p className="about__content-text">
          I am a Germany-based Frontend Developer with a flair for captivating
          UI/UX and high-performance web apps. Passionate about leveraging
          cutting-edge tech for exceptional digital experiences.
        </p>
        <figure className="about__content-figure">
          <img
            className="about__content-figure-img"
            src={process.env.PUBLIC_URL + "/images/Dave-dark.png"}
            alt="about"
          />
        </figure>
      </section>

      <div className="about__content-button-container">
        <Link to="/portfolio" className="btn btn--gradient">
          Learn more
        </Link>
        <Link to="/contact-me" className="btn btn--gradient">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default About;
