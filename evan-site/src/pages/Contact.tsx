// ABOUTME: Contact page with contact form and information
// ABOUTME: Displays contact methods and location

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Header */}
      <div className="px-6 lg:px-12 py-8 border-b border-[#e5e1da]">
        <Link to="/" className="text-sm font-mono text-[#666666] hover:text-[#71a882] transition-colors">
          ← Back to homepage
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#2a2a2a] mb-8">
            Get in Touch
          </h1>
          <p className="font-sans text-lg text-[#666666] leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you want to collaborate on building something meaningful or just 
            want to chat about technology and social change, feel free to reach out.
          </p>
        </motion.div>
      </section>

      {/* Contact Form and Info */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-8">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-sm font-medium text-[#666666] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e5e1da] rounded-lg bg-white focus:outline-none focus:border-[#71a882] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-sm font-medium text-[#666666] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e5e1da] rounded-lg bg-white focus:outline-none focus:border-[#71a882] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-sm font-medium text-[#666666] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#e5e1da] rounded-lg bg-white focus:outline-none focus:border-[#71a882] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#71a882] text-white font-mono text-sm rounded-lg hover:bg-[#5d8d6d] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#71a882]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-semibold text-[#2a2a2a] mb-1">Location</h3>
                    <p className="text-[#666666]">Pōneke, Aotearoa</p>
                    <p className="text-[#666666]">Wellington, New Zealand</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#71a882]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-semibold text-[#2a2a2a] mb-1">Email</h3>
                    <a href="mailto:evan@protest.net" className="text-[#71a882] hover:text-[#5d8d6d] transition-colors">
                      evan@protest.net
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#71a882]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-semibold text-[#2a2a2a] mb-1">Social</h3>
                    <div className="space-y-1">
                      <a href="https://twitter.com/rabble" target="_blank" rel="noopener noreferrer" className="block text-[#71a882] hover:text-[#5d8d6d] transition-colors">
                        @rabble on Twitter
                      </a>
                      <a href="https://linkedin.com/in/rabble" target="_blank" rel="noopener noreferrer" className="block text-[#71a882] hover:text-[#5d8d6d] transition-colors">
                        LinkedIn Profile
                      </a>
                      <a href="https://github.com/rabble" target="_blank" rel="noopener noreferrer" className="block text-[#71a882] hover:text-[#5d8d6d] transition-colors">
                        GitHub: @rabble
                      </a>
                      <p className="text-[#666666]">rabble@nos.social</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white p-8 rounded-lg border border-[#e5e1da]">
              <h3 className="font-display text-xl font-bold text-[#2a2a2a] mb-4">
                Working Together
              </h3>
              <p className="text-[#666666] mb-4">
                I'm particularly interested in projects that:
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li className="flex items-start">
                  <span className="text-[#71a882] mr-2">•</span>
                  Focus on social impact and positive change
                </li>
                <li className="flex items-start">
                  <span className="text-[#71a882] mr-2">•</span>
                  Build decentralized or commons-based platforms
                </li>
                <li className="flex items-start">
                  <span className="text-[#71a882] mr-2">•</span>
                  Challenge existing power structures
                </li>
                <li className="flex items-start">
                  <span className="text-[#71a882] mr-2">•</span>
                  Create tools that empower communities
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;