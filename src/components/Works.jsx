import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { githubo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, simpleFadeIn } from "../utils/motion"; // Use simpleFadeIn!

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={simpleFadeIn(index * 0.05, 0.1)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
      className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform neon-box"
      whileHover={{ scaleY: 1.05 }}
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
      {/* Styled heading section */}
      <motion.div
  variants={simpleFadeIn(0.05, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
  className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl shadow-lg backdrop-blur-md"
>
  <p className={`${styles.sectionSubText} text-center text-[#ABF7B1]`}>
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
    className="mt-6 text-secondary text-[21px] max-w-4xl leading-[30px] text-center bg-black/80 rounded-xl px-6 py-4 shadow-lg backdrop-blur-md"
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
