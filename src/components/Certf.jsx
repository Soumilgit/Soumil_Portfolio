import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { textVariant, fadeIn } from "../utils/motion"; // Added fadeIn

// Import certificate images
import jsi from "../assets/jsi.png";
import postman from "../assets/postman.png";
import oods from "../assets/oods.png";

const icons = [jsi, postman, oods];

const CertificationCard = ({ index, name, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.35)} // Scroll animation
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform neon-box"
    whileHover={{ scaleY: 1.05 }} // Expands vertically only
  >
    <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-md w-full text-center">
      <div className="w-16 h-16 bg-white p-2 rounded-full flex items-center justify-center mx-auto">
        <img src={icons[index]} alt={name} className="w-10 h-10 object-contain" />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[22px] transition-all duration-300 neon-glow">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[20px]">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Certf = () => {
  return (
    <>
      {/* Scroll Animation for Title & Subtext */}
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        <p className={`${styles.sectionSubText} text-center`}>My Certifications</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Top Certifications</h2>
      </motion.div>

      {/* Responsive Grid with Scroll Animation */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <CertificationCard key={`certificate-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certf, "certf");
