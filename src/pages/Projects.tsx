import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, NoSymbolIcon } from '@heroicons/react/24/outline';

type Plan = { title: string; image: string; description: string } | null;

const Projects: React.FC = () => {
  const [showSiteVisitForm, setShowSiteVisitForm] = useState(false);
  const [showVistaDetails, setShowVistaDetails] = useState(false);
  const [showEshaVanaDetails, setShowEshaVanaDetails] = useState(false);
  const [showMasterPlanModal, setShowMasterPlanModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null);
  const [skylarkIndex, setSkylarkIndex] = useState(0);
  const [eshaVanaIndex, setEshaVanaIndex] = useState(0);
  const [vistaIndex, setVistaIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Tracks which project opened the Schedule Visit modal
  const [currentProject, setCurrentProject] = useState<string>("");

  // Optional: disable submit briefly while opening mail client
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    timings: "",
    message: "",
  });

  // Exactly three projects (mapped accordingly)
  const projects = [
    {
      id: 1,
      title: "Vista",
      location: "Bengaluru Rural",
      price: "33.5L",
      type: "Premium Villa Plots",
      images: ["/bl 19.JPG", "/bl 2.png", "/bl 5.png", "/bl 6.png", "/bl 8.png", "/bl 9.png", "/bl 10.png", "/bl 18.png", "/bl 20 (1).JPG", "/bl 12.png", "/bl 4.png"],
      image: "/bl 19.JPG",
      status: "Selling Fast",
      features: ["1200-1500 sft", "Gated Community"],
    },
    {
      id: 2,
      title: "EshaVana",
      location: "Hesaragatta, Bengaluru Rural",
      price: "93L",
      type: "Premium Farm Lands",
      images: ["/ew 1.jpg", "/ew 2.jpg", "/ew 9 (1).jpg", "/ew 10 (1).jpg", "/ew 16.jpg", "/ew 17.jpg", "/ew 18.jpg", "/ew 19.jpg", "/ew 20.jpg", "/ew 21.jpg", "/ew 22.jpg", "/ew 23.jpg", "/ew 24.jpg", "/ew 26.jpg", "/ew 10 (1).jpg", "/ew 9 (1).jpg", "/ew 17.jpg", "/ew 19.jpg"],
      image: "/ew 1.jpg",
      status: "Pre-Launch",
      features: ["6000-12000 sft", "OOP.Grassland", "Club House", "Gated Community"],
    },
    {
      id: 3,
      title: "Skylark",
      location: "Devanahalli, Bangalore",
      price: "",
      type: "Special Agri Plots",
      images: ["/Skylark-04.jpg", "/Skylark-05.jpg", "/Skylark-06.jpg"],
      image: "/Skylark-06.jpg",
      status: "Sold Out",
      features: ["Smart Home", "Gym & Pool", "Parking"],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const skylarkInterval = setInterval(() => {
      setSkylarkIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    const eshaVanaInterval = setInterval(() => {
      setEshaVanaIndex((prevIndex) => (prevIndex + 1) % 18);
    }, 3000);
    const vistaInterval = setInterval(() => {
      setVistaIndex((prevIndex) => (prevIndex + 1) % 11);
    }, 3000);
    const galleryInterval = setInterval(() => {
      setGalleryIndex((prevIndex) => (prevIndex + 1) % 13);
    }, 3000);
    return () => {
      clearInterval(skylarkInterval);
      clearInterval(eshaVanaInterval);
      clearInterval(vistaInterval);
      clearInterval(galleryInterval);
    };
  }, []);

  // Client-only mailto handler (no backend, opens user's mail client)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic required fields check
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert("Please fill First Name, Last Name, Phone and Email.");
      return;
    }

    const projectName = currentProject || selectedPlan?.title || "N/A";

    const bodyLines = [
      `Project: ${projectName}`,
      `First Name: ${formData.firstName.trim()}`,
      `Last Name: ${formData.lastName.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Address: ${formData.address.trim() || "N/A"}`,
      `Preferred Timings: ${formData.timings.trim() || "N/A"}`,
      `Message: ${formData.message.trim() || "N/A"}`,
      "",
      "— Sent from Fortune One website",
    ];

    const body = bodyLines.join("\n");

    const mailto = `mailto:huskanda7@gmail.com?subject=${encodeURIComponent("Site Visit Request")}&body=${encodeURIComponent(body)}`;

    setSending(true);

    // Try to open mail client
    try {
      window.location.href = mailto;
    } catch (err) {
      try {
        window.open(mailto, "_blank");
      } catch (e) {
        console.error("Failed to open mail client:", e);
        alert("Unable to open mail client. Please copy the form details and email to huskanda7@gmail.com");
      }
    } finally {
      // close modal and reset
      setShowSiteVisitForm(false);
      setCurrentProject("");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        timings: "",
        message: "",
      });
      setTimeout(() => setSending(false), 800);
    }
  };

  // helper to open site visit with project name
  const openSiteVisit = (projectName: string) => {
    setCurrentProject(projectName);
    setShowSiteVisitForm(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] text-[#664930]">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

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

        <div className="relative z-30 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
                style={{ textShadow: '0 8px 30px rgba(0,0,0,0.9)' }}
              >
                Our Ongoing Project
              </motion.h1>
            </motion.div>
          </div>
        </div>

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
        <section className="py-16 text-center">
          <motion.h2
            className="text-3xl md:text-4xl italic font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="font-bold not-italic">Fortune One</span> — where living meets inspiration.
          </motion.h2>
          <motion.p
            className="text-lg italic text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Each home is built to elevate your lifestyle, offering the perfect balance of luxury, serenity, and connection.
            <br />
            Your journey to better living starts here.
          </motion.p>
        </section>

        {/* Master Plans Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Master Plans</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the detailed layouts and designs of our premium residential projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vista Master Plan */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="relative">
                  <img src="/Brochure vistaa_Master plan-02.jpg" alt="Vista Master Plan" className="w-full h-80 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[#664930] rounded-full text-sm font-semibold">Vista</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Vista Master Plan</h3>
                  <p className="text-gray-600 text-sm mb-4">Detailed layout showcasing premium villa plots with modern amenities and green spaces</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedPlan({
                        title: "Vista Master Plan",
                        image: "/Brochure vistaa_Master plan-02.jpg",
                        description: "Detailed layout showcasing premium villa plots with modern amenities and green spaces"
                      });
                      setShowMasterPlanModal(true);
                    }}
                    className="w-full py-2 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    View Full Plan
                  </motion.button>
                </div>
              </motion.div>

              {/* EshaVana Master Plan */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="relative">
                  <img src="/Eesha Wana Masterplan with lable-01.jpg" alt="EshaVana Master Plan" className="w-full h-80 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[#664930] rounded-full text-sm font-semibold">EshaVana</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">EshaVana Master Plan</h3>
                  <p className="text-gray-600 text-sm mb-4">Comprehensive layout featuring premium farm lands with amenities</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedPlan({
                        title: "EshaVana Master Plan",
                        image: "/Eesha Wana Masterplan with lable-01.jpg",
                        description: "Comprehensive layout featuring premium farm lands with amenities"
                      });
                      setShowMasterPlanModal(true);
                    }}
                    className="w-full py-2 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    View Full Plan
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Photo Gallery Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Photo Gallery</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our latest projects through stunning visuals</p>
            </motion.div>

            <div className="relative w-full h-[700px] overflow-hidden rounded-2xl shadow-2xl">
              {["/1.jpeg","/2.jpeg","/3.jpeg","/4.jpeg","/5.jpeg","/6.jpeg","/7.jpeg","/8.jpeg","/9.jpeg","/10.jpeg","/11.jpeg","/12.jpeg","/13.jpeg"].map((image, index) => (
                <motion.img key={index} src={image} alt={`Gallery ${index+1}`} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: index === galleryIndex ? 1 : 0 }} transition={{ duration: 1, ease: "easeInOut" }} />
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Array.from({ length: 13 }).map((_, i) => (
                  <button key={i} onClick={() => setGalleryIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === galleryIndex ? "bg-white" : "bg-white/50"}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Fortune{" "}
                <span className="bg-gradient-to-r from-[#997E67] to-[#664930] bg-clip-text text-transparent">Projects Gallery</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-[5%]">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={project.title.toLowerCase()}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl ${project.title === "Skylark" ? "min-h-[63vh]" : "min-h-[70vh]"}`}
                >
                  {/* Status tag in top right corner */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[#664930] rounded-full text-sm font-semibold">{project.status}</span>
                  </div>
                  {/* Vista Image in top left corner */}
                  {project.title === "Vista" && (
                    <div className="absolute top-4 left-4 z-10">
                      <img src="/img3.png" alt="Vista Special" className="w-20 h-20 object-contain rounded-xl shadow-lg bg-white/80" />
                    </div>
                  )}
                  {/* EshaVana Image in top left corner */}
                  {project.title === "EshaVana" && (
                    <div className="absolute top-4 left-4 z-10">
                      <img src="/img1.png" alt="EshaVana Special" className="w-20 h-20 object-contain rounded-xl shadow-lg bg-white/80" />
                    </div>
                  )}
                  {/* Skylark Image in top left corner */}
                  {project.title === "Skylark" && (
                    <div className="absolute top-4 left-4 z-10">
                      <img src="/img2.png" alt="Skylark Special" className="w-20 h-20 object-contain rounded-xl shadow-lg bg-white/80" />
                    </div>
                  )}
                  {/* Skylark (carousel small), EshaVana, Vista handled accordingly */}
                  {project.title === "Skylark" ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <img src={project.images ? project.images[skylarkIndex] : project.image} alt={project.title} className="h-full w-full object-cover" />
                      {/* Sold Out Small Card */}
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
                        <img src="/sold out.jpeg" alt="Sold Out" className="w-16 h-16 object-cover rounded-xl" />
                      </div>
                      <button onClick={() => setSkylarkIndex((p) => (p - 1 + 3) % 3)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg z-20">
                        <ChevronLeftIcon className="h-5 w-5 text-[#664930]" />
                      </button>
                      <button onClick={() => setSkylarkIndex((p) => (p + 1) % 3)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg z-20">
                        <ChevronRightIcon className="h-5 w-5 text-[#664930]" />
                      </button>
                      <div className="absolute bottom-4 right-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4 max-w-xs">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-2 text-sm"><span className="mr-2">📍</span>{project.location}</p>
                        <p className="text-gray-700 mb-3 text-sm">{project.type}</p>
                        <div className="flex gap-2 mb-3">
                          {project.features.map((f, i) => <span key={i} className="px-2 py-1 bg-[#F7E9DD] rounded-full text-xs text-[#664930]">{f}</span>)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Vista & EshaVana blocks are similar (image + overlay)
                    <div className="relative w-full h-full min-h-[70vh] overflow-hidden">
                      <img src={project.images ? project.images[project.title === "Vista" ? vistaIndex : eshaVanaIndex] : project.image} alt={project.title} className="h-full w-full object-cover" />
                      <button onClick={() => project.title === "Vista" ? setVistaIndex((p) => (p - 1 + 11) % 11) : setEshaVanaIndex((p) => (p - 1 + 18) % 18)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg">
                        <ChevronLeftIcon className="h-5 w-5 text-[#664930]" />
                      </button>
                      <button onClick={() => project.title === "Vista" ? setVistaIndex((p) => (p + 1) % 11) : setEshaVanaIndex((p) => (p + 1) % 18)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg">
                        <ChevronRightIcon className="h-5 w-5 text-[#664930]" />
                      </button>

                      <div className="absolute bottom-4 right-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4 max-w-xs">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-2 text-sm"><span className="mr-2">📍</span>{project.location}</p>
                        <p className="text-[#997E67] font-semibold text-lg mb-2">{project.price}</p>
                        <p className="text-gray-700 mb-3 text-sm">{project.type}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.features.map((f, i) => <span key={i} className="px-2 py-1 bg-[#F7E9DD] rounded-full text-xs text-[#664930]">{f}</span>)}
                        </div>

                        <div className="flex gap-2">
                          <button onClick={() => { project.title === "Vista" ? setShowVistaDetails(true) : setShowEshaVanaDetails(true); }} className="flex-1 py-2 border-2 border-[#997E67] text-[#664930] rounded-2xl">View More</button>
                          <button onClick={() => openSiteVisit(project.title)} className="flex-1 py-2 bg-gradient-to-r from-[#664930] to-[#997E67] text-white rounded-2xl">Schedule Visit</button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vista Details Modal */}
        {showVistaDetails && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowVistaDetails(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white/90 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowVistaDetails(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">×</button>
              <h3 className="text-3xl font-bold mb-6 text-center text-[#664930]">Fortune One Vistaa</h3>
              <div className="space-y-4 text-gray-700">
                <div className="text-center mb-4">
                  <p className="text-gray-600 mb-2 flex items-center justify-center text-lg"><span className="mr-2">📍</span>Chikkaballapur, North Bengaluru</p>
                  <p className="text-[#997E67] font-semibold text-xl mb-2">33.5L</p>
                  <p className="text-gray-700 text-lg mb-4">Premium Villa Plots</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {["1200-1500 sft", "Gated Community", "Thematic Landscaped Greenery", "Club House"].map((f,i) => <span key={i} className="px-3 py-1 bg-[#F7E9DD] rounded-full text-sm text-[#664930]">{f}</span>)}
                  </div>
                </div>
                <p className="text-lg font-semibold text-[#997E67]">Exclusive Plotted Development near Isha Foundation</p>
                <p>Nestled near the peaceful Isha Foundation in Chikkaballapur, North Bengaluru, Fortune One Vistaa is an exclusive plotted development featuring just 55 premium villa plots ranging from 1200 sqft. to 1500 sqft. Set against the stunning backdrop of Nandi Hills, this project is thoughtfully designed for those who desire a harmonious blend of nature, comfort, and modern living. With thematic landscaped greenery that inspires a sense of calm and a fully equipped clubhouse for recreation and relaxation, Fortune One Vistaa offers a rare opportunity to own a piece of tranquility in an upscale setting. Limited to only 55 plots, it ensures exclusivity while promising a lifestyle of elegance and serenity.</p>
                <div className="bg-[#F7E9DD] p-4 rounded-lg">
                  <p><strong>RERA No:</strong> PRM/KA/RERA/1254/460/PR/280325/007638</p>
                  <p><strong>Location:</strong> Bengaluru Rural</p>
                  <p><strong>Status:</strong> Selling Fast</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* EshaVana Details Modal */}
        {showEshaVanaDetails && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowEshaVanaDetails(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white/90 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowEshaVanaDetails(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">×</button>
              <h3 className="text-3xl font-bold mb-6 text-center text-[#664930]">Fortune One EshaVana</h3>
              <div className="space-y-4 text-gray-700">
                <div className="text-center mb-4">
                  <p className="text-gray-600 mb-2 flex items-center justify-center text-lg"><span className="mr-2">📍</span>Hesaragatta, Bengaluru Rural</p>
                  <p className="text-[#997E67] font-semibold text-xl mb-2">93L</p>
                  <p className="text-gray-700 text-lg mb-4">Premium Farm Lands</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {["6000-12000 sft", "OOP", "Grassland", "Club House", "Gated Community"].map((f,i) => <span key={i} className="px-3 py-1 bg-[#F7E9DD] rounded-full text-sm text-[#664930]">{f}</span>)}
                  </div>
                </div>
                <p className="text-lg font-semibold text-[#997E67]">Premium Farm Lands in Hesaragatta, Bengaluru Rural</p>
                <p>Fortune One EshaVana offers premium farm lands designed for those seeking a serene and luxurious lifestyle.</p>
                <p>At Fortune One EshaVana, the Havana Clubhouse is designed as a serene retreat where nature and community come together. With sloped roofs and open spaces, it seamlessly blends with the lush surroundings, creating shaded areas where families can relax and children can play under tree canopies-reviving the charm of nature-filled childhoods. Beyond relaxation, Havana offers thoughtfully designed recreation spaces, including yoga decks, basketball courts, and cricket nets, all set within greenery. Whether unwinding in peaceful corners or engaging in outdoor activities, Havana is more than a clubhouse-it's a sanctuary for wellness and togetherness.</p>
                <div className="bg-[#F7E9DD] p-4 rounded-lg">
                  <p><strong>Location:</strong> Hesaragatta, Bengaluru Rural</p>
                  <p><strong>Status:</strong> Pre-Launch</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Master Plan Modal */}
        {showMasterPlanModal && selectedPlan && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowMasterPlanModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-6xl w-full shadow-2xl relative max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowMasterPlanModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl z-10 bg-white/90 rounded-full w-6 h-6 flex items-center justify-center shadow-md">×</button>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-[#664930] mb-2">{selectedPlan.title}</h3>
                <p className="text-gray-600">{selectedPlan.description}</p>
              </div>
              <div className="relative w-full h-[70vh] overflow-auto rounded-xl bg-gray-50">
                <img src={selectedPlan.image} alt={selectedPlan.title} className="w-full h-auto object-contain min-h-[70vh]" />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Site Visit Popup Modal */}
        {showSiteVisitForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => { setShowSiteVisitForm(false); setCurrentProject(""); }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white/80 backdrop-blur-md rounded-2xl p-8 max-w-lg w-full shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold mb-6 text-center">Schedule a Site Visit</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Timings</label>
                  <input type="text" name="timings" value={formData.timings} onChange={handleInputChange} placeholder="e.g. 10 AM - 12 PM" className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-4 py-2 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67]" placeholder="Any special requests or details?" />
                </div>

                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => { setShowSiteVisitForm(false); setCurrentProject(""); }} className="flex-1 py-2 border-2 border-[#CCBEB1] text-[#664930] font-semibold rounded-xl hover:bg-[#CCBEB1]/20">Cancel</button>
                  <button type="submit" disabled={sending} className="flex-1 py-2 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-semibold rounded-xl hover:shadow-lg disabled:opacity-60">{sending ? "Preparing..." : "Submit"}</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
