import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion"; // Added fadeIn
import { styles } from "../styles";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.3)} // Scroll animation
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative border-2 p-6 rounded-2xl shadow-lg mb-10 border-[#00FF7F] transition-transform duration-150 neon-box w-full flex flex-col justify-between"
      whileHover={{ scaleY: 1.05 }} // Expands vertically only
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-black flex justify-center items-center rounded-full shadow-lg">
          <img src={experience.icon} alt={experience.company_name} className="w-30 h-30 object-contain" />
        </div>
        <div>
          <h3 className="text-white text-2xl font-bold pb-1 neon-glow">{experience.title}</h3>
          <p className="text-white text-xl font-semibold">{experience.company_name}</p>
        </div>
      </div>
      <p className="text-gray-300 mt-3 italic">{experience.date}</p>
      <ul className="mt-4 list-disc list-inside text-gray-200 text-xl space-y-2">
        {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      {/* Scroll Animation for Title & Subtext */}
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
      </motion.div>

      {/* Responsive Grid with Scroll Animation */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
