import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Problems from './components/Problems';
import Product from './components/Product';
import BeforeAfter from './components/BeforeAfter';
import Bonus from './components/Bonus';
import CTA from './components/CTA';
import Credibility from './components/Credibility';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Problems />
      <Product />
      <BeforeAfter />
      <Bonus />
      <CTA />
      <Credibility />
      <Footer />
    </div>
  );
}

export default App;