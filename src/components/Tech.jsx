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
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Web & Full Stack",
    skills: ["HTML 5", "CSS 3", "React JS", "Next JS", "Node JS", "Flask"],
  },
  {
    title: "AI, ML & Data",
    skills: ["Python", "MySQL", "Chart JS", "Kafka", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "GitHub", "PostmanAPI"],
  },
  {
    title: "Web3 & Platforms",
    skills: ["Solidity", "Supabase", "Clerk", "Three JS"],
  },
];

const SkillGroupCard = ({ title, skills, index }) => {
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
      className="relative bg-black p-[2px] rounded-lg transition-transform border border-white/30 hover:border-[#37b54a]"
      whileHover={{ scaleY: 1.05 }}
    >
      <div className="bg-black p-5 rounded-lg h-full">
        <h3 className="text-[#37b54a] font-bold text-[22px] text-center transition-all duration-300">
          {title}
        </h3>

        <div className="mt-5 grid grid-cols-2 gap-4">
          {groupSkills.map((skill) => (
            <div
              key={`${title}-${skill.name}`}
              className="flex min-h-[94px] flex-col items-center justify-center rounded-lg border border-white/20 bg-black/80 px-3 py-4 text-center transition-colors duration-200 hover:border-[#37b54a]/80"
            >
              <img
                src={isLightMode && skill.iconLight ? skill.iconLight : skill.icon}
                alt={skill.name}
                className="h-10 w-10 object-contain"
              />
              <p className="mt-3 text-sm font-bold leading-tight text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div>
      {/* Scroll animated section title with clear readable background */}
      <motion.div
  variants={simpleFadeIn(0.05, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
  className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl backdrop-blur-md"
>
  <p className={`${styles.sectionSubText} text-center text-white`}>
    Technologies worked with
  </p>
  <h2 className={`${styles.sectionHeadText} text-center text-white`}>
    Skillset
  </h2>
</motion.div>


      {/* Grouped skill cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.slice(0, 5).map((group, index) => (
          <SkillGroupCard key={group.title} index={index} {...group} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
