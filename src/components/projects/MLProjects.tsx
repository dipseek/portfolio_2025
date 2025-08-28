import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Github, ExternalLink, Package, Database, Play, Pause, X, Maximize2 } from 'lucide-react';

const MLProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string>('');
  const [showModalTitle, setShowModalTitle] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const mlProjects = [
    {
      title: 'Insurance Premium Prediction API',
      description: 'Developed an ML-powered API using FastAPI to predict insurance premiums. Containerized with Docker, deployed to DockerHub, and tested via pull requests. Features include model training, API development, and containerization for easy deployment.',
      github: 'https://github.com/dipseek/Insurance-Premium-API.git',
      technologies: ['FastAPI', 'Docker', 'Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      dockerImage: 'docker pull dipseek/insurance-premium-api:latest',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      hasImage: true
    },
    {
      title: 'Movie Recommendation System',
      description: 'An interactive Movie Recommendation System built with Streamlit, Pandas, and Scikit-learn. Recommends top 5 similar movies using cosine similarity on movie features. Deployed on Streamlit Cloud for free access.',
      github: 'https://github.com/dipseek/movie-recommendation-system.git',
      technologies: ['Streamlit', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Pickle'],
      liveDemo: 'Streamlit Cloud',
      hasVideo: true,
      videoSrc: '/mrs.mp4',
      thumbnail: '/mrs.mp4'
    },
    {
      title: 'Amazon Product Sentiment Analysis',
      description: 'Sentiment analysis system for Amazon product reviews using machine learning to classify customer feedback as positive, negative, or neutral.',
      github: 'https://github.com/dipseek/Amazon-Product-Sentiment-Analysis.git',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Jupyter Notebook'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hasImage: true
    },
    {
      title: 'FIR Project - Crime Section Suggestion System',
      description: 'NLP-based system that suggests relevant Indian Penal Code (IPC) sections based on crime descriptions using sentence transformers and cosine similarity.',
      github: 'https://github.com/dipseek/FIR-Project-ML-.git',
      technologies: ['Python', 'NLP', 'Sentence Transformers', 'Tkinter', 'NLTK'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hasImage: true
    },
    {
      title: 'Speech to Text Student Evaluation Project',
      description: 'Machine learning system for converting speech to text and evaluating student responses using advanced audio processing and natural language understanding.',
      github: 'https://github.com/dipseek/Speech-to-Text-ML.git',
      technologies: ['Python', 'Speech Recognition', 'Audio Processing', 'ML'],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hasImage: true
    },
    {
      title: 'Hand Written Digit Prediction',
      description: 'Deep learning model for recognizing and predicting handwritten digits using neural networks and computer vision techniques.',
      github: 'https://github.com/dipseek/ML-Projects/blob/main/HandWrittenDigitPrediction.ipynb',
      technologies: ['Python', 'Deep Learning', 'Neural Networks', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hasImage: true
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

  const handleProjectHover = (projectTitle: string) => {
    setHoveredProject(projectTitle);
    const project = mlProjects.find(p => p.title === projectTitle);
    if (project?.hasVideo && videoRef.current && !isVideoPlaying) {
      // Only auto-play on hover if not manually controlled
      setTimeout(() => {
        if (videoRef.current && !isVideoPlaying) {
          videoRef.current.play().catch(() => {
            console.log('Video autoplay was prevented');
          });
        }
      }, 100);
    }
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
    if (videoRef.current && !isVideoPlaying) {
      // Only auto-pause on leave if not manually controlled
      videoRef.current.pause();
    }
  };

  const handlePlayPauseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          console.log('Video play was prevented');
        });
        setIsVideoPlaying(true);
      }
    }
  };

  const handleVideoModalOpen = (videoSrc: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setCurrentVideoSrc(videoSrc);
    setShowVideoModal(true);
    setShowModalTitle(true);
    
    // Hide title after 2 seconds
    setTimeout(() => {
      setShowModalTitle(false);
    }, 2000);
  };

  const handleVideoModalClose = () => {
    setShowVideoModal(false);
    setShowModalTitle(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
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
          <div className="flex items-center mb-4 sm:mb-6">
            <Link 
              to="/projects"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-sm sm:text-base">Back to Projects</span>
            </Link>
          </div>
          
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-200 mb-3 sm:mb-4">
            Machine Learning Projects
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl">
            A collection of machine learning projects showcasing various techniques including NLP, 
            computer vision, speech processing, and deep learning applications.
          </p>
        </motion.div>

        {/* Projects Grid - Single Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {mlProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => handleProjectHover(project.title)}
              onMouseLeave={handleProjectLeave}
              className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-2 pr-4">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-1.5 sm:p-2 rounded-lg hover:bg-black/60 flex-shrink-0"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {project.description}
              </p>

              {/* Project Image/Video Section */}
              {project.hasVideo && (
                <div className="mb-4 sm:mb-6">
                  <div className="relative group overflow-hidden rounded-lg">
                    <video
                      ref={hoveredProject === project.title ? videoRef : null}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                      onEnded={() => setIsVideoPlaying(false)}
                    >
                      <source src={project.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Overlay */}
                    <div className={`absolute inset-0 rounded-lg flex items-center justify-center transition-all duration-500 ${
                      hoveredProject === project.title 
                        ? 'bg-black/10' 
                        : 'bg-black/50'
                    }`}>
                      <div className={`text-center transform transition-all duration-500 group-hover:scale-110 ${
                        isVideoPlaying ? 'opacity-0' : 'opacity-100'
                      }`}>
                        <button
                          onClick={handlePlayPauseClick}
                          className={`rounded-full p-3 mb-2 mx-auto w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer ${
                            hoveredProject === project.title || isVideoPlaying
                              ? 'bg-cyan-500/90 shadow-lg shadow-cyan-500/50' 
                              : 'bg-cyan-500/80'
                          }`}
                        >
                          {isVideoPlaying ? (
                            <Pause className="w-6 h-6 text-white" />
                          ) : (
                            <Play className="w-6 h-6 text-white ml-1" />
                          )}
                        </button>
                        <p className="text-white text-sm font-medium drop-shadow-lg">Live Demo</p>
                      </div>
                    </div>
                    
                    {/* Full Screen Button */}
                    <button
                      onClick={(e) => handleVideoModalOpen(project.videoSrc, e)}
                      className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/70 hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Open in full screen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              )}

              {project.hasImage && (
                <div className="mb-4 sm:mb-6">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:scale-105"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                      <div className="p-4 w-full">
                        <div className="inline-flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-sm">
                          <Brain className="w-4 h-4" />
                          <span>Machine Learning</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm text-gray-300 bg-cyan-500/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <span className="text-xs sm:text-sm text-gray-300 bg-gradient-to-r from-cyan-500 to-cyan-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit">
                  Machine Learning
                </span>
                <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap gap-2">
                  {project.dockerImage && (
                    <span className="text-xs sm:text-sm text-gray-300 bg-cyan-500/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full flex items-center">
                      <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Docker
                    </span>
                  )}
                  {project.liveDemo && (
                    <span className="text-xs sm:text-sm text-gray-300 bg-green-500/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full flex items-center">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Live Demo
                    </span>
                  )}
                  <span className="text-xs sm:text-sm text-gray-400 hidden sm:block">
                    Advanced ML
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleVideoModalClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with title and close button */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
                <motion.h3 
                  className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showModalTitle ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Movie Recommendation - Live Demo
                </motion.h3>
                <button
                  onClick={handleVideoModalClose}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 bg-black/50 backdrop-blur-sm p-2 rounded-lg hover:bg-black/70"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <video
                ref={modalVideoRef}
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                muted
              >
                <source src={currentVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MLProjects; 