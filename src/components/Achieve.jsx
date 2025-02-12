import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Import images
import cp from "../assets/cp.png";
import codechef from "../assets/codechef.png";
import githubk from "../assets/githubk.png";

// Map images to achievements
const icons = [cp, codechef, githubk];

const Achievements = ({ index, name, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform hover:scale-105 neon-box w-[360px]" // Ensuring uniform width
    >
      <div className="bg-[#1e1e1e] p-5 rounded-lg flex flex-col items-center shadow-md w-full">
        {/* Icon with Neon Glow */}
        <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center p-3 shadow-lg neon-icon">
          <img src={icons[index]} alt={name} className="w-16 h-16 object-contain" />
        </div>

        {/* Achievement Details */}
        <h3 className="text-white text-xl font-bold mt-4 text-center transition-all duration-300 neon-glow">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-lg text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const Achieve = () => {
  return (
    <>
      {/* Neon Glow Styles */}
      <style>
        {`
          .neon-glow {
            transition: all 0.3s ease-in-out;
          }
          .neon-glow:hover {
            color: #37b54a;
            text-shadow: 0 0 10px #37b54a, 0 0 40px #37b54a;
          }
          .neon-icon {
            filter: drop-shadow(0px 0px 8px #37b54a);
          }
          .neon-box {
            border: 2px solid #37b54a;
            box-shadow: 0 0 15px #37b54a;
          }
        `}
      </style>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Honours & Achievements</h2>
      </motion.div>

      {/* Achievements in a Single Row */}
      <div className="mt-16 flex flex-row justify-center gap-8">
        {achievements.map((achievement, index) => (
          <Achievements key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achieve, "achievement");
