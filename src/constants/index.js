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
  emertxe,
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
  git,
  github,
  mongodb,
  express,
  postmanapi,
  flask,
  latex,
  
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
    title: "Tech",
  },
  {
    id: "achievement",
    title: "Feats",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certf",
    title: "Certs",
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
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
   name: "TypeScript",
   icon: typescript,
  },
  {
   name: "Computer Vision",
   icon: cv,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "PostmanAPI",
    icon: postmanapi,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "LaTeX",
    icon: latex,
  },

];

const experiences = [
  {
    title: "Project Intern",
    company_name: "NPCIL",
    icon: npcil,
    iconBg: "#383E56",
    date: "May 2024 - Jul 2024",
    points: [
      "Developed a Process Monitor Module GUI with Python, on QtCreator IDE and SQL as database.",
      "Ran checks for 10+ categories and processes with resources monitored."
    ],
  },
  {
    title: "SWE Intern",
    company_name: "MeshCraft",
    icon: meshcraft,
    iconBg: "#383E56",
    date: "Dec 2024 - April 2025",
    points: [
      "Worked as a full-stack MERN developer intern, on the company portfolio and website, 3D animations.",
      "Among the top 12.5% of applications, worked on 10+ 3D assets and the marketplace & asset pages.",
    ],
  },
  {
    title: "IB Fellow",
    company_name: "Marquee Equity",
    icon: marquee,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - April 2025",
    points: [
      "Completed 10+ corporate training sessions, learning financial modeling and deal structuring as well.",
      "Wrote 10+ research reports on concluded funding transactions in MLA Format; stipend-based pay.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Emertxe",
    icon: emertxe,
    iconBg: "#E6DEDD",
    date: "April 2025 - Present",
    points: [
      "Chosen for Emertxe's stipend-based Campus Ambassador Program across 75 colleges nationally.",
      "As sole campus rep, I’ll boost tech brand engagement via marketing and maybe land a tech intern role.",
    ],
  },
  {
    title: "Tech Team",
    company_name: "Emfinity KJSCE",
    icon: emfinity,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Aug 2024",
    points: [
      "Conducted and attended daily tech sessions, designed 200+ Math questions and organized 5+ events.",
      "Engaged 450+ students and boosted social media following by 20%.",
      
    ],
  },
  {
    title: "Engineer Intern",
    company_name: "KJSCE",
    icon: kjsce,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Sep 2023",
    points:[
      "Developed a quiz web app using HTML, CSS and Vanilla JavaScript, having worked for 100+ hours.",
      "Displays 10+ questions and a final score, with a 1% penalty for a retake."
    ]
  },

];
const achievements = [
  {
    name: "TechGig Code Gladiators 2024 Finalist",
    description:
      "Solved competitive programming problems within a stipulated duration. Finished among the top 3% of participants.",
    link: "https://drive.google.com/file/d/1hR8uerT5PpBbdq-92SsJzxEK4t_1Xn9E/view?usp=sharing", 
  },
  {
    name: "5⭐ Algorithms badge on HackerRank",
    description:
      "Solved 50+ sectional problems to earn it, learnt and practiced different techniques & algorithms, primarily used C++ & Python.",
    link: "https://www.hackerrank.com/profile/soumil_m", 
  },
  {
    name: "Standard Milestone in Google Cloud Arcade '24",
    description:
      "Completed cloud labs on topics like Vertex AI, Prompt Design, deployment, achieving 15+ Arcade points and 4 Google Cloud swags.",
    link: "https://www.cloudskillsboost.google/public_profiles/cff658e9-f40a-4f6b-9ba4-c6709f008956", 
  },
  
];

const projects = [
  {
    name: "Invoicely",
    description:
      "MERN customer invoicing platform with Twilio WhatsApp alerts, chatbot, secure PDF billing, JWT, Postman-tested.",
    tags: [
      {
        name: "javascript",
        color: "green-text-gradient", 
      },
      {
        name: "mongodb",
        color: "text-[#228B22]",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
    ],
    image: smack,
    source_code_link: "https://github.com/Soumilgit/MP_SemVI_Customer-Invoicing",
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
];const certificates = [
  {
    name: "Object-Oriented Data Structures in C++",
    description:
      "Learnt about C Programming Language Family, Computer Programming, Object-Oriented Programming and gained insights on Theoretical CS.",
    link: "https://coursera.org/share/50a5c6e76904b3933cdad727410557f3",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    description:
      "Became proficient in using Postman to work with APIs, making GET, POST, PATCH and DELETE requests, basic scripting and applications.",
    link: "https://api.badgr.io/public/assertions/Icc9D88_SV-iLyVKVf7Zeg?identity__email=soumil.m%40somaiya.edu",
  },
  {
    name: "JavaScript Algorithms and Data Structures(Beta)",
    description:
      "During this course, I learnt about JavaScript, Reg-Ex, Data Structures, Algorithms, Object-Oriented Programming, building 5 projects as well.",
    link: "https://www.freecodecamp.org/certification/fcc5d3e895f-c402-4487-8450-9735997f3ac7/javascript-algorithms-and-data-structures-v8",
  },
];


export { hero ,services, technologies, experiences, achievements, projects,certificates};
