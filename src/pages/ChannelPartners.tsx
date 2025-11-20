import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, DocumentIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const RECIPIENT_EMAIL = "huskanda7@gmail.com";

const ChannelPartners: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const benefits = [
    { icon: HomeIcon, title: 'Early access to all our homes', description: '' },
    { icon: DocumentIcon, title: 'Tailored marketing resources', description: '' },
    { icon: CurrencyDollarIcon, title: 'Competitive and enticing commission structure', description: '' }
  ];

  const testimonials = [
    // ... (your testimonials as before)
    {
      text: "We are delighted to collaborate with White Lotus Group as a trusted channel partner. Their commitment to excellence, innovative designs, and timely project delivery aligns perfectly with our vision of offering premium real estate investments. The quality of construction, attention to detail, and customer-centric approach make them a standout choice for discerning buyers.",
      name: "Gunja Gupta",
      company: "Saturn Realcon Pvt. Ltd."
    },
    {
      text: "Being associated with White Lotus has been a wonderful experience. We admire the warmth, flexibility for customization, and exceptional post-handover care the homes offer. Moreover, it's inspiring how your earlier projects have aged gracefully, retaining their charm and quality over the years.",
      name: "Priya Narayan and Alex Kurian",
      company: "Inscape Property Management Solutions"
    },
    {
      text: "Partnering with White Lotus Group has been exceptional. Their professional approach, transparent communication, and dedication to quality construction set them apart in the industry. The attention to architectural detail and use of premium materials make their projects highly desirable for our clientele.",
      name: "Rajesh Kumar",
      company: "Prime Realty Consultants"
    },
    {
      text: "White Lotus Group's commitment to sustainable living and eco-friendly construction practices aligns perfectly with our values. Their projects offer the perfect blend of luxury and environmental consciousness, making them an ideal partner for forward-thinking real estate professionals.",
      name: "Meera Sharma",
      company: "Green Homes Realty"
    },
    {
      text: "Working with White Lotus has elevated our portfolio significantly. Their innovative designs, strategic locations, and exceptional after-sales service ensure client satisfaction. The professionalism and integrity they bring to every project make them a trusted name in the real estate sector.",
      name: "Amit Patel",
      company: "Elite Property Advisors"
    },
    {
      text: "As a channel partner, we've witnessed firsthand the exceptional standards White Lotus Group maintains across all their developments. Their commitment to timely delivery, premium finishes, and customer satisfaction has made our collaboration extremely rewarding. They truly understand what modern homebuyers are looking for.",
      name: "Sandeep Verma",
      company: "Skyline Property Solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Partner form state
  const [partnerForm, setPartnerForm] = useState({
    partnerName: '',
    companyName: '',
    phone: '',
    email: '',
    comments: '',
  });

  // Lead form state
  const [leadForm, setLeadForm] = useState({
    partnerPhone: '',
    leadFirstName: '',
    leadContact: '',
    leadEmail: '',
    projectInterested: 'Vista',
    comments: '',
  });

  const [sending, setSending] = useState(false);

  const onPartnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPartnerForm({ ...partnerForm, [e.target.name]: e.target.value });
  };

  const onLeadChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setLeadForm({ ...leadForm, [e.target.name]: e.target.value });
  };

  // Utility to open mail client via mailto, fallback copies to clipboard and alerts user
  const sendMailWithFallback = async (subject: string, body: string) => {
    const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSending(true);
    try {
      // Attempt to open default mail client
      window.location.href = mailto;
      // Good UX: close modals happen in caller
    } catch (err) {
      // try open in new tab
      try {
        window.open(mailto, '_blank');
      } catch (e) {
        // fallback: copy to clipboard
        try {
          await navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
          alert(`Could not open mail client. Email text copied to clipboard. Please paste into an email to ${RECIPIENT_EMAIL}.`);
        } catch (copyErr) {
          alert(`Please email this to ${RECIPIENT_EMAIL}:\n\nSubject: ${subject}\n\n${body}`);
        }
      }
    } finally {
      setSending(false);
    }
  };

  // Partner form submit handler
  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // minimal validation
    if (!partnerForm.partnerName.trim() || !partnerForm.companyName.trim() || !partnerForm.phone.trim()) {
      alert('Please fill Partner Name, Company/Agency Name and Phone Number.');
      return;
    }

    const subject = 'Partner Registration - Fortune One';
    const bodyLines = [
      `Partner Name: ${partnerForm.partnerName || 'N/A'}`,
      `Company / Agency Name: ${partnerForm.companyName || 'N/A'}`,
      `Phone Number: ${partnerForm.phone || 'N/A'}`,
      `Email ID: ${partnerForm.email || 'N/A'}`,
      `Comments: ${partnerForm.comments || 'N/A'}`,
      '',
      '— Sent from Channel Partners page'
    ];
    const body = bodyLines.join('\n');

    await sendMailWithFallback(subject, body);

    // close & reset
    setShowPartnerForm(false);
    setPartnerForm({ partnerName: '', companyName: '', phone: '', email: '', comments: '' });
  };

  // Lead form submit handler
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.partnerPhone.trim() || !leadForm.leadFirstName.trim() || !leadForm.leadContact.trim()) {
      alert('Please fill Registered Channel Partner Phone Number, Lead First Name and Lead Contact.');
      return;
    }

    const subject = 'Lead Registration - Fortune One';
    const bodyLines = [
      `Registered Channel Partner Phone Number: ${leadForm.partnerPhone || 'N/A'}`,
      `Lead First Name: ${leadForm.leadFirstName || 'N/A'}`,
      `Lead Contact: ${leadForm.leadContact || 'N/A'}`,
      `Lead Email ID: ${leadForm.leadEmail || 'N/A'}`,
      `Project interested in: ${leadForm.projectInterested || 'N/A'}`,
      `Comments: ${leadForm.comments || 'N/A'}`,
      '',
      '— Sent from Channel Partners page'
    ];
    const body = bodyLines.join('\n');

    await sendMailWithFallback(subject, body);

    // close & reset
    setShowLeadForm(false);
    setLeadForm({ partnerPhone: '', leadFirstName: '', leadContact: '', leadEmail: '', projectInterested: 'Vista', comments: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDBBB] via-[#FFF8F2] to-[#F7E9DD] text-[#664930]">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat px-8"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl text-left text-white">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Be the bridge to{' '}
              <span className="bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] bg-clip-text text-transparent">
                luxury
              </span>{' '}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-8">
              "And elevate your business with our premium real estate portfolio"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPartnerForm(true)}
                className="bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] text-[#664930] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Partner Registration
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLeadForm(true)}
                className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Lead Registration
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative min-h-[60vh] overflow-hidden py-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        >
          <div className="absolute inset-0 bg-[#E8D5C4]/90"></div>
        </div>

        <div className="relative z-10 py-20 px-8 md:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <h2 className="text-3xl font-serif italic text-[#664930]">Why Partner With Us</h2>
            <div className="w-full h-px bg-[#664930]/30 mt-6"></div>
          </motion.div>

          <div className="flex items-start justify-center gap-12 md:gap-20 flex-wrap md:flex-nowrap">
            {benefits.map((benefit, index) => (
              <React.Fragment key={index}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="flex items-start gap-5">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                    <benefit.icon className="h-14 w-14 text-[#664930]" strokeWidth={1.5} />
                  </motion.div>
                  <p className="text-base md:text-lg text-[#664930] leading-relaxed font-normal max-w-[180px]">
                    {benefit.title}
                  </p>
                </motion.div>
                {index < benefits.length - 1 && <div className="hidden md:block h-20 w-px bg-[#664930]/30"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Building Beyond Section */}
      <section className="py-16 bg-gradient-to-br from-[#F5F5F0] to-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
              <img src="/bl 2.png" alt="Modern entrance" className="rounded-3xl shadow-2xl w-full h-auto" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#664930] leading-tight">Building beyond walls and spaces.</h2>
              <p className="text-lg text-gray-700 leading-relaxed">At Fortune One, every project begins with a vision — to redefine what modern living feels like. We focus on thoughtful design, meaningful details, and sustainable choices that add long-term value to every community we create.</p>
              <p className="text-lg text-gray-700 leading-relaxed">Our goal is simple — to build environments where comfort meets purpose, and every day feels inspired.</p>
              <div className="pt-4">
                <p className="text-xl font-semibold text-[#664930]">We don't just build for today.</p>
                <p className="text-xl font-semibold text-[#664930]">We build for what tomorrow deserves.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
            <h2 className="text-4xl font-serif italic text-[#664930] mb-4">Testimonials</h2>
            <div className="w-full h-px bg-[#997E67]"></div>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
                  {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                    <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} whileHover={{ scale: 1.02, y: -5 }} className="bg-gradient-to-br from-[#3A3F4C] to-[#2A2F3C] rounded-3xl p-10 text-white shadow-2xl border border-[#C9A55A]/20 hover:shadow-3xl hover:border-[#C9A55A]/40 transition-all duration-300">
                      <div className="mb-8"><span className="text-6xl text-white/40 font-serif">"</span></div>
                      <p className="text-base leading-relaxed mb-12 text-white/90">{testimonial.text}</p>
                      <div><h4 className="font-semibold text-lg">{testimonial.name}</h4><p className="text-sm text-white/60">{testimonial.company}</p></div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#664930] w-8' : 'bg-[#664930]/30'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Registration Modal */}
      <AnimatePresence>
        {showPartnerForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 font-serif">Partner Registration</h2>

              <form id="partner-registration-form" className="space-y-5" onSubmit={handlePartnerSubmit}>
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Partner Name <span className="text-red-500">*</span></label>
                  <input name="partnerName" value={partnerForm.partnerName} onChange={onPartnerChange} type="text" className="w-full bg-gray-100 rounded-md p-3" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Company / Agency Name <span className="text-red-500">*</span></label>
                  <input name="companyName" value={partnerForm.companyName} onChange={onPartnerChange} type="text" className="w-full bg-gray-100 rounded-md p-3" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Phone Number <span className="text-red-500">*</span></label>
                  <input name="phone" value={partnerForm.phone} onChange={onPartnerChange} type="text" className="w-full bg-gray-100 rounded-md p-3" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Email ID</label>
                  <input name="email" value={partnerForm.email} onChange={onPartnerChange} type="email" className="w-full bg-gray-100 rounded-md p-3" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Comments</label>
                  <textarea name="comments" value={partnerForm.comments} onChange={onPartnerChange} rows={3} className="w-full bg-gray-100 rounded-md p-3"></textarea>
                </div>

                <div className="flex justify-between mt-6">
                  <button type="button" onClick={() => setShowPartnerForm(false)} className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
                  <button type="submit" className="bg-[#1a1a27] text-white px-5 py-2 rounded-lg hover:bg-[#33334d] transition">{sending ? 'Preparing...' : 'Submit'}</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lead Registration Modal */}
      <AnimatePresence>
        {showLeadForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 font-serif">Lead Registration</h2>

              <form id="lead-registration-form" className="space-y-5" onSubmit={handleLeadSubmit}>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Registered Channel Partner Phone Number <span className="text-red-500">*</span></label>
                  <input name="partnerPhone" value={leadForm.partnerPhone} onChange={onLeadChange} type="text" className="w-full bg-gray-100 rounded-md p-3" />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-1">Lead First Name <span className="text-red-500">*</span></label>
                  <input name="leadFirstName" value={leadForm.leadFirstName} onChange={onLeadChange} type="text" className="w-full bg-gray-100 rounded-md p-3" />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-1">Lead Contact <span className="text-red-500">*</span></label>
                  <input name="leadContact" value={leadForm.leadContact} onChange={onLeadChange} type="text" className="w-full bg-gray-100 rounded-md p-3" />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-1">Lead Email ID</label>
                  <input name="leadEmail" value={leadForm.leadEmail} onChange={onLeadChange} type="email" className="w-full bg-gray-100 rounded-md p-3" />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-1">Project interested in <span className="text-red-500">*</span></label>
                  <select name="projectInterested" value={leadForm.projectInterested} onChange={onLeadChange} className="w-full bg-gray-100 rounded-md p-3">
                    <option>Vista</option>
                    <option>EshaVana</option>
                    <option>Skylark</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-1">Comments</label>
                  <textarea name="comments" value={leadForm.comments} onChange={onLeadChange} rows={3} className="w-full bg-gray-100 rounded-md p-3"></textarea>
                </div>

                <div className="flex justify-between mt-6">
                  <button type="button" onClick={() => setShowLeadForm(false)} className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
                  <button type="submit" className="bg-[#1a1a27] text-white px-5 py-2 rounded-lg hover:bg-[#33334d] transition">{sending ? 'Preparing...' : 'Submit'}</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChannelPartners;
