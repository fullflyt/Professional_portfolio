import React, { useState, useEffect } from 'react';
import { mockData } from '../mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero data={mockData.personal} stats={mockData.stats} />
        <About data={mockData.personal} certifications={mockData.certifications} />
        <Skills skills={mockData.skills} />
        <Experience experience={mockData.experience} />
        <Projects projects={mockData.projects} />
        <Contact data={mockData.personal} />
      </main>
      <Footer data={mockData.personal} />
    </div>
  );
}