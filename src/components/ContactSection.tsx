import React from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import resumePdf from '../assests/deepika-resume.pdf';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'dipseek5@gmail.com',
      href: 'mailto:dipseek5@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91-7375914122',
      href: 'tel:+917375914122'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/dipseek'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/deepika-saini-90663a279'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      href: 'https://twitter.com/dipseek'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://instagram.com/dipseek'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-8 sm:mb-10 lg:mb-12 text-center">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
            <h3 className="text-gray-200 font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center sm:text-left">
              Contact Information
            </h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-3">
                  <div className="text-cyan-400 w-5 h-5">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-200 hover:text-cyan-400 transition-colors duration-200 text-sm sm:text-base"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-gray-200 font-semibold text-sm sm:text-base">Find me on:</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:scale-110 transform transition-transform w-5 h-5"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
            <h3 className="text-gray-200 font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center sm:text-left">
              Let's Work Together
            </h3>
            
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base text-center sm:text-left">
              Feel free to reach out via email or LinkedIn for any opportunities, collaborations, 
              or questions about data science and machine learning. You can also download my resume 
              to learn more about my experience and skills.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="mailto:dipseek5@gmail.com"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-black/60 text-gray-200 border border-cyan-500/30 rounded-lg font-medium hover:bg-black/80 transition-colors duration-200 hover:scale-105 transform transition-transform flex items-center justify-center space-x-2 backdrop-blur-sm text-sm sm:text-base"
                >
                  <Mail size={16} className="sm:w-5 sm:h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/deepika-saini-90663a279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-black/60 text-gray-200 border border-cyan-500/30 rounded-lg font-medium hover:bg-black/80 transition-colors duration-200 hover:scale-105 transform transition-transform flex items-center justify-center space-x-2 backdrop-blur-sm text-sm sm:text-base"
                >
                  <Linkedin size={16} className="sm:w-5 sm:h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <a
                href={resumePdf}
                download="Deepika_Resume.pdf"
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black rounded-lg font-medium hover:from-cyan-400 hover:to-cyan-500 transition-colors duration-200 hover:scale-105 transform transition-transform flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;