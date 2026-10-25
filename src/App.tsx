import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  // The browser tries to jump to a #section link before React has rendered
  // it, so jump again once the page exists.
  useEffect(() => {
    const { hash } = window.location;
    if (hash) document.querySelector(hash)?.scrollIntoView();
  }, []);

  return (
    <div className='bg-primary flex flex-col px-8 md:px-14' id='top'>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
