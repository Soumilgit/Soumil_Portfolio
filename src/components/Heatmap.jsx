import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { simpleFadeIn } from "../utils/motion";
import { styles } from "../styles";
import GitHubCalendar from "react-github-calendar";

const Heatmap = () => {
  const accent = "#34d680";

  const theme = {
    light: ["#23272f", accent + "33", accent + "66", accent + "99", accent],
    dark: ["#18181b", accent + "33", accent + "66", accent + "99", accent],
  };

  useEffect(() => {
    // Hide ONLY the gradient svg inside the legend
    const hideLegendGradient = () => {
      const legends = document.querySelectorAll(
        ".react-activity-calendar__legend"
      );
      legends.forEach((legend) => {
        const svgs = legend.querySelectorAll("svg");
        svgs.forEach((svg) => {
          svg.style.display = "none";
        });
      });
    };

    hideLegendGradient();

    // Run again after GitHubCalendar finishes rendering async
    const t = setTimeout(hideLegendGradient, 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative">
      {/* Custom Scrollbar Styles */}
      <style>
        {`
          .heatmap-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #37b54a #1a1a1a;
          }
          
          .heatmap-scrollbar::-webkit-scrollbar {
            height: 8px;
          }
          
          .heatmap-scrollbar::-webkit-scrollbar-track {
            background: #1a1a1a;
            border-radius: 4px;
          }
          
          .heatmap-scrollbar::-webkit-scrollbar-thumb {
            background: #37b54a;
            border-radius: 4px;
            box-shadow: 0 0 10px #37b54a;
          }
          
          .heatmap-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #2ea043;
            box-shadow: 0 0 15px #37b54a;
          }
          
          /* Mobile specific scrollbar */
          @media (max-width: 768px) {
            .heatmap-scrollbar {
              scrollbar-width: auto;
              scrollbar-color: #37b54a #0a0a0a;
            }
            
            .heatmap-scrollbar::-webkit-scrollbar {
              height: 12px;
            }
            
            .heatmap-scrollbar::-webkit-scrollbar-track {
              background: #0a0a0a;
              border-radius: 6px;
            }
            
            .heatmap-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(90deg, #37b54a, #2ea043);
              border-radius: 6px;
              box-shadow: 0 0 20px #37b54a;
            }
          }
        `}
      </style>
      
      <div className="relative z-10">
        {/* Scroll Animation for Title */}
        <motion.div
          variants={simpleFadeIn(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.01 }}
          className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl shadow-lg backdrop-blur-md"
        >
          <p className={`${styles.sectionSubText} text-center text-[#ABF7B1]`}>
            My Activity
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={simpleFadeIn(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.01 }}
          className="w-full flex justify-center mt-4"
        >
          <h2 className={`${styles.sectionHeadText} text-center text-white`}>
            The GitHub flex
          </h2>
        </motion.div>

        {/* GitHub Calendar Container */}
        <motion.div
          variants={simpleFadeIn(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.01 }}
          className="mt-8 w-full flex justify-center"
        >
          <div className="w-full max-w-6xl">
            <div className="rounded-3xl border border-[#34d680]/20 bg-black/50 backdrop-blur-sm shadow-xl w-full p-8">
              <div className="w-full overflow-x-auto heatmap-scrollbar">
                <GitHubCalendar
                  username="Soumilgit"
                  blockSize={16}
                  blockRadius={4}
                  fontSize={14}
                  theme={theme}
                  hideTotalCount={true}
                  hideColorLegend={false} // ✅ keep "Less → More"
                  style={{
                    width: "100%",
                    display: "block",
                    minWidth: "800px",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Heatmap, "heatmap");
