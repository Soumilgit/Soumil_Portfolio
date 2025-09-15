import { color } from "framer-motion";
import {
  app,
  web,
  data,
  problem,
  javascript,
  html,
  css,
  reactjs,
  typescript,
  npcil,
  marquee,
  meshcraft,
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
  mypic,
  kjsce,
  git,
  github,
  mongodb,
  express,
  postmanapi,
  chart,
  oneplay,
  aws,
  supabase,
  next,
  missing,
  gesture,
  latexcheatsheet,
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
    id: "heatmap",
    title: "Heatmap",
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
    name: "Supabase",
    icon: supabase,
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
   name: "AWS",
   icon: aws,
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
    name: "Chart JS",
    icon: chart,
  },
  {
    name: "Next JS",
    icon: next,
  },

];

const experiences = [
  {
     title: "SWE Intern",
     company_name: "1 Play Global",
     icon: oneplay,
     iconBg: "#E6DEDD",
     date: "April 2025 - August 2025",
     points: [
       "Built entire website using Next.js, React, TypeScript, Three.js, TailWind & ShadCN across 7+ pages.",
       "Building for 4+ sub-sections/sub-pages and resources, covering 5+ verticals responsively.",
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
      "Among top 12.5% applicants, worked on 10+ 3D assets and the marketplace & asset pages.",
    ],
  },
  {
    title: "IB Fellow",
    company_name: "Marquee Equity",
    icon: marquee,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - April 2025",
    points: [
      "Completed 20+ corporate training sessions, learning financial modeling and deal structuring as well.",
      "Wrote 10+ research reports on concluded funding transactions in MLA Format; stipend-based pay.",
    ],
  },
  {
    title: "SWE Intern",
    company_name: "NPCIL",
    icon: npcil,
    iconBg: "#383E56",
    date: "May 2024 - Jul 2024",
    points: [
      "Developed a Process Monitor Module GUI with Python, on QtCreator IDE and SQL as database.",
      "Ran checks for 10+ system categories and processes with real-time system resources monitored."
    ],
  },
  {
    title: "Tech Team",
    company_name: "Emfinity",
    icon: emfinity,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Aug 2024",
    points: [
      "Conducted and attended daily tech sessions, designed 200+ Math questions and organized 5+ events.",
      "Engaged 450+ students, significantly boosting overall social media following growth by 20%.",
      
    ],
  },
  {
    title: "SWE Intern",
    company_name: "KJSCE",
    icon: kjsce,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Sep 2023",
    points:[
      "Developed a quiz web app using HTML, CSS and Vanilla JavaScript, having worked for 100+ hours.",
      "Displays 10+ questions and a final score, with a 1% penalty for each retaken attempt."
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
    name: "Top 3.5% on Codolio, 1st rank in college",
    description:
      "Stats: 470+ DSA problems solved, 7+ awards, 3950+ dev contributions & C-Score of 770+ among 18,400+ global users.",
    link: "https://codolio.com/profile/uQSHdtbA", 
  },
  {
    name: "Standard Milestone in Google Cloud Arcade '24",
    description:
      "Completed 25+ badges on topics like Prompt Design and deployment, achieved 15+ Arcade pts. & 4 Google swags.",
    link: "https://www.cloudskillsboost.google/public_profiles/cff658e9-f40a-4f6b-9ba4-c6709f008956", 
  },
  {
    name: "Joint rank 1st in CWC '25 coding contest",
    description:
      "Held via HackerRank platform, the total number of participants were 47, and I solved all 7 questions in C++ within 1 hour.",
    link: "https://www.hackerrank.com/contests/coffeewithcodecell-on-26th-august/challenges", 
  },
  
  {
    name: "School rank 1st in Terii Green Olympiad 2019",
    description:
      "Got awarded a merit certificate for achieving 60-75 % score, finishing first in my school, AECS-2, as a result of this.",
    link: "https://drive.google.com/file/d/1MMaH0bnl2JTSsXKD6O3Rzv4r6biLkckB/view?usp=sharing", 
  },
  {
    name: "Rank 1 in KJSCE Tech Hunt, Tech Shield '23",
    description:
      "Part of a team of 4, which won first place, competing with 8+ other branch teams, in a tech clue treasure hunt in college.",
    link: "https://in.linkedin.com/company/kjsce-students-council", 
  },
  
];

const projects = [
  {
    name: "SimulateRecruitAI",
    description:
      "Gemini delivers interview feedback via Next, NeonDB, Docker, Clerk, Stripe, Tailwind & Radix UI across 50+ roles.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "text-[#228B22]",
      },
      {
        name: "radix-ui",
        color: "green-text-gradient",
      },
    ],
    image: jasder,
    source_code_link: "https://github.com/Soumilgit/Soumilgit-AI-Interview-SAAS",
  },
  {
    name: "Customer Churn",
    description:
      "Analyzes 4,000 bank customer records via Python, Supabase, HTML/CSS & Qwen 32B, averaging 82.73% accuracy.",
    tags: [
      {
        name: "xgb",
        color: "green-text-gradient", 
      },
      {
        name: "smote",
        color: "text-[#228B22]",
      },
      {
        name: "full-stack",
        color: "blue-text-gradient",
      },
    ],
    image: smack,
    source_code_link: "https://github.com/Soumilgit/XYZ-Bank-Customer-Churn-Predictor",
  },
  {
    name: "Meditation App",
    description:
      "Developed using React Native and Expo, useful for tracking one's meditation habits and keep a record with affirmations.",
    tags: [
      {
        name: "react",
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
  {
    name: "Missing Finder",
    description:
      "Deployed AWS Lambda/S3 stack with Python & Rekognition for live person matching, ~1s response at 99.9% confidence.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "lambda",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "text-[#228B22]",
      },
    ],
    image: missing,
    source_code_link: "https://github.com/Soumilgit/Real-Time-Missing-Persons-Detection",
  },
  {
    name: "Gesture Detector",
    description:
      "Achieved 95% accuracy in gesture and sign detection with Python libraries, enabling 20–30 FPS real-time rendering.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
    ],
    image: gesture,
    source_code_link: "https://github.com/Soumilgit/Gesture-Sign-Language-Detection-using-Python",
  },
  {
    name: "LaTeX Cheatsheet",
    description:
      "Built with HTML, CSS & JS, this covers 50+ LaTeX commands across 10+ categories with GitHub API support.",
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
    image: latexcheatsheet,
    source_code_link: "https://github.com/Soumilgit/LaTeX-CheatSheet",
  },
];

const certificates = [
  {
    name: "Object-Oriented Data Structures in C++",
    description:
      "Learnt about C Language Family, Object-Oriented Programming(OOP) and gained insights on Theoretical Computer Science.",
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
      "In the duration of this course, I learnt about JavaScript, Regular Expressions, Data Structures and Algorithms, OOP and built 5 projects.",
    link: "https://www.freecodecamp.org/certification/fcc5d3e895f-c402-4487-8450-9735997f3ac7/javascript-algorithms-and-data-structures-v8",
  },
];


export { hero ,services, technologies, experiences, achievements, projects,certificates};
