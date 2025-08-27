import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-12 text-center">
          Education
        </h2>
        
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-gray-200 font-bold text-2xl mb-3">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="text-cyan-400 font-semibold text-lg mb-4">
                Jaipur Engineering College
              </p>
              
              <div className="flex items-center space-x-6 text-gray-400 mb-6">
                <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">2022 - 2026</span>
                </div>
                <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">CGPA: 8.5</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed">
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