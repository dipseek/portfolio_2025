import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import AboutSection from './AboutSection';

const AboutPage = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 lg:mb-12 flex justify-center"
        >
          <Link
            to="/"
            className="flex items-center text-white/70 hover:text-white transition-colors duration-200 min-h-[44px] py-2 px-3 rounded-lg hover:bg-cyan-500/10"
            aria-label="Navigate back to home page"
          >
            <Home className="w-5 h-5 mr-2" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
        <AboutSection />
      </div>
    </section>
  );
};

export default AboutPage; 