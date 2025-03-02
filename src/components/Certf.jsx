import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

// Import certificate images
import oods from "../assets/oods.png";
import postman from "../assets/postman.png";
import jsi from "../assets/jsi.png";
import certificateIcon from "../assets/ABC.png"; 

const icons = [oods, postman, jsi];

const CertificationCard = ({ index, name, description, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform neon-box"
    whileHover={{ scaleY: 1.05 }}
  >
    <div className="bg-black p-5 rounded-lg shadow-md w-full text-center relative">
      {/* Certificate Icon in Top-Right Corner */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
        <img src={certificateIcon} alt="Certificate Link" className="w-12 h-12 hover:opacity-80 transition-opacity" />
      </a>
      
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 bg-white p-2 rounded-full flex items-center justify-center">
          <img src={icons[index]} alt={name} className="w-10 h-10 object-contain" />
        </div>
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
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        <p className={`${styles.sectionSubText} text-center`}>My Certifications</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Top Certifications</h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <CertificationCard key={`certificate-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certf, "certf");
