import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isLightMode } = useTheme();

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
          .nav-links, .navbar-title {
            display: flex;
            gap: 1rem;
          }
          @media (max-width: 768px) {
            .nav-links, .navbar-title {
              display: none;
            }
            .mobile-menu {
              position: absolute;
              top: 4rem;
              left: 1rem;
              background: rgba(0, 0, 0, 0.9);
              backdrop-filter: blur(8px);
              padding: 1rem;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
          }
          @media (min-width: 768px) {
            .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Navbar Component */}

<motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.2, ease: "easeOut" }}
  className={`fixed top-0 w-full z-50 py-4 transition-all ${
    scrolled
      ? "nav-scrolled bg-black/90"
      : "bg-transparent"
  }`}
>
  <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
    <Link
      to="/"
      className="navbar-title flex items-center gap-2 ml-2 sm:ml-2.4 sm:pl-28"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <motion.p
        whileHover={{ scale: 1.05 }}
        className="text-[#37b54a] font-extrabold cursor-pointer text-3xl tracking-wide"
      >
        Soumil M
      </motion.p>
    </Link>

    {/* Desktop Navbar */}
    <div className="hidden md:flex items-center" style={{ marginRight: "82.45px" }}>
      <ThemeToggle />
      <ul className="nav-links" style={{ marginLeft: "36px" }}> 
        {navLinks.map((nav) => (
          <motion.li
            key={nav.id}
            whileHover={{
              scale: 1.2,
            }}
            className={`text-xl font-semibold cursor-pointer transition-all ${
              active === nav.title
                ? "text-[#37b54a]"
                : "text-gray-300"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </ul>
    </div>

    {/* Mobile Navbar */}
    <div className="md:hidden flex items-center gap-3">
      <motion.img
        src={toggle ? close : menu}
        alt="menu"
        whileTap={{ scale: 0.8 }}
        className="w-8 h-8 object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />
      <ThemeToggle />

      {toggle && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={toggle ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mobile-menu"
        >
          <Link
            to="/"
            className="text-[#37b54a] font-extrabold cursor-pointer text-3xl tracking-wide text-center"
          >
            Soumil M
          </Link>
          <ul>
            {navLinks.map((nav) => (
              <motion.li
                key={nav.id}
                whileHover={{
                  scale: 1.1,
                }}
                className="text-white text-xl font-medium cursor-pointer transition-all"
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
      )}
    </div>
  </div>
</motion.nav>
    </>
  );
};

export default Navbar;
