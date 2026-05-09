import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AcademyDifference } from './components/AcademyDifference';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="courses" className="py-20 bg-gray-50">
          <AcademyDifference />
        </section>

        <section id="reviews" className="py-20">
          <Reviews />
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}