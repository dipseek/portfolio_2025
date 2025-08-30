import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  Brain, 
  BarChart3, 
  Sparkles,
  ArrowRight,
  Home,
  GraduationCap
} from 'lucide-react';

const ProjectsOverview = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/projects';
  const categories = [
    {
      title: 'Summer Internship Training',
      description: 'Multi-technology automation platform integrating Python, AWS, Docker, AI, and full-stack development',
      icon: GraduationCap,
      path: '/summer-internship',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-black/40',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Machine Learning',
      description: 'ML models, algorithms, and data science projects',
      icon: Brain,
      path: '/projects/ml',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-black/40',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: 'Data Analysis',
      description: 'Data visualization, analytics, and insights projects',
      icon: BarChart3,
      path: '/projects/data-analysis',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-black/40',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: 'Generative AI',
      description: 'AI-powered content generation and creative applications',
      icon: Sparkles,
      path: '/projects/genai',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-black/40',
      borderColor: 'border-cyan-500/30'
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          {isStandalonePage && (
            <div className="flex justify-center mb-6">
              <Link 
                to="/"
                className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 min-h-[44px] py-2 px-3 rounded-lg hover:bg-cyan-500/10"
                aria-label="Navigate back to home page"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Back to Home</span>
              </Link>
            </div>
          )}
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-3 sm:mb-6">
            My Projects
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Explore my work across different technologies and domains. Each category contains 
            carefully crafted projects showcasing various skills and applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 sm:space-y-6"
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
                  backdrop-blur-md rounded-xl p-4 sm:p-6 border-2 
                  hover:border-opacity-70 hover:shadow-lg transition-all duration-300
                  group cursor-pointer h-full
                `}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`
                      p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color}
                      shadow-lg
                    `}>
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-2 sm:mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm group-hover:text-cyan-400 transition-colors duration-200">
                    <span>View Projects</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
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