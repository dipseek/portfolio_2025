import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Music, Plane, Utensils, Heart, Gamepad2 } from 'lucide-react';

const AboutSection = () => {
  const funFacts = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Chess Player",
      description: "Strategic thinker who loves the complexity of chess",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Lover",
      description: "Passionate about singing and discovering new melodies",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel Enthusiast",
      description: "Always exploring new places and cultures",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Foodie",
      description: "Love exploring different cuisines and flavors",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Lover",
      description: "Compassionate towards all creatures great and small",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Enthusiast",
      description: "Fascinated by the future of artificial intelligence",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="about" className="pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Heading */}
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          {/* Main Introduction */}
          <motion.div 
            className="mb-6 sm:mb-8 md:mb-12 lg:mb-16"
            variants={itemVariants}
          >
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-4xl mx-auto px-2 sm:px-0">
                I'm <span className="text-cyan-400 font-semibold">Deepika Saini</span>, an aspiring Data Scientist from Jaipur. I specialize in building data-driven solutions using Python, SQL, and modern ML/NLP libraries including TensorFlow, Scikit-learn, and NLTK. I'm comfortable working with Jupyter, Excel, and Power BI for analysis and visualization, and I have hands-on exposure to deploying models and apps using AWS, Docker, FastAPI, and Tkinter. I'm driven by curiosity, clarity, and impact—eager to contribute to real-world projects and grow with a team that values learning and execution.
              </p>
            </div>
          </motion.div>
          {/* Removed "Beyond the Code" section as requested */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;