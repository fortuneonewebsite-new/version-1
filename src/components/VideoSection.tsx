import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const VideoSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#FFF8F2] via-[#F5ECE5] to-[#FFDBBB]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-extrabold text-[#664930] mb-8 leading-tight">
            Discover Our Ongoing Projects
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Take a virtual tour of our premium developments and see the quality craftsmanship firsthand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-xl border border-white/40 relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.video-swiper-button-next',
                prevEl: '.video-swiper-button-prev',
              }}
              loop={true}
              className="rounded-2xl overflow-hidden"
            >
              <SwiperSlide>
                <div className="w-full h-[480px] object-cover rounded-2xl overflow-hidden">
                  <iframe
                    title="3D Interior Walkthrough"
                    src="https://www.youtube.com/embed/M6wjiuBEOuU?si=qngWX2jE8c_YftHs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-[#664930] mb-2">3D Interior Walkthrough</h3>
                  <p className="text-gray-600">Explore our luxury properties in immersive detail</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full h-[480px] object-cover rounded-2xl overflow-hidden">
                  <iframe
                    title="Exterior Property Tour"
                    src="https://www.youtube.com/embed/12mQyseZJs8?si=HUY4sj0Ne7txPyL-"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-[#664930] mb-2">Exterior Property Tour</h3>
                  <p className="text-gray-600">Discover the stunning exterior and surroundings</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full h-[480px] object-cover rounded-2xl overflow-hidden">
                  <iframe
                    title="Interior Property Tour"
                    src="https://www.youtube.com/embed/73dOxTPWfRA?si=WF0oF29xCalvcq9K"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-[#664930] mb-2">Interior Property Tour</h3>
                  <p className="text-gray-600">Experience the beautiful interiors and design</p>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="video-swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300">
              <ChevronLeftIcon className="h-5 w-5 text-[#664930]" />
            </button>
            <button className="video-swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300">
              <ChevronRightIcon className="h-5 w-5 text-[#664930]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
