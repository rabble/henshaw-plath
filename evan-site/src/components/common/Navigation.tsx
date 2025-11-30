// ABOUTME: Navigation component with responsive menu
// ABOUTME: Handles main site navigation with mobile support

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Video & Talks', path: '/talks' },
  { label: 'Podcasts', path: '/podcasts' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#f5f1eb]/95 backdrop-blur-sm border-b border-[#e8e4de]">
      <div className="px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-bold text-[#2a2a2a]">
            @rabble
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative font-mono text-sm hover:text-[#71a882] transition-colors"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#71a882]"
                  />
                )}
              </Link>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[#e8e4de]">
              <a
                href="https://revolution.social"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#71a882] text-white rounded-lg font-mono text-sm hover:bg-[#5a8a6b] transition-all"
              >
                🎙️ Listen
              </a>
              <a
                href="mailto:evan@henshaw-plath.com?subject=Podcast%20Guest%20Invitation"
                className="px-4 py-2 border border-[#71a882] text-[#71a882] rounded-lg font-mono text-sm hover:bg-[#71a882] hover:text-white transition-all"
              >
                📧 Book Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1.5"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-[#2a2a2a] origin-center"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-[#2a2a2a]"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-[#2a2a2a] origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#e8e4de]"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-mono text-sm ${
                    location.pathname === item.path
                      ? 'text-[#71a882]'
                      : 'text-[#2a2a2a]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTAs */}
              <div className="pt-4 mt-4 border-t border-[#e8e4de] space-y-3">
                <a
                  href="https://revolution.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-[#71a882] text-white rounded-lg font-mono text-sm text-center"
                >
                  🎙️ Listen to Revolution.social
                </a>
                <a
                  href="mailto:evan@henshaw-plath.com?subject=Podcast%20Guest%20Invitation"
                  className="block px-4 py-2 border border-[#71a882] text-[#71a882] rounded-lg font-mono text-sm text-center"
                >
                  📧 Book Me for Your Podcast
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;