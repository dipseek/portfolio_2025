import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0d1b2a 50%, #1e3a8a 75%, #00bfff 100%)'
      }}
    >
      {/* Matrix-style animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: 'linear-gradient(45deg, #00ffcc, #00bfff, #39ff14, #00ffcc, #00bfff)',
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Matrix-style data streams */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20px',
            width: '2px',
            height: '60px',
            opacity: Math.random() * 0.8 + 0.2
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Neon stars */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.8 + 0.2,
            boxShadow: '0 0 4px #00ffcc, 0 0 8px #00ffcc'
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
            boxShadow: [
              '0 0 4px #00ffcc, 0 0 8px #00ffcc',
              '0 0 8px #00ffcc, 0 0 16px #00ffcc',
              '0 0 4px #00ffcc, 0 0 8px #00ffcc'
            ]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Cyberpunk nebula clouds */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Matrix grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 204, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 204, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Depth overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
    </div>
  );
};

export default AnimatedBackground;