import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter, Instagram, Mail, Home } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const scrollToSection = React.useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }, [setIsOpen]);

  // Handle keyboard navigation with optimized event handling
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown, { passive: true });
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setIsOpen]);

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = React.useMemo(() => [
    { id: 'home', label: 'Home', isLink: true, path: '/', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About', isLink: true, path: '/about' },
    { id: 'skills', label: 'Skills', isLink: true, path: '/skills' },
    { id: 'projects', label: 'Projects', isLink: true, path: '/projects' },
    { id: 'education', label: 'Education', isLink: true, path: '/education' },
    { id: 'contact', label: 'Contact', isLink: true, path: '/contact' }
  ], []);

  // Memoized Discord Icon Component for better performance
  const DiscordIcon = React.memo(() => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white/60 hover:text-white transition-colors duration-200"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  ));

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-black/60 backdrop-blur-lg rounded-lg border border-cyan-500/30 text-cyan-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}>
          <div 
            className="fixed left-0 top-0 h-full w-72 sm:w-80 bg-black/60 backdrop-blur-lg border-r border-cyan-500/30 transform transition-transform duration-300 ease-in-out"
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 flex flex-col h-full pt-16">
              {/* Logo */}
              <div className="mb-8 sm:mb-12">
                <h1 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight">
                  Deepika Saini
                </h1>
                <p className="text-cyan-300 text-sm mt-2">An Engineer</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 sm:space-y-3 mb-8 sm:mb-12" role="navigation" aria-label="Main navigation">
                {navigationItems.map((item) => (
                  item.isLink ? (
                    <Link
                      key={item.id}
                      to={item.path!}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-left w-full min-h-[44px] py-3 px-2 rounded-lg hover:bg-cyan-500/10 ${
                        location.pathname === item.path ? 'text-cyan-400 font-semibold bg-cyan-500/20' : ''
                      }`}
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                      {item.icon && item.icon}
                      <span className="text-base">{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-left w-full min-h-[44px] py-3 px-2 rounded-lg hover:bg-cyan-500/10"
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      <span className="text-base">{item.label}</span>
                    </button>
                  )
                ))}
              </nav>

              {/* Social Links */}
              <div className="mt-auto space-y-6">
                <div className="flex justify-center sm:justify-start">
                  <a
                    href="https://github.com/dipseek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 w-[44px] h-[44px] flex items-center justify-center hover:bg-cyan-500/10"
                    aria-label="Visit GitHub profile"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/deepika-saini-90663a279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 w-[44px] h-[44px] flex items-center justify-center hover:bg-cyan-500/10"
                    aria-label="Visit LinkedIn profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com/dipseek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 w-[44px] h-[44px] flex items-center justify-center hover:bg-cyan-500/10"
                    aria-label="Visit Twitter profile"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://instagram.com/dipseek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 w-[44px] h-[44px] flex items-center justify-center hover:bg-cyan-500/10"
                    aria-label="Visit Instagram profile"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://discord.com/users/dipseek_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 w-[44px] h-[44px] flex items-center justify-center hover:bg-cyan-500/10"
                    aria-label="Visit Discord profile"
                  >
                    <DiscordIcon />
                  </a>
                </div>
                <a
                  href="mailto:dipseek5@gmail.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 min-h-[44px] py-2 px-2 rounded-lg hover:bg-cyan-500/10"
                  aria-label="Send email to dipseek5@gmail.com"
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