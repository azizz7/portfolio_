import React from 'react';
import { motion } from 'framer-motion';
import { NavHashLink } from 'react-router-hash-link';

const Home = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        // Delay children animations slightly
        delayChildren: 0.3,
        // Animate children one after another
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ 
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  };

  return (
    // Main container with background and layout
    <motion.section 
      id="home"
      className="min-h-screen flex items-center justify-center bg-dark-bg text-white px-4 pt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero content container with staggered animations */}
        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
          {/* Animated heading with gradient text */}
          <motion.h1 
            className="text-4xl md:text-6xl font-orbitron font-bold"
            variants={itemVariants}
          >
            <span className="text-neon-blue">Hi, I'm </span>
            <span className="text-white">Aziz Barwaniwala</span>
          </motion.h1>
          
          {/* Animated subtitle */}
          <motion.p
            className="text-xl md:text-2xl font-montserrat text-gray-300"
            variants={itemVariants}
          >
            B.Tech Data Science Engineering Student
          </motion.p>

          {/* Call-to-action buttons with hover animations */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(0, 243, 255, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <NavHashLink
                to="/#contact"
                scroll={scrollWithOffset}
                className="inline-block px-8 py-3 bg-neon-blue text-dark-bg font-orbitron font-semibold rounded-lg hover:bg-white transition-all duration-300"
              >
                Get in Touch
              </NavHashLink>
            </motion.div>
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(255, 123, 0, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 border-2 border-neon-orange text-neon-orange font-orbitron font-semibold rounded-lg hover:bg-neon-orange hover:text-dark-bg transition-all duration-300"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home; 