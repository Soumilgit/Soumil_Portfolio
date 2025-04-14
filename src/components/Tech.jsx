import React, { useState } from "react";
import Ball from "./canvas/Ball"; 
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion"; 

const Tech = () => {
  const [positions, setPositions] = useState(
    technologies.map(() => ({ x: 0 }))
  );

  const handleDrag = (e, index) => {
    const newX = e.clientX - e.target.clientWidth / 2;
    setPositions((prev) => {
      const newPositions = [...prev];
      newPositions[index].x = newX;
      return newPositions;
    });
  };

  // Color mapping for each technology
  const getTechColor = (techName) => {
    const colorMap = {
      "JavaScript": "bg-[#F7DF1E]",
      "JS": "bg-[#F7DF1E]",
      "php": "bg-[#777BB4]",
      "MysQL": "bg-[#4479A1]",
      "TS": "bg-[#3178C6]",
      "OpenCV": "bg-[#5C3EE8]",
      "HTML 5": "bg-[#E34F26]",
      "CSS 3": "bg-[#1572B6]",
      "React JS": "bg-[#61DAFB]",
      "Tailwind CSS": "bg-[#06B6D4]",
      "jQuery": "bg-[#0769AD]",
      "Node JS": "bg-[#339933]",
      "Three JS": "bg-[#FFFFFF]",
      "python": "bg-[#3776AB]",
      "cpp": "bg-[#187BCD]",
      "sql": "bg-[#4479A1]",
      "typescript": "bg-[#3178C6]",
      "Computer Vision": "bg-[#CBC3E3]",
      "git": "bg-[#F05032]",
      "github": "bg-[#FFFFFF]",
      "mongodb": "bg-[#47A248]",
      "express": "bg-[#9E3623]",
      "postmanapi": "bg-[#FF6C37]",
      "flask": "bg-[#BFBFBF]",
      "latex": "bg-[#008080]",
    };
    return colorMap[techName] || "bg-gray-600";
  };

  return (
    <div>
      {/* Scroll animated section title with clear readable background */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl shadow-lg backdrop-blur-md"
      >
        <p className={`${styles.sectionSubText} text-center text-[#ABF7B1]`}>
          Technologies worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Skillset
        </h2>
      </motion.div>

      {/* Tech ball icons with hover effect */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 p-10 justify-center">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.2)}
            className="flex flex-col justify-center items-center relative group"
            style={{ transform: `translateX(${positions[index].x}px)` }}
          >
            {/* Ball component */}
            {technology.icon ? (
              <Ball imgUrl={technology.icon} onDrag={(e) => handleDrag(e, index)} />
            ) : (
              <p className="text-red-500">Missing Icon</p>
            )}

            {/* Skill name text with matching background, below the icon */}
            <div
              className={`mt-2 px-2 py-1 rounded-md ${getTechColor(technology.name)} text-black text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out`}
            >
              {technology.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
