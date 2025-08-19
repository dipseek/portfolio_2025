import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          Education
        </h2>
        
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-purple-900" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-2">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="text-purple-200 font-medium mb-2">
                Jaipur Engineering College
              </p>
              
              <div className="flex items-center space-x-4 text-white/70 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - 2026</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span>CGPA: 8.5</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-white/80">
                  <strong className="text-purple-200">Relevant Coursework:</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Database Management Systems', 'Data Analysis', 'Power BI', 'Data Structures', 'Algorithms'].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-white/15 text-white/80 rounded-full text-sm backdrop-blur-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;