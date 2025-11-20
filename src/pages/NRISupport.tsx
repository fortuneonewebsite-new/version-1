import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlobeAltIcon, CreditCardIcon, PhoneIcon, DocumentCheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const NRISupport = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    time: '',
    message: '',
  });
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon to schedule your consultation.');
    setShowConsultationForm(false);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      time: '',
      message: '',
    });
  };

  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Global Reach',
      description: 'Dedicated support for NRIs across the world with local expertise'
    },
    {
      icon: CreditCardIcon,
      title: 'Easy Financing',
      description: 'Specialized NRI loan assistance and flexible payment options'
    },
    {
      icon: DocumentCheckIcon,
      title: 'Legal Assistance',
      description: 'Complete documentation support and legal compliance guidance'
    },
    {
      icon: PhoneIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support across multiple time zones'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Virtual meeting to understand your requirements and budget'
    },
    {
      step: '02',
      title: 'Property Selection',
      description: 'Curated property options based on your preferences'
    },
    {
      step: '03',
      title: 'Virtual Tours',
      description: 'High-quality virtual tours and video calls with our team'
    },
    {
      step: '04',
      title: 'Documentation',
      description: 'Complete paperwork assistance and legal verification'
    },
    {
      step: '05',
      title: 'Property Handover',
      description: 'Seamless property handover with quality assurance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDBBB] via-[#FFF8F2] to-[#F7E9DD] text-[#664930]">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Enhanced Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40 z-10" />

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

        {/* Hero Content */}
        <div className="relative z-30 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                NRI Support
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl"
              >
                Specialized services for Non-Resident Indians looking to invest in premium real estate back home. We make your property investment journey seamless from anywhere in the world.
              </motion.p>
            </motion.div>
          </div>
        </div>

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

      <div className="py-20 px-8">

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              NRI
              <span className="bg-gradient-to-r from-[#664930] to-[#997E67] bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support tailored for Non-Resident Indians
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -15, rotateY: 10, scale: 1.05 }}
                className="bg-gradient-to-br from-[#FFFBF8] to-[#F5E9E1] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#664930] to-[#997E67] rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <service.icon className="h-8 w-8 text-[#FFDBBB]" />
                </motion.div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFFBF8] to-[#F5E9E1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our
              <span className="bg-gradient-to-r from-[#664930] to-[#997E67] bg-clip-text text-transparent">
                {' '}Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process to make your property investment hassle-free
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                  className={`max-w-lg bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#664930] to-[#997E67] rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4"
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-[18px] font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Invest from Abroad?
            </h2>
            <p className="text-xl text-[#F5E9E1] mb-8 max-w-2xl mx-auto">
              Let our NRI specialists guide you through your property investment journey with personalized support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConsultationForm(true)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] text-gray-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white hover:text-[#664930] transition-all duration-300"
              >
                Download NRI Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Popup Modal */}
      {showConsultationForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowConsultationForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Schedule a Consultation</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Preferred Time</label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  placeholder="e.g. 10 AM - 12 PM"
                  className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]"
                  placeholder="Any special requests or details?"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowConsultationForm(false)}
                  className="flex-1 py-2 border-2 border-[#CCBEB1] text-[#664930] font-semibold rounded-xl hover:bg-[#CCBEB1]/20"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-semibold rounded-xl hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
      </div>
    </div>
  );
};

export default NRISupport;
