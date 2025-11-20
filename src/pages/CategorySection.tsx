import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Residential",
    description: "Discover vibrant living at Fortune One Group, where each residence is tailored to diverse lifestyles. Our three distinct portfolios cater to every budget and preference, ensuring there’s a perfect home for everyone. Whether you seek luxury, affordability, or a balanced blend of both, Fortune One delivers with integrity and excellence.",
    image: "/WhatsApp Image 2025-09-25 at 14.47.26_f5e0d268.jpg"
  },
  {
    title: "Commercial",
    description: "Fortune One Group’s commercial journey is built on innovation and impact—shaping spaces that drive business growth. Our portfolio blends modern design with unmatched functionality, creating environments that spark productivity and success. From advanced business hubs to dynamic retail destinations, every project is thoughtfully designed to meet the evolving needs of today’s enterprises while setting new benchmarks in commercial excellence.",
    image: "/WhatsApp Image 2025-09-25 at 14.47.25_cb718229.jpg"
  },
  {
    title: "Hospitality",
    description: "Step into the world of Fortune One Hospitality, where elegance and comfort come together to create unforgettable experiences. Our diverse destinations are thoughtfully designed to suit every traveler—whether you crave serene escapes surrounded by nature or the vibrant energy of urban living. With refined amenities, contemporary design, and a commitment to excellence, every stay promises indulgence, relaxation, and memories that last a lifetime.",
    image: "/WhatsApp Image 2025-09-25 at 14.47.28_1865cf5f.jpg"
  }
];

const CategorySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FFF8F2] via-[#F5ECE5] to-[#FFDBBB]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-6 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h3 className="text-4xl font-extrabold text-[#664930]">{category.title}</h3>
            <p className="text-[#664930]/90 text-lg leading-relaxed text-justify mt-6 mb-6">{category.description}</p>
            <img
              src={category.image}
              alt={category.title}
              className="rounded-3xl shadow-lg w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
