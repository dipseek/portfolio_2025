import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Custom Discord Icon Component
  const DiscordIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white/60 hover:text-white transition-colors duration-200"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/20 backdrop-blur-lg rounded-lg border border-white/10 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
          <div className="fixed left-0 top-0 h-full w-80 bg-black/20 backdrop-blur-lg border-r border-white/10 transform transition-transform duration-300 ease-in-out">
            <div className="p-8 flex flex-col h-full pt-16">
              {/* Logo */}
              <div className="mb-12">
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  Deepika Saini
                </h1>
                <p className="text-purple-200 text-sm mt-2">An Engineer</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-6 mb-12">
                {[
                  { id: 'hero', label: 'Home', isLink: false },
                  { id: 'about', label: 'About', isLink: true, path: '/about' },
                  { id: 'skills', label: 'Skills', isLink: true, path: '/skills' },
                  { id: 'projects', label: 'Projects', isLink: true, path: '/projects' },
                  { id: 'education', label: 'Education', isLink: true, path: '/education' },
                  { id: 'contact', label: 'Contact', isLink: true, path: '/contact' }
                ].map((item) => (
                  item.isLink ? (
                    <Link
                      key={item.id}
                      to={item.path!}
                      onClick={() => setIsOpen(false)}
                      className="block text-white/80 hover:text-white transition-colors duration-200 text-left w-full"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-white/80 hover:text-white transition-colors duration-200 text-left w-full"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </nav>

              {/* Social Links */}
              <div className="mt-auto space-y-6">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/dipseek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/deepika-saini-90663a279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com/dipseek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://instagram.com/dipseek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://discord.com/users/dipseek_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <DiscordIcon />
                  </a>
                </div>
                <a
                  href="mailto:dipseek5@gmail.com"
                  className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Mail size={16} />
                  <span className="text-sm">dipseek5@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;