import React from "react";
import { motion } from "framer-motion";

const NewSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1501183638714-1c2a6b6d3a6b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="py-24 bg-brandlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-left"
        >
          <h2 className="text-5xl font-extrabold text-[#664930] mb-8 leading-tight">
            Refined Living with Fortune One Group
          </h2>
          <p className="text-xl text-[#664930]/90 leading-relaxed mb-12">
            Discover refined living with Fortune One Group, where every space is designed to match your aspirations. Our diverse range of projects offers something for every lifestyle and budget—from premium luxury residences to thoughtfully crafted affordable homes. Whether you’re seeking elegance, practicality, or the perfect balance of both, Fortune One delivers with integrity and excellence. With innovation and sustainability at the heart of our vision, we create more than properties—we build vibrant communities where life flourishes and connections last.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Fortune One project ${index + 1}`}
              className="rounded-3xl shadow-lg object-cover w-full h-64"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSection;
