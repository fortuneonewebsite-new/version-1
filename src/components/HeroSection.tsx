import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const images = [
    {
      src: "/WhatsApp Image 2025-09-25 at 14.47.26_f5e0d268.jpg",
      title: "Luxury Living",
      subtitle: "Fortune One Development",
      description: "Master-planned community with premium amenities and modern infrastructure"
    },
    {
      src: "/WhatsApp Image 2025-09-25 at 14.47.25_cb718229.jpg",
      title: "Premium Properties",
      subtitle: "Fortune One Entrance",
      description: "Grand entrance with contemporary design and landscaping"
    },
    {
      src: "/WhatsApp Image 2025-09-25 at 14.47.26_df6a02cb.jpg",
      title: "Investment Opportunities",
      subtitle: "Modern Architecture",
      description: "Contemporary villa design with premium finishes and landscaping"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            animate={{
              opacity: index === currentImage ? 1 : 0,
              scale: index === currentImage ? 1 : 1.05,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={image.src}
              alt={image.title}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40 z-10" />

      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [0, -200, 0],
              x: [0, Math.sin(i) * 100, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${70 + (i % 3) * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-30 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight bg-gradient-to-r from-[#FFDBBB] via-[#CCBEB1] to-[#997E67] bg-clip-text text-transparent"
                style={{ textShadow: '0 8px 30px rgba(0,0,0,0.9)' }}
              >
                Fortune One
              </motion.h1>

              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#FFDBBB] mb-3">
                  {images[currentImage].title}
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-4">
                  {images[currentImage].subtitle}
                </p>
                <p className="text-base text-white/80 max-w-lg">
                  {images[currentImage].description}
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="hidden lg:flex flex-col items-end space-y-8"
            >
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 lg:hidden"
      >
        <div className="flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? 'bg-[#FFDBBB] w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/80"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDownIcon className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
