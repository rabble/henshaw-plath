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
    <div className="relative min-h-screen bg-[#f5f1eb]">
      <div className="relative z-10">
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

      <BackToTop progress={scrollProgress} />
    </div>
  );
}

export default Layout;