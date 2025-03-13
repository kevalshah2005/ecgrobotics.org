import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/home/Home'
import About from './components/pages/about/About';
import Footer from './components/footer/Footer';
import Join from './components/pages/join/Join';
import TeamPage731 from './components/pages/teamPages/teamPage731/TeamPage731';
import TeamPage5795 from './components/pages/teamPages/teamPage5795/TeamPage5795';
import TeamPage6183 from './components/pages/teamPages/teamPage6183/TeamPage6183';
import TeamPage10195 from './components/pages/teamPages/teamPage10195/TeamPage10195';
import TeamPage1533 from './components/pages/teamPages/teamPage1533/TeamPage1533';

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
          <Route path='/ftc5795' exact element={<TeamPage5795 />} />
          <Route path='/ftc6183' exact element={<TeamPage6183 />} />
          <Route path='/ftc10195' exact element={<TeamPage10195 />} />
          <Route path='/frc1533' exact element={<TeamPage1533 />} />
        </Routes>
        <Footer />
      </Router>
      <SpeedInsights />
    </>
  );
}

export default App;