import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TeachingAreas from './components/TeachingAreas';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AccessibilityWidget from './components/AccessibilityWidget';


function App() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      <main>
        <Hero />
        <TeachingAreas />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AccessibilityWidget />
      <WhatsAppButton />

    </div>
  );
}

export default App;