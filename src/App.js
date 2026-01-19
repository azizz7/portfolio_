import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Divider from './components/Divider';
import './styles/globals.css';

function App() {
  return (
    <HashRouter>
      <div className="App min-h-screen bg-dark-bg flex flex-col">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-grow">
                <Home />
                <Divider />
                <About />
                <Divider />
                <Skills />
                <Divider />
                <Experience />
                <Divider />
                <Projects />
                <Divider />
                <Contact />
              </main>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Divider />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App; 