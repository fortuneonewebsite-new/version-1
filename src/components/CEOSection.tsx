import React from "react";
import { Linkedin } from "lucide-react";

const CEOSection = () => {
  return (
    <section className="bg-[#111111] text-[#E8DCC4] flex flex-col md:flex-row items-center justify-center md:h-[70vh] h-auto overflow-hidden">
      {/* Left Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
          alt="CEO"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center relative">
        {/* LinkedIn Icon */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 bg-[#C19A6B] text-black p-2 rounded-md hover:bg-[#e0b57b] transition"
        >
          <Linkedin size={20} />
        </a>

        {/* Text Section */}
        <h2 className="text-[#C19A6B] text-3xl md:text-4xl font-semibold mb-2">
          Prashant Raj
        </h2>
        <p className="text-[#C19A6B]/80 text-sm md:text-base mb-4">CEO</p>

        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-600">
          <p>
            Fortune One is a Bengaluru-based real estate development company built on the principles of trust, transparency, and thoughtful design. We create spaces that seamlessly blend functionality with aesthetics, delivering enduring value to landowners, investors, and communities alike. Driven by a team with deep industry expertise, Fortune One specializes in premium plotted developments, luxury farmlands, and commercial projects across key growth corridors. Every project reflects our commitment to quality execution, legal clarity, and timely delivery. Our approach is simple — we build relationships before we build spaces. Through collaboration, innovation, and a long-term vision, Fortune One continues to shape developments that inspire confidence and contribute meaningfully to urban growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
