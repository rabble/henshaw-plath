// ABOUTME: Footer component with navigation and attribution
// ABOUTME: Displays footer links and copyright information

import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e8e4de] bg-[#2a2a2a] text-white">
      <div className="px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h5 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider text-white">Navigation</h5>
            <div className="space-y-2">
              <Link to="/" className="block font-mono text-sm text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/projects" className="block font-mono text-sm text-white/70 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="block font-mono text-sm text-white/70 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/about" className="block font-mono text-sm text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="block font-mono text-sm text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider text-white">Resources</h5>
            <div className="space-y-2">
              <Link to="/talks" className="block font-mono text-sm text-white/70 hover:text-white transition-colors">
                Video & Talks
              </Link>
              <Link to="/works" className="block font-mono text-sm text-white/70 hover:text-white transition-colors">
                Works
              </Link>
              <Link to="/testimonials" className="block font-mono text-sm text-white/70 hover:text-white transition-colors">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider text-white">Connect</h5>
            <div className="space-y-2">
              <a 
                href="https://twitter.com/rabble" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block font-mono text-sm text-white/70 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/rabble" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block font-mono text-sm text-white/70 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/rabble" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block font-mono text-sm text-white/70 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="mailto:evan@henshaw-plath.com" 
                className="block font-mono text-sm text-white/70 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#444444]">
          <p className="font-mono text-xs text-white/50 text-center">
            © {currentYear} Evan Henshaw-Plath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;