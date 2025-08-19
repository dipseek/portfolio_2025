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
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Link 
              to="/"
              className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            Education
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto text-center">
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
            className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-900" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-purple-200 font-medium mb-2">
                  Jaipur Engineering College
                </p>
                
                <div className="flex items-center space-x-4 text-white/70 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>2022 - 2026</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>CGPA: 8.5</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-white/80">
                    <strong className="text-purple-200">Relevant Coursework:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Database Management Systems', 'Data Analysis', 'Power BI', 'Data Structures', 'Algorithms'].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-white/15 text-white/80 rounded-full text-sm backdrop-blur-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationPage; 