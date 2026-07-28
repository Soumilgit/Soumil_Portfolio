import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { simpleFadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const About = ({ setAboutLoaded }) => {
  useEffect(() => {
    setTimeout(() => setAboutLoaded(true), 200);
  }, []);

  return (
    <>
      {/* Scroll Animation for Title & Subtext */}
      <div className="bg-black bg-opacity-80 rounded-lg p-6 backdrop-blur-sm">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.01 }}
        >
          <p className={`${styles.sectionSubText} text-white transition duration-300`}>
            Introduction
          </p>
          <h2 className={`${styles.sectionHeadText} text-white transition duration-300`}>
            Overview
          </h2>
        </motion.div>

        <motion.p
          variants={simpleFadeIn(0.05, 0.01)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.01 }}
          className="mt-4 text-white text-xl max-w-3xl leading-8 transition duration-300"
        >
          I am a passionate <span className="text-[#37b54a] font-bold">Software Engineer</span> building real-time <span className="text-[#37b54a] font-bold">AI Tools</span> and scalable <span className="text-[#37b54a] font-bold">Web Applications</span> using <span className="text-[#37b54a] font-bold">Python</span>, <span className="text-[#37b54a] font-bold">C#</span>, <span className="text-[#37b54a] font-bold">React</span>, and <span className="text-[#37b54a] font-bold">Next.js</span>. I specialize in <span className="text-[#37b54a] font-bold">Full-Stack Development</span> and <span className="text-[#37b54a] font-bold">Cloud Infrastructure</span>, integrating <span className="text-[#37b54a] font-bold">AI & ML Pipelines</span> with additional concepts from <span className="text-[#37b54a] font-bold">Investment Banking</span> and decentralized networks.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
