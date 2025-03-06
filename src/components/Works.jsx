import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { githubo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.3)} // Scroll animation
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform neon-box"
      whileHover={{ scaleY: 1.05 }} // Expands vertically only
    >
      <div className="bg-black p-5 rounded-lg shadow-md w-full">
        <div className="relative w-full h-[230px] rounded-lg overflow-hidden">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer neon-icon"
            >
              <img src={githubo} alt="source code" className="object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <h3 className="text-white font-bold text-[22px] transition-all duration-300 neon-glow">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[20px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[20px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Scroll Animation for Title & Subtext */}
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        <p className={`${styles.sectionSubText} text-center`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p 
          variants={fadeIn("up", "spring", 0.15, 0.3)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-3 text-secondary text-[21px] max-w-4xl leading-[30px] text-center"
        >
          Following projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
      </div>

      {/* Responsive Grid with Scroll Animation */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
