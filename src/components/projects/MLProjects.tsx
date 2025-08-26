import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Github, ExternalLink, Package, Database } from 'lucide-react';

const MLProjects = () => {
  const mlProjects = [
    {
      title: 'Insurance Premium Prediction API',
      description: 'Developed an ML-powered API using FastAPI to predict insurance premiums. Containerized with Docker, deployed to DockerHub, and tested via pull requests. Features include model training, API development, and containerization for easy deployment.',
      github: 'https://github.com/dipseek/Insurance-Premium-API.git',
      technologies: ['FastAPI', 'Docker', 'Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      dockerImage: 'docker pull dipseek/insurance-premium-api:latest'
    },
    {
      title: 'Movie Recommendation System',
      description: 'An interactive Movie Recommendation System built with Streamlit, Pandas, and Scikit-learn. Recommends top 5 similar movies using cosine similarity on movie features. Deployed on Streamlit Cloud for free access.',
      github: 'https://github.com/dipseek/movie-recommendation-system.git',
      technologies: ['Streamlit', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Pickle'],
      liveDemo: 'Streamlit Cloud'
    },
    {
      title: 'Amazon Product Sentiment Analysis',
      description: 'Sentiment analysis system for Amazon product reviews using machine learning to classify customer feedback as positive, negative, or neutral.',
      github: 'https://github.com/dipseek/Amazon-Product-Sentiment-Analysis.git',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Jupyter Notebook']
    },
    {
      title: 'FIR Project - Crime Section Suggestion System',
      description: 'NLP-based system that suggests relevant Indian Penal Code (IPC) sections based on crime descriptions using sentence transformers and cosine similarity.',
      github: 'https://github.com/dipseek/FIR-Project-ML-.git',
      technologies: ['Python', 'NLP', 'Sentence Transformers', 'Tkinter', 'NLTK']
    },
    {
      title: 'Speech to Text Student Evaluation Project',
      description: 'Machine learning system for converting speech to text and evaluating student responses using advanced audio processing and natural language understanding.',
      github: 'https://github.com/dipseek/Speech-to-Text-ML.git',
      technologies: ['Python', 'Speech Recognition', 'Audio Processing', 'ML']
    },
    {
      title: 'Hand Written Digit Prediction',
      description: 'Deep learning model for recognizing and predicting handwritten digits using neural networks and computer vision techniques.',
      github: 'https://github.com/dipseek/ML-Projects/blob/main/HandWrittenDigitPrediction.ipynb',
      technologies: ['Python', 'Deep Learning', 'Neural Networks', 'Computer Vision']
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

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
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
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
            Machine Learning Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A collection of machine learning projects showcasing various techniques including NLP, 
            computer vision, speech processing, and deep learning applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {mlProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-black/60"
                  title="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-300 bg-cyan-500/20 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-300 bg-gradient-to-r from-cyan-500 to-cyan-600 px-3 py-1 rounded-full">
                  Machine Learning
                </span>
                <div className="flex items-center space-x-2">
                  {project.dockerImage && (
                    <span className="text-xs text-gray-300 bg-cyan-500/20 px-2 py-1 rounded-full flex items-center">
                      <Package className="w-3 h-3 mr-1" />
                      Docker
                    </span>
                  )}
                  {project.liveDemo && (
                    <span className="text-xs text-gray-300 bg-green-500/20 px-2 py-1 rounded-full flex items-center">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </span>
                  )}
                  <span className="text-xs text-gray-400">
                    Advanced ML
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MLProjects; 