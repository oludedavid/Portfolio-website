import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SkillType } from "./skills-data";
import Carousel from "react-material-ui-carousel";

type SkillsProps = {
  skill_data: SkillType[];
};

const Skills: React.FC<SkillsProps> = ({ skill_data }) => {
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
          <Carousel
            className="skill__card-carousel"
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
            {skill_data.map((skill, index) => (
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
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Skills;
