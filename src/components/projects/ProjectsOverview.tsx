import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  Brain, 
  BarChart3, 
  Sparkles,
  ArrowRight,
  Home
} from 'lucide-react';

const ProjectsOverview = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/projects';
  const categories = [
    {
      title: 'Python Projects',
      description: 'Automation, APIs, and utility applications built with Python',
      icon: Code2,
      path: '/projects/python',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Machine Learning',
      description: 'ML models, algorithms, and data science projects',
      icon: Brain,
      path: '/projects/ml',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Data Analysis',
      description: 'Data visualization, analytics, and insights projects',
      icon: BarChart3,
      path: '/projects/data-analysis',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Generative AI',
      description: 'AI-powered content generation and creative applications',
      icon: Sparkles,
      path: '/projects/genai',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {isStandalonePage && (
            <div className="flex justify-center mb-6">
              <Link 
                to="/"
                className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            My Projects
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore my work across different technologies and domains. Each category contains 
            carefully crafted projects showcasing various skills and applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={category.path}>
                <div className={`
                  ${category.bgColor} ${category.borderColor}
                  backdrop-blur-md rounded-xl p-6 border-2 
                  hover:border-opacity-50 transition-all duration-300
                  group cursor-pointer h-full
                `}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`
                      p-3 rounded-lg bg-gradient-to-r ${category.color}
                      shadow-lg
                    `}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white/90 transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-white/70 text-sm group-hover:text-white/90 transition-colors duration-200">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsOverview; 