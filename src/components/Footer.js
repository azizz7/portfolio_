import React from 'react';
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-dark-bg text-gray-300 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Contact Links */}
          <div className="flex justify-center gap-6 flex-wrap">
            <motion.a
              href="tel:+917974205692"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              aria-label="Phone"
            >
              <FaPhone className="text-2xl" />
            </motion.a>

            <motion.a
              href="https://github.com/azizz7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/aziz-barwaniwala-2904a824b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>

            <motion.a
              href="mailto:azizbarwani5253@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </motion.a>
          </div>

          {/* Copyright Notice */}
          <motion.p 
            className="text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Aziz Barwaniwala. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 