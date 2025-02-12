import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Import images
import jsi from "../assets/jsi.png";
import postman from "../assets/postman.png";
import oods from "../assets/oods.png";


// Map images to certifications
const icons = [jsi, postman, oods];

const CertificationCard = ({ index, name, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform hover:scale-105 neon-box w-[360px]"
    >
      <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-md w-full">
        {/* Icon */}
        <div className="w-16 h-16 bg-white p-2 rounded-full flex items-center justify-center mx-auto">
          <img src={icons[index]} alt={name} className="w-10 h-10 object-contain" />
        </div>

        {/* Certification Details */}
        <div className="mt-5 text-center">
          <h3 className="text-white font-bold text-[22px] transition-all duration-300 neon-glow">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[16px]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Certf = () => {
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
          .neon-box {
            border: 2px solid #37b54a;
            box-shadow: 0 0 15px #37b54a;
          }
        `}
      </style>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Certifications</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Top Certifications</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-3xl leading-[30px] text-center"
        >
          Here are some of my top certifications that showcase my expertise.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {certificates.map((certificate, index) => (
          <CertificationCard key={`certificate-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certf, "certf");
