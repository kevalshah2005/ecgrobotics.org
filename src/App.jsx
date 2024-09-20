import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/home/Home'
import About from './components/pages/about/About';
import Footer from './components/footer/Footer';

import { useEffect } from "react";
import Sponsors from './components/pages/sponsors/Sponsors';

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;