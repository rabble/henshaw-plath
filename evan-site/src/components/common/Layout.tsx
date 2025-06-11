// ABOUTME: Main layout component with sidebar structure
// ABOUTME: Provides consistent page wrapper for all routes

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#edeee8]">
      {/* Background circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#71a882] rounded-full opacity-5" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#ef7c54] rounded-full opacity-5" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#f8cb35] rounded-full opacity-5" />
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left sidebar with vertical text */}
        <div className="hidden lg:flex w-24 items-center justify-center fixed left-0 top-0 h-full border-r border-[#d9dbd0]">
          <div className="transform -rotate-90 whitespace-nowrap">
            <h5 className="text-sm font-mono text-[#666666] tracking-wider uppercase">
              Product & Engineering
            </h5>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 lg:ml-24 lg:mr-80">
          <Navigation />
          <main className="min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </main>
          <Footer />
        </div>

        {/* Right sidebar */}
        <div className="hidden xl:block w-80 fixed right-0 top-0 h-full border-l border-[#d9dbd0] bg-white/50 backdrop-blur-sm">
          <div className="p-8 h-full flex flex-col">
            {/* Profile image */}
            <div className="mb-8">
              <img 
                src="https://uploads-ssl.webflow.com/6074829d0ff90971149b3214/60748d2a056056766e25de81_evan2.png" 
                alt="Evan Henshaw-Plath" 
                className="w-full rounded-lg"
              />
            </div>

            {/* Contact info */}
            <div className="space-y-6 mb-auto">
              <h4 className="font-display text-xl font-bold">Get in Touch</h4>
              
              <a href="mailto:evan@protest.net" className="flex items-center space-x-3 text-sm font-mono hover:text-[#71a882] transition-colors">
                <span>📧</span>
                <span>evan@protest.net</span>
              </a>

              <a href="https://twitter.com/rabble" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm font-mono hover:text-[#71a882] transition-colors">
                <span>🐦</span>
                <span>@rabble</span>
              </a>

              <a href="https://linkedin.com/in/rabble" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm font-mono hover:text-[#71a882] transition-colors">
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* CTA Button */}
            <a 
              href="/contact" 
              className="block w-full py-3 px-6 bg-[#71a882] text-white text-center rounded-lg font-mono text-sm hover:bg-[#5d8d6d] transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>

      <BackToTop progress={scrollProgress} />
    </div>
  );
}

export default Layout;