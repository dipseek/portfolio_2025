import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ArrowLeft, ExternalLink, Play, Code, Database, BarChart3, Brain } from 'lucide-react';

const SummerInternshipProjects = () => {
  const internshipProject = {
    title: 'Summer Internship Training Project 2025',
    description: 'A comprehensive multi-technology task automation platform developed under the mentorship of Mr. Vimal Daga, Technical Head (June 15 - August 1, 2025). This platform integrates Python, Linux, Docker, AWS, and AI technologies to enable users to perform complex tasks through an intuitive interface without requiring technical expertise. Features include automated messaging (SMS, WhatsApp, email), Google search integration, text-to-speech conversion, camera access, speech-to-text, interactive games, AWS EC2/IAM management, Lambda serverless functions, AI chatbot, image generation, Docker container management, and streamlined Linux operations. The project demonstrates practical application of DevOps, cloud computing, and AI integration, culminating in a portfolio webpage showcasing the complete functionality.',
    liveDemo: 'https://summer-lw.streamlit.app/',
    github: 'https://github.com/dipseek/summer-internship-training',
    technologies: ['Python', 'HTML/CSS/JavaScript', 'ReactJS', 'Flask', 'AWS (EC2, Lambda, IAM)', 'Docker', 'Linux', 'MongoDB', 'MySQL', 'AI/ML'],
    features: [
      'Multi-Technology Task Automation',
      'AWS Cloud Integration & Management',
      'AI Chatbot & Image Generation',
      'Docker Container Management',
      'Full Stack Web Development',
      'Database Management (MongoDB, MySQL)',
      'DevOps & Cloud Automation',
      'User-Friendly Interface Design'
    ]
  };

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
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-sm sm:text-base">Back to Projects</span>
            </Link>
          </div>
          
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-200 mb-3 sm:mb-4">
            Summer Internship Training Project
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl">
            A multi-technology task automation platform developed during summer internship training, 
            integrating Python, AWS, Docker, AI, and full-stack development in a user-friendly interface.
          </p>
        </motion.div>

        {/* Project Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-2 pr-4">
                {internshipProject.title}
              </h3>
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <a
                  href={internshipProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 sm:space-x-2 text-green-400 hover:text-green-300 transition-colors duration-200 p-1.5 sm:p-2 rounded-lg hover:bg-green-500/10 bg-green-500/20"
                  title="View Live Demo"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a
                  href={internshipProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-1.5 sm:p-2 rounded-lg hover:bg-black/60"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {internshipProject.description}
            </p>

            {/* Key Features */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-gray-200 font-semibold text-base sm:text-lg mb-3 sm:mb-4 flex items-center">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-400" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {internshipProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {internshipProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs sm:text-sm text-gray-300 bg-cyan-500/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <span className="text-xs sm:text-sm text-gray-300 bg-gradient-to-r from-green-500 to-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit">
                  Multi-Tech Automation
                </span>
                <a
                  href={internshipProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 sm:space-x-2 text-green-400 hover:text-green-300 transition-colors duration-200 text-sm sm:text-base font-medium bg-green-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-green-500/30 hover:scale-105 transform transition-transform"
                >
                  <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
              <span className="text-xs sm:text-sm text-gray-400">
                June 15 - August 1, 2025
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummerInternshipProjects; 