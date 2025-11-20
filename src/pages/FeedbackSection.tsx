import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const feedbacks = [
  {
    name: "Mrs. Ambika",
    feedback: "Vista is beautifully designed with a calm, premium atmosphere. The quality and attention to detail make it an exceptional choice for luxury living."
  },
  {
    name: "Ms. Chetana",
    feedback: "Vista offers an inspiring blend of premium design and natural surroundings. It's a thoughtfully created community that truly stands out for its elegance."
  },
  {
    name: "Mr. Karthik H. N.",
    feedback: "Vista's layout, infrastructure, and overall ambience reflect true luxury. It's a development that gives confidence both as a home and as a long-term investment."
  },
  {
    name: "Mrs. Shritha",
    feedback: "Vista stands out for its serene environment and thoughtfully crafted layout. It's a premium address that combines comfort, elegance, and long-term value."
  },
  {
    name: "Ms. Juana John Mampilli",
    feedback: "Vista offers a rare blend of luxury, greenery, and meticulous planning. The moment I visited, I knew it was the right community for a premium lifestyle."
  },
  {
    name: "Mrs. Nandamani Prasad",
    feedback: "Vista is beautifully planned with a premium, serene environment. The quality of development and attention to detail make it a standout choice for luxury living."
  },
  {
    name: "Mr. Srinivasa Reddy",
    feedback: "Vista impressed me with its exceptional layout and high-quality development. It's a premium plotted community built with vision and long-term value."
  },
  {
    name: "Mr. Gurunadha Rao",
    feedback: "Vista reflects true luxury through its thoughtful planning and superior infrastructure. It's a community that promises both pride of ownership and strong future potential."
  },
  {
    name: "Mr. Chethan B. V.",
    feedback: "Vista offers the perfect balance of premium design and peaceful surroundings. The development quality and vision behind the project are truly impressive."
  },
  {
    name: "Mr. Shantaram & Mr. Santhosh",
    feedback: "Vista impressed us with its thoughtful planning and high-quality development. It's a premium community that promises excellent growth and a refined living experience."
  },
  {
    name: "Mrs. Kamna Mathur",
    feedback: "Vista offers a beautifully planned, serene environment with premium infrastructure. It's a perfect destination for those seeking luxury living with long-term value."
  },
  {
    name: "Mrs. Kriti Nema",
    feedback: "Vista delivers an exceptional blend of elegance and thoughtful planning. The community feels refined, secure, and truly future-ready."
  },
  {
    name: "Mr. N. Deepak",
    feedback: "Vista stands out with its premium infrastructure and well-designed masterplan. It's a development that truly reflects luxury living with long-term appreciation."
  },
  {
    name: "Ravi Kumar",
    feedback: "Fortune One Group has transformed my dream home into reality. Their attention to detail and quality is unmatched. Highly recommend their residential projects!"
  },
  {
    name: "Priya Sharma",
    feedback: "As a business owner, I was impressed by the innovative commercial spaces provided by Fortune One. It boosted our productivity and brand image significantly."
  },
  {
    name: "Amit Patel",
    feedback: "The hospitality experience at Fortune One's properties is exceptional. From serene resorts to urban luxury, every stay feels like a personal retreat."
  },
  {
    name: "Sneha Gupta",
    feedback: "Investing in Fortune One's projects was the best decision. Their transparency, timely delivery, and post-sales support are commendable."
  },
  {
    name: "Vikram Singh",
    feedback: "Fortune One Group's commitment to excellence is evident in every project. Their team goes above and beyond to ensure customer satisfaction."
  }
];

const FeedbackSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FFF8F2] via-[#F5ECE5] to-[#FFDBBB]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#664930] mb-4 leading-tight">
            What Our Clients Say
          </h2>
          <hr className="border-t-4 border-[#997E67] rounded-full opacity-80 mx-auto w-24" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet custom-swiper-bullet', bulletActiveClass: 'swiper-pagination-bullet-active custom-swiper-bullet-active' }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            className="feedback-swiper"
          >
            {feedbacks.map((feedback, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-lg"
                >
                  <blockquote className="text-xl text-gray-600 italic leading-relaxed mb-6">
                    "{feedback.feedback}"
                  </blockquote>
                  <cite className="text-lg font-semibold text-gray-600">
                    - {feedback.name}
                  </cite>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackSection;
