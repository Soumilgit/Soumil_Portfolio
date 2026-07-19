import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { simpleFadeIn } from "../utils/motion"; 
import { useTheme } from "../context/ThemeContext";

const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C#"],
  },
  {
    title: "Web & Full Stack",
    skills: ["HTML 5", "CSS 3", "TailWind", "React", "Next", "Node", ".NET"],
  },
  {
    title: "AI, ML & Data",
    skills: ["Python", "MySQL", "ChartJS", "Kafka", "Redis", "Streamlit"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "GitHub", "Postman"],
  },
  {
    title: "Web3 & Platforms",
    skills: ["Solidity", "Supabase", "Clerk", "ThreeJS"],
  },
];

const SkillGroup = ({ title, skills, index, isLast }) => {
  const { isLightMode } = useTheme();
  const groupSkills = skills
    .map((skillName) => technologies.find((tech) => tech.name === skillName))
    .filter(Boolean);

  return (
    <motion.div
      variants={simpleFadeIn(index * 0.05, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
      className="w-full"
    >
      {/* Domain Subheading with mode-compatible underline color */}
      <h3 className={`text-[#37b54a] font-bold text-[22px] text-left border-b pb-2 mb-6 ${isLightMode ? "border-[#2a322b]/20" : "border-white/30"}`}>
        {title}
      </h3>

      {/* Wrapping flex row of skill icons with responsive gap and spacing */}
      <div className={`flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-6 justify-start ${isLast ? "mb-2" : "mb-8"}`}>
        {groupSkills.map((skill) => (
          <div
            key={`${title}-${skill.name}`}
            className="flex flex-col items-center justify-center text-center w-20 sm:w-24 group cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src={isLightMode && skill.iconLight ? skill.iconLight : skill.icon}
                alt={skill.name}
                className="h-12 w-12 object-contain"
              />
            </div>
            <p className="mt-2 text-sm font-semibold leading-tight text-white/80 skill-name transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div>
      {/* Section Title Heading with reduced top margin */}
      <motion.div
        variants={simpleFadeIn(0.05, 0.1)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.01 }}
        className="mx-auto w-fit px-6 py-4 mt-6 bg-black bg-opacity-80 rounded-xl backdrop-blur-md"
      >
        <p className={`${styles.sectionSubText} text-center text-white`}>
          Technologies worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Skillset
        </h2>
      </motion.div>

      {/* Grouped Skills stacked vertically with reduced gap and margins */}
      <div className="mt-8 bg-black bg-opacity-80 rounded-lg p-8 backdrop-blur-sm max-w-5xl mx-auto flex flex-col gap-2">
        {skillGroups.slice(0, 5).map((group, index) => (
          <SkillGroup key={group.title} index={index} isLast={index === 4} {...group} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
