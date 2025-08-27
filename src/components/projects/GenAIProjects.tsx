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
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <Link 
              to="/projects"
              className="flex items-center text-white/70 hover:text-white transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Generative AI Projects
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            AI-powered content generation and creative applications that leverage the latest in generative AI technology.
          </p>
        </motion.div>

        {/* Empty State */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center py-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-12 border border-white/20 max-w-md mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">
              Coming Soon
            </h3>
            
            <p className="text-white/70 text-sm mb-6">
              Generative AI projects are currently in development. 
              Check back soon for innovative AI-powered applications!
            </p>
            
            <div className="flex items-center justify-center text-white/50">
              <Plus className="w-4 h-4 mr-2" />
              <span className="text-sm">Projects in Progress</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenAIProjects; 