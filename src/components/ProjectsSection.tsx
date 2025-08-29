import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const pythonProjects = [
    {
      title: 'Make Calls using Python',
      github: 'https://github.com/dipseek/python_projects/blob/main/make_calls.py',
    },
    {
      title: 'Send SMS using Python',
      github: 'https://github.com/dipseek/python_projects/blob/main/send-sms.py',
    },
    {
      title: 'Send an Email using Python',
      github: 'https://github.com/dipseek/python_projects/blob/main/send_email.py',
    },
    {
      title: 'Post on Instagram using Python',
      github: 'https://github.com/dipseek/python_projects/blob/main/post-insta.py',
    },
    {
      title: 'Send a WhatsApp Message by Python',
      github: 'https://github.com/dipseek/python_projects/blob/main/send-whatsapp-message.py',
    },
    {
      title: 'Develop a Menu Driven Python Project',
      github: 'https://github.com/dipseek/python_projects/blob/main/menu-driven.py',
    },
    {
      title: 'Automation Panel using Streamlit',
      github: 'https://github.com/dipseek/python_projects/blob/main/automation_panel.py',
    },
    {
      title: 'Road Safety Automation Panel using Streamlit and Gradio',
      github: 'https://github.com/dipseek/python_projects/blob/main/RoadSafetyGemini.ipynb',
    },
    {
      title: 'Menu Based Project',
      github: 'https://github.com/dipseek/python_projects/blob/main/menu-based.py',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 text-center">
          Python Projects made in Summer Internship 2025
        </h2>
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 shadow-xl">
          <ul className="space-y-4 sm:space-y-6">
            {pythonProjects.map((project) => (
              <li key={project.title} className="flex flex-col sm:flex-row sm:items-center justify-between group hover:bg-white/10 rounded-lg px-3 sm:px-4 py-3 transition-all backdrop-blur-sm gap-2 sm:gap-0">
                <span className="text-white text-sm sm:text-base lg:text-lg font-medium pr-2">{project.title}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 self-start sm:self-auto"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">GitHub</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;