import React, { useState } from "react";
import Ball from "./canvas/Ball"; // Update the import to the new Ball component
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles"; // Ensure you import styles if needed
import { textVariant, fadeIn } from "../utils/motion"; // Ensure you import fadeIn

const Tech = () => {
  const [positions, setPositions] = useState(
    technologies.map(() => ({ x: 0 })) // Initialize positions for each technology
  );

  const handleDrag = (e, index) => {
    const newX = e.clientX - e.target.clientWidth / 2; // Center the drag
    setPositions((prev) => {
      const newPositions = [...prev];
      newPositions[index].x = newX; // Update the x position
      return newPositions;
    });
  };

  return (
    <div>
      {/* Keep the motion div constant */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skillset</h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7 gap-10 p-10 justify-center">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.2, 0.35)}
            className="flex justify-center items-center"
            style={{ transform: `translateX(${positions[index].x}px)` }} // Apply horizontal movement
          >
            {technology.icon ? (
              <Ball imgUrl={technology.icon} onDrag={(e) => handleDrag(e, index)} />
            ) : (
              <p className="text-red-500">Missing Icon</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
