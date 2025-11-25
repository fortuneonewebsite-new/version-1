import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
  logoSrc?: string;
  loadingText?: string;
  bgColor?: string;
  exitAfterMs?: number;
  onFinished?: () => void;
}

const EXIT_DURATION = 2000; // 2 seconds for the swipe-up animation

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  loading,
  logoSrc = "/Fortune One.png",
  loadingText,
  bgColor = "#F7E9DD", // NO WHITE FLASH
  exitAfterMs = EXIT_DURATION,
  onFinished,
}) => {

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => {
        if (onFinished) onFinished();
      }, exitAfterMs);
      return () => clearTimeout(t);
    }
  }, [loading, exitAfterMs, onFinished]);

  const phrase = loadingText || "Live Better, Live Fortune";
  const letters = phrase.split("");

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: bgColor,
            pointerEvents: "none",
          }}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: EXIT_DURATION / 1000, ease: "easeInOut" },
          }}
        >
          {/* CENTER CONTENT */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              zIndex: 10,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            {/* LOGO */}
            <motion.img
              src={logoSrc}
              alt="logo"
              style={{
                width: 260,
                height: 260,
                objectFit: "contain",
              }}
              initial={{ y: 80, opacity: 0, scale: 1.05 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* LETTER ANIMATION */}
            <motion.div
              style={{
                display: "flex",
                marginTop: -10,
                color: "#333",
                fontSize: 26,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                fontWeight: 300,
                fontFamily: "'Tempus Sans ITC', sans-serif",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.45 + i * 0.05,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  style={{ whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
