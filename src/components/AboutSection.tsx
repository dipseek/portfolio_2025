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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Heading */}
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          {/* Main Introduction */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <div className="p-8 sm:p-12">
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto">
                My name is <span className="text-purple-200 font-semibold">Deepika Saini</span>, a Data Scientist and AI enthusiast from Jaipur, Rajasthan. I work with data analysis, machine learning models, and cloud deployments to build smart, scalable solutions. Beyond tech, I love playing chess, singing, travelling, exploring, foodie and love animals. Always ready for the challenges.
              </p>
            </div>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
              Beyond the Code
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${fact.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {fact.icon}
                    </div>
                    
                    <h4 className="text-white font-semibold text-lg mb-2 text-center">
                      {fact.title}
                    </h4>
                    
                    <p className="text-white/70 text-sm text-center leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;