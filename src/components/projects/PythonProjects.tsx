import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ArrowLeft, ExternalLink } from 'lucide-react';

const PythonProjects = () => {
  const pythonProjects = [
    {
      title: 'Make Calls using Python',
      description: 'Automated phone calling system built with Python for communication automation.',
      github: 'https://github.com/dipseek/python_projects/blob/main/make_calls.py',
    },
    {
      title: 'Send SMS using Python',
      description: 'SMS automation tool that sends text messages programmatically using Python.',
      github: 'https://github.com/dipseek/python_projects/blob/main/send-sms.py',
    },
    {
      title: 'Send an Email using Python',
      description: 'Email automation system for sending automated emails with Python.',
      github: 'https://github.com/dipseek/python_projects/blob/main/send_email.py',
    },
    {
      title: 'Post on Instagram using Python',
      description: 'Instagram automation tool for posting content programmatically.',
      github: 'https://github.com/dipseek/python_projects/blob/main/post-insta.py',
    },
    {
      title: 'Send a WhatsApp Message by Python',
      description: 'WhatsApp automation for sending messages using Python scripts.',
      github: 'https://github.com/dipseek/python_projects/blob/main/send-whatsapp-message.py',
    },
    {
      title: 'Develop a Menu Driven Python Project',
      description: 'Interactive menu-driven application with multiple functionality options.',
      github: 'https://github.com/dipseek/python_projects/blob/main/menu-driven.py',
    },
    {
      title: 'Automation Panel using Streamlit',
      description: 'Web-based automation dashboard built with Streamlit for easy task management.',
      github: 'https://github.com/dipseek/python_projects/blob/main/automation_panel.py',
    },
    {
      title: 'Road Safety Automation Panel using Streamlit and Gradio',
      description: 'Advanced road safety monitoring system with AI integration using Streamlit and Gradio.',
      github: 'https://github.com/dipseek/python_projects/blob/main/RoadSafetyGemini.ipynb',
    },
    {
      title: 'Menu Based Project',
      description: 'Comprehensive menu-based application with multiple features and options.',
      github: 'https://github.com/dipseek/python_projects/blob/main/menu-based.py',
    },
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
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
            Python Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A collection of Python projects focused on automation, API integration, and utility applications. 
            These projects were developed during my Summer Internship 2025, showcasing various Python libraries and frameworks.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {pythonProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
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
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-300 bg-cyan-500/20 px-3 py-1 rounded-full">
                  Python
                </span>
                <span className="text-xs text-gray-400">
                  Summer Internship 2025
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PythonProjects; 