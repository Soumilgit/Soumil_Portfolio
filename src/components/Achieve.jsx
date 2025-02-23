import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { textVariant, fadeIn } from "../utils/motion"; // Added fadeIn

// Import images
import cp from "../assets/cp.png";
import codechef from "../assets/codechef.png";
import githubk from "../assets/githubk.png";

// Map images to achievements
const icons = [cp, codechef, githubk];

const AchievementCard = ({ index, name, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.3)} // Scroll animation
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform duration-150 neon-box w-full max-w-[360px]"
    whileHover={{ scaleY: 1.05 }} // Expands only along vertical diameter
  >
    <div className="bg-black p-5 rounded-lg flex flex-col items-center shadow-md w-full">
      {/* Icon with Neon Glow */}
      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center p-3 shadow-lg neon-icon">
        <img src={icons[index]} alt={name} className="w-16 h-16 object-contain" />
      </div>

      {/* Achievement Details */}
      <h3 className="text-white text-xl font-bold mt-4 text-center neon-glow">
        {name}
      </h3>
      <p className="mt-2 text-secondary text-lg text-center">{description}</p>
    </div>
  </motion.div>
);

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

      {/* Scroll Animation for Title & Subtext */}
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        <p className={`${styles.sectionSubText} text-center`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Honours & Achievements</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <p className="mt-3 text-secondary text-[22px] max-w-3xl leading-[30px] text-center">
          Here are some of my top achievements that highlight my journey.
        </p>
      </div>

      {/* Responsive Achievement Cards with Scroll Animation */}
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achieve, "achievement");
