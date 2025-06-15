import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { DownloadCVMarquee } from "../Marquees/downloadCVMarquee";
import { hero } from "../constants";
import { SectionWrapper } from "../hoc";
import { ScrambledText } from "./ScrambledText";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { simpleFadeIn } from "../utils/motion"; 

const openTwitter = () => {
  const appLink = "twitter://user?screen_name=SoumilMukh6476";
  const webLink = "https://twitter.com/SoumilMukh6476";

  const timeout = setTimeout(() => {
    window.open(webLink, "_blank");
  }, 300);

  window.location.href = appLink;
  window.addEventListener("blur", () => clearTimeout(timeout), { once: true });
};

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
          <p><span className="font-bold text-white">🎓 Degree:</span> Software Engineer</p>
          <p><span className="font-bold text-white">🌐 First Passion:</span> Web Dev</p>
          <p><span className="font-bold text-white">🧠 Second Passion:</span> AI-ML</p>
          <p><span className="font-bold text-white">📈 Third Passion:</span> Algorithms</p>
        </div>
      )
    },
    {
      title: "Personal Info",
      content: (
        <div className="space-y-2">
          <p className="text-gray-100">📅 DOB: 30 October 2004</p>
          <p className="text-gray-100">📧 Mail: msoumil69@gmail.com</p>
          <p className="text-gray-100">📞 Phone: 9405727673</p>
          <p className="text-gray-100">✨ Hobby: Birdwatching</p>
        </div>
      )
    },
    {
  title: "Find Me Online",
  content: (
    <div className="space-y-3">
      <a href="https://github.com/Soumilgit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-200">
        <FaGithub className="text-black bg-white rounded-full p-[2px]" size={20} /> GitHub <FiExternalLink />
      </a>
      <a href="https://codolio.com/profile/uQSHdtbA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-200">
        <img src="/codolio.svg" alt="Codolio" className="w-5 h-5" /> Codolio <FiExternalLink />
      </a>
      <a href="https://www.linkedin.com/in/soumilm30/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-200">
        <FaLinkedin className="text-[#0A66C2]" size={20} /> LinkedIn <FiExternalLink />
      </a>
    </div>
  )
},
    {
      title: "Social & More",
      content: (
        <div className="space-y-3">
          <button
            onClick={openTwitter}
            className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-200"
          >
            <FaTwitter className="text-[#1DA1F2]" size={20} /> Twitter <FiExternalLink />
          </button>
          <a href="https://www.instagram.com/soumil_m.exe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-200">
            <FaInstagram className="text-[#E4405F]" size={20} /> Instagram <FiExternalLink />
          </a>
          <a href="https://maps.app.goo.gl/QLHqDchdPjH6bQdb8?g_st=ac" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#34d680] transition-colors hover:underline font-semibold text-blue-200">
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
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[#34d680]/60 shadow-2xl shadow-black/30 flex-shrink-0 backdrop-blur-sm bg-black/10"
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
  variants={simpleFadeIn(0.05, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
  className={`${styles.heroHeadText} h-[84px] overflow-hidden`}
>
  <ScrambledText text="I'm Soumil!" />
</motion.h1>

<motion.p
  variants={simpleFadeIn(0.1, 0.1)} 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }}
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
                transition={{ delay: 0.025, duration: 0.25 }}
                className="w-32 sm:w-36 h-10 border border-[#37b54a]/70 rounded-full bg-[#37b54a]/90 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:bg-white/90 hover:text-[#37b54a] shadow-lg hover:shadow-xl hover:shadow-black/20"
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
    variants={simpleFadeIn(index * 0.1, 0.03)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.01 }}
    className="bg-black/80 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-[#34d680]/70 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-black/20 flex flex-col"
    style={{ minHeight: "220px", minWidth: "100%" }}
  >
    <h3 className="text-[#34d680] font-bold mb-4 text-lg">{card.title}</h3>
    <div className="text-gray-200 flex-grow overflow-hidden">
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
