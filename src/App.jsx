import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AboutMe from './components/sections/AboutMe';
import Education from './components/sections/Education';
import Hobbies from './components/sections/Hobbies';
import Goals from './components/sections/Goals';
import Experience from './components/sections/Experience';
import PhotoGallery from './components/sections/PhotoGallery';
import Feedback from './components/sections/Feedback';
import './styles/index.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <AboutMe />
        <Education />
        <Experience />
        <Hobbies />
        <Goals />
        <PhotoGallery />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
