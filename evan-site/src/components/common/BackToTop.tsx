// ABOUTME: Back to top button with circular progress indicator
// ABOUTME: Shows scroll progress and allows smooth scroll to top

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BackToTopProps {
  progress: number;
}

function BackToTop({ progress }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 xl:right-96 w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-50 flex items-center justify-center group"
        >
          {/* Progress circle */}
          <svg className="absolute inset-0 w-14 h-14 -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="20"
              stroke="#e5e5e5"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="28"
              cy="28"
              r="20"
              stroke="#71a882"
              strokeWidth="3"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300"
            />
          </svg>

          {/* Arrow icon */}
          <svg
            className="w-5 h-5 text-[#151515] group-hover:text-[#71a882] transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;