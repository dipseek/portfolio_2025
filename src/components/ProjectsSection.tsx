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
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          Python Projects made in Summer Internship 2025
        </h2>
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
          <ul className="space-y-6">
            {pythonProjects.map((project) => (
              <li key={project.title} className="flex items-center justify-between group hover:bg-white/10 rounded-lg px-4 py-3 transition-all backdrop-blur-sm">
                <span className="text-white text-lg font-medium">{project.title}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200"
                  title="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
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