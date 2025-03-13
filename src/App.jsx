import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/home/Home'
import About from './components/pages/about/About';
import Footer from './components/footer/Footer';
import Join from './components/pages/join/Join';
import TeamPage731 from './components/pages/teamPages/teampage731/TeamPage731';

import { useEffect } from "react";
import Sponsors from './components/pages/sponsors/Sponsors';
import { SpeedInsights } from '@vercel/speed-insights/react';

// For some reason it doesn't automatically scroll to top when switching pages, so this is needed
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/sponsors' exact element = {<Sponsors />} />
          <Route path='/join' exact element={<Join />} />
          <Route path='/ftc731' exact element={<TeamPage731 />} />
        </Routes>
        <Footer />
      </Router>
      <SpeedInsights />
    </>
  );
}

export default App;