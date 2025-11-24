import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Stats from './components/Stats';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-50 text-gray-800 selection:bg-brand-200">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="impact">
          <Stats />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm bg-white">
        <p>© 2024 Gennoctua. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;