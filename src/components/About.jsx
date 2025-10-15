import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { simpleFadeIn, textVariant } from "../utils/motion"; // import simpleFadeIn instead of fadeIn
// Added fadeIn

const ServiceCard = ({ title, icon, index }) => (
  <motion.div
  variants={simpleFadeIn(index * 0.05, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
  className="relative bg-black p-[2px] rounded-lg transition-transform duration-150 border border-white/30 hover:border-[#37b54a]"
  whileHover={{ scaleY: 1.05 }} // Hover behavior remains!
>

    <div className="bg-black p-5 rounded-lg flex flex-col items-center h-full">
      <div className="w-30 h-30 bg-black rounded-full flex items-center justify-center p-3">
        <img src={icon} alt={title} className="w-24 h-24 object-contain" />
      </div>
      <h3 className="text-[#37b54a] text-xl font-bold mt-4 text-center">
        {title}
      </h3>
    </div>
  </motion.div>
);

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
  className="mt-2 text-white text-xl max-w-3xl leading-7 transition duration-300"
> Computer Engineer building real-time AI tools, scalable apps, and learnt investment banking.
</motion.p>

</div>

      {/* Responsive Grid with Scroll Animation */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
