import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { simpleFadeIn } from "../utils/motion";
import { styles } from "../styles";
import _GitHubCalendar from "react-github-calendar";
const GitHubCalendar = _GitHubCalendar.default || _GitHubCalendar;
import { useTheme } from "../context/ThemeContext";

const BLOCK_SIZE = 16;
const BLOCK_MARGIN = 4;
const MOBILE_WEEKS = 16;
const MOBILE_VIEWPORT_WIDTH =
  MOBILE_WEEKS * (BLOCK_SIZE + BLOCK_MARGIN) - BLOCK_MARGIN;

const Heatmap = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { isLightMode } = useTheme();

  const theme = {
    light: ["#e5e7eb","#c7f0d3","#80d49c","#45b96b","#188a42",],
    dark: ["#18181b","#123d22","#25924a","#2ea043","#3ddc84",],
  };

  const scrollToLatest = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;

    const atEnd = maxScroll - container.scrollLeft < 8;
    if (!container.dataset.initialScrolled || atEnd) {
      container.scrollLeft = maxScroll;
      container.dataset.initialScrolled = "true";
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (event) => {
      setIsMobile(event.matches);
      if (!event.matches && scrollRef.current) {
        delete scrollRef.current.dataset.initialScrolled;
        scrollRef.current.scrollLeft = 0;
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    scrollToLatest();
    const retryTimers = [100, 500, 1000, 2000].map((delay) =>
      setTimeout(scrollToLatest, delay)
    );

    const container = scrollRef.current;
    const observer = new MutationObserver(scrollToLatest);
    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    return () => {
      retryTimers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [isMobile, scrollToLatest]);

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
            <div className="heatmap-container rounded-3xl border border-[#37b54a]/40 bg-black/50 backdrop-blur-sm w-full p-4 sm:p-8">
              <div
                ref={scrollRef}
                className="heatmap-scrollbar w-full overflow-x-auto"
                style={
                  isMobile
                    ? { maxWidth: `${MOBILE_VIEWPORT_WIDTH}px`, marginInline: "auto" }
                    : undefined
                }
              >
                <div className={isMobile ? "w-max" : "min-w-[800px]"}>
                  <GitHubCalendar
                    username="Soumilgit"
                    blockSize={BLOCK_SIZE}
                    blockMargin={BLOCK_MARGIN}
                    blockRadius={4}
                    fontSize={14}
                    theme={theme}
                    colorScheme={isLightMode ? "light" : "dark"}
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
