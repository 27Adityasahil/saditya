import React, { useState, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';


const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));


const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    home: null,
    about: null,
    skills: null,
    education: null,
    projects: null,
    contact: null,
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    Object.entries(sectionsRef.current).forEach(([section, ref]) => {
      if (!ref) return;
      
      const offsetTop = ref.offsetTop;
      const height = ref.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        setActiveSection(section);
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Navbar activeSection={activeSection} />
      
      <Suspense fallback={<LoadingFallback />}>
        <section 
          id="home" 
          ref={(el) => (sectionsRef.current.home = el)}
          className="min-h-screen"
        >
          <Hero />
        </section>

        <motion.section 
          id="about"
          ref={(el) => (sectionsRef.current.about = el)}
          className="py-20 px-4 md:px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.section>

        <motion.section 
          id="skills"
          ref={(el) => (sectionsRef.current.skills = el)}
          className="py-20 px-4 md:px-20 bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>

        <motion.section 
          id="education"
          ref={(el) => (sectionsRef.current.education = el)}
          className="py-20 px-4 md:px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Education />
        </motion.section>

        <motion.section 
          id="projects"
          ref={(el) => (sectionsRef.current.projects = el)}
          className="py-20 px-4 md:px-20 bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.section>

        <motion.section 
          id="contact"
          ref={(el) => (sectionsRef.current.contact = el)}
          className="py-20 px-4 md:px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </Suspense>

      <footer className="bg-gray-900 text-center py-6 border-t border-gray-800">
        <p>© 2025 | Designed & Built with ❤️</p>
      </footer>
    </div>
  );
}

export default App;