import React, { useState } from "react";
import Ball from "./canvas/Ball"; 
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, simpleFadeIn } from "../utils/motion"; // use simpleFadeIn!

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
      "PHP": "bg-[#777BB4]",
      "MysQL": "bg-[#4479A1]",
      "TypeScript": "bg-[#3178C6]",
      "HTML 5": "bg-[#E34F26]",
      "CSS 3": "bg-[#1572B6]",
      "React JS": "bg-[#61DAFB]",
      "Tailwind CSS": "bg-[#06B6D4]",
      "jQuery": "bg-[#0769AD]",
      "Node JS": "bg-[#339933]",
      "Three JS": "bg-[#FFFFFF]",
      "Python": "bg-[#3776AB]",
      "C++": "bg-[#187BCD]",
      "MySQL": "bg-[#4479A1]",
      "AWS": "bg-[#FFD700]",
      "Git": "bg-[#F05032]",
      "GitHub": "bg-[#FFFFFF]",
      "MongoDB": "bg-[#47A248]",
      "Express": "bg-[#9E3623]",
      "PostmanAPI": "bg-[#FF6C37]",
      "Flask": "bg-[#BFBFBF]",
      "Next JS": "bg-[#B8B8B8]",
    };
    return colorMap[techName] || "bg-gray-600";
  };

  return (
    <div>
      {/* Scroll animated section title with clear readable background */}
      <motion.div
  variants={simpleFadeIn(0.1, 0.2)} // Simple fade-in
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }}
  className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl shadow-lg backdrop-blur-md"
>
  <p className={`${styles.sectionSubText} text-center text-white`}>
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
    variants={simpleFadeIn(index * 0.1, 0.2)} // Only fade-in, staggered
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="flex flex-col justify-center items-center relative group"
    style={{ transform: `translateX(${positions[index].x}px)` }}
  >
    {/* Ball component */}
    {technology.icon ? (
      <Ball imgUrl={technology.icon} onDrag={(e) => handleDrag(e, index)} />
    ) : (
      <p className="text-red-500">Missing Icon</p>
    )}

    {/* Skill name */}
    <div 
      className={`mt-2 px-2 py-1 rounded-md ${getTechColor(technology.name)} text-black text-sm font-bold whitespace-nowrap`}
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
