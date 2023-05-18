export type Experience = {
  id: number;
  companyName: string;
  companyDescription: string;
  companyImage: string;
  companyUrl: string;
  companyRole: string;
  companyDuration: string;
  companyLocation: string;
  companyResponsibilities: string[];
  projects: string[];
};

const experienceData: Experience[] = [
  {
    id: 1,
    companyName: "Testia an Airbus Company",
    companyDescription:
      "Testia is a subsidiary of Airbus, specialized in Aerostructure Inspections and Non-Destructive Testing (NDT).",
    companyImage:
      "https://media.licdn.com/dms/image/C560BAQHACJR4z3eDzg/company-logo_200_200/0/1519901672740?e=1692230400&v=beta&t=cMy1UALeD6E-osQ6vp8kVnKBcKfTur6L37Lsnf0DTuA",
    companyUrl:
      "https://www.testia.com/?utm_source=linkedin&utm_medium=social&utm_campaign=custombutton",
    companyRole: "Web Developer",
    companyDuration: "March 2023 - Present",
    companyLocation: "Bremen, Germany",
    companyResponsibilities: [
      "Optimizing website performance (Testia.com) using tools such as GTmetrix, Pingdom, Lighthouse, WP Rocket, Converter for Media and PageSpeed Insights.",
      "Developing and maintaining the company's website (Testia.com) using HTML, CSS, JavaScript, Elementor and WordPress.",
      "Improving the company's website (Testia.com) SEO using tools such as Google Search Console, Google Analytics, and SEMrush.",
      "Creating reports and visualizations using Excel to track and analyse website data and identify areas for improvement.",
      "Blocking Spams and Bots from the company's website (Testia.com) using tools such as HoneyPot.",
    ],
    projects: [
      "Consistently maintain and update testia.com's WordPress website using Elementor and HTML/CSS.",
    ],
  },
  {
    id: 2,
    companyName: "Candidate select GmbH",
    companyDescription:
      "CASE revolutionizes the recruitment process by providing standardized data on grade distributions and program competitiveness.",
    companyImage:
      "https://media.licdn.com/dms/image/C4E0BAQFdkK0SuO9kOA/company-logo_200_200/0/1675205728636?e=1692230400&v=beta&t=LhH3VsOgRNGnN18uKUBF7wkxN76a7KYOzZgWznKxPv8",
    companyUrl: "candidate-select.de/",
    companyRole: "Fullstack Developer",
    companyDuration: "April 2022 - October 2022",
    companyLocation: "Cologne, Germany",
    companyResponsibilities: [
      "Front End development with HTML, Jinja, CSS, Bootstrap5, JavaScript, TypeScript and React",
      "Back End development with FLask, Python, SQLAlchemy, and SQLite3",
      "Project Management of different tasks using tools like Jira, Trello",
      "Maintainance and enhancement of  the functionality of existing applications, improving overall user experience.",
      "Collaboration with cross-functional teams to develop new products and features that met customer needs.",
      "Created and implemented RESTful APIs to improve application functionality and user experience.",
      "Developement and maintainance of documentation of all processes and procedures.",
    ],
    projects: [
      "Created a stunning Fullstack Dashboard for Data Analytics with HTML, CSS, JavaScript, Jinja, Bootstrap5, Flask, MySQL, SQLAlchemy, ChartJS, and Python.",
      "Created UI templates for new applications, including a Grade Comparison tool, resulting in a streamlined user experience and increased user adoption.",
    ],
  },
  {
    id: 3,
    companyName: "Fedger.io",
    companyDescription:
      "Fedger is a fast growing tech company located in Cologne, Germany. The focus is on the extraction and delivery of structured information from any kind of documents.",
    companyImage:
      "https://media.licdn.com/dms/image/C560BAQFDLQnwSiiu9w/company-logo_200_200/0/1519899704866?e=1692230400&v=beta&t=9OXXSHDIw7Oks8AhLXWUVDo-yerldHsctmkovx1WotM",
    companyUrl: "https://fedger.io",
    companyRole: "Data Quality Assurance",
    companyDuration: "June 2019 - August 2019",
    companyLocation: "Cologne, Germany",
    companyResponsibilities: [
      "Extracted data using custom-built tools",
      "Evaluated and analysed results from artificial intelligence models to ensure accuracy.",
      "Digitized data from various sources, ensuring consistency and completeness.",
      "Performed continuous quality control and provided feedback to improve processes",
    ],
    projects: [
      "Developed and implemented a new data extraction tool, reducing processing time",
      "Collaborated with the AI team to improve accuracy of data extraction.",
      "Created and maintained documentation of data extraction and quality control processes.",
    ],
  },
];

export default experienceData;
