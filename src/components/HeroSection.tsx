import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import profileImg from '../assests/img2.jpg';
import resumePdf from '../assests/deepika-resume.pdf';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Deepika!";
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, isTyping, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const gradientTextVariants = {
    hidden: { 
      backgroundPosition: "0% 50%",
      opacity: 0,
      y: 20
    },
    visible: {
      backgroundPosition: "100% 50%",
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 2
      }
    }
  };



  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">


      <motion.div 
        className="relative z-10 w-full max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="px-8 py-12 text-center space-y-8">
          {/* Profile Photo */}
          <motion.div 
            className="w-48 h-48 mx-auto rounded-full mb-8 shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            </div>
          </motion.div>

          {/* Main Headline - Typewriter Effect */}
          <motion.div variants={typewriterVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
              {text}
              <span className="animate-pulse">|</span>
            </h1>
          </motion.div>

          {/* Professional Tagline under Name */}
          <motion.div variants={itemVariants}>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl">Turning data into insights.</p>
          </motion.div>

          {/* Subtitle - Professional Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-cyan-400 drop-shadow">
              Data Scientist | AI Enthusiast | Fresher
            </h2>
          </motion.div>

          {/* Career-aligned Quote - Gradient Reveal Effect */}
          <motion.div variants={gradientTextVariants}>
            <h3 
              className="text-lg sm:text-xl lg:text-2xl font-medium bg-gradient-to-r from-cyan-400 via-gray-200 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
              style={{
                backgroundImage: "linear-gradient(90deg, #00ffcc 0%, #e6e6e6 50%, #00ffcc 100%)"
              }}
            >
              "Passionate about solving real-world problems with data and AI."
            </h3>
          </motion.div>

          {/* Location */}
          <motion.p 
            className="text-gray-300 text-lg"
            variants={itemVariants}
          >
            Jaipur, Rajasthan
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            variants={itemVariants}
          >
            <motion.a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black/40 text-gray-200 rounded-xl font-semibold shadow-md hover:bg-black/60 transition-all duration-200 flex items-center justify-center space-x-2 backdrop-blur-md border border-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Resume</span>
            </motion.a>
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black rounded-xl font-semibold shadow-md hover:from-cyan-400 hover:to-cyan-500 transition-all duration-200 flex items-center justify-center space-x-2 backdrop-blur-md border border-cyan-400/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default HeroSection;