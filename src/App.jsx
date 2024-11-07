import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Experties from './components/Experties/Experties';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';
import GrammarCheckPage from './pages/GrammarCheckPage/GrammarCheckPage'; // Import the new page
import css from './styles/App.module.scss';

const Home = () => {
  return (
    <>
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <Skills />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Main Page */}
          <Route path="/grammar-check" element={<GrammarCheckPage />} /> {/* New Grammar Check Page */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
