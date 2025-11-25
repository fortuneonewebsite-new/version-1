import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
  logoSrc?: string;
  loadingText?: string;
  bgColor?: string;
  exitAfterMs?: number;
  onFinished?: () => void;
}

const EXIT_DURATION = 2000; // 2 seconds

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  loading,
  logoSrc = "/Fortune One.png",
  loadingText,
  bgColor = "#F7E9DD", // beige – no blue/white
  exitAfterMs = EXIT_DURATION,
  onFinished,
}) => {
  // 👇 KEY CHANGE:
  // Start as visible on FIRST RENDER no matter what `loading` prop is.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // When `loading` is false, start exit timer
    if (!loading) {
      const t = setTimeout(() => {
        setVisible(false);
        if (onFinished) onFinished();
      }, exitAfterMs);
      return () => clearTimeout(t);
    }
  }, [loading, exitAfterMs, onFinished]);

  const phrase = loadingText || "Live Better, Live Fortune";
  const letters = phrase.split("");

  // We only depend on our own `visible` flag for showing/hiding.
  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: bgColor,
            pointerEvents: "none",
          }}
          // no fancy entrance — just be there
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
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
            exit={{
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
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
