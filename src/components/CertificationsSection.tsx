import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import certificatePdf from '../assests/Deepika.pdf';
import dsCertificatePdf from '../assests/deepika-ds-125.pdf';
import awsCertificatePdf from '../assests/deepika-aws-lw.pdf';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Generative AI, MLOps, Cloud & DevOps Training',
      organization: 'LinuxWorld Informatics Pvt. Ltd.',
      date: 'Jun 2025 – Aug 2025',
      description: 'Research-based internship training on AI, ML, DL, NLP, Neural Networks, TensorFlow, PyTorch, Keras, Docker, Kubernetes, Terraform, Jenkins, Flask, MongoDB, Git, and Cloud Computing.',
      certificateLink: certificatePdf,
      technologies: ['AI/ML', 'Cloud Computing', 'DevOps', 'Deep Learning']
    },
    {
      title: 'AWS Cloud with Artificial Intelligence (AI) Workshop',
      organization: 'LinuxWorld Informatics Pvt. Ltd.',
      date: 'Issued Jul 2025',
      description: 'Participated in a 6+ hour national-level workshop on AWS Cloud & AI, covering topics such as Cloud Computing, Python, Computer Vision with OpenCV, AWS CLI, IAM, EC2, Boto3, and real-time AI applications.',
      certificateLink: awsCertificatePdf,
      technologies: ['AWS Cloud', 'Artificial Intelligence', 'Python', 'Computer Vision', 'OpenCV', 'AWS CLI', 'EC2', 'Boto3']
    },
    {
      title: 'Data Science Aspire Program (125 Hours)',
      organization: 'Learn and Build (LnB)',
      date: 'Issued May 2025',
      description: 'Completed a 125-hour Data Science Aspire Program covering Python, ML, Data Analysis, and applied projects.',
      certificateLink: dsCertificatePdf,
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Applied Projects']
    }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-8 sm:mb-10 lg:mb-12 text-center">
          Certifications
        </h2>
        
        <div className="space-y-6 sm:space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Certificate Icon */}
                <div className="flex-shrink-0 self-start">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                </div>
                
                {/* Certificate Content */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                    <h3 className="text-gray-200 font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-0">
                      {cert.title}
                    </h3>
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 sm:space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 text-sm sm:text-base font-medium bg-yellow-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-yellow-500/30 flex-shrink-0 self-center sm:self-start"
                      title="View Certificate"
                    >
                      <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4 text-gray-400">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Building className="w-4 h-4" />
                      <span className="text-cyan-400 font-semibold text-sm sm:text-base">
                        {cert.organization}
                      </span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm sm:text-base font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {cert.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {cert.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs sm:text-sm text-gray-300 bg-yellow-500/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;