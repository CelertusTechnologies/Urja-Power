import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';

// Lazy loading product pages
const UpvcPipe = lazy(() => import('./pages/UpvcPipe'));
const ElectricalPipe = lazy(() => import('./pages/ElectricalPipe'));
const ModularPipe = lazy(() => import('./pages/ModularPipe'));
const FanBox = lazy(() => import('./pages/FanBox'));
const ConcealedBox = lazy(() => import('./pages/ConcealedBox'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a #hash in the URL (like #products), scroll to it
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // slight delay to ensure DOM is ready
    } else {
      // Otherwise scroll to the absolute top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white bg-black">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/upvc-pipe" element={<Layout hideNavbar={true}><UpvcPipe /></Layout>} />
          <Route path="/products/electrical-pipe" element={<Layout hideNavbar={true}><ElectricalPipe /></Layout>} />
          <Route path="/products/modular-pipe" element={<Layout hideNavbar={true}><ModularPipe /></Layout>} />
          <Route path="/products/fan-box" element={<Layout hideNavbar={true}><FanBox /></Layout>} />
          <Route path="/products/concealed-box" element={<Layout hideNavbar={true}><ConcealedBox /></Layout>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
