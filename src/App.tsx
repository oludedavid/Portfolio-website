import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
import NotFoundPage from "./components/NotFoundPage";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import skillData, { SkillType } from "./components/skills-data";
import projectData, { Project } from "./components/project-data";
import experienceData, { Experience } from "./components/experienceData";
import PreLoader from "./components/Preloader";

// define the types of the props being passed into the experience component
const experienceDataProps: Experience[] = experienceData;

// define the types of the props being passed into the skills component
const skillDataProps: SkillType[] = skillData;

// define the types of the props being passed into the projects component
const projectDataProps: Project[] = projectData;

// define the types of the props being passed into the porfolio component
export type PortfolioProps = {
  experienceTab: boolean;
  skillsTab: boolean;
  projectsTab: boolean;
  isButtonActive: "experience" | "skills" | "projects";
  experienceDataProps: Experience[];
  skillDataProps: SkillType[];
  projectDataProps: Project[];
  handleExperienceTab: () => void;
  handleSkillsTab: () => void;
  handleProjectsTab: () => void;
};

const App: React.FC = () => {
  const [experienceTab, setExperienceTab] = useState<boolean>(true);
  const [skillsTab, setSkillsTab] = useState<boolean>(false);
  const [projectsTab, setProjectsTab] = useState<boolean>(false);
  const [isButtonActive, setIsButtonActive] = useState<
    "experience" | "skills" | "projects"
  >("experience");

  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const handleExperienceTab = () => {
    if (toggle) {
      toggleMenu();
    }
    setExperienceTab(true);
    setSkillsTab(false);
    setProjectsTab(false);
    setIsButtonActive("experience");
  };

  const handleSkillsTab = () => {
    if (toggle) {
      toggleMenu();
    }
    setExperienceTab(false);
    setSkillsTab(true);
    setProjectsTab(false);
    setIsButtonActive("skills");
  };

  const handleProjectsTab = () => {
    if (toggle) {
      toggleMenu();
    }
    setExperienceTab(false);
    setSkillsTab(false);
    setProjectsTab(true);
    setIsButtonActive("projects");
  };

  return (
    <>
      <PreLoader />

      <section className="App">
        <NavBar
          handleExperienceTab={handleExperienceTab}
          handleProjectsTab={handleProjectsTab}
          handleSkillsTab={handleSkillsTab}
          toggle={toggle}
          toggleMenu={toggleMenu}
        />

        <section className="App__header-container">
          <Header toggle={toggle} toggleMenu={toggleMenu} />
        </section>
        <main className="App__main-container">
          <section className="App__sidebar-container">
            <SideBar
              handleExperienceTab={handleExperienceTab}
              handleProjectsTab={handleProjectsTab}
              handleSkillsTab={handleSkillsTab}
            />
          </section>
          <section className="App__content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/portfolio"
                element={
                  <Portfolio
                    experienceTab={experienceTab}
                    skillsTab={skillsTab}
                    projectsTab={projectsTab}
                    handleExperienceTab={handleExperienceTab}
                    handleProjectsTab={handleProjectsTab}
                    handleSkillsTab={handleSkillsTab}
                    experienceDataProps={experienceDataProps}
                    skillDataProps={skillDataProps}
                    projectDataProps={projectDataProps}
                    isButtonActive={isButtonActive}
                  />
                }
              />
              <Route path="/contact-me" element={<ContactMe />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </section>
        </main>
      </section>
    </>
  );
};

export default App;
