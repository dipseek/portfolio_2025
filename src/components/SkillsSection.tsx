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
  Globe
} from 'lucide-react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages & Tools',
      icon: <Code className="w-6 h-6" />,
      skills: [
        {
          name: 'Python',
          rating: 5,
          icon: <Code className="w-6 h-6" />,
          description: 'Primary programming language for data science and ML projects'
        },
        {
          name: 'Git & GitHub',
          rating: 4,
          icon: <GitBranch className="w-6 h-6" />,
          description: 'Version control and collaborative development'
        },
        {
          name: 'Excel',
          rating: 4,
          icon: <FileSpreadsheet className="w-6 h-6" />,
          description: 'Data analysis with VLOOKUP, Pivot Tables, and advanced formulas'
        },
        {
          name: 'Linux/Unix',
          rating: 3,
          icon: <Terminal className="w-6 h-6" />,
          description: 'Command line operations and server management'
        }
      ]
    },
    {
      id: 'ml-nlp',
      title: 'Machine Learning & NLP',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        {
          name: 'Scikit-learn',
          rating: 5,
          icon: <Zap className="w-6 h-6" />,
          description: 'Machine learning algorithms and model training'
        },
        {
          name: 'TensorFlow',
          rating: 4,
          icon: <Brain className="w-6 h-6" />,
          description: 'Deep learning and neural network development'
        },
        {
          name: 'NLTK',
          rating: 4,
          icon: <MessageSquare className="w-6 h-6" />,
          description: 'Natural Language Processing and text analysis'
        },
        {
          name: 'NLP',
          rating: 4,
          icon: <MessageSquare className="w-6 h-6" />,
          description: 'Text preprocessing, sentiment analysis, and language models'
        }
      ]
    },
    {
      id: 'data-handling',
      title: 'Data Handling & Analysis',
      icon: <Database className="w-6 h-6" />,
      skills: [
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
        },
        {
          name: 'SQL',
          rating: 4,
          icon: <Database className="w-6 h-6" />,
          description: 'Database queries and data extraction'
        },
        {
          name: 'Power BI',
          rating: 4,
          icon: <BarChart3 className="w-6 h-6" />,
          description: 'Business intelligence and interactive dashboards'
        },
        {
          name: 'Excel (Advanced)',
          rating: 4,
          icon: <FileSpreadsheet className="w-6 h-6" />,
          description: 'VLOOKUP, Pivot Tables, and complex data analysis'
        }
      ]
    },
    {
      id: 'visualization',
      title: 'Data Visualization',
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
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
      id: 'devops',
      title: 'Deployment & DevOps',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        {
          name: 'Docker & Kubernetes',
          rating: 3,
          icon: <Cloud className="w-6 h-6" />,
          description: 'Containerization and orchestration'
        },
        {
          name: 'Jenkins & GitHub Actions',
          rating: 3,
          icon: <Settings className="w-6 h-6" />,
          description: 'CI/CD pipelines and automation'
        },
        {
          name: 'AWS',
          rating: 3,
          icon: <Cloud className="w-6 h-6" />,
          description: 'Cloud infrastructure and services'
        },
        {
          name: 'API Deployment',
          rating: 4,
          icon: <Globe className="w-6 h-6" />,
          description: 'RESTful APIs and web service deployment'
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
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm ${
                activeTab === index
                  ? 'bg-purple-500/80 text-white shadow-lg'
                  : 'bg-white/15 text-white/80 hover:bg-white/25 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillCategories[activeTab].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {/* Tooltip */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 max-w-xs text-center">
                    {skill.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-purple-200 group-hover:text-purple-100 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-white font-semibold text-lg">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <StarRating rating={skill.rating} />
                    <span className="text-white/60 text-sm">
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