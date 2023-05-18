import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SkillType } from "./skills-data";
import ReactPaginate from "react-paginate";

type Skill = {
  skillName: string;
  percentageLevel: number;
};

type SkillsProps = {
  skill_data: SkillType[];
};

const Skills: React.FC<SkillsProps> = ({ skill_data }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const PER_PAGE: number = 3;
  const offset: number = currentPage * PER_PAGE;
  const currentPageData: Skill[] = skill_data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(skill_data.length / PER_PAGE);

  const calcColor = (percent: number, start: number, end: number) => {
    let a: number = percent / 100;
    let b: number = (end - start) * a;
    let c: number = b + start;
    return `hsl(${c}, 100%, 50%)`;
  };

  return (
    <>
      <div className="skill" id="skill">
        <h1 className="skill__heading text-center text-3xl">Skills</h1>
        <div className="skill__card-container">
          {currentPageData.map((skill, index) => (
            <div className="skill__card" key={index}>
              <div className="skill__card-guage">
                <CircularProgressbar
                  value={skill.percentageLevel}
                  text={`${skill.percentageLevel}%`}
                  circleRatio={skill.percentageLevel / 100}
                  styles={{
                    path: {
                      stroke: calcColor(skill.percentageLevel, 0, 70),
                      strokeLinecap: "butt",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                    },
                    trail: {
                      stroke: "#d6d6d6",
                      strokeLinecap: "butt",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                    },
                    text: {
                      fill: "#f88",
                    },
                  }}
                  strokeWidth={10}
                />
              </div>
              <div className="skill__name">
                <h3>{skill.skillName}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination__container">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={(page) => setCurrentPage(page.selected)}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
