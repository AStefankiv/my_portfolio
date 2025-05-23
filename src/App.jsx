import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Experties from './components/Experties/Experties';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import PortfolioWriting from './components/Portfolio_Writing/Portfolio_Writing';
import Experience from './components/Experience/Experience';
import Writing from './pages/Writing/Writing';
import css from './styles/App.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Experties />
      <Experience />
      <PortfolioWriting />
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
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
