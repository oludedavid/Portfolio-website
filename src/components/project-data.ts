export type Project = {
  id: number;
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectUrl: string;
};

const projectData: Project[] = [
  {
    id: 1,
    projectName: "Portfolio App",
    projectDescription:
      "A portfolio website Application built with HTML, CSS, Bootstrap and  Javascript",
    projectImage: "./images/Dave-light.jpg",
    projectUrl: "https://pensive-liskov-de27cd.netlify.app",
  },
  {
    id: 2,
    projectName: "Comfy App",
    projectDescription: "An E-commerce website built with ReactJS",
    projectImage: "./images/projects/comfy.jpg",
    projectUrl: "https://nervous-goldstine-ea996b.netlify.app/",
  },
  {
    id: 3,
    projectName: "TinDog App",
    projectDescription:
      "An Product page website built with Bootstrap, HTML and CSS",
    projectImage: "./images/projects/dog.jpg",
    projectUrl: "https://oludedavid.github.io/TinDog/",
  },
  {
    id: 4,
    projectName: "Dad Jokes App ",
    projectDescription:
      "This a project that fetches jokes from an API and displays them on the screen",
    projectImage:
      "https://i.pinimg.com/originals/94/ec/22/94ec22c05d4de9ff318af54b37197847.jpg",
    projectUrl: "https://wonderful-dubinsky-7bb3fa.netlify.app/",
  },

  {
    id: 5,
    projectName: "Counter App ",
    projectDescription: "This is a simple counter app built with Javascript",
    projectImage: "https://i.ibb.co/0jZ3qYH/comfy.png",
    projectUrl: "https://oludedavid.github.io/Counter/",
  },

  {
    id: 6,
    projectName: "Simon Game ",
    projectDescription: "This is a simple simon game built with Javascript",
    projectImage: "./images/projects/simon.jpg",
    projectUrl: "https://oludedavid.github.io/Simon-Game/",
  },

  {
    id: 7,
    projectName: "Choice Prioritizer App ",
    projectDescription: "random choice picker app built with Javascript",
    projectImage: "https://www.textfixer.com/images/random-choice-tool.png",
    projectUrl: "https://ecstatic-davinci-fe0588.netlify.app/",
  },
];

export default projectData;
