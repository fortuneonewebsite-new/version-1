import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MessageCircle } from "lucide-react"; // ✅ WhatsApp-style chat icon

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Projects", path: "/projects" },
    { name: "Channel Partners", path: "/partners" },
    { name: "NRI Support", path: "/nri-support" },
    { name: "Contact", path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* --- Logo --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-4 left-4 z-50"
      >
        <Link to="/">
          <img
            src="/Fortune One.png"
            alt="Fortune One Logo"
            className="h-16 w-auto hover:scale-105 transition-transform duration-300 drop-shadow-lg"
          />
        </Link>
      </motion.div>

      {/* --- Menu Toggle Button --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`fixed top-6 right-6 z-50 transition-all duration-300 ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-6 py-3 shadow-2xl backdrop-blur-md border border-[#997E67]
            transition-all duration-300 text-white font-medium rounded-full
            ${isOpen ? "bg-black/70" : "bg-black/50 hover:bg-black/70"}
          `}
        >
          {isOpen ? (
            <>
              <XMarkIcon className="h-6 w-6" />
            </>
          ) : (
            <>
              <Bars3Icon className="h-6 w-6" />
            </>
          )}
        </motion.button>
      </motion.div>

      {/* --- Menu Overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-[80%] md:w-[25%] bg-black/50 backdrop-blur-md z-40
              flex flex-col items-center justify-center text-center space-y-8 px-6"
          >
            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className={`relative text-lg font-semibold text-white hover:text-[#E1B382] transition-all duration-300 group`}
                >
                  {item.name}
                  <span className="block w-0 group-hover:w-full h-[1px] bg-[#E1B382] transition-all duration-500 mx-auto mt-1"></span>
                </Link>
              </motion.div>
            ))}

            {/* --- Message Us Button (with WhatsApp icon) --- */}
            <motion.a
              href="https://wa.me/917996000533"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-[#E1B382]
              text-[#E1B382] hover:bg-[#E1B382] hover:text-black font-medium transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" /> {/* ✅ WhatsApp-style icon */}
              Message us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
