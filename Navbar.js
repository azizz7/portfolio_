import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navLinks to use hash links
  const navLinks = [
    { title: 'Home', path: '/#home' },
    { title: 'About', path: '/#about' },
    { title: 'Experience', path: '/#experience' },
    { title: 'Skills', path: '/#skills' },
    { title: 'Projects', path: '/#projects' },
    { title: 'Contact', path: '/#contact' }
  ];

  const mobileMenuVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } }
  };

  // Smooth scroll function
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value based on your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-surface/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavHashLink 
            to="/#home" 
            className="flex items-center group"
            scroll={scrollWithOffset}
          >
            <motion.span 
              className="font-orbitron text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Aziz.dev
            </motion.span>
          </NavHashLink>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavHashLink
                key={link.title}
                to={link.path}
                scroll={scrollWithOffset}
                className="relative px-4 py-2 font-orbitron text-sm text-gray-300 hover:text-neon-blue transition-colors duration-300 group"
              >
                <span className="relative z-10">{link.title}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-blue origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  initial={false}
                  whileHover={{ scaleX: 1 }}
                />
              </NavHashLink>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-neon-blue transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="md:hidden overflow-hidden bg-dark-surface/95 backdrop-blur-sm"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.title}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavHashLink
                to={link.path}
                scroll={scrollWithOffset}
                className="block py-3 font-orbitron text-sm text-gray-300 hover:text-neon-blue transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </NavHashLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 