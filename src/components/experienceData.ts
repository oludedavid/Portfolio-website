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
  companyAchievements: string[];
};

const experienceData: Experience[] = [
  {
    id: 1,
    companyName: "Andela",
    companyDescription:
      "Andela is a global talent network that connects companies with vetted, remote engineers and helps you scale your engineering team.",
    companyImage: "./images/experience/andela.png",
    companyUrl: "https://andela.com/",
    companyRole: "Software Engineer",
    companyDuration: "May 2021 - Present",
    companyLocation: "Remote",
    companyResponsibilities: [
      "Worked on a team of 5 to build a web application that allows users to create and manage their own events.",
      "Built the frontend of the application using ReactJS and Typescript.",
      "Built the backend of the application using NodeJS, ExpressJS and MongoDB.",
      "Used AWS S3 to store images and videos uploaded by users.",
      "Used AWS EC2 to host the backend of the application.",
      "Used AWS RDS to host the database of the application.",
      "Used AWS Route 53 to host the domain name of the application.",
      "Used AWS CloudFront to host the frontend of the application.",
      "Used AWS SES to send emails to users.",
      "Used AWS SNS to send SMS to users.",
      "Used AWS Lambda to run functions that send emails and SMS to users.",
      "Used AWS CloudWatch to monitor the application.",
      "Used AWS CodePipeline to automate the deployment of the application.",
      "Used AWS CodeBuild to build the application.",
      "Used AWS CodeDeploy to deploy the application.",
    ],
    companyAchievements: [
      "Built the frontend of the application using ReactJS and Typescript.",
      "Built the backend of the application using NodeJS, ExpressJS and MongoDB.",
      "Used AWS S3 to store images and videos uploaded by users.",
      "Used AWS EC2 to host the backend of the application.",
      "Used AWS RDS to host the database of the application.",
      "Used AWS Route 53 to host the domain name of the application.",
      "Used AWS CloudFront to host the frontend of the application.",
      "Used AWS SES to send emails to users.",
      "Used AWS SNS to send SMS to users.",
      "Used AWS Lambda to run functions that send emails and SMS to users.",
      "Used AWS CloudWatch to monitor the application.",
      "Used AWS CodePipeline to automate the deployment of the application.",
      "Used AWS CodeBuild to build the application.",
      "Used AWS CodeDeploy to deploy the application.",
    ],
  },
];

export default experienceData;
