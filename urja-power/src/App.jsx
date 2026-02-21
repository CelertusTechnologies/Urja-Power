import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Products from './components/sections/Products';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Contact />
    </Layout>
  );
}

export default App;
