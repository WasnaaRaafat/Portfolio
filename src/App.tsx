import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <ScrollToTop>
      <div className='bg-primary flex flex-col px-8 md:px-14'>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
