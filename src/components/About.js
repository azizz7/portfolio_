import React from 'react';
import { motion } from 'framer-motion';
import mujDome from '../assets/muj-dome.jpg';

const About = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        // Stagger children animations
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  // Animation variants for individual elements
  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-dark-bg text-white py-20 px-4" id="about">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon-orange mx-auto rounded-full"></div>
        </motion.div>

        {/* Main content */}
        <motion.div 
          className="space-y-8"
          variants={itemVariants}
        >
          {/* About text with gradient border */}
          <motion.div 
            className="bg-dark-surface p-6 rounded-lg border-l-4 border-neon-blue"
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 0 20px rgba(0, 243, 255, 0.2)'
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg md:text-xl font-montserrat leading-relaxed text-gray-300">
              I'm <span className="text-neon-blue font-semibold">Aziz Barwaniwala</span>, 
              a 21-year-old Data Science Engineering student at 
              <span className="text-neon-orange font-semibold"> Manipal University Jaipur</span>, 
              passionate about tech and aiming to become a future billionaire through innovation.
            </p>
          </motion.div>

          {/* Education section with background image */}
          <motion.div 
            className="relative overflow-hidden rounded-lg"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 0 25px rgba(255, 123, 0, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-top transition-transform duration-300 group-hover:scale-110"
              style={{ 
                backgroundImage: `url(${mujDome})`,
                backgroundPosition: '50% 35%'
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              ></motion.div>
            </div>

            {/* Education content */}
            <motion.div 
              className="relative p-8 z-10"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-neon-orange">
                Education
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="border-l-2 border-neon-blue pl-4"
                  whileHover={{ borderColor: 'rgb(255, 123, 0)' }}
                >
                  <h4 className="text-xl font-semibold text-white">
                    B.Tech in Data Science Engineering
                  </h4>
                  <p className="text-neon-blue font-montserrat mt-1 transition-colors duration-300">
                    Manipal University Jaipur
                  </p>
                  <p className="text-gray-300 font-montserrat">
                    Sept 2022 - May 2026
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional details with hover effects */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mt-8"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-dark-surface p-6 rounded-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(255, 123, 0, 0.2)'
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-orbitron font-bold mb-3 text-neon-orange">
                Current Focus
              </h3>
              <p className="text-gray-300">
                Data Science & Engineering
                <br />
                Full Stack Development
              </p>
            </motion.div>

            <motion.div 
              className="bg-dark-surface p-6 rounded-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)'
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-orbitron font-bold mb-3 text-neon-blue">
                Vision
              </h3>
              <p className="text-gray-300">
                Innovating through technology
                <br />
                Building impactful solutions
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 