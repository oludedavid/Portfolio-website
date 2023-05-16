import React from "react";
import { Experience } from "./experienceData";

type ExperienceProps = {
  experience_data: Experience[];
};

const Experiences: React.FC<ExperienceProps> = ({ experience_data }) => {
  return (
    <div>
      <h1>Experience</h1>
      <p>Experience page body content</p>
    </div>
  );
};

export default Experiences;
