import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { githubo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, simpleFadeIn } from "../utils/motion"; // Use simpleFadeIn!

import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link, imageClass }) => {
  const { isLightMode } = useTheme();

  return (
    <motion.div
      variants={simpleFadeIn(index * 0.05, 0.1)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
      className="relative bg-black p-[2px] rounded-lg transition-transform border border-white/30 hover:border-[#37b54a]"
      whileHover={{ scaleY: 1.05 }}
    >
      <div className="bg-black p-5 rounded-lg w-full">
        <div className="relative w-full h-[230px] rounded-lg overflow-hidden">
          <img src={image} alt="project_image" className={`w-full h-full ${imageClass || "object-cover"} rounded-lg`} />
        </div>

        <div className="mt-5 text-center flex flex-col items-center">
          <h3 className="text-[#37b54a] font-bold text-[22px] transition-all duration-300">
            {name}
          </h3>
          
          <div className="flex w-full gap-3 mt-3">
            <button
              onClick={() => window.open(demo_link, "_blank")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-[#37b54a] text-[#37b54a] text-[16px] font-semibold transition-all duration-300 ${
                isLightMode 
                  ? "bg-white hover:bg-[#37b54a] hover:text-white" 
                  : "bg-black hover:bg-[#37b54a] hover:text-black"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8"></path>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>Demo</span>
            </button>
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-[#37b54a] text-[#37b54a] text-[16px] font-semibold transition-all duration-300 ${
                isLightMode 
                  ? "bg-white hover:bg-[#37b54a] hover:text-white" 
                  : "bg-black hover:bg-[#37b54a] hover:text-black"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          <p className="mt-4 text-secondary text-[20px]">{description}</p>
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
      {/* Styled heading section */}
      <motion.div
  variants={simpleFadeIn(0.05, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
  className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl backdrop-blur-md"
>
  <p className={`${styles.sectionSubText} text-center text-[#37b54a]`}>
    My Work
  </p>
  <h2 className={`${styles.sectionHeadText} text-center text-white`}>
    Projects
  </h2>
</motion.div>

<div className="w-full flex justify-center">
  <motion.p 
    variants={simpleFadeIn(0.05, 0.1)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.01 }}
    className="mt-6 text-secondary text-[21px] max-w-4xl leading-[30px] text-center bg-black/80 rounded-xl px-6 py-4 backdrop-blur-md"
  >
    Following projects showcase my skills and experience through examples of my work.
  </motion.p>
</div>


      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Works, "projects");
