import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsOverview from './components/projects/ProjectsOverview';
import PythonProjects from './components/projects/PythonProjects';
import MLProjects from './components/projects/MLProjects';
import DataAnalysisProjects from './components/projects/DataAnalysisProjects';
import GenAIProjects from './components/projects/GenAIProjects';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import EducationPage from './components/EducationPage';
import ContactPage from './components/ContactPage';
import AnimatedBackground from './components/AnimatedBackground';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import FloatingHomeButton from './components/FloatingHomeButton';

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
    <div className="text-white text-center">
      <h1 className="text-2xl mb-4">Something went wrong</h1>
      <p className="text-red-300">{error.message}</p>
    </div>
  </div>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        <AnimatedBackground />
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        {/* Mobile Navigation */}
        <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
        {/* Main Content */}
        <main className="lg:ml-80 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsOverview />
                    <EducationSection />
                    <ContactSection />
                  </>
                } />
                <Route path="/projects" element={<ProjectsOverview />} />
                <Route path="/projects/python" element={<PythonProjects />} />
                <Route path="/projects/ml" element={<MLProjects />} />
                <Route path="/projects/data-analysis" element={<DataAnalysisProjects />} />
                <Route path="/projects/genai" element={<GenAIProjects />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/skills" element={<SkillsPage />} />
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
  );
}

export default App;