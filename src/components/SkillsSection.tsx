import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Database, 
  BarChart3, 
  Wrench, 
  Star,
  GitBranch,
  FileSpreadsheet,
  Terminal,
  Zap,
  MessageSquare,
  Table,
  BarChart,
  Palette,
  Cloud,
  Settings,
  Globe,
  Server,
  Github
} from 'lucide-react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: [
        {
          name: 'Python',
          rating: 5,
          icon: <Code className="w-6 h-6" />,
          description: 'Primary programming language for data science and ML projects'
        },
        {
          name: 'SQL',
          rating: 4,
          icon: <Database className="w-6 h-6" />,
          description: 'Database queries and data extraction'
        },
        {
          name: 'Pandas',
          rating: 5,
          icon: <Table className="w-6 h-6" />,
          description: 'Data manipulation and analysis with DataFrames'
        },
        {
          name: 'NumPy',
          rating: 5,
          icon: <BarChart className="w-6 h-6" />,
          description: 'Numerical computing and array operations'
        }
      ]
    },
    {
      id: 'ml-ai',
      title: 'Machine Learning & AI',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        {
          name: 'TensorFlow',
          rating: 4,
          icon: <Brain className="w-6 h-6" />,
          description: 'Deep learning and neural network development'
        },
        {
          name: 'Scikit-learn',
          rating: 5,
          icon: <Zap className="w-6 h-6" />,
          description: 'Machine learning algorithms and model training'
        },
        {
          name: 'NLP',
          rating: 4,
          icon: <MessageSquare className="w-6 h-6" />,
          description: 'Natural Language Processing and text analysis'
        }
      ]
    },
    {
      id: 'data-tools',
      title: 'Data Tools & Visualization',
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        {
          name: 'Power BI',
          rating: 4,
          icon: <BarChart3 className="w-6 h-6" />,
          description: 'Business intelligence and interactive dashboards'
        },
        {
          name: 'Excel',
          rating: 4,
          icon: <FileSpreadsheet className="w-6 h-6" />,
          description: 'Data analysis with VLOOKUP, Pivot Tables, and advanced formulas'
        },
        {
          name: 'Matplotlib',
          rating: 4,
          icon: <Palette className="w-6 h-6" />,
          description: 'Static data visualization and plotting'
        },
        {
          name: 'Seaborn',
          rating: 4,
          icon: <BarChart className="w-6 h-6" />,
          description: 'Statistical data visualization and plotting'
        }
      ]
    },
    {
      id: 'api-development',
      title: 'API Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        {
          name: 'FastAPI',
          rating: 4,
          icon: <Server className="w-6 h-6" />,
          description: 'Modern, fast web framework for building APIs'
        },
        {
          name: 'Pydantic',
          rating: 4,
          icon: <Settings className="w-6 h-6" />,
          description: 'Data validation and settings management'
        }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        {
          name: 'AWS (Deployment)',
          rating: 3,
          icon: <Cloud className="w-6 h-6" />,
          description: 'Cloud infrastructure and deployment services'
        },
        {
          name: 'Docker',
          rating: 3,
          icon: <Wrench className="w-6 h-6" />,
          description: 'Containerization and application deployment'
        },
        {
          name: 'Git',
          rating: 4,
          icon: <GitBranch className="w-6 h-6" />,
          description: 'Version control and collaborative development'
        },
        {
          name: 'GitHub',
          rating: 4,
          icon: <Github className="w-6 h-6" />,
          description: 'Code hosting and collaborative development platform'
        },
        {
          name: 'Linux',
          rating: 3,
          icon: <Terminal className="w-6 h-6" />,
          description: 'Command line operations and server management'
        }
      ]
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-400'
            }`}
          />
        ))}
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 px-2">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                activeTab === index
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-black shadow-lg'
                  : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-cyan-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                {category.icon}
              </div>
              <span className="hidden sm:inline text-xs sm:text-sm">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="min-h-[400px]"
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillCategories[activeTab].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-cyan-500/30 hover:bg-black/60 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {/* Tooltip */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-black text-gray-200 text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 max-w-xs text-center">
                    {skill.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>

                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6">
                        {skill.icon}
                      </div>
                      <h3 className="text-gray-200 font-semibold text-sm sm:text-base lg:text-lg">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <StarRating rating={skill.rating} />
                    <span className="text-gray-400 text-xs sm:text-sm">
                      {skill.rating}/5
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;