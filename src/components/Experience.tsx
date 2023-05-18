import React from "react";
import { Experience } from "./experienceData";

type ExperienceProps = {
  experience_data: Experience[];
};

const Experiences: React.FC<ExperienceProps> = ({ experience_data }) => {
  return (
    <div className="experience" id="experience">
      <h1 className="experience__heading text-center text-3xl">Experience</h1>
      {experience_data.map((experience) => {
        return (
          <article
            key={experience.id}
            className="experience-card bg-white shadow-lg rounded-lg  mb-6"
          >
            <div className="flex items-center image-decription-cont">
              <div className="mr-4">
                <img
                  src={experience.companyImage}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">{experience.companyName}</h1>
                <p className="text-gray-500">{experience.companyDescription}</p>
                <h2 className="text-gray-500">{experience.companyLocation}</h2>
                <a
                  href={experience.companyUrl}
                  className="companiesURL text-gray-500"
                >
                  Go to company's site
                </a>
              </div>
            </div>
            <section className="mt-6 role-cont">
              <h2 className="text-lg font-semibold text-gray-500">
                Role: {experience.companyRole}
              </h2>
              <h2 className="text-gray-500">
                Duration: {experience.companyDuration}
              </h2>
              <ul className="mt-4 list-disc list-inside">
                {experience.companyResponsibilities.map(
                  (responsibility, index) => {
                    return (
                      <li key={index} className="mb-2 text-gray-500">
                        {responsibility}
                      </li>
                    );
                  }
                )}
              </ul>
              <ul className="mt-4 list-disc list-inside">
                {experience.projects.map((project, index) => {
                  return (
                    <li key={index} className="mb-2 text-gray-500">
                      {project}
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default Experiences;
