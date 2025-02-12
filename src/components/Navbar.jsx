import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Custom Styles (Inside JSX) */}
      <style>
        {`
          .neon-glow {
            box-shadow: 0 0 10px #37b54a, 0 0 40px #37b54a;
            transition: all 0.3s ease-in-out;
          }
          .neon-icon {
            filter: drop-shadow(0px 0px 8px #37b54a);
          }
          .neon-box {
            border: 2px solid #37b54a;
            box-shadow: 0 0 15px #37b54a;
          }
        `}
      </style>

      {/* Navbar Component */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 py-4 transition-all ${
          scrolled
            ? "bg-black/90 shadow-xl border-b border-[#37b54a] neon-glow"
            : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="flex items-center gap-2 ml-12"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <motion.p
              whileHover={{ scale: 1.1, textShadow: "0px 0px 20px #37b54a" }}
              className="text-[#37b54a] font-extrabold cursor-pointer text-3xl tracking-wide drop-shadow-lg"
            >
              Soumil Mukhopadhyay
            </motion.p>
          </Link>

          {/* Desktop Navbar */}
          <ul className="hidden sm:flex flex-row gap-8">
            {navLinks.map((nav) => (
              <motion.li
                key={nav.id}
                whileHover={{
                  scale: 1.2,
                  color: "#37b54a",
                  textShadow: "0px 0px 15px #37b54a",
                }}
                className={`text-lg font-semibold cursor-pointer transition-all ${
                  active === nav.title ? "text-[#37b54a] drop-shadow-lg" : "text-gray-300"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Navbar */}
          <div className="sm:hidden flex items-center">
            <motion.img
              src={toggle ? close : menu}
              alt="menu"
              whileTap={{ scale: 0.8 }}
              className="w-8 h-8 object-contain cursor-pointer neon-icon"
              onClick={() => setToggle(!toggle)}
            />

            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={toggle ? { x: 0, opacity: 1 } : { x: 150, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`fixed top-16 right-4 p-6 bg-black/90 backdrop-blur-md rounded-xl shadow-lg neon-box ${
                toggle ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.id}
                    whileHover={{
                      scale: 1.1,
                      color: "#37b54a",
                      textShadow: "0px 0px 10px #37b54a",
                    }}
                    className="text-white text-lg font-medium cursor-pointer transition-all"
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
