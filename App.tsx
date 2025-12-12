import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Manifesto Section */}
        <div className="bg-black py-24 md:py-40 border-b border-white/10">
            <div className="max-w-[95%] mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-['Oswald'] uppercase leading-snug max-w-4xl text-gray-300">
                    Solestra is a new-age creative agency bridging the gap between <span className="text-white bg-amber-500/20 px-2">internet culture</span> and brand strategy. We build loud, impossible-to-ignore digital experiences.
                </h2>
            </div>
        </div>

        <Services />
        <AIConsultant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;