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

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  loading,
  logoSrc = "/Fortune One.png",
  loadingText,
  bgColor = "#FFFFFF",
  onFinished,
}) => {
  const [start, setStart] = useState(false);

  const phrase = "Live Better, Live Fortune";

  // Split into letters
  const letters = phrase.split("");

  useEffect(() => {
    if (!loading) {
      setStart(true);
      const t = setTimeout(() => onFinished && onFinished(), 700);
      return () => clearTimeout(t);
    } else {
      setStart(false);
    }
  }, [loading, onFinished]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            pointerEvents: "none",
            background: bgColor,
          }}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 2.5, ease: "easeInOut" } }}
        >
          {/* Centered LOGO + TEXT */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              pointerEvents: "none",
              zIndex: 30,
            }}
              animate={
                start
                  ? { opacity: 0, transition: { duration: 1, ease: "easeInOut" } }
                  : { opacity: 1 }
              }
          >
            {/* LOGO */}
            <motion.img
              src={logoSrc}
              alt="logo"
              style={{
                width: 280,
                height: 280,
                objectFit: "contain",
                pointerEvents: "none",
                marginBottom: 0,
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* 🔥 ANIMATED TEXT */}
            <motion.div
              style={{
                display: "flex",
                gap: 0,
                marginTop: 0,
                color: "#333333",
                fontSize: 26,
                fontWeight: 300,
                letterSpacing: "0.5px",
                pointerEvents: "none",
                textTransform: "uppercase",
                fontFamily: "'Tempus Sans ITC', sans-serif",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 1.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.6 + index * 0.06,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                  }}
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
