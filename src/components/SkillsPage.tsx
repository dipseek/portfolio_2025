import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SkillsSection from './SkillsSection';

const SkillsPage = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 lg:mb-12 flex justify-center"
        >
          <Link
            to="/"
            className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
        <SkillsSection />
      </div>
    </section>
  );
};

export default SkillsPage; 