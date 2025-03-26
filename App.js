import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  console.log('Rendering App component'); // Debug log

  return (
    <Router>
      <div className="App min-h-screen bg-dark-bg">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <main className="pt-16"> {/* Add padding for navbar */}
                <Home />
                <About />
                <Skills />
                <Experience /> {/* Verify Experience is here */}
                <Projects />
                {/* Contact section placeholder */}
                <section id="contact" className="min-h-screen bg-dark-bg">
                  {/* Contact content will go here */}
                </section>
              </main>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 