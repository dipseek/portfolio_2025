import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-8 sm:mb-10 lg:mb-12 text-center">
          Education
        </h2>
        
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex-shrink-0 self-start">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-gray-200 font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="text-cyan-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                Jaipur Engineering College
              </p>
              
              <div className="flex flex-row items-center justify-center sm:justify-start space-x-3 sm:space-x-6 text-gray-400 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 bg-cyan-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">2022 - 2026</span>
                </div>
                <div className="flex items-center space-x-2 bg-cyan-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">CGPA: 8.5</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Pursuing a comprehensive Computer Science degree with focus on modern technologies, 
                data engineering, and machine learning. The curriculum covers fundamental programming concepts, 
                advanced algorithms, database systems, and emerging technologies in the field of computer science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;