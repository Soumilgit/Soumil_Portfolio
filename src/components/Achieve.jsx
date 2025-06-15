import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { textVariant, simpleFadeIn } from "../utils/motion"; // Use simpleFadeIn

import cp from "../assets/cp.png";
import googlecloud from "../assets/googlecloud.png";
import codolio from "/codolio.svg";
import cwc from "../assets/cwc.png";
import terii from "../assets/terii.png";
import techhunt from "../assets/techhunt.png";

// Map images to achievements
const icons = [cp, codolio, googlecloud, cwc, terii, techhunt];

const AchievementCard = ({ index, name, description, link }) => (
  <motion.div
    variants={simpleFadeIn(index * 0.05, 0.1)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.01 }}
    className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform duration-150 neon-box w-full max-w-[360px]"
    whileHover={{ scaleY: 1.05 }}
  >
    <div className="bg-black p-5 rounded-lg flex flex-col items-center shadow-md w-full relative">
      {/* Neon Green Button in Top-Right Corner */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
        <button className="px-3 py-1.5 text-base font-bold text-[#37b54a] border-2 border-[#37b54a] bg-black rounded-lg shadow-[0_0_5px_#37b54a] transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_10px_#37b54a]">
          VIEW
        </button>
      </a>
      
      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center p-3 shadow-lg neon-icon">
        <img src={icons[index]} alt={name} className="w-16 h-16 object-contain" />
      </div>
      
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
      {/* Heading with blurred dark background for clear visibility */}
      <motion.div
  variants={simpleFadeIn(0.05, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
  className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl shadow-lg backdrop-blur-md"
>
  <p className={`${styles.sectionSubText} text-center text-[#ABF7B1]`}>
    My Achievements
  </p>
  <h2 className={`${styles.sectionHeadText} text-center text-white`}>
    Honours & Achievements
  </h2>
</motion.div>


      {/* Description with same background styling */}
      <motion.div
  variants={simpleFadeIn(0.05, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
  className="w-full flex justify-center"
>
  <p className="mt-6 text-secondary text-[22px] max-w-3xl leading-[30px] text-center bg-black/80 rounded-xl px-6 py-4 shadow-lg backdrop-blur-md">
    Here are some of my top achievements that highlight my journey.
  </p>
</motion.div>


      {/* Cards */}
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Achieve, "achievement");
