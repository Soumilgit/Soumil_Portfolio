import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { simpleFadeIn } from "../utils/motion";
import { styles } from "../styles";
import GitHubCalendar from "react-github-calendar";

const Heatmap = () => {
  const theme = {
    light: ["#23272f","#123d22","#25924a","#2ea043","#3ddc84",],
    dark: ["#18181b","#123d22","#25924a","#2ea043","#3ddc84",],
  };

  useEffect(() => {
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

    const t = setTimeout(hideLegendGradient, 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative">
      <style>
        {`
          .react-activity-calendar__rect {
            transition: all 0.25s ease-in-out;
          }
          .react-activity-calendar__rect:hover {
            transform: scale(1.1);
          }

          .heatmap-scrollbar {
            -webkit-overflow-scrolling: touch;
            scrollbar-color: #25924a #1a1a1a;
          }
          
          .heatmap-scrollbar::-webkit-scrollbar {
            height: 10px; 
          }
          
          .heatmap-scrollbar::-webkit-scrollbar-track {
            background: #1a1a1a;
            border-radius: 4px;
          }
          
          .heatmap-scrollbar::-webkit-scrollbar-thumb {
            background: #25924a;
            border-radius: 4px;
          }
          
          .heatmap-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #2ea043;
          }
          
          @media (max-width: 768px) {
            .heatmap-scrollbar {
              scrollbar-width: auto;
              scrollbar-color: #25924a #0a0a0a;
            }
            
            .heatmap-scrollbar::-webkit-scrollbar {
              height: 12px;
            }
            
            .heatmap-scrollbar::-webkit-scrollbar-track {
              background: #0a0a0a;
              border-radius: 6px;
            }
            
            .heatmap-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(90deg, #25924a, #2ea043);
              border-radius: 6px;
            }
          }
        `}
      </style>

      <div className="relative z-10">
        <motion.div
          variants={simpleFadeIn(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.01 }}
          className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl backdrop-blur-md"
        >
          <p className={`${styles.sectionSubText} text-center text-[#37b54a]`}>
            My Activity
          </p>
        </motion.div>

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

        <motion.div
          variants={simpleFadeIn(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.01 }}
          className="mt-8 w-full flex justify-center"
        >
          <div className="w-full max-w-6xl">
            <div className="rounded-3xl border border-[#37b54a]/40 bg-black/50 backdrop-blur-sm w-full p-8">
              <div className="w-full overflow-x-auto">

          <div className="min-w-[800px]">
            <GitHubCalendar
              username="Soumilgit"
              blockSize={16}
              blockRadius={4}
              fontSize={14}
              theme={theme}
              hideTotalCount={true}
              hideColorLegend={false}
            />
          </div>
        </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Heatmap, "heatmap");
