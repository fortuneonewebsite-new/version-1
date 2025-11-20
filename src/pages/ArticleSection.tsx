import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NewspaperIcon, ChartBarIcon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface Article {
  title: string;
  excerpt: string;
  fullContent: string;
  icon: React.ReactElement;
  readTime: string;
}

const articles: Article[] = [
  {
    title: "The Future of Smart Homes: What to Expect in 2025",
    excerpt: "Discover how Fortune One is pioneering smart home technology with AI-integrated living spaces that anticipate your needs and enhance your lifestyle.",
    fullContent: "Discover how Fortune One is pioneering smart home technology with AI-integrated living spaces that anticipate your needs and enhance your lifestyle. Our upcoming projects feature voice-activated controls, automated energy management, and seamless integration with mobile devices. Experience the luxury of homes that learn your preferences and adapt to your daily routines. With Fortune One, step into the future of residential living where technology meets elegance.",
    icon: <HomeIcon className="h-8 w-8" />,
    readTime: "3 min read"
  },
  {
    title: "Investment Trends: Why Bangalore Real Estate is Booming",
    excerpt: "Explore the factors driving Bangalore's property market growth and how Fortune One's strategic locations offer unparalleled investment opportunities.",
    fullContent: "Explore the factors driving Bangalore's property market growth and how Fortune One's strategic locations offer unparalleled investment opportunities. Bangalore's IT sector expansion, infrastructure development, and increasing population make it a prime location for real estate investment. Our properties in key areas like Whitefield and Electronic City provide excellent rental yields and long-term appreciation potential. Partner with Fortune One for secure, profitable real estate investments in India's Silicon Valley.",
    icon: <ChartBarIcon className="h-8 w-8" />,
    readTime: "4 min read"
  },
  {
    title: "Sustainable Living: Eco-Friendly Homes That Don't Compromise Luxury",
    excerpt: "Learn about Fortune One's commitment to green building practices, featuring energy-efficient designs and sustainable materials for conscious living.",
    fullContent: "Learn about Fortune One's commitment to green building practices, featuring energy-efficient designs and sustainable materials for conscious living. Our eco-friendly homes incorporate solar panels, rainwater harvesting, green roofs, and low-VOC materials. Experience luxury living that cares for the environment with LEED-certified designs, reduced carbon footprint, and smart energy systems. At Fortune One, sustainability meets sophistication in every detail.",
    icon: <NewspaperIcon className="h-8 w-8" />,
    readTime: "3 min read"
  },
  {
    title: "Luxury Amenities: Redefining Modern Living Standards",
    excerpt: "Experience world-class amenities at Fortune One properties, from infinity pools to state-of-the-art fitness centers and gourmet dining options.",
    fullContent: "Experience world-class amenities at Fortune One properties, from infinity pools to state-of-the-art fitness centers and gourmet dining options. Our communities feature landscaped gardens, children's play areas, concierge services, and 24/7 security. Enjoy the convenience of on-site retail spaces, business centers, and recreational facilities. Fortune One sets new standards in luxury living with thoughtfully designed spaces that cater to every aspect of modern life.",
    icon: <HomeIcon className="h-8 w-8" />,
    readTime: "3 min read"
  },
  {
    title: "Location Advantage: Prime Spots for Your Dream Home",
    excerpt: "Discover Fortune One's strategically located properties near major business hubs, schools, hospitals, and entertainment centers in Bangalore.",
    fullContent: "Discover Fortune One's strategically located properties near major business hubs, schools, hospitals, and entertainment centers in Bangalore. Our developments in Koramangala, Indiranagar, and JP Nagar offer easy access to metro stations, international schools, and healthcare facilities. Experience the perfect blend of urban convenience and peaceful living with Fortune One's prime real estate locations that enhance your quality of life.",
    icon: <ChartBarIcon className="h-8 w-8" />,
    readTime: "4 min read"
  }
];

const ArticleSection = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedArticle, setSelectedArticle] = React.useState<Article | null>(null);

  const openModal = (article: Article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const openAllModal = () => {
    setSelectedArticle(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
  };

  return (
    <section className="py-8 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-extrabold text-[#664930] mb-4 leading-tight">
            Insights & Trends
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest in real estate, investment strategies, and lifestyle trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.slice(0, 3).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:border-white/60 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => openModal(article)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#664930]/10 rounded-2xl text-[#664930] group-hover:bg-[#664930] group-hover:text-white transition-all duration-300">
                  {article.icon}
                </div>
                <span className="text-sm text-[#664930]/60 font-medium">{article.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#664930] mb-4 leading-tight group-hover:text-[#997E67] transition-colors duration-300">
                {article.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="flex items-center text-[#997E67] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Read More</span>
                <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            className="px-8 py-4 bg-[#664930] text-white font-semibold rounded-2xl hover:bg-[#997E67] transition-colors duration-300 shadow-lg hover:shadow-xl"
            onClick={openAllModal}
          >
            View All Articles
          </button>
        </motion.div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {selectedArticle ? (
                <motion.div
                  className="bg-white rounded-3xl max-w-3xl w-full p-8 relative shadow-xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <button
                    className="absolute top-4 right-4 text-[#664930] hover:text-[#997E67]"
                    onClick={closeModal}
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="h-8 w-8" />
                  </button>
                  <h3 className="text-3xl font-bold text-[#664930] mb-4">
                    {selectedArticle.title}
                  </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {selectedArticle.fullContent}
                        </p>
                  <p className="text-[#664930]/70 italic text-sm">
                    Estimated read time: {selectedArticle.readTime}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  className="bg-white rounded-3xl max-w-6xl w-full p-8 relative shadow-xl max-h-[80vh] overflow-y-auto"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <button
                    className="absolute top-4 right-4 text-[#664930] hover:text-[#997E67]"
                    onClick={closeModal}
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="h-8 w-8" />
                  </button>
                  <h3 className="text-4xl font-bold text-[#664930] mb-8 text-center">
                    All Articles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group cursor-pointer bg-gradient-to-br from-[#FFF8F2] to-[#F5ECE5] p-8 border border-[#997E67]/20 hover:border-[#997E67]/40 transition-all duration-300 shadow-lg hover:shadow-xl rounded-3xl"
                        onClick={() => openModal(article)}
                      >
                        <div className="flex items-center justify-between mb-6">
                          <div className="p-3 bg-[#664930]/10 rounded-2xl text-[#664930] group-hover:bg-[#664930] group-hover:text-white transition-all duration-300">
                            {article.icon}
                          </div>
                          <span className="text-sm text-[#664930]/60 font-medium">{article.readTime}</span>
                        </div>

                        <h4 className="text-2xl font-bold text-[#664930] mb-4 leading-tight group-hover:text-[#997E67] transition-colors duration-300">
                          {article.title}
                        </h4>

                        <p className="text-gray-600 leading-relaxed mb-6">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center text-[#997E67] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          <span>Read More</span>
                          <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArticleSection;
