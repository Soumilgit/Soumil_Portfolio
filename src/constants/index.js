import {
  creator,
  web,
  javascript,
  html,
  css,
  jQuery,
  reactjs,
  npcil,
  marquee,
  kjsce,
  gssoc,
  emfinity,
  tailwind,
  nodejs,
  git,
  figma,
  boblob,
  jasder,
  smack,
  threejs,
  vanillajs,
  php,
  sql,
  
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
    title: "Prompt Engineer Developer",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "vanillajs",
    icon: vanillajs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "sql",
    icon: sql,
  }
];

const experiences = [
  {
    title: "Project Intern",
    company_name: "NPCIL",
    icon: npcil,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed a Process Monitor Module GUI using Python on QtCreator and database using SQL.",
    ],
  },
  {
    title: "Investment Banking Fellow",
    company_name: "Marquee Equity",
    icon: marquee,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Attended regular Corporate Training Sessions on skills enhancement.",
      "Wrote 01 research report per month on recently concluded funding transactions in MLA Format.",
    ],
  },
  {
    title: "Engineer Intern",
    company_name: "KJSCE",
    icon: kjsce,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Made a quiz website.",
    ],
  },
  {
    title: "Contributor",
    company_name: "GirlScript Summer Of Code",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Debugging issues in existing codebases and projects and providing solutions.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Tech Team",
    company_name: "Emfinity KJSCE",
    icon: emfinity,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Conducted and attended daily tech sessions.",
      "Made and verified as a team the questions of various council events.",
      "Content(math-based) development for college students.",
    ],
  }
];

const achievements = [
  {
    name: "TechGig Code Gladiators 2024 Finalist",
    description:
      "Finale.Had to solve competitive programming problem within a stipulated duration.Finished in the top 1% of registrations.",
    
  },

  {
    name: "1st Team Branch in KJSCE Tech Shield",
    description:
      "Was a treasure hunt sort of event where we had to solve puzzles and riddles to reach the final destination.",
    
  },
  {
    name: "Over 1000+ contributions on GitHub",
    description:
      "Have been an active member of Gitub community and have contributed to various open source projects.",
  },
];

const projects = [
  {
    name: "Quiz Website",
    description:
      "Accessibility & Best Practices: 100/100,Performance: 93/100 ,SEO: 90/100.",
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
    source_code_link: "https://github.com/Soumilgit/Simple-random-Quote-Machine",
  },

  {
    name: "Conservation Compass",
    description:
      "Best Practices: 100/100,Performance: 93/100,Accessibility: 92/100",
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
        name: "vanillajs",
        color: "pink-text-gradient",
      },
    ],
    image: jasder,
    source_code_link: "https://github.com/Soumilgit/YourStory-Digital-Innovation-Hackathon",
  },
  {
    name: "LMS-Edunest",
    description:
      "Improved total blocking time by 100%. Performance: 98/100,Best Practices: 96/100",
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
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      }

    ],
    image: boblob,
    source_code_link: "https://github.com/Soumilgit/mp-new-Soumil-use",
  },
];

export { services, technologies, experiences, achievements, projects };
