import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="relative bg-black p-[2px] rounded-lg shadow-lg transition-all neon-box"
    whileHover={{ scale: 1.02, width: "102%" }}
  >
    <div className="bg-[#1e1e1e] p-5 rounded-lg flex flex-col items-center shadow-md h-full">
      <div className="w-30 h-30 bg-black rounded-full flex items-center justify-center p-3 shadow-lg neon-icon">
        <img src={icon} alt={title} className="w-24 h-24 object-contain" />
      </div>
      <h3 className="text-white text-xl font-bold mt-4 text-center transition-all duration-300 neon-glow">
        {title}
      </h3>
    </div>
  </motion.div>
);

const About = ({ setAboutLoaded }) => {
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setAboutLoaded(true), 500);
  }, []);

  return (
    <>
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-xl max-w-3xl leading-7"
      >
        Innovative and passionate Computer Engineering student with multiple internships, scholarships, and projects. Skilled in data analytics, web development, data structures, algorithms, and investment banking.
      </motion.p>

      {/* Responsive Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
