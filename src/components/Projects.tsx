import React from "react";
import { Project } from "./project-data";
import Carousel from "react-material-ui-carousel";

type ProjectsProps = {
  project_data: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ project_data }) => {
  return (
    <div className="project" id="project">
      <h1 className="project__heading text-center text-3xl">Projects</h1>
      <Carousel
        className="project__card-carousel"
        animation="slide"
        swipe={true}
        navButtonsAlwaysVisible={true}
        indicators={true}
        cycleNavigation={true}
        fullHeightHover={false}
        autoPlay={true}
        interval={3000}
        duration={500}
      >
        {project_data.map((project) => {
          return (
            <div key={project.id} className="project__card">
              <img
                src={process.env.PUBLIC_URL + project.projectImage}
                alt="Avatar"
                className="project__card-image"
              />
              <div className="project__card-overlay">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__card-anchor-link"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/link.png"}
                    alt="Anchor Link"
                    className="project__card-overlay-card-image"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Projects;
