import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Github, ExternalLink, FileText, X, Maximize2 } from 'lucide-react';
import jobImage from '../../assests/job.png';
import iplImage from '../../assests/ipl.png';

const DataAnalysisProjects = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; title: string } | null>(null);

  const dataAnalysisProjects = [
    {
      title: 'Job Openings in India Dashboard',
      description: 'Comprehensive Power BI dashboard analyzing job market trends, company distributions, and employment opportunities across different sectors in India.',
      github: 'https://github.com/dipseek/Power-Bi-Dashboards/blob/main/job_openings.pdf',
      pdfImage: 'https://github.com/dipseek/Power-Bi-Dashboards/raw/main/job_openings.pdf',
      image: jobImage,
      technologies: ['Power BI', 'Data Visualization', 'Business Intelligence', 'Dashboard Design']
    },
    {
      title: 'IPL Performance Analytics Dashboard',
      description: 'Interactive Power BI dashboard showcasing Indian Premier League statistics, player performance metrics, and team analytics with comprehensive data insights.',
      github: 'https://github.com/dipseek/Power-Bi-Dashboards/blob/main/IPL_PERFORMANCE.pdf',
      pdfImage: 'https://github.com/dipseek/Power-Bi-Dashboards/raw/main/IPL_PERFORMANCE.pdf',
      image: iplImage,
      technologies: ['Power BI', 'Sports Analytics', 'Data Visualization', 'Performance Metrics']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleImageModalOpen = (imageSrc: string, title: string) => {
    setCurrentImage({ src: imageSrc, title });
    setShowImageModal(true);
  };

  const handleImageModalClose = () => {
    setShowImageModal(false);
    setCurrentImage(null);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 mr-4 min-h-[44px] py-2 px-3 rounded-lg hover:bg-cyan-500/10"
              aria-label="Navigate back to projects page"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Back to Projects</span>
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
            Data Analysis Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Data visualization, analytics, and insights projects that transform raw data into meaningful stories and actionable insights using Power BI and advanced analytics tools.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {dataAnalysisProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-black/60"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={project.pdfImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-black/60"
                    title="View PDF"
                  >
                    <FileText className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-gray-300 bg-cyan-500/20 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Dashboard Image Preview */}
              <div className="mb-6">
                <div className="bg-black/20 rounded-lg p-4 border border-cyan-500/20 overflow-hidden">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-64 object-cover rounded-lg border border-cyan-500/30 group-hover:border-cyan-400/50 shadow-lg group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                      <div className="p-4 w-full">
                        <button
                          onClick={() => handleImageModalOpen(project.image, project.title)}
                          className="inline-flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-sm hover:bg-cyan-500/30 transition-colors duration-200"
                        >
                          <Maximize2 className="w-4 h-4" />
                          <span>View Full Dashboard</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Full Screen Button */}
                    <button
                      onClick={() => handleImageModalOpen(project.image, project.title)}
                      className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      title="Open in full screen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 rounded-full">
                  Data Analysis
                </span>
                <span className="text-sm text-gray-400">
                  Power BI
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleImageModalClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="absolute top-0 right-0 z-10 p-4">
                <button
                  onClick={handleImageModalClose}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 bg-black/50 backdrop-blur-sm p-2 rounded-lg hover:bg-black/70"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DataAnalysisProjects; 