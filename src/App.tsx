import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Contenido principal */}
      <Hero />
      <Services />
      <Industries />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;