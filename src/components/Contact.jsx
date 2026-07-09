import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, CheckCircle2, Facebook, Github, Linkedin, AlertCircle, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    desc: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const budgets = [
    { label: '₱8,000 - ₱15,000 (Starter)', value: 'starter' },
    { label: '₱20,000 - ₱40,000 (Business)', value: 'business' },
    { label: '₱50,000 - ₱80,000 (Premium)', value: 'premium' },
    { label: '₱1,500/mo (Maintenance only)', value: 'maintenance' },
    { label: 'Custom Scope / Unsure', value: 'custom' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email format is invalid.';
    }
    if (!formData.budget) tempErrors.budget = 'Please select a budget range.';
    if (!formData.desc.trim()) tempErrors.desc = 'Project description is required.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch('https://formsubmit.co/ajax/magnet.solutionsph@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', budget: '', desc: '' });
          setTimeout(() => setSubmitted(false), 5000);
        }
      } catch (err) {
        console.error('Form submission error:', err);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | MagNet Solutions - Web Developer Agusan del Norte</title>
        <meta name="description" content="Contact MagNet Solutions, a web developer and web designer in Agusan del Norte, Caraga, Philippines. Get a quote for your website, web app, or e-commerce project within 24 hours." />
        <meta property="og:title" content="Contact | MagNet Solutions - Web Developer Agusan del Norte" />
        <meta property="og:description" content="Contact MagNet Solutions, a web developer and web designer in Agusan del Norte, Caraga, Philippines. Get a quote for your website, web app, or e-commerce project within 24 hours." />
      </Helmet>
      <section id="contact" className="max-w-screen-xl mx-auto px-4 py-16 border-b border-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Inquiry Office Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-500 block mb-2">
                [ SECTION 10: COMMUNICATOR DESK ]
              </span>
              <h3 className="font-serif font-black text-4xl md:text-5xl uppercase tracking-tight text-ink mb-6">
                INQUIRE DIRECT
              </h3>
              <p className="font-body text-neutral-600 leading-relaxed mb-8">
                We process inquiry cards dynamically and guarantee a response from one of our four engineers within 24 hours. Fill out the project sheet with your details.
              </p>

              <div className="space-y-4 font-mono text-xs uppercase tracking-wider text-ink">
                <div className="border border-ink p-4 bg-paper flex flex-col gap-1.5 hover:shadow-hard transition-all duration-200">
                  <span className="text-neutral-500 font-bold">EMAIL INBOX:</span>
                  <a href="mailto:magnet.solutionsph@gmail.com" className="hover:text-editorial-red underline decoration-wavy underline-offset-4 font-bold text-sm">
                    magnet.solutionsph@gmail.com
                  </a>
                </div>

                <div className="border border-ink p-4 bg-paper flex flex-col gap-1.5 hover:shadow-hard transition-all duration-200">
                  <span className="text-neutral-500 font-bold">CONTACT NUMBER:</span>
                  <a href="tel:09941006573" className="hover:text-editorial-red underline decoration-wavy underline-offset-4 font-bold text-sm">
                    0994 100 6573
                  </a>
                </div>
                
                <div className="border border-ink p-4 bg-paper flex flex-col gap-1.5 hover:shadow-hard transition-all duration-200">
                  <span className="text-neutral-500 font-bold">PHYSICAL ADDRESS:</span>
                  <span className="font-bold text-sm">Magallanes, Agusan del Norte, Caraga, Philippines</span>
                </div>

                {/* Styled Newspaper Editorial Map Card */}
                <div className="border border-ink p-2 bg-paper hover:shadow-hard transition-all duration-200 group">
                  <iframe
                    title="Agency Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31545.034563833446!2d125.50346067431637!3d9.018974599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301c2db579e0f63%3A0xe5a2ab3fb47b19a3!2sMagallanes%2C%20Agusan%20del%20Norte!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                    className="w-full h-44 border border-ink grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="mt-12 pt-6 border-t border-ink border-dashed flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-bold">
                FOLLOW THE GLOBE:
              </span>
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61591696464731"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-ink flex items-center justify-center bg-paper hover:bg-editorial-pink hover:text-ink transition-all shadow-hard-sm"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://www.instagram.com/magnet.solutionsph/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-ink flex items-center justify-center bg-paper hover:bg-editorial-red hover:text-paper hover:border-ink transition-all shadow-hard-sm"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://www.threads.net/@magnet.solutionsph"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-ink flex items-center justify-center bg-paper hover:bg-editorial-green hover:text-ink transition-all shadow-hard-sm"
                  aria-label="Threads Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4.5 w-4.5"
                  >
                    <path d="M22.88 11.23c-.15-1.89-1.22-3.83-2.58-4.93A11.7 11.7 0 0 0 12.18 3c-3.1 0-6.13 1.15-8.1 3.12A10.12 10.12 0 0 0 1.05 13.4a9.7 9.7 0 0 0 3.2 6.55c2 1.83 4.9 2.87 7.9 2.87a12.3 12.3 0 0 0 8-2.65l-1.35-1.4a10.42 10.42 0 0 1-6.65 2.15 8.76 8.76 0 0 1-7.95-8.3c-.05-2.25 1-4.75 2.95-6.55A8.53 8.53 0 0 1 12.18 5a9.8 9.8 0 0 1 6.8 2.65c1.1 1 2 2.7 2 4.15 0 2.25-1.5 3.3-3.05 3.3-.85 0-1.6-.35-1.95-1a3.6 3.6 0 0 1-3.25 1.55c-1.85 0-3.35-1.45-3.35-3.65v-.1c0-2.2 1.5-3.65 3.35-3.65a3.6 3.6 0 0 1 3.1 1.5c.05-.2.1-.35.15-.45h1.8v5.8c0 1.25.7 1.8 1.45 1.8 1.15 0 2.25-1.15 2.25-3.35v-.02zm-8.8-1.58c0-.9-.65-1.6-1.4-1.6s-1.4.7-1.4 1.6v.1c0 .9.65 1.6 1.4 1.6s1.4-.7 1.4-1.6v-.1z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-ink flex items-center justify-center bg-paper hover:bg-editorial-yellow hover:text-ink transition-all shadow-hard-sm"
                  aria-label="GitHub Repository"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-ink flex items-center justify-center bg-paper hover:bg-editorial-violet hover:text-paper hover:border-ink transition-all shadow-hard-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Paper inquiry sheet */}
          <div className="lg:col-span-7 bg-[#FFFDF5] border-2 border-ink p-6 md:p-8 newsprint-grid-lines shadow-hard relative">
            
            {submitted ? (
              <div className="absolute inset-0 bg-[#FFFDF5]/95 z-25 flex flex-col items-center justify-center p-6 text-center">
                <CheckCircle2 className="h-16 w-16 text-editorial-green mb-4 animate-bounce" strokeWidth={1.5} />
                <h4 className="font-sans font-black text-2xl uppercase tracking-wider text-ink mb-2">
                  TRANSMISSION RECEIVED
                </h4>
                <p className="font-body text-neutral-700 max-w-sm">
                  Thank you! Your project sheet has been sent to our desk. We reply within 24 hours.
                </p>
              </div>
            ) : null}

            <div className="border-b-4 border-ink pb-4 mb-8">
              <h4 className="font-serif font-black text-2xl uppercase tracking-tight text-ink">
                PROJECT INQUIRY SHEET
              </h4>
              <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mt-1">
                VOL 1.0 // FORM CODE: INQ-PH
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="font-sans font-bold text-xs uppercase tracking-wider text-ink mb-1.5">
                    CLIENT NAME <span className="text-editorial-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Juan dela Cruz"
                    className="border-b-2 border-ink bg-transparent px-3 py-2.5 font-mono text-sm focus:bg-neutral-100 focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[10px] font-mono text-editorial-red mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="font-sans font-bold text-xs uppercase tracking-wider text-ink mb-1.5">
                    EMAIL ADDRESS <span className="text-editorial-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. juan@example.ph"
                    className="border-b-2 border-ink bg-transparent px-3 py-2.5 font-mono text-sm focus:bg-neutral-100 focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[10px] font-mono text-editorial-red mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex flex-col">
                  <label className="font-sans font-bold text-xs uppercase tracking-wider text-ink mb-1.5">
                    CONTACT NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 0912 345 6789"
                    className="border-b-2 border-ink bg-transparent px-3 py-2.5 font-mono text-sm focus:bg-neutral-100 focus:outline-none transition-colors"
                  />
                </div>

                {/* Budget dropdown */}
                <div className="flex flex-col">
                  <label className="font-sans font-bold text-xs uppercase tracking-wider text-ink mb-1.5">
                    BUDGET ESTIMATE <span className="text-editorial-red">*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="border-b-2 border-ink bg-transparent px-3 py-2.5 font-mono text-sm focus:bg-neutral-100 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="bg-paper text-neutral-400">
                      -- SELECT BUDGET TIER --
                    </option>
                    {budgets.map((b) => (
                      <option key={b.value} value={b.value} className="bg-paper text-ink">
                        {b.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <span className="text-[10px] font-mono text-editorial-red mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.budget}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <label className="font-sans font-bold text-xs uppercase tracking-wider text-ink mb-1.5">
                  PROJECT DETAIL &amp; SPECIFICATIONS <span className="text-editorial-red">*</span>
                </label>
                <textarea
                  name="desc"
                  rows="4"
                  value={formData.desc}
                  onChange={handleInputChange}
                  placeholder="Detail what pages, features, or e-commerce booking systems you require..."
                  className="border-b-2 border-ink bg-transparent px-3 py-2.5 font-mono text-sm focus:bg-neutral-100 focus:outline-none transition-colors resize-none"
                />
                {errors.desc && (
                  <span className="text-[10px] font-mono text-editorial-red mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.desc}
                  </span>
                )}
              </div>

              {/* Candy-style primary submit but with sharp corners */}
              <button
                type="submit"
                className="w-full py-4 bg-editorial-red text-paper font-sans font-bold text-xs uppercase tracking-widest border-2 border-ink flex items-center justify-center gap-2 group transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard select-none active:translate-x-1 active:translate-y-1 active:shadow-none"
                style={{ boxShadow: '4px 4px 0px 0px #111111' }}
              >
                <span>Transmit Project Sheet</span>
                <Send className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
