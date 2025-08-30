import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingHomeButton from './components/FloatingHomeButton';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components for better performance
const ProjectsOverview = React.lazy(() => import('./components/projects/ProjectsOverview'));
const SummerInternshipProjects = React.lazy(() => import('./components/projects/PythonProjects'));
const MLProjects = React.lazy(() => import('./components/projects/MLProjects'));
const DataAnalysisProjects = React.lazy(() => import('./components/projects/DataAnalysisProjects'));
const GenAIProjects = React.lazy(() => import('./components/projects/GenAIProjects'));
const EducationPage = React.lazy(() => import('./components/EducationPage'));
const CertificationsPage = React.lazy(() => import('./components/CertificationsPage'));
const ContactPage = React.lazy(() => import('./components/ContactPage'));
const AboutPage = React.lazy(() => import('./components/AboutPage'));
const SkillsPage = React.lazy(() => import('./components/SkillsPage'));

// Loading fallback component with better mobile optimization
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <div className="text-white text-sm sm:text-lg">Loading...</div>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
    <div className="text-white text-center max-w-md mx-auto px-4">
      <h1 className="text-2xl mb-4">Something went wrong</h1>
      <p className="text-red-300 mb-6">{error.message}</p>
      <div className="space-y-3">
        <button
          onClick={() => window.location.reload()}
          className="w-full px-6 py-3 bg-cyan-500 text-black rounded-lg font-medium hover:bg-cyan-400 transition-colors duration-200"
        >
          Reload Page
        </button>
        <Link
          to="/"
          className="block w-full px-6 py-3 bg-black/60 text-white border border-cyan-500/30 rounded-lg font-medium hover:bg-black/80 transition-colors duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  </div>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change and optimize performance
  React.useEffect(() => {
    setMobileMenuOpen(false);
    
    // Preload critical components on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        import('./components/projects/ProjectsOverview');
        import('./components/EducationPage');
      });
    }
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen relative overflow-hidden">
          <AnimatedBackground />
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          {/* Mobile Navigation */}
          <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
          {/* Main Content */}
          <main className="pt-16 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
              <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsOverview />
                    <EducationSection />
                    <CertificationsSection />
                    <ContactSection />
                  </>
                } />
                <Route path="/projects" element={<ProjectsOverview />} />
                <Route path="/summer-internship" element={<SummerInternshipProjects />} />
                <Route path="/projects/ml" element={<MLProjects />} />
                <Route path="/projects/data-analysis" element={<DataAnalysisProjects />} />
                <Route path="/projects/genai" element={<GenAIProjects />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                {/* Fallback route for 404 */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center max-w-md mx-auto px-4">
                      <h1 className="text-3xl font-bold text-gray-200 mb-4">Page Not Found</h1>
                      <p className="text-gray-300 mb-6">The page you're looking for doesn't exist.</p>
                      <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 bg-cyan-500 text-black rounded-lg font-medium hover:bg-cyan-400 transition-colors duration-200"
                      >
                        Go to Home
                      </Link>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
            {/* Footer */}
            <footer className="py-8 text-center">
              <p className="text-gray-400 text-sm">happy to chat :)</p>
            </footer>
          </div>
        </main>
          <FloatingHomeButton />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;