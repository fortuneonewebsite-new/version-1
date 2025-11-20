import React from "react";

const FortuneOneSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/bl 2.png"
          alt="Fortune One project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0046A5] leading-tight mb-6">
          Building with Integrity. <br /> Growing with Purpose.
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Fortune One is a Bengaluru-based real estate development company built
          on the principles of trust, transparency, and thoughtful design. We
          create spaces that seamlessly blend functionality with aesthetics,
          delivering enduring value to landowners, investors, and communities
          alike.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Driven by a team with deep industry expertise, Fortune One specializes
          in premium plotted developments, luxury farmlands, and commercial
          projects across key growth corridors. Every project reflects our
          commitment to quality execution, legal clarity, and timely delivery.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our approach is simple — we build relationships before we build
          spaces. Through collaboration, innovation, and a long-term vision,
          Fortune One continues to shape developments that inspire confidence
          and contribute meaningfully to urban growth.
        </p>
      </div>
    </section>
  );
};

export default FortuneOneSection;
