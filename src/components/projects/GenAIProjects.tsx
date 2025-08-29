import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Plus } from 'lucide-react';

const GenAIProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <Link 
              to="/projects"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 mr-4 min-h-[44px] py-2 px-3 rounded-lg hover:bg-cyan-500/10"
              aria-label="Navigate back to projects page"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              <span className="text-sm sm:text-base">Back to Projects</span>
            </Link>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-3 sm:mb-4">
            Generative AI Projects
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl leading-relaxed">
            AI-powered content generation and creative applications that leverage the latest in generative AI technology.
          </p>
        </motion.div>

        {/* Empty State */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center py-8 sm:py-12 lg:py-16"
        >
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 sm:p-8 lg:p-12 border border-cyan-500/30 max-w-md mx-auto hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3 sm:mb-4">
              Coming Soon
            </h3>
            
            <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Generative AI projects are currently in development. 
              Check back soon for innovative AI-powered applications!
            </p>
            
            <div className="flex items-center justify-center text-gray-400">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span className="text-xs sm:text-sm">Projects in Progress</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenAIProjects; 