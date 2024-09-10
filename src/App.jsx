import React from 'react'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home'
import About from './components/pages/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;