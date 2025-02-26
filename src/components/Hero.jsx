import { motion } from "framer-motion"; 
import { useState } from "react"; 
import { styles } from "../styles"; 
import { DownloadCVMarquee } from "../Marquees/downloadCVMarquee"; 
import { Arrow } from "../svg/arrow"; 
import { hero } from "../constants"; 
import { SectionWrapper } from "../hoc"; 
import { ScrambledText } from "./ScrambledText";

const Hero = () => { 
  const [flipped, setFlipped] = useState(false); 
  const { title, icon } = hero[0]; 

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent the card from flipping back
  };

  return ( 
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto justify-start items-center px-2 sm:px-2 bg-cover bg-center mt-20"> 
      
      {/* Left Side (ID Card) */}
      <div className="flex justify-left items-center mt-1 md:mt-0"> 
        <div className="relative w-72 h-[40em] sm:w-96 sm:h-[38rem] cursor-pointer perspective-1000" onClick={handleCardClick}> 
          <motion.div className="relative w-full h-full" animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.6 }} style={{ transformStyle: "preserve-3d" }}> 
            
            {/* Front Side */}
            <motion.div className="absolute w-full h-full bg-gray-900 shadow-lg rounded-xl border border-gray-700 p-5 flex flex-col items-center justify-start text-white" style={{ backfaceVisibility: "hidden" }}> 
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#34d680] px-3 py-1 text-black font-bold rounded-md shadow-md"> 
                Flip it! 
              </div> 
              <div className="rounded-md overflow-hidden w-full flex justify-center items-center neon-icon"> 
                <img src={icon} alt={title} className="w-full h-auto max-w-[100%] md:max-w-full object-contain" /> 
              </div> 
              <div className="mt-4 text-left w-full"> 
                <h2 className="text-xl font-semibold text-center bg-[#393b3a]">{title}</h2> 
                {/* Details */}
                <div className="mt-4 text-left w-full"> 
                  <div className="text-l text-gray-300 pl-5 sm:pl-14"> 
                    <p><strong>🎓 Degree:</strong> Software Engineer</p> 
                    <p><strong>🌐 First Passion:</strong> Web Development</p> 
                    <p><strong>📊 Second Passion:</strong> Data Science</p> 
                    <p><strong>📈 Third Passion:</strong> Competitive Coding</p> 
                  </div> 
                  <hr className="my-3 border-gray-600 " /> 
                  <p className="text-l text-gray-400 pl-5 sm:pl-14">📅 DOB: 30 October 2004</p> 
                  <p className="text-l text-gray-400 pl-5 sm:pl-14">📧 Email: msoumil69@gmail.com</p> 
                  <p className="text-l text-gray-400 pl-5 sm:pl-14">📞 Phone: 9405727673</p> 
                  <div className="mb-0"></div> 
                </div> 
              </div> 
            </motion.div> 
            
            {/* Back Side */}
            <motion.div className="absolute w-full h-full bg-gray-900 shadow-lg rounded-xl border border-gray-700 p-4 flex flex-col items-center justify-start text-white" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}> 
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#34d680] px-3 py-1 text-black font-bold rounded-md shadow-md"> 
                Flip it! 
              </div> 
              <h2 className="text-lg md:text-xl font-bold mb-3 self-center w-full text-center border-b-2 border-gray-300 pb-1"> 
                Find me online! 
              </h2> 
              <div className="flex flex-col items-center md:items-start w-full text-sm md:text-base space-y-1"> 
                <a 
                  href="https://linktr.ee/FlowRM" 
                  target="_blank" 
                  onClick={handleLinkClick} 
                  className="text-blue-400 hover:underline font-semibold"
                >
                  🦄 My startup, FlowRM's socials
                </a> 
                <a href="https://www.linkedin.com/in/soumilm30/" target="_blank" onClick={handleLinkClick} className="text-blue-400 hover:underline font-semibold">💼LinkedIn</a> 
                <a href="https://github.com/Soumilgit" target="_blank" onClick={handleLinkClick} className="text-blue-400 hover:underline font-semibold">💻GitHub</a>
                <a href="https://www.codechef.com/users/spry_deer_42" target="_blank" onClick={handleLinkClick} className="text-blue-400 hover:underline font-semibold">🏅CodeChef</a> 
                <a href="https://twitter.com/SoumilMukh6476/" target="_blank" onClick={handleLinkClick} className="text-blue-400 hover:underline font-semibold">🐦Twitter</a>
                <a href="https://www.instagram.com/soumil_m.exe/" target="_blank" onClick={handleLinkClick} className="text-blue-400 hover:underline font-semibold">📸Instagram</a>  
              </div> 
              <h2 className="text-lg md:text-xl font-semibold mt-4 mb-3 self-center w-full text-center border-b-2 border-gray-300 pb-1"> 
                My Hobbies 
              </h2> 
              <div className="text-gray-300 flex flex-col items-center md:items-start w-full text-sm md:text-base space-y-1"> 
                <p className="font-semibold">🦜Birdwatching</p> 
                <p className="font-semibold">📰Newspaper Reading</p> 
                <p className="font-semibold">🏓Table Tennis</p> 
                <p className="font-semibold">⚽Football</p> 
              </div> 
              <h2 className="text-lg md:text-xl font-semibold mt-4 mb-3 self-center w-full text-center border-b-2 border-gray-300 pb-1"> 
                My Travels 
              </h2> 
              <a href="https://maps.app.goo.gl/QLHqDchdPjH6bQdb8?g_st=ac" target="_blank" onClick={handleLinkClick} className="text-blue-400 hover:underline font-semibold text-sm flex flex-col items-center md:items-start w-full md:text-base "> 
                📍Google Maps 
              </a>
              <div className="mb-0"></div> 
            </motion.div> 
          </motion.div> 
        </div> 
      </div> 

      {/* Right Side (Text, Button, Arrow) */}
      <div className="flex flex-col items-center md:items-start gap-4 md:ml-[18px] md:self-center mt-8"> 
        <h1 className={`${styles.heroHeadText}`}>
          <ScrambledText text="Hi, I'm Soumil!" duration={1300} />
        </h1>

        <p className={`${styles.heroSubText} mt-4 text-white-100 text-left`}>
          <ScrambledText text="I like programming, tech and nature." duration={1300} />
        </p>

        <div className="mt-4"> 
          <a href="/SoumilM_KJSCE_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-32 sm:w-36 h-10 border border-[#37b54a] rounded-full bg-[#37b54a] text-white flex items-center justify-center transition duration-300 
                  hover:bg-white hover:text-[#37b54a] shadow-md hover:shadow-[#37b54a]/50">
              <DownloadCVMarquee /> 
            </div>
          </a>

          <div className="relative mt-14 flex items-center gap-1" style={{ transform: "rotate(19.6deg)" }}> 
            <div style={{ transform: "rotate(180deg)" }}> 
              <Arrow /> 
            </div> 
            <p className="text-[#9ACD32] font-semibold text-sm sm:text-xl">Gotcha, it IS a button!</p> 
          </div> 
        </div> 
      </div> 
    </section>
  ); 
}

export default SectionWrapper(Hero, "hero");
