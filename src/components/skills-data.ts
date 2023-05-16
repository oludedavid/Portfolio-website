export type SkillType = {
  id: number;
  skillName: string;
  skillImage?: string;
  percentageLevel: number;
};

const skillData: SkillType[] = [
  {
    id: 1,
    skillName: "HTML and CSS",
    percentageLevel: 90,
  },
  {
    id: 2,
    skillName: "Javascript",
    percentageLevel: 90,
  },
  {
    id: 3,
    skillName: "React and Typescript",
    percentageLevel: 70,
  },
  {
    id: 4,
    skillName: "NodeJS and ExpressJS",
    percentageLevel: 60,
  },
  {
    id: 5,
    skillName: "MongoDB",
    percentageLevel: 60,
  },
  {
    id: 6,
    skillName: "MySQL and SQLlite3",
    percentageLevel: 60,
  },
  {
    id: 7,
    skillName: "Bootstrap and Tailwind CSS",
    percentageLevel: 80,
  },
  {
    id: 8,
    skillName: "Material UI",
    percentageLevel: 70,
  },
  {
    id: 9,
    skillName: "Flask with Python",
    percentageLevel: 60,
  },
  {
    id: 10,
    skillName: "AWS, Netlify, and Heroku Deployment",
    percentageLevel: 80,
  },

  {
    id: 11,
    skillName: "SAP ABAP",
    percentageLevel: 50,
  },
  {
    id: 12,
    skillName: "Web Optimization and SEO",
    percentageLevel: 80,
  },
  {
    id: 13,
    skillName: "Wordpress and Elementor",
    percentageLevel: 80,
  },
  {
    id: 14,
    skillName: "Microsoft Office ",
    percentageLevel: 80,
  },
  {
    id: 15,
    skillName: "Project Management  and Version Control",
    percentageLevel: 80,
  },
  {
    id: 16,
    skillName: "Product Management",
    percentageLevel: 80,
  },
];

export default skillData;
