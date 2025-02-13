import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform hover:scale-105 neon-box w-[360px]"
    >
      <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-md w-full">
        <div className="relative w-full h-[230px] rounded-lg overflow-hidden">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer neon-icon"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] text-center transition-all duration-300 neon-glow">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[20px] text-center">{description}</p>
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

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[21px] max-w-4xl leading-[30px] text-center"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
