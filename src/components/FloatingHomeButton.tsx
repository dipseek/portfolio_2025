import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const FloatingHomeButton = () => {
  const location = useLocation();
  
  // Don't show on the home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        to="/"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 backdrop-blur-md border border-cyan-400/50 hover:scale-110 transform"
        title="Go to Home"
      >
        <Home className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
    </motion.div>
  );
};

export default FloatingHomeButton;
