import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Twitter, Instagram, ArrowLeft } from 'lucide-react';
import resumePdf from '../assests/deepika-resume.pdf';

const ContactPage = () => {
  // Custom Discord Icon Component
  const DiscordIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 sm:w-5 sm:h-5"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Email',
      value: 'dipseek5@gmail.com',
      href: 'mailto:dipseek5@gmail.com'
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Phone',
      value: '+91-7375914122',
      href: 'tel:+917375914122'
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'GitHub',
      href: 'https://github.com/dipseek'
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/deepika-saini-90663a279'
    },
    {
      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Twitter',
      href: 'https://twitter.com/dipseek'
    },
    {
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Instagram',
      href: 'https://instagram.com/dipseek'
    },
    {
      icon: <DiscordIcon />,
      label: 'Discord',
      href: 'https://discord.com/users/dipseek_'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <Link 
              to="/"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200 min-h-[44px] py-2 px-3 rounded-lg hover:bg-cyan-500/10"
              aria-label="Navigate back to home page"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Link>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-3 sm:mb-4 text-center sm:text-left">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl leading-relaxed text-center sm:text-left">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply chat about data engineering, machine learning, and technology.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}
            className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
          >
            <h3 className="text-gray-200 font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center sm:text-left">
              Contact Information
            </h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-2 sm:space-x-3">
                  <div className="text-cyan-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-200 hover:text-cyan-400 transition-colors duration-200 text-xs sm:text-sm break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-xs sm:text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h4 className="text-gray-200 font-semibold text-sm sm:text-base">Find me on:</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:scale-110 transform transition-transform"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
          >
            <h3 className="text-gray-200 font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center sm:text-left">
              Let's Work Together
            </h3>
            
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm lg:text-base text-center sm:text-left">
              Feel free to reach out via email or LinkedIn for any opportunities, collaborations, 
              or questions about data science and machine learning. You can also download my resume 
              to learn more about my experience and skills.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="mailto:dipseek5@gmail.com"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-black/60 text-gray-200 border border-cyan-500/30 rounded-lg font-medium hover:bg-black/80 transition-colors duration-200 hover:scale-105 transform transition-transform flex items-center justify-center space-x-1.5 sm:space-x-2 backdrop-blur-sm text-xs sm:text-sm"
                >
                  <Mail size={16} className="sm:w-5 sm:h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/deepika-saini-90663a279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-black/60 text-gray-200 border border-cyan-500/30 rounded-lg font-medium hover:bg-black/80 transition-colors duration-200 hover:scale-105 transform transition-transform flex items-center justify-center space-x-1.5 sm:space-x-2 backdrop-blur-sm text-xs sm:text-sm"
                >
                  <Linkedin size={16} className="sm:w-5 sm:h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <a
                href={resumePdf}
                download="Deepika_Resume.pdf"
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black rounded-lg font-medium hover:from-cyan-400 hover:to-cyan-500 transition-colors duration-200 hover:scale-105 transform transition-transform flex items-center justify-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm"
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage; 