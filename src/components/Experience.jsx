import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, simpleFadeIn } from "../utils/motion"; 
import { styles } from "../styles";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={simpleFadeIn(index * 0.05, 0.1)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
      className="relative border p-6 rounded-2xl mb-10 border-white/30 transition-transform duration-150 w-full flex flex-col justify-between bg-black/80 backdrop-blur-md hover:border-[#37b54a]"
      whileHover={{ scaleY: 1.05 }}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-black flex justify-center items-center rounded-full">
          <img src={experience.icon} alt={experience.company_name} className="w-30 h-30 object-contain" />
        </div>
        <div>
          <h3 className="text-[#37b54a] text-2xl font-bold pb-1">{experience.title}</h3>
          <p className="text-[#37b54a] text-xl font-semibold">{experience.company_name}</p>
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
    <div className="relative">
      <div className="relative z-10">
        {/* Scroll Animation for Title & Subtext */}
        <motion.div
  variants={simpleFadeIn(0.05, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
        className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl backdrop-blur-md"
>
  <p className={`${styles.sectionSubText} text-center text-[#37b54a]`}>
    What I have done so far
  </p>
  <h2 className={`${styles.sectionHeadText} text-center text-white`}>
    Work Experience
  </h2>
</motion.div>


        {/* Responsive Grid with Scroll Animation */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};



export default SectionWrapper(Experience, "work");
