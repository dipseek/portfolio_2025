import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  parallaxSpeed: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const AnimatedBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate stars
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 15000); // More stars for better effect

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 0.5, // Varied star sizes
          opacity: Math.random() * 0.9 + 0.1,
          twinkleSpeed: Math.random() * 3 + 0.5, // More varied twinkling
          parallaxSpeed: Math.random() * 0.8 + 0.2 // Enhanced parallax effect
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  // Generate particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 30000); // More particles

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 0.3, // Slightly larger particles
          opacity: Math.random() * 0.4 + 0.1,
          speed: Math.random() * 0.8 + 0.2
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full shadow-lg"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: `translateX(${(mousePosition.x - 50) * star.parallaxSpeed * 0.15}px) translateY(${(mousePosition.y - 50) * star.parallaxSpeed * 0.15}px) translateZ(${scrollY * star.parallaxSpeed * 0.02}px)`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.8})`
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.6, 1.4, 0.6],
            boxShadow: [
              `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.3})`,
              `0 0 ${star.size * 4}px rgba(255, 255, 255, ${star.opacity * 0.8})`,
              `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.3})`
            ]
          }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Particles/Dust */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `translateX(${(mousePosition.x - 50) * particle.speed * 0.05}px) translateY(${(mousePosition.y - 50) * particle.speed * 0.05}px)`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [particle.opacity * 0.3, particle.opacity, particle.opacity * 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: particle.speed * 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Nebula-like clouds */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Shooting stars */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          background: [
            'linear-gradient(45deg, transparent 0%, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%, transparent 100%)',
            'linear-gradient(45deg, transparent 0%, transparent 40%, transparent 50%, transparent 60%, transparent 100%)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 8
        }}
        style={{
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%'
        }}
      />

      {/* Depth overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
    </div>
  );
};

export default AnimatedBackground;