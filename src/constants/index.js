import {
  creator,
  web,
  javascript,
  html,
  css,
  jQuery,
  reactjs,
  typescript,
  npcil,
  marquee,
  meshcraft,
  gssoc,
  emfinity,
  tailwind,
  nodejs,
  git,
  cpp,
  boblob,
  jasder,
  smack,
  threejs,
  python,
  php,
  sql,
  java,
  cv,
  
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "java",
    icon: java,
  },
{
  name: "typescript",
  icon: typescript,
},
{
  name: "Computer Vision",
  icon: cv,
},

];

const experiences = [
  {
    title: "Project Intern",
    company_name: "NPCIL",
    icon: npcil,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Developed a Process Monitor Module GUI using Python on QtCreator and database using SQL.",
    ],
  },
  {
    title: "SWE Intern",
    company_name: "MeshCraft",
    icon: meshcraft,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Working as a full-stack MERN developer intern, on the company portfolio and website , 3D animations.",
      "Got selected among the top 12.5% of applications.",
    ],
  },
  {
    title: "Contributor",
    company_name: "GirlScript Summer Of Code",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Debugging issues in existing codebases and projects and providing solutions.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Finished with a rank of 683 out of 2418 participants.",
    ],
  },
  {
    title: "Tech Team",
    company_name: "Emfinity KJSCE",
    icon: emfinity,
    iconBg: "#E6DEDD",
    date: "September 2023 - August 2024",
    points: [
      "Conducted and attended daily tech sessions.",
      "Made and verified as a team the questions of various council events.",
      "Content(math-based) development for college students.",
    ],
  },
  
 
  
  
  {
    title: "Investment Banking Fellow",
    company_name: "Marquee Equity",
    icon: marquee,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Attended regular Corporate Training Sessions on skills enhancement.",
      "Wrote 01 research report per month on recently concluded funding transactions in MLA Format.",
    ],
  }
];

const achievements = [
  {
    name: "TechGig Code Gladiators 2024 Finalist",
    description:
      "Had to solve competitive programming problem within a stipulated duration.Finished in the top 1% of registrations.",
    
  },
  {
    name: "3 ⭐ @ CodeChef, a coding platform",
    description:
      "Gave 15 consecutive contests on CodeChef and improved my rating to 1623.Used C++, sometimes Python, and Java for solving .",
    
  },
  {
    name: "Over 1000+ contributions on GitHub",
    description:
      "Have been an active member of Gitub community and have contributed to various open source projects.",
  },
];

const projects = [
  {
    name: "Web Terminal Emulator",
    description:
      "Implemented session storage and local storage for command history persistence, along with an enhanced user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: smack,
    source_code_link: "https://github.com/Soumilgit/Coded_A_Responsive_Terminal",
  },

  {
    name: "Hand Gesture Detection",
    description:
      "Developed using Python, achieving 95% accuracy using a score checker code; used keypoint and point history classifier datasets.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "green-text-gradient",
      },
    ],
    image: jasder,
    source_code_link: "https://github.com/Soumilgit/Gesture-Sign-Language-Detection-using-Python",
  },
  {
    name: "Meditation App",
    description:
      " A meditation app made using React Native and Expo, useful for tracking one's meditation habits and keep a record with affirmations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      

    ],
    image: boblob,
    source_code_link: "https://github.com/Soumilgit/Meditation-App_React-Native",
  },
];
const certificates = [
  {
    name: "Object-Oriented Data Structures in C++(Coursera)",
    description:
      "Learnt about C Programming Language Family, Computer Programming, Object-Oriented Programming and gained insights on Theoretical Computer Science.",
  },

  {
    name: "Postman API Fundamentals Student Expert",
    description:
      "Became proficient in using Postman to work with APIs, making GET, POST, PATCH and DELETE requests.,basic scripting and learnt using APIs in applications.",
  },
  {
    name: "JavaScript Algorithms and Data Structures(Beta)",
    description:
      "As part of the program, I learnt about JavaScript, ES6, Regular Expressions,Data Structures, Algorithms, Object-Oriented Programming and built 5 projects.",
  },
];

export { services, technologies, experiences, achievements, projects,certificates};
