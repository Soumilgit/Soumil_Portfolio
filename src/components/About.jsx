import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { simpleFadeIn, textVariant } from "../utils/motion"; // import simpleFadeIn instead of fadeIn
// Added fadeIn

const ServiceCard = ({ title, icon, index }) => (
  <motion.div
  variants={simpleFadeIn(index * 0.1, 0.2)} // Only fade in, slight stagger
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }}
  className="relative bg-black p-[2px] rounded-lg shadow-lg transition-transform duration-150 neon-box"
  whileHover={{ scaleY: 1.05 }} // Hover behavior remains!
>

    <div className="bg-black p-5 rounded-lg flex flex-col items-center shadow-md h-full">
      <div className="w-30 h-30 bg-black rounded-full flex items-center justify-center p-3 shadow-lg neon-icon">
        <img src={icon} alt={title} className="w-24 h-24 object-contain" />
      </div>
      <h3 className="text-white text-xl font-bold mt-4 text-center neon-glow">
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
      <style>
        {`
.bg-black-clean {
  background-color: #000; /* solid dark background */
  background-image: none !important; /* disables any starry or patterned background */
  backdrop-filter: none !important;
}

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
          .hover-effect {
            color: #50c878;
            transition: all 0.3s ease-in-out;
          }
          .hover-effect:hover {
            text-shadow: 0 0 8px #50c878, 0 0 12px #50c878;
            transform: scale(1.05);
        `}
      </style>

      

      {/* Scroll Animation for Title & Subtext */}
      <div className="bg-black bg-opacity-80 rounded-lg p-6 backdrop-blur-sm shadow-md">
  <motion.div
    variants={textVariant()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    <p className={`${styles.sectionSubText} text-white transition duration-300`}>
      Introduction
    </p>
    <h2 className={`${styles.sectionHeadText} text-white transition duration-300`}>
      Overview
    </h2>
  </motion.div>

  <motion.p
  variants={simpleFadeIn(0.1, 0.2)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }}
  className="mt-2 text-white text-xl max-w-3xl leading-7 transition duration-300"
> {/* 👈 min-h-[90px] REMOVED */}
  Computer Engineer building real-time AI tools, scalable apps, and learnt investment banking.
</motion.p>

<motion.p
  variants={simpleFadeIn(0.1, 0.2)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }}
  className="mt-1 text-[#ABF7B1] text-xl max-w-3xl leading-7 duration-0 hover:text-[#37b54a] hover:shadow-[0_0_10px_#39FF14]"
>
  Oh, and yes, experience neon glows while hovering on title elements below, just like on THIS exact sentence!
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
