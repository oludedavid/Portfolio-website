import React from "react";
import { Project } from "./project-data";

type ProjectsProps = {
  project_data: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ project_data }) => {
  return (
    <div className="project">
      <h1>Projects</h1>
      <p>Projects page body content</p>
    </div>
  );
};

export default Projects;
