import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/#home' },
    { title: 'About', path: '/#about' },
    { title: 'Skills', path: '/#skills' },
    { title: 'Experience', path: '/#experience' },
    { title: 'Projects', path: '/#projects' },
    { title: 'Certifications', path: '/#certificates' },
    { title: 'Contact', path: '/#contact' }
  ];

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b-2 ${scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-black py-4' : 'bg-transparent border-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-12">

          {/* Logo */}
          <NavHashLink
            smooth
            to="/#home"
            className="group relative"
          >
            <div className="relative z-10 bg-white border-2 border-black px-4 py-2 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-300">
              <span className="text-black font-oswald font-bold text-xl tracking-tight uppercase">
                Aziz.BW
              </span>
            </div>
            <div className="absolute top-1 left-1 w-full h-full bg-accent-yellow border-2 border-black -z-0" />
          </NavHashLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavHashLink
                key={link.title}
                smooth
                to={link.path}
                scroll={scrollWithOffset}
                className="relative font-oswald font-bold text-sm uppercase tracking-widest text-muted-grey hover:text-soft-white transition-colors duration-300 group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-yellow group-hover:w-full transition-all duration-300" />
              </NavHashLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white border-2 border-black p-2 text-black hover:bg-accent-yellow transition-colors duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-bg-primary border-t-2 border-black"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, index) => (
                <NavHashLink
                  key={link.title}
                  smooth
                  to={link.path}
                  scroll={scrollWithOffset}
                  className="block w-full bg-deep-slate border-2 border-black p-4 text-center group active:scale-95 transition-transform"
                >
                  <span className="font-oswald font-bold text-xl text-soft-white uppercase tracking-widest group-hover:text-accent-yellow transition-colors">
                    {link.title}
                  </span>
                </NavHashLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 