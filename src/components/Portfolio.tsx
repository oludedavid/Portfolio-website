import React, { useState } from "react";
import Skills from "./Skills";
import Experiences from "./Experience";
import Projects from "./Projects";

import { PortfolioProps } from "../App";

const Portfolio: React.FC<PortfolioProps> = ({
  experienceTab,
  projectsTab,
  skillsTab,
  experienceDataProps,
  skillDataProps,
  projectDataProps,
  handleExperienceTab,
  handleProjectsTab,
  handleSkillsTab,
  isButtonActive,
}) => {
  return (
    <div className="portfolio">
      <div className="portfolio__header">
        <ul className="portfolio__menu">
          <li
            className={`portfolio__menu-item ${
              isButtonActive === "experience" ? "active" : ""
            }`}
          >
            <button
              className="portfolio__menu-btn"
              onClick={() => {
                handleExperienceTab();
              }}
            >
              Experiences
            </button>
          </li>
          <li
            className={`portfolio__menu-item ${
              isButtonActive === "skills" ? "active" : ""
            }`}
          >
            <button
              className="portfolio__menu-btn"
              onClick={() => {
                handleSkillsTab();
              }}
            >
              Skills
            </button>
          </li>
          <li
            className={`portfolio__menu-item ${
              isButtonActive === "projects" ? "active" : ""
            }`}
          >
            <button
              className="portfolio__menu-btn"
              onClick={() => {
                handleProjectsTab();
              }}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
      <div className="portfolio__body">
        {experienceTab && <Experiences experience_data={experienceDataProps} />}
        {skillsTab && <Skills skill_data={skillDataProps} />}
        {projectsTab && <Projects project_data={projectDataProps} />}
      </div>
    </div>
  );
};

export default Portfolio;
