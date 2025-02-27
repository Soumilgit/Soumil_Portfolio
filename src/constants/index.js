import {
  app,
  web,
  data,
  problem,
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
  cpp,
  boblob,
  jasder,
  smack,
  threejs,
  python,
  php,
  sql,
  cv,
  mypic,
  kjsce,
  
  
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
    id: "technologies",
    title: "Skillset",
  },
  {
    id: "achievement",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certf",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const hero = [
  {
    title : "Soumil Mukhopadhyay",
    icon : mypic,
  },
  
]
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: data,
  },
  {
    title: "Problem Solver",
    icon: problem,
  },
  {
    title: "App Developer",
    icon: app,
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
   name: "typescript",
   icon: typescript,
  },
  {
   name: "Computer Vision",
   icon: cv,
  }

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
      "Ran checks for 10+ categories and tracked 10+ processes with resources monitoring."
    ],
  },
  {
    title: "SWE Intern",
    company_name: "MeshCraft",
    icon: meshcraft,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Working as a full-stack MERN developer intern, on the company portfolio and website, 3D animations.",
      "Among the top 12.5% of applications, currently working on 10+ 3D assets and animations.",
    ],
  },
  {
    title: "Investment Banking Fellow",
    company_name: "Marquee Equity",
    icon: marquee,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Completed 8+ corporate training sessions on financial modeling and deal structuring",
      "Wrote 5+ research reports on recently concluded funding transactions in MLA Format.",
    ],
  },
  {
    title: "Contributor",
    company_name: "GirlScript SOC",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Collaborating with cross-functional teams on software projects through GitHub, earning 5+ badges.",
      "Ranked 683 out of 2418 people,having earned 500+ points and neing Postman API certified.",
    ],
  },
  {
    title: "Tech Team",
    company_name: "Emfinity KJSCE",
    icon: emfinity,
    iconBg: "#E6DEDD",
    date: "September 2023 - August 2024",
    points: [
      "Conducted and attended daily tech sessions, designing 200+ Math questions.",
      "Organized 5+ activities,  engaged 450+ students and boosted social media following by 20%.",
      
    ],
  },
  {
    title: "Engineer Intern",
    company_name: "KJSCE",
    icon: kjsce,
    iconBg: "#E6DEDD",
    date: "July 2023 - September 2023",
    points:[
      "Developed a quiz web app using HTML, CSS and Vanilla JavaScript, having worked for 100+ hours.",
      "Displays 10+ questions and a final score, with a 1% penalty for any of the multiple retakes."
    ]
  },

];

const achievements = [
  {
    name: "TechGig Code Gladiators 2024 Finalist",
    description:
      "Had to solve competitive programming problem within a stipulated duration.Finished among the top 1% of registrations.",
    
  },
  {
    name: "3 ⭐ on CodeChef, a coding platform",
    description:
      "Gave 15 consecutive contests on CodeChef and improved my rating to 1623.Used C++, sometimes Python, and Java for solving.",
    
  },
  {
    name: "Over 2000+ contributions on GitHub",
    description:
      "Have been an active member of GitHub community and have contributed to various open source projects, along with my own projects.",
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
      "Used Python, achieving 95% accuracy using a score checker ; used keypoint and point history classifier datasets.",
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
      " Developed using React Native and Expo, useful for tracking one's meditation habits and keep a record with affirmations.",
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
    name: "Object-Oriented Data Structures in C++",
    description:
      "Learnt about C Programming Language Family, Computer Programming, Object-Oriented Programming and gained insights on Theoretical Computer Science.",
  },

  {
    name: "Postman API Fundamentals Student Expert",
    description:
      "Became proficient in using Postman to work with APIs, making GET, POST, PATCH and DELETE requests, basic scripting and learnt using APIs in applications.",
  },
  {
    name: "JavaScript Algorithms and Data Structures(Beta)",
    description:
      "As part of the program, I learnt about JavaScript, ES6, Regular Expressions,Data Structures, Algorithms, Object-Oriented Programming and built 5 projects.",
  },
];

export { hero ,services, technologies, experiences, achievements, projects,certificates};
