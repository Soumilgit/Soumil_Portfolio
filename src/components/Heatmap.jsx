import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { simpleFadeIn } from "../utils/motion";
import { styles } from "../styles";
import _GitHubCalendar from "react-github-calendar";
const GitHubCalendar = _GitHubCalendar.default || _GitHubCalendar;
import { useTheme } from "../context/ThemeContext";

const BLOCK_SIZE = 16;
const BLOCK_MARGIN = 4;

const Heatmap = () => {
  const scrollRef = useRef(null);
  const outerContainerRef = useRef(null);
  const { isLightMode } = useTheme();

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const theme = {
    // GitHub's exact official contribution graph colors
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark:  ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  // IntersectionObserver to only show arrows when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const container = scrollRef.current;
          if (container) {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            if (scrollLeft < 15) {
              setShowLeft(true);
            }
            if (maxScroll - scrollLeft < 15) {
              setShowRight(true);
            }
          } else {
            setShowLeft(true);
          }
        } else {
          setShowLeft(false);
          setShowRight(false);
        }
      },
      { threshold: 0.15 }
    );

    const currentEl = outerContainerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  useEffect(() => {
    if (showLeft) {
      const timer = setTimeout(() => setShowLeft(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showLeft]);

  useEffect(() => {
    if (showRight) {
      const timer = setTimeout(() => setShowRight(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showRight]);

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Show left arrow if at start
    if (scrollLeft < 15) {
      if (!showLeft) setShowLeft(true);
    } else {
      setShowLeft(false);
    }

    // Show right arrow if at end
    if (maxScroll - scrollLeft < 15) {
      if (!showRight) setShowRight(true);
    } else {
      setShowRight(false);
    }
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
    <div className="relative" ref={outerContainerRef}>
      <style>
        {`
          .react-activity-calendar__rect {
            transition: all 0.25s ease-in-out;
          }
          .react-activity-calendar__rect:hover {
            transform: scale(1.1);
          }

          /* Hide scrollbar across all devices and browsers */
          .heatmap-scrollbar {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
          
          .heatmap-scrollbar::-webkit-scrollbar {
            display: none !important;
            height: 0 !important;
            width: 0 !important;
          }
          
          @media (max-width: 768px) {
            .heatmap-scrollbar {
              -ms-overflow-style: none !important;
              scrollbar-width: none !important;
            }
            .heatmap-scrollbar::-webkit-scrollbar {
              display: none !important;
              height: 0 !important;
              width: 0 !important;
            }
          }

          @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.15; }
          }
          .flicker-arrow {
            animation: flicker 0.6s infinite;
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
            <div className="heatmap-container rounded-3xl border border-[#37b54a]/40 bg-black/50 backdrop-blur-sm w-full p-4 sm:p-8 relative">
              
              {/* Blinking Left Arrow pointing Rightwards on smaller devices */}
              {showLeft && (
                <div className="md:hidden absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-[#37b54a] font-extrabold text-[24px] tracking-tighter bg-black/40 px-1 rounded flicker-arrow">
                  &gt;&gt;
                </div>
              )}

              {/* Blinking Right Arrow pointing Leftwards on smaller devices */}
              {showRight && (
                <div className="md:hidden absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-[#37b54a] font-extrabold text-[24px] tracking-tighter bg-black/40 px-1 rounded flicker-arrow">
                  &lt;&lt;
                </div>
              )}

              <div
                ref={scrollRef}
                className="heatmap-scrollbar w-full overflow-x-auto"
                onScroll={handleScroll}
              >
                <div className="min-w-[800px]">
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
