import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, PlayIcon, SparklesIcon, ArrowRightIcon, ChatBubbleLeftRightIcon, XMarkIcon, TrophyIcon, UsersIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Menu from "../components/Menu";
import CategorySection from "./CategorySection";
import FeedbackSection from "./FeedbackSection";
import ArticleSection from "./ArticleSection";
import FortuneOneSection from "../components/FortuneOneSection";
import VideoSection from "../components/VideoSection";

// Swiper imports for portfolio section
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const images = [
    {
      src: "/Website Hero Img.jpg",
      title: "Welcome to Fortune One",
      subtitle: "Premium Real Estate Development",
      description: "Experience refined living with our premium properties and developments"
    },
    {
      src: "/EV Web.jpg",
      title: "Electric Vehicles",
      subtitle: "Sustainable Transportation",
      description: "Experience the future of mobility with our EV solutions"
    },
    {
      src: "/skylark.jpg",
      title: "Skylark Project",
      subtitle: "Premium Residential Development",
      description: "Experience luxury living in our flagship residential project"
    },
    {
      src: "/ew 17.jpg",
      title: "Elegant Interiors",
      subtitle: "Modern Design Excellence",
      description: "Discover the perfect blend of style and functionality in our residential spaces"
    },
    {
      src: "/Skylark-05.jpg",
      title: "Skylark Excellence",
      subtitle: "Premium Living Experience",
      description: "Experience the pinnacle of residential luxury and comfort"
    },
    {
      src: "/ew 15.jpg",
      title: "Modern Elegance",
      subtitle: "Contemporary Architecture",
      description: "Discover innovative designs that blend tradition with modernity"
    },
    {
      src: "/ew 20.jpg",
      title: "Luxury Interiors",
      subtitle: "Sophisticated Living Spaces",
      description: "Experience the art of refined living with our premium interior designs"
    },

  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Stats for rolling counters
  const statsData = [
    { number: 15, label: "Years in the Industry", icon: TrophyIcon },
    { number: 500, label: "Happy Customers", icon: UsersIcon },
    { number: 5, label: "Ongoing Projects", icon: BuildingOfficeIcon },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!statsInView) return;
    statsData.forEach((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const increment = end / (duration / 16);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, [statsInView]);



  return (
    <div className="min-h-screen relative bg-[#FFF8F2]">
      <Menu />
      <LoadingScreen loading={loading} />

      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Images - Full HD without overlays */}
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
              <img
                src={image.src}
                alt={image.title}
                className={index >= 7 ? "w-[1600px] h-[900px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" : "h-full w-full object-cover"}
              />
              {/* Bottom Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
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

        {/* Hero Content - Redesigned Layout */}
        <div className="relative z-30 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Centered Content */}
            <div className="flex flex-col justify-center items-center h-full text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Find Your Dream Home<br />With Fortune One
              </motion.h1>
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent backdrop-blur-sm rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white text-white flex items-center space-x-2"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>Experience Refined Living</span>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#664930]/90 backdrop-blur-sm rounded-lg shadow-xl border border-[#664930]/20 overflow-hidden z-50"
                  >
                    <a
                      href="/Vistaa Brochure_Final_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 text-white hover:bg-white/20 hover:text-white transition-colors duration-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Vistaa Brochure
                    </a>
                    <a
                      href="/Essha vana COrrection Brochure check.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 text-white hover:bg-white/20 hover:text-white transition-colors duration-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Eshavana Brochure
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Slide Indicators */}
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

        {/* Scroll Indicator */}
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

      {/* About Section - "We care about how you live." */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#664930] leading-tight">
              We care about how you<br /> <span className="text-gray-900">Live</span>.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              At Fortune One, we believe every home tells a story — of people, purpose, and progress.
              Guided by decades of experience and a forward-thinking vision, we create spaces where design meets integrity and innovation shapes everyday living.
              Each development reflects our commitment to quality, sustainability, and human connection — transforming land into living experiences that stand the test of time.
              Because we don't just construct buildings; we craft environments that help people live better, grow stronger, and feel truly at home.
            </p>

            <p className="font-semibold text-gray-900 text-xl">
              We don't just build homes.<br />
              <span className="text-[#1C3763]">We build how people feel at home.</span>
            </p>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 border-2 border-[#1C3763] text-[#1C3763] rounded-lg font-semibold hover:bg-[#1C3763] hover:text-white transition-all duration-300"
            >
              DISCOVER OUR STORY
            </motion.a>
          </motion.div>

          {/* Right Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="rounded-3xl"
            >
              <SwiperSlide>
                <img
                  src="/bl 2.png"
                  alt="Building Image 1"
                  className="w-full h-[550px] object-cover rounded-3xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/bl 19.JPG"
                  alt="Building Image 2"
                  className="w-full h-[550px] object-cover rounded-3xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/bl 7.png"
                  alt="Building Image 3"
                  className="w-full h-[550px] object-cover rounded-3xl"
                />
              </SwiperSlide>
            
              
              <SwiperSlide>
                <img
                  src="/ew 22.jpg"
                  alt="Building Image 6"
                  className="w-full h-[550px] object-cover rounded-3xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/ew 2.jpg"
                  alt="Building Image 7"
                  className="w-full h-[550px] object-cover rounded-3xl"
                />
              </SwiperSlide>
             
             
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#664930] mb-2">
            Our Creations, Your Lifestyle
          </h2>
          <p className="text-gray-700 font-medium uppercase tracking-wide">
            SPACES THAT INSPIRE COMFORT, CONNECTION, AND CARE.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 scale-105">
          {/* Card 1 */}
          <Link to="/projects#vista" className="block">
            <div className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/bl 2.png"
                alt="Vision"
                className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-10">
              <img
                src="/img3.png"
                alt="Vista Logo"
                className="w-12 h-12 rounded-full shadow-md"
              />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm md:text-base mb-2">
                  Thoughtful design rooted in purpose and passion.
                </p>
                <h3 className="text-white font-bold text-2xl">
                  Design Philosophy
                </h3>
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#1C3763]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-10 10m0-10h10v10" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/projects#skylark" className="block">
            <div className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/bl 7.png"
                alt="Innovation"
                className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-10">
                <img
                  src="/img1.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-full shadow-md"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm md:text-base mb-2">
                  Smart ideas that blend innovation with everyday living.
                </p>
                <h3 className="text-white font-bold text-2xl">
                  Innovation & Insight
                </h3>
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#1C3763]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-10 10m0-10h10v10" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/projects#eshavana" className="block">
            <div className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/Skylark-05.jpg"
                alt="Community"
                className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-125 scale-125"
              />
              <div className="absolute top-4 left-4 z-10">
                <img
                  src="/img2.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-full shadow-md"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm md:text-base mb-2">
                  Spaces that foster belonging and meaningful connections.
                </p>
                <h3 className="text-white font-bold text-2xl">
                  Community Living
                </h3>
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-md group-hover:scale-110 transition-transform z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#1C3763]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-10 10m0-10h10v10" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Fortune One Section */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/bl 2.png"
              alt="Fortune One Building"
              className="w-full h-[550px] object-cover rounded-3xl"
            />
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#664930] leading-tight">
              Building with Integrity.<br /> Growing with Purpose.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Fortune One is a Bengaluru-based real estate development company built
              on the principles of trust, transparency, and thoughtful design. We
              create spaces that seamlessly blend functionality with aesthetics,
              delivering enduring value to landowners, investors, and communities
              alike.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Driven by a team with deep industry expertise, Fortune One specializes
              in premium plotted developments, luxury farmlands, and commercial
              projects across key growth corridors. Every project reflects our
              commitment to quality execution, legal clarity, and timely delivery.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Our approach is simple — we build relationships before we build
              spaces. Through collaboration, innovation, and a long-term vision,
              Fortune One continues to shape developments that inspire confidence
              and contribute meaningfully to urban growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Distinctive Spaces Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold text-[#664930] mb-8 leading-tight">
              Distinctive Spaces, Elevated Living
            </h2>
            <div className="space-y-6 text-justify">
              <p className="text-xl text-gray-600 leading-relaxed">
                At Fortune One Group, we create more than just properties — we craft distinctive spaces that embody luxury, comfort, and purpose. Every project is a testament to our commitment to design excellence, where thoughtful details and timeless sophistication come together to shape landmarks of lifestyle. From serene residences that feel like personal retreats to dynamic commercial spaces that inspire success and hospitality destinations that captivate every guest, our creations reflect a legacy of innovation and refinement. With Fortune One, every space is beautifully designed to elevate not just how you live, but how you experience life.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{
                  y: -10,
                  rotateY: 10,
                  scale: 1.05,
                  rotateX: -5
                }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/60 hover:border-white/80 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="text-4xl mb-4 flex justify-center items-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-16 h-16 text-[#664930]" />
                </motion.div>
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-[#664930] mb-3"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {counts[i] === 0 ? (stat.label === "Years in the Industry" ? '15' : stat.label === "Happy Customers" ? '500' : stat.label === "Ongoing Projects" ? '5' : '100') : counts[i].toLocaleString()}+
                </motion.div>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#664930]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-12 bg-transparent">
        <FeedbackSection />
      </section>

      {/* Article Section */}
      <section className="py-16 bg-transparent">
        <ArticleSection />
      </section>





       {/* Professional Stats Section */}
       {/* Removed as per user request */}





      {/* Gallery Section - Removed as per user request */}

      {/* WhatsApp Button - Fixed Bottom Right - Only visible on Home page */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-30"
      >
        <motion.a
          href="https://wa.me/919876543210?text=Hi%20Fortune%20One,%20I%20would%20like%20to%20know%20more%20about%20your%20projects"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255, 219, 187, 0.8)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(255, 219, 187, 0.4)",
              "0 0 0 10px rgba(255, 219, 187, 0)",
              "0 0 0 0 rgba(255, 219, 187, 0)"
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="bg-gradient-to-r from-[#664930] to-[#997E67] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center border-2 border-[#FFDBBB]/50"
        >
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="text-sm font-medium">Message</span>
          </div>
        </motion.a>
      </motion.div>


    </div>
  );
};

export default Home;
