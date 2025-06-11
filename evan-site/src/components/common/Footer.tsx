// ABOUTME: Footer component with navigation and attribution
// ABOUTME: Displays footer links and copyright information

import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d9dbd0] bg-white/50 backdrop-blur-sm">
      <div className="px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h5 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider">Navigation</h5>
            <div className="space-y-2">
              <Link to="/" className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors">
                Home
              </Link>
              <Link to="/projects" className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors">
                Blog
              </Link>
              <Link to="/about" className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors">
                About
              </Link>
              <Link to="/contact" className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h5>
            <div className="space-y-2">
              <Link to="/talks" className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors">
                Video & Talks
              </Link>
              <Link to="/works" className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors">
                Works
              </Link>
              <Link to="/testimonials" className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h5>
            <div className="space-y-2">
              <a 
                href="https://twitter.com/rabble" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/rabble" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/rabble" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors"
              >
                GitHub
              </a>
              <a 
                href="mailto:evan@protest.net" 
                className="block font-mono text-sm text-[#666666] hover:text-[#71a882] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#d9dbd0]">
          <p className="font-mono text-xs text-[#666666] text-center">
            © {currentYear} Evan Henshaw-Plath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;