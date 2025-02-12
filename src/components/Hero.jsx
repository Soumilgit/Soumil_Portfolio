import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { DownloadCVMarquee } from "../Marquees/downloadCVMarquee";
import { Arrow } from "../svg/arrow";

const Hero = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen justify-center items-center">
      {/* Left Side - Flippable ID Card */}
      <div className="relative flex justify-center items-center mt-6 md:mt-0">
        <div
          className="relative w-72 h-[26rem] sm:w-96 sm:h-[30rem] cursor-pointer perspective-1000"
          onClick={() => setFlipped(!flipped)}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Side */}
            <motion.div
              className="absolute w-full h-full bg-gray-900 shadow-lg rounded-xl border border-gray-700 p-5 flex flex-col items-center justify-start text-white"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent rounded-xl pointer-events-none" />

              {/* Tag */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#34d680] px-3 py-1 text-black font-bold rounded-md shadow-md">
               Flip it!
              </div>

              {/* Image */}
              <div className="rounded-md overflow-hidden w-full h-90 flex justify-center items-center"> 
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGUUIrTE5CqtA/profile-displayphoto-shrink_200_200/B4DZPQatywHMAY-/0/1734368484955?e=2147483647&v=beta&t=mN30VUV-I4VheWwmhqi9ZBajak7RS2lgz3_r4FBOL2s" 
                  alt="My Photo" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="mt-4 text-left w-full"> {/* Aligns text to the left */}
                <h2 className="text-xl font-semibold text-center bg-[#393b3a]">Soumil Mukhopadhyay</h2>

                <div className="text-l text-gray-300 pl-14">
                  <p><strong>🎓Degree:</strong> Software Engineer</p>
                  <p><strong>🌐First Passion:</strong> Web Development</p>
                  <p><strong>📊Second Passion:</strong> Data Science</p>
                  <p><strong>📈Third Passion:</strong> Competitive Coding</p>
                </div>

                <hr className="my-3 border-gray-600 " />

                <p className="text-l text-gray-400 pl-14">📅DOB: 30 October 2004</p>
                <p className="text-l text-gray-400 pl-14">📧Email: msoumil69@gmail.com</p>
                <p className="text-l text-gray-400 pl-14">📞Phone: 9405727673</p>
              </div>
            </motion.div>

            {/* Back Side */}
            <motion.div
  className="absolute w-full h-full bg-gray-900 text-white shadow-lg rounded-xl border border-gray-700 p-4 flex flex-col justify-between items-start overflow-hidden"
  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
>
 
    


  {/* Find me online section */}
  <h2 className="text-lg md:text-xl font-bold mb-3 self-center w-full text-center border-b-2 border-gray-300 pb-1">
    Find me online!
  </h2>
  <div className="flex flex-col items-center md:items-start w-full text-sm md:text-base space-y-1">
    <a href="https://linktr.ee/FlowRM" target="_blank" className="text-blue-400 hover:underline font-semibold">🦄 My startup, FlowRM's socials</a>
    <a href="https://www.linkedin.com/in/soumilm30/" target="_blank" className="text-blue-400 hover:underline font-semibold">🔗 LinkedIn</a>
    <a href="https://github.com/Soumilgit" target="_blank" className="text-blue-400 hover:underline font-semibold">💻 GitHub</a>
    <a href="https://twitter.com/SoumilMukh6476/" target="_blank" className="text-blue-400 hover:underline font-semibold">🐦 Twitter</a>
    <a href="https://www.codechef.com/users/spry_deer_42" target="_blank" className="text-blue-400 hover:underline font-semibold">🏅 CodeChef</a>
  </div>

  {/* Hobbies Section */}
  <h2 className="text-lg md:text-xl font-semibold mt-4 mb-3 self-center w-full text-center border-b-2 border-gray-300 pb-1">
    My Hobbies
  </h2>
  <div className="text-gray-300 flex flex-col items-center md:items-start w-full text-sm md:text-base space-y-1">
    <p className="font-semibold">🦜 Birdwatching</p>
    <p className="font-semibold">📰 Newspaper Reading</p>
    <p className="font-semibold">🏓 Table Tennis</p>
    <p className="font-semibold">⚽ Football</p>
  </div>

  {/* Google Maps Profile */}
  <h2 className="text-lg md:text-xl font-semibold mt-4 mb-3 self-center w-full text-center border-b-2 border-gray-300 pb-1">
    My Travels
  </h2>
  <a 
    href="https://maps.app.goo.gl/QLHqDchdPjH6bQdb8?g_st=ac" 
    target="_blank" 
    className="text-blue-400 hover:underline block font-semibold text-sm md:text-base"
  >📍 Google Maps</a>
  <div className="w-full flex justify-center mt-3">
  
</div>

 
</motion.div>



          </motion.div>
        </div>
      </div>

      {/* Right Side - Text + Resume Button */}
      <div className="flex flex-col items-center md:items-start gap-5">
        <h1 className={`${styles.heroHeadText} text-lime-500`}>
          Hi, I'm <span className="text-[#50c33c]">Soumil!</span>
        </h1>
        <p className={`${styles.heroSubText} mt-16 text-white-100`}>
          I like programming, exploring tech stuff, and nature.
        </p>

        {/* Download Resume Button */}
        <div className="mt-4">
          <a href="/SoumilM_KJSCE_Resume.pdf">
            <div className="w-32 sm:w-36 h-8 border border-[#34d680] rounded-full hover:bg-white transition duration-300">
              <DownloadCVMarquee />
            </div>
          </a>
          <div className="relative mt-9 flex items-center gap-1" style={{ transform: "rotate(14deg)" }}>
            <div style={{ transform: "rotate(180deg)" }}>
              <Arrow />
            </div>
            <p className="text-[#34d680] font-semibold text-sm sm:text-xl">Gotcha, it IS a button!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
