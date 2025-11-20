import React, { useState } from 'react';

const RECIPIENT_EMAIL = "huskanda7@gmail.com";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Utility to open mail client via mailto, fallback copies to clipboard and alerts user
  const sendMailWithFallback = async (subject: string, body: string) => {
    const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSending(true);
    try {
      // Try to open the user's mail client
      window.location.href = mailto;
    } catch (err) {
      // If that fails, attempt to open in new tab
      try {
        window.open(mailto, '_blank');
      } catch (e) {
        // Last resort: copy to clipboard and alert user
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

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Basic validation: at least name and phone or email
    if (!formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      alert('Please provide at least a phone number or an email address.');
      return;
    }

    const subject = 'Contact Request - Fortune One';
    const bodyLines = [
      `Name: ${formData.name || 'N/A'}`,
      `Phone: ${formData.phone || 'N/A'}`,
      `Email: ${formData.email || 'N/A'}`,
      `Description: ${formData.description || 'N/A'}`,
      '',
      '— Sent from Contact Us page'
    ];
    const body = bodyLines.join('\n');

    await sendMailWithFallback(subject, body);

    // Reset form & give visual feedback
    setFormData({ name: '', phone: '', email: '', description: '' });
    alert('Thank you! The email composer should open. If not, the content was copied to your clipboard.');
  };

  return (
    <div className="bg-[#e8ddd1] text-[#664930] font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/con us.jpeg")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen max-w-7xl mx-auto px-8 py-20 text-white">
          <div className="text-4xl md:text-5xl font-bold mb-4 leading-tight font-sans">
            <span className="text-3xl md:text-4xl font-normal">Connect</span>
            <span className="mx-4">—</span>
            <br />
            <span className="italic">with Fortune One</span>
          </div>
          <p className="text-2xl mb-8 max-w-md leading-relaxed italic">Live better, live Fortune</p>
          <button
            onClick={() => document.getElementById('contact-us-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#997E67] hover:bg-[#664930] hover:text-white font-semibold py-4 px-10 rounded-full transition duration-300 text-lg"
          >
            Get in touch
          </button>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="max-w-7xl mx-auto py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Land & Collaboration */}
          <div className="bg-[#1a1a2e] text-white p-8 rounded-lg font-sans">
            <div className="border-l-4 border-[#d4a574] pl-4 mb-8">
              <h3 className="text-lg font-normal font-sans">For Land & Collaboration</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>cbo@fortuneone.co</p>
              </div>
            </div>
          </div>

          {/* Sales and Support */}
          <div className="bg-[#1a1a2e] text-white p-8 rounded-lg font-sans">
            <div className="border-l-4 border-[#d4a574] pl-4 mb-8">
              <h3 className="text-lg font-normal font-sans">For Sales and Support</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>reach@fortuneone.co</p>
              </div>
            </div>
          </div>

          {/* Career */}
          <div className="bg-[#1a1a2e] text-white p-8 rounded-lg font-sans">
            <div className="border-l-4 border-[#d4a574] pl-4 mb-8">
              <h3 className="text-lg font-normal font-sans">For Career</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>hr@fortuneone.co</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-us-form" className="bg-[#e8ddd1] py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <h2 className="text-4xl font-bodoni italic text-[#664930] mb-12 text-center">Begin Your Journey With Us</h2>

              <form id="contact-us-form" className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[#664930] mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b-2 border-[#664930] bg-transparent px-0 py-3 focus:outline-none focus:border-[#997E67] text-[#664930] placeholder-[#997E67]/50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#664930] mb-2 text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b-2 border-[#664930] bg-transparent px-0 py-3 focus:outline-none focus:border-[#997E67] text-[#664930] placeholder-[#997E67]/50"
                    placeholder="Optional but recommended"
                  />
                </div>

                <div>
                  <label className="block text-[#664930] mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-[#664930] bg-transparent px-0 py-3 focus:outline-none focus:border-[#997E67] text-[#664930] placeholder-[#997E67]/50"
                    placeholder="Optional but recommended"
                  />
                </div>

                <div>
                  <label className="block text-[#664930] mb-2 text-sm font-medium">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b-2 border-[#664930] bg-transparent px-0 py-3 focus:outline-none focus:border-[#997E67] text-[#664930] placeholder-[#997E67]/50 resize-none"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={sending}
                    className="bg-[#664930] text-white font-medium py-3 px-12 hover:bg-[#997E67] transition duration-300 mt-4 disabled:opacity-60"
                  >
                    {sending ? 'Preparing...' : 'Submit'}
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
