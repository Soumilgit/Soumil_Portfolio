import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { DownloadCVMarquee } from "../Marquees/downloadCVMarquee";
import { hero } from "../constants";
import { SectionWrapper } from "../hoc";
import { ScrambledText } from "./ScrambledText";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { simpleFadeIn } from "../utils/motion"; // Use simpleFadeIn instead of fadeIn


const Hero = ({ onHeroLoaded }) => {
  const { title, icon } = hero[0];
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width >= 768 && width <= 1194) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 👇 Trigger callback when Hero loads
  useEffect(() => {
    const timeout = setTimeout(() => {
      onHeroLoaded?.(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const infoCards = [
    {
      title: "Education & Passions",
      content: (
        <div className="space-y-2">
          <p><span className="font-bold">🎓 Degree:</span> Software Engineer</p>
          <p><span className="font-bold">🌐 First Passion:</span> Web Dev</p>
          <p><span className="font-bold">🧠 Second Passion:</span> AI-ML</p>
          <p><span className="font-bold">📈 Third Passion:</span> Algorithms</p>
        </div>
      )
    },
    {
      title: "Personal Info",
      content: (
        <div className="space-y-2">
          <p>📅 DOB: 30 October 2004</p>
          <p>📧 Mail: msoumil69@gmail.com</p>
          <p>📞 Phone: 9405727673</p>
          <p>✨ Hobby: Birdwatching</p>
        </div>
      )
    },
    {
      title: "Find Me Online",
      content: (
        <div className="space-y-3">
          <a href="https://github.com/Soumilgit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-300">
            <FaGithub className="text-black bg-white rounded-full p-[2px]" size={20} /> GitHub <FiExternalLink />
          </a>
          <a href="https://www.hackerrank.com/profile/soumil_m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-300">
            <SiHackerrank className="text-white bg-black rounded-[4px] p-[2px]" size={20} /> HackerRank <FiExternalLink />
          </a>
          <a href="https://www.linkedin.com/in/soumilm30/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-300">
            <FaLinkedin className="text-[#0A66C2]" size={20} /> LinkedIn <FiExternalLink />
          </a>
        </div>
      )
    },
    {
      title: "Social & More",
      content: (
        <div className="space-y-3">
          <a href="https://twitter.com/SoumilMukh6476/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-300">
            <FaTwitter className="text-[#1DA1F2]" size={20} /> Twitter <FiExternalLink />
          </a>
          <a href="https://www.instagram.com/soumil_m.exe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-300">
            <FaInstagram className="text-[#E4405F]" size={20} /> Instagram <FiExternalLink />
          </a>
          <a href="https://maps.app.goo.gl/QLHqDchdPjH6bQdb8?g_st=ac" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-300">
            <FaMapMarkerAlt className="text-red-600" size={20} /> Google Maps <FiExternalLink />
          </a>
        </div>
      )
    },
  ];

  return (
    <section className="relative flex flex-col xl:flex-row h-auto justify-center items-center px-4 sm:px-8 bg-cover bg-center mt-12 md:mt-20 gap-8 md:gap-12 max-w-7xl mx-auto overflow-hidden">
      {/* Left Column - Profile and Main Info */}
      <div className={`flex flex-col items-center ${deviceType === 'tablet' ? 'w-full' : 'xl:items-start w-full xl:w-2/5'} gap-6`}>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#34d680] shadow-lg flex-shrink-0"
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Main Text */}
        <motion.h1
  variants={simpleFadeIn(0.1, 0.2)} // Only fade in
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }}
  className={`${styles.heroHeadText} h-[84px] overflow-hidden`}
>
  <ScrambledText text="I'm Soumil!" />
</motion.h1>

<motion.p
  variants={simpleFadeIn(0.2, 0.2)} // Slight delay for subtext
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }}
  className={`${styles.heroSubText} text-white-100 mt-2 h-[30px] overflow-hidden`}
>
  <ScrambledText text="I like exploring." />
</motion.p>


        {/* Download Button */}
        <div className="mt-2 w-full flex justify-center xl:justify-start">
          <div className="relative w-fit">
            <a
              href="/SoumilM_KJSCE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-fit mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                className="w-32 sm:w-36 h-10 border border-[#37b54a] rounded-full bg-[#37b54a] text-white flex items-center justify-center transition duration-150 hover:bg-white hover:text-[#37b54a] shadow-md hover:shadow-[#37b54a]/50"
              >
                <DownloadCVMarquee />
              </motion.div>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Info Cards */}
      <div className={`w-full ${deviceType === 'tablet' ? 'mt-8' : 'xl:w-3/5'}`}>
        <div className={`grid ${deviceType === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'} gap-5`}>
        {infoCards.map((card, index) => (
  <motion.div 
    key={index}
    variants={simpleFadeIn(index * 0.2, 0.3)} // Only fade in, staggered
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="bg-gray-900/80 rounded-xl p-5 border border-gray-700 hover:border-[#34d680] transition-colors cursor-pointer hover:shadow-lg hover:shadow-[#34d680]/20 flex flex-col"
    style={{ minHeight: "220px", minWidth: "100%" }}
  >
    <h3 className="text-[#34d680] font-bold mb-4 text-lg">{card.title}</h3>
    <div className="text-gray-300 flex-grow overflow-hidden">
      {card.content}
    </div>
  </motion.div>
))}

        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Hero, "hero");
