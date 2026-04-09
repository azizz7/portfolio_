import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../assets/images/about-photo.jpg';
import RevealText from './RevealText';
import RotatingBadge from './RotatingBadge';
import Sticker from './Sticker';

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-primary relative overflow-hidden border-t border-white/10">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Floating Badge */}
            <RotatingBadge text="VISION • STRATEGY • CODE" className="absolute -top-10 -right-10 z-30 bg-black text-accent-cyan shadow-xl" />

            {/* Sticker */}
            <Sticker text="Hello!" color="bg-accent-yellow" rotate={-15} className="absolute -bottom-6 -left-6 z-30" />

            <div className="aspect-[3/4] relative z-20 border-4 border-black">
              <img
                src={AboutImage}
                alt="About Aziz"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            {/* Hard Shadow Offset */}
            <div className="absolute top-4 left-4 w-full h-full bg-accent-cyan -z-10 border-4 border-black" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-accent-yellow font-fira font-bold tracking-widest text-sm uppercase mb-4">
                <RevealText text="About Me" />
              </h2>
              <h3 className="text-6xl md:text-8xl font-oswald font-bold text-soft-white leading-[0.9] uppercase">
                <span className="block">Driven by</span>
                <span className="block text-outline-white text-transparent" style={{ WebkitTextStroke: '1px #ededed' }}>Data.</span>
                <span className="block text-accent-cyan">Inspired</span>
                <span className="block">by Future.</span>
              </h3>
            </div>

            <div className="space-y-6 text-muted-grey font-inter text-lg leading-relaxed max-w-lg border-l-4 border-accent-cyan pl-6">
              <p>
                I am a Data Scientist and AI Engineer based in Jaipur. I have completed my B.Tech in Data Science Engineering at <span className="text-soft-white font-bold bg-accent-cyan/10 px-1">Manipal University Jaipur</span>.
              </p>
              <p>
                My passion lies in bridging the gap between theoretical models and real-world impact. Whether it's architecting complex neural networks or optimizing data pipelines, I approach every challenge with a focus on scalability, precision, and user-centric design.
              </p>
            </div>

            {/* Stats / Info */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="bg-deep-slate p-6 border-l-4 border-accent-yellow">
                <h4 className="text-soft-white font-oswald text-2xl mb-1">Education</h4>
                <p className="text-muted-grey font-fira text-xs">B.Tech Data Science</p>
                <p className="text-accent-yellow font-bold text-xs mt-2">2022 - 2026</p>
              </div>
              <div className="bg-deep-slate p-6 border-l-4 border-accent-cyan">
                <h4 className="text-soft-white font-oswald text-2xl mb-1">Expertise</h4>
                <p className="text-muted-grey font-fira text-xs">Machine Learning, MERN, AI</p>
                <p className="text-accent-cyan font-bold text-xs mt-2">Full Stack</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div >
    </section >
  );
};

export default About; 