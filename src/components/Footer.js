import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/azizz7', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aziz-barwaniwala-2904a824b/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:azizbarwani5253@gmail.com', label: 'Email' }
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <footer className="bg-bg-primary text-muted-grey border-t border-white/5 relative overflow-hidden">
      {/* Bright & Loud Marquee */}
      <div className="w-full overflow-hidden py-8 border-y border-white/10 bg-white/5">
        <motion.div
          className="flex whitespace-nowrap gap-16"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-5xl md:text-7xl font-oswald font-bold text-accent-yellow tracking-widest uppercase">
              LET'S WORK TOGETHER  •  GET IN TOUCH  •
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-8 py-12">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-playfair font-bold text-soft-white">
            Aziz Barwaniwala.
          </h2>
          <p className="text-sm font-inter mt-2 text-muted-grey/70">
            Data Scientist & AI Engineer.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-grey hover:text-soft-white transition-colors duration-300"
              aria-label={link.label}
            >
              <link.icon className="text-xl" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-xs font-inter text-muted-grey/50">
          <p>© {new Date().getFullYear()} Aziz Barwaniwala.</p>
          <p className="mt-1">All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 