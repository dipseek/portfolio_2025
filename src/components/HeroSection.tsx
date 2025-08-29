import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import profileImg from '../assests/img2.jpg';
import resumePdf from '../assests/deepika-resume.pdf';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Deepika Saini";
  
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
        // Hide cursor after typing is complete with a delay
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
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
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 text-center space-y-6 sm:space-y-8">
          {/* Profile Photo */}
          <motion.div 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full mb-4 sm:mb-6 lg:mb-8 shadow-xl"
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
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight drop-shadow-lg min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[4rem] xl:min-h-[5rem] flex items-center justify-center">
              {text}
              {showCursor && <span className="animate-pulse">|</span>}
            </h1>
          </motion.div>

          {/* Professional Tagline under Name */}
          <motion.div variants={itemVariants}>
            <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg">Turning data into insights.</p>
          </motion.div>

          {/* Subtitle - Professional Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-cyan-400 drop-shadow">
              Data Scientist | AI Enthusiast | Fresher
            </h2>
          </motion.div>

          {/* Career-aligned Quote - Gradient Reveal Effect */}
          <motion.div variants={gradientTextVariants}>
            <h3 
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium bg-gradient-to-r from-cyan-400 via-gray-200 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] px-2 sm:px-0"
              style={{
                backgroundImage: "linear-gradient(90deg, #00ffcc 0%, #e6e6e6 50%, #00ffcc 100%)"
              }}
            >
              "Passionate about solving real-world problems with data and AI."
            </h3>
          </motion.div>

          {/* Location */}
          <motion.p 
            className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg"
            variants={itemVariants}
          >
            Jaipur, Rajasthan
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 lg:pt-8 px-2 sm:px-0"
            variants={itemVariants}
          >
            <motion.a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-black/40 text-gray-200 rounded-xl font-semibold shadow-md hover:bg-black/60 transition-all duration-200 flex items-center justify-center space-x-2 backdrop-blur-md border border-cyan-500/30 text-xs sm:text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>View Resume</span>
            </motion.a>
            <motion.button
              onClick={scrollToContact}
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black rounded-xl font-semibold shadow-md hover:from-cyan-400 hover:to-cyan-500 transition-all duration-200 flex items-center justify-center space-x-2 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default HeroSection;