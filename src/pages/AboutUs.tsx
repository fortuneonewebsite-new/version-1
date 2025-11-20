import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Timeline from '../components/Timeline';
import CEOSection from '../components/CEOSection';

const AboutUs = () => {
  const directors = [
    {
      name: "Prashant Raj",
      position: "Chairman & Managing Director",
      shortBio: "Leading with vision rooted in integrity, innovation, and long-term value creation across real estate and industrial ventures.",
      bio: `Prashant Raj leads with a vision rooted in integrity, innovation, and long-term value creation. With over two decades of entrepreneurial experience, he has been a driving force behind Fortune One's growth and diversification across real estate, industrial ventures, and sustainable initiatives.

His leadership approach combines strategic thinking with a deep focus on execution excellence. Known for his clarity of vision and commitment to quality, he has built teams and partnerships that consistently deliver impactful results.

Guided by a belief that progress must serve both people and purpose, Prashant continues to inspire a culture of innovation, collaboration, and responsibility within the organization.`,
      image: "/Prashanth.jpg",
    },
    {
      name: "Naveen Raj",
      position: "Managing Director",
      shortBio: "Driving strategy, execution, and value creation in real estate development with expertise in joint ventures and partnerships.",
      bio: `Naveen Raj leads with a strong focus on strategy, execution, and value creation in real estate development. With over a decade of entrepreneurial experience, he has been instrumental in building Fortune One into a trusted, performance-driven real estate brand known for integrity and partnership-led growth.

His expertise lies in structuring successful Joint Ventures, Joint Development Agreements, and Development Management partnerships that create long-term value for landowners and investors. Naveen's clear approach to legal transparency, financial accountability, and project ownership ensures that every development upholds the highest standards of trust and delivery.

He is deeply committed to transforming land into well-planned, sustainable communities that reflect Fortune One's vision — combining strong design, seamless execution, and responsible development.`,
      image: "/Naveen.jpg",
    },
    {
      name: "Diepu V Reddy",
      position: "Director - Strategy & Development",
      shortBio: "Seasoned real estate professional with 14+ years of international experience and entrepreneurial mindset.",
      bio: "Diepu V Reddy is a seasoned real estate professional with over 14 years of international experience. He possesses an entrepreneurial mindset, strong business acumen, and exceptional analytical skills, enabling him to manage large asset classes. In recognition of his achievements, he has received prestigious honors and awards, including the Smart Real Estate Project of the Year for Edge in 2018 and Township of the Year for Springs in 2019. Diepu has furthered his education at Cornell University and holds a degree in Marketing & Operations from Don Bosco University.",
      image: "/Deepu.jpg",
    },
    {
      name: "Vinith Prasad",
      position: "Chief Business Officer",
      shortBio: "Driving growth through strategic investment, land acquisition, and deal structuring in competitive markets.",
      bio: `Vinith Prasad plays a key role in driving Fortune One's growth through strategic investment, land acquisition, and deal structuring. With over seven years of experience in real estate development, he combines an entrepreneurial mindset with a sharp understanding of market dynamics and financial strategy.

Vinith's expertise lies in identifying high-value opportunities, building investor confidence, and structuring partnerships that create long-term value for all stakeholders. His hands-on approach and commitment to transparent transactions have been central to Fortune One's continued success in competitive markets.

Focused on innovation and sustainable expansion, he works closely with partners, investors, and landowners to translate vision into tangible results. His leadership reflects a balance of financial acumen, strategic foresight, and a deep commitment to responsible growth.`,
      image: "/Vinith.jpg",
    },
    {
      name: "Vandana Prashant",
      position: "Chief People Growth Officer",
      shortBio: "Overseeing human resources, sales strategy, and organizational initiatives with focus on collaboration and innovation.",
      bio: `Vandana Prashant oversees human resources, sales strategy, and organizational initiatives at Fortune One. With over a decade of experience in business operations and people management, she plays a pivotal role in driving the company's growth and nurturing a strong, purpose-driven culture.

Her leadership philosophy centers on collaboration, innovation, and continuous learning. Vandana believes that empowering people and aligning them with a shared vision is the key to sustained success. She works closely with teams across functions to ensure that every project reflects Fortune One's values of trust, transparency, and excellence.

Passionate about building high-performing teams and fostering long-term relationships, Vandana brings both strategic clarity and empathy to her role — balancing business growth with people-centric leadership.`,
      image: "/Vandana.jpg",
    },
  ];

  const [selectedDirector, setSelectedDirector] = useState<typeof directors[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDBBB] via-[#FFF8F2] to-[#F7E9DD] text-[#664930]">
      {/* Hero Section - Exact Match */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern Interior"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Box - Centered */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
          <div className="max-w-6xl w-full">
            <div className="bg-[#34495e]/95 border border-[#c9a55a]/50 rounded-3xl px-10 py-12 md:px-16 md:py-16 shadow-2xl">
              <div className="text-white/95 space-y-6 text-justify">
                <p className="text-base md:text-lg leading-relaxed">
                  At Fortune One, we go beyond building structures — we craft meaningful spaces where design meets purpose and integrity drives every decision. Rooted in the principles of trust, transparency, and quality, our developments embody enduring value and thoughtful craftsmanship. Each project is a reflection of our commitment to elevate lifestyles, empower communities, and create investments that stand the test of time. Guided by vision and built with precision, Fortune One continues to redefine real estate with innovation, authenticity, and a human touch.
                </p>

                <p className="text-lg md:text-xl text-[#c9a55a] text-center pt-4 font-bold">
                  Building with integrity. Growing with purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFFBF7] via-[#FFF8F2] to-[#F5ECE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Rotating Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Rotating Text Circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 160 160" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 80, 80 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                      />
                    </defs>
                    <text className="text-[9px] fill-[#664930] font-bold tracking-[0.2em]">
                      <textPath href="#circlePath" startOffset="0%">
                        FORTUNE ONE DEVELOPERS • LIVE BETTER,LIVE FORTUNE • FORTUNE ONE •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center Logo */}
                <div className="relative z-10 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center p-7">
                  <img
                    src="/Fortune One.png"
                    alt="Fortune One Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-extrabold text-[#664930] leading-tight">
                Who We Are
              </h2>

              <p className="text-2xl text-[#664930] font-medium uppercase tracking-wide">
                A COLLABORATION WITH PURPOSE.
              </p>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Fortune One emerged from a natural progression — the uniting of long-term vision and thoughtful design.
                </p>
                <p>
                  What started as independent paths in the real estate space has grown into a single, clear mission: to craft homes that are durable, intelligently planned, and deeply connected to the way people live.
                </p>
              </div>

              <div className="pt-4">
                <div className="inline-block border-b-4 border-[#664930] pb-2">
                  <p className="text-xl font-bold text-[#664930] italic">
                    A Union of Vision and Experience
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Born from aligned values and complementary strengths, Fortune One aims to shape homes that are enduring, well-planned, and intuitively connected to the needs of the people who live in them.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Our Journey - Complete Reference Design */}
<section className="py-20 bg-gradient-to-br from-[#FFFBF7] via-[#FFF8F2] to-[#F5ECE5]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-extrabold text-[#664930] mb-4">Our Journey</h2>
    </motion.div>

    <div className="relative max-w-6xl mx-auto">
      {/* Title Cards Row */}
      <div className="hidden md:grid grid-cols-5 gap-6 mb-6">
        {[
          { bg: 'bg-[#d65a6c]', title: 'THE BEGINNING' },
          { bg: 'bg-[#e88880]', title: 'GROWTH PHASE' },
          { bg: 'bg-[#f4a261]', title: 'UNIFICATION' },
          { bg: 'bg-[#e9c46a]', title: 'MOVING FORWARD' },
          { bg: 'bg-[#5a9a8f]', title: 'THE FUTURE' }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`${item.bg} text-white text-center py-4 px-4 font-bold text-lg shadow-md rounded-sm`}
          >
            {item.title}
          </motion.div>
        ))}
      </div>

      {/* Chevron Arrow Timeline - Desktop */}
      <div className="hidden md:block mb-6">
        <svg viewBox="0 0 1200 100" className="w-full" style={{ height: '100px' }}>
          <defs>
            {/* Gradients */}
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#d65a6c', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#d65a6c', stopOpacity: 0.95 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#e88880', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#e88880', stopOpacity: 0.95 }} />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f4a261', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f4a261', stopOpacity: 0.95 }} />
            </linearGradient>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#e9c46a', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#e9c46a', stopOpacity: 0.95 }} />
            </linearGradient>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#5a9a8f', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#5a9a8f', stopOpacity: 0.95 }} />
            </linearGradient>
          </defs>

          {/* Arrow 1 - with left notch */}
          <path d="M 20,15 L 0,50 L 20,85 L 220,85 L 240,50 L 220,15 Z" fill="url(#grad1)" stroke="#fff" strokeWidth="3"/>
          <text x="120" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">2007</text>

          {/* Arrow 2 */}
          <path d="M 220,15 L 200,50 L 220,85 L 460,85 L 480,50 L 460,15 Z" fill="url(#grad2)" stroke="#fff" strokeWidth="3"/>
          <text x="340" y="58" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2007-2020</text>

          {/* Arrow 3 */}
          <path d="M 460,15 L 440,50 L 460,85 L 700,85 L 720,50 L 700,15 Z" fill="url(#grad3)" stroke="#fff" strokeWidth="3"/>
          <text x="580" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">2020</text>

          {/* Arrow 4 */}
          <path d="M 700,15 L 680,50 L 700,85 L 940,85 L 960,50 L 940,15 Z" fill="url(#grad4)" stroke="#fff" strokeWidth="3"/>
          <text x="820" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">TODAY</text>

          {/* Arrow 5 - last one with right point */}
          <path d="M 940,15 L 920,50 L 940,85 L 1160,85 L 1180,50 L 1160,15 Z" fill="url(#grad5)" stroke="#fff" strokeWidth="3"/>
          <text x="1050" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">FUTURE</text>
        </svg>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-4 mb-8">
        {[
          { bg: 'bg-[#d65a6c]', title: 'THE BEGINNING', year: '2007' },
          { bg: 'bg-[#e88880]', title: 'GROWTH', year: '2007-2020' },
          { bg: 'bg-[#f4a261]', title: 'UNIFICATION', year: '2020' },
          { bg: 'bg-[#e9c46a]', title: 'PRESENT', year: 'TODAY' },
          { bg: 'bg-[#5a9a8f]', title: 'FUTURE', year: 'FUTURE' }
        ].map((item, idx) => (
          <div key={idx}>
            <div className={`${item.bg} text-white text-center py-3 px-4 font-bold text-sm mb-2`}>
              {item.title}
            </div>
            <div className={`${item.bg} text-white text-center py-4 px-6 font-bold text-lg shadow-md`}>
              {item.year}
            </div>
          </div>
        ))}
      </div>

      {/* Down Arrows */}
      <div className="hidden md:grid grid-cols-5 gap-4 mb-6 px-8">
        {[
          { color: '#d65a6c' },
          { color: '#e88880' },
          { color: '#f4a261' },
          { color: '#e9c46a' },
          { color: '#5a9a8f' }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
          >
            <svg width="80" height="80" viewBox="0 0 60 60">
              <path d="M 30,12 L 18,26 L 26,26 L 26,48 L 34,48 L 34,26 L 42,26 Z" fill={item.color} transform="rotate(180 30 30)" stroke={item.color} strokeWidth="2"/>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Content Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          {
            bg: 'bg-[#d65a6c]',
            title: 'THE BEGINNING',
            desc: 'Launched Namma Mane Apartments on Old Airport Road, Bangalore - marking the beginning of our journey in creating quality living spaces.'
          },
          {
            bg: 'bg-[#e88880]',
            title: 'GROWTH PHASE',
            desc: 'Successfully developed multiple projects under various brands, building a strong foundation of trust and excellence across Bangalore.'
          },
          {
            bg: 'bg-[#f4a261]',
            title: 'UNIFICATION',
            desc: 'All visions came together under one unified identity — Fortune One, representing our commitment to excellence and innovation.'
          },
          {
            bg: 'bg-[#e9c46a]',
            title: 'MOVING FORWARD',
            desc: 'With three decades of experience, we continue redefining urban living with design, transparency, and timely delivery.'
          },
          {
            bg: 'bg-[#5a9a8f]',
            title: 'THE FUTURE',
            desc: 'Expanding our vision to create sustainable, innovative communities that set new standards in real estate development.'
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`${item.bg} text-white p-8 min-h-[280px] shadow-lg flex flex-col items-center justify-center`}
          >
            <p className="text-base leading-relaxed text-center text-gray-800 font-bold font-serif">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-gradient-to-br from-[#FFFBF7] via-[#FFF8F2] to-[#FFDBBB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-[#664930] mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#FFDBBB] to-[#F7E9DD] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-[#664930] rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#FFDBBB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#664930] text-center mb-4">VISION</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Our vision is to be a global leader in real estate, setting new benchmarks in design, quality, and customer care. We aspire to create iconic properties that blend modern living with sustainable practices, transforming skylines and enriching lives. By embracing innovation, personalization, and integrity, we aim to build communities where dreams take root and prosperity grows.
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#FFDBBB] to-[#F7E9DD] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-[#664930] rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#FFDBBB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#664930] text-center mb-4">VALUES</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#664930] font-bold mt-1">•</span>
                  <span><strong>Integrity</strong> – We uphold the highest ethical standards, ensuring honesty in every decision.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#664930] font-bold mt-1">•</span>
                  <span><strong>Customer-Centricity</strong> – Our clients' aspirations guide every step we take.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#664930] font-bold mt-1">•</span>
                  <span><strong>Excellence</strong> – We pursue perfection, delivering unmatched quality and attention to detail.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#664930] font-bold mt-1">•</span>
                  <span><strong>Innovation</strong> – We embrace creativity, technology, and forward-thinking solutions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#664930] font-bold mt-1">•</span>
                  <span><strong>Trust</strong> – We nurture lasting relationships built on transparency, reliability, and respect.</span>
                </li>
              </ul>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#F7E9DD] to-[#FFDBBB] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-[#664930] rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#FFDBBB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#664930] text-center mb-4">MISSION</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Our mission is to redefine the real estate experience by offering not just properties, but thoughtfully designed spaces that reflect luxury, trust, and innovation. We are committed to providing expert guidance and end-to-end services, ensuring every client's journey — from discovery to ownership — is smooth and rewarding. With a foundation built on customer satisfaction, transparency, and excellence, we strive to craft landmark developments that create lasting value and inspire future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Directors Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFF8F2] via-[#F5ECE5] to-[#FFDBBB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto mb-12"
          >
            <h2 className="text-5xl text-[#664930] mb-6 leading-tight">
              Meet The <span className="font-bold">Team</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet the visionary leaders driving Fortune One's success and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-[#1a1a1a] rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                  selectedDirector === director ? 'ring-4 ring-[#C9A55A] shadow-2xl' : ''
                }`}
                onClick={() => {
                  setSelectedDirector(director);
                  setIsModalOpen(true);
                }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                  {/* Bottom golden line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A55A] to-[#F4D88A]"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-[#C9A55A] mb-2">{director.name}</h3>
                  <p className="text-[#C9A55A]/70 mb-3">{director.position}</p>
                  <p className="text-white/90 text-sm leading-relaxed">{director.shortBio}</p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedDirector && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.3 }}
                className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <XMarkIcon className="h-6 w-6 text-[#664930]" />
                </button>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <img
                        src={selectedDirector.image}
                        alt={selectedDirector.name}
                        className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-3xl font-bold text-[#664930] mb-2">{selectedDirector.name}</h3>
                      <p className="text-xl text-[#664930]/70 mb-6">{selectedDirector.position}</p>
                      <p className="text-[#664930]/90 leading-relaxed whitespace-pre-line">{selectedDirector.bio}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFFBF7] via-[#FFF8F2] to-[#FFDBBB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-extrabold text-[#664930] mb-6 leading-tight">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Investment Opportunities */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#664930] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFDBBB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#664930] mb-3">Investment Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are dedicated to helping you discover rewarding opportunities in real estate investment. Our team conducts in-depth research, analyzes market trends, and evaluates every project with precision to guide you toward informed and profitable investment decisions.
                  </p>
                </div>
              </div>

              {/* Client Satisfaction */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#664930] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFDBBB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#664930] mb-3">Client Satisfaction</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building long-term relationships is at the heart of what we do. Your satisfaction is our top priority, and we strive to deliver personalized, high-quality service that exceeds expectations and earns your lasting trust.
                  </p>
                </div>
              </div>

              {/* Property Management */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#664930] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFDBBB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#664930] mb-3">Property Management</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Managing a property — whether residential, commercial, or mixed-use — can be complex. Our property management solutions simplify the process by handling tenant screening, rent collection, maintenance, and daily operations, giving you complete peace of mind and steady returns.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Why Choose Us"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#664930]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FFDBBB]/30 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
