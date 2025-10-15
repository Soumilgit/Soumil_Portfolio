import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { textVariant, simpleFadeIn } from "../utils/motion"; // Use simpleFadeIn!

// Import certificate images
import oods from "../assets/oods.png";
import postman from "../assets/postman.png";
import jsi from "../assets/jsi.png"; 

const icons = [oods, postman, jsi];

const CertificationCard = ({ index, name, description, link }) => (
  <motion.div
    variants={simpleFadeIn(index * 0.05, 0.1)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.01 }}
    className="relative bg-black p-[2px] rounded-lg transition-transform border border-white/30 hover:border-[#37b54a]"
    whileHover={{ scaleY: 1.05 }}
  >
    <div className="bg-black p-5 rounded-lg w-full text-center relative">
      {/* Certificate link button in Top-Right Corner */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
        <button className="px-3 py-1.5 text-base font-bold text-[#37b54a] border border-white/30 bg-black rounded-lg transition-transform duration-200 hover:scale-105 hover:border-[#37b54a]">
          LINK
        </button>
      </a>
      
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 bg-white p-2 rounded-full flex items-center justify-center">
          <img src={icons[index]} alt={name} className="w-10 h-10 object-contain" />
        </div>
      </div>
      
      <div className="mt-5">
        <h3 className="text-[#37b54a] font-bold text-[22px] transition-all duration-300">
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
      <motion.div
        variants={simpleFadeIn(0.05, 0.1)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.01 }}
        className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl backdrop-blur-md"
      >
        <p className={`${styles.sectionSubText} text-center text-[#37b54a]`}>
          My Certifications
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Top Certifications
        </h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <CertificationCard
            key={`certificate-${index}`}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certf, "certf");
