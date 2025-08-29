import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, Award, ArrowLeft, Home } from 'lucide-react';

const EducationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="flex items-center mb-6">
            <Link 
              to="/"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-3 sm:mb-4">
            Education
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            My academic journey and educational background in Computer Science and Data Engineering.
          </p>
        </motion.div>

        {/* Education Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-gray-200 font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-cyan-400 font-semibold text-lg mb-4">
                  Jaipur Engineering College
                </p>
                
                <div className="flex items-center space-x-6 text-gray-400 mb-6">
                  <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">2022 - 2026</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">CGPA: 8.5</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-base leading-relaxed">
                  Pursuing a comprehensive Computer Science degree with focus on modern technologies, 
                  data engineering, and machine learning. The curriculum covers fundamental programming concepts, 
                  advanced algorithms, database systems, and emerging technologies in the field of computer science.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationPage; 