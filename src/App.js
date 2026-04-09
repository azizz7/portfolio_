import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Divider from './components/Divider';
import MouseSpotlight from './components/MouseSpotlight';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
  return (
    <HashRouter>
      <div className="App min-h-screen bg-bg-primary flex flex-col relative select-none">
        <BackgroundPattern />
        <div className="relative z-10 flex flex-col flex-grow">
          <MouseSpotlight />
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
                  <Certificates />
                  <Divider />
                  <Contact />
                </main>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
          <Divider />
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App; 