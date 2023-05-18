import React from "react";
import { Project } from "./project-data";
import { Link } from "react-router-dom";

type ProjectsProps = {
  project_data: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ project_data }) => {
  return (
    <div className="project" id="project">
      <h1 className="project__heading text-center text-3xl">Projects</h1>
      {project_data.map((project) => {
        return (
          <div key={project.id} className="project__card">
            <img
              src={process.env.PUBLIC_URL + project.projectImage}
              alt=""
              className="project__card-image"
            />
            <div className="project__card-overlay">
              <a
                href={project.projectUrl}
                target="_blank"
                className="project__card-anchor-link"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/link.png"}
                  alt=""
                  className="project__card-overlay-card-image"
                />
              </a>
            </div>
          </div>
        );
      })}
      {/* <div className="project__card">
        <img
          src={process.env.PUBLIC_URL + "/images/Dave-dark.png"}
          alt=""
          className="project__card-image"
        />
        <div className="project__card-overlay">
          <a
            href="https://www.google.com/"
            target="_blank"
            className="project__card-anchor-link"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/broken-link.png"}
              alt=""
              className="project__card-overlay-card-image"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
