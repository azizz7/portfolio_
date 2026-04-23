import React from 'react';
import { motion } from 'framer-motion';
import { NavHashLink } from 'react-router-hash-link';
import { FiArrowRight } from 'react-icons/fi';
import HeroImage from '../assets/images/Aziz_Professional_Photograph.png';
import MagneticButton from './MagneticButton';
import RevealText from './RevealText';
import Sticker from './Sticker';

const Home = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative min-h-screen bg-bg-primary text-text-primary overflow-hidden flex flex-col pt-16">
      {/* Split Layout Container */}
      <div className="flex-grow flex flex-col md:flex-row h-full relative z-10 w-full">

        {/* Left Side: Dark & Bold Typography */}
        <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center relative bg-bg-primary">
          <div className="space-y-2 mb-12 relative z-20">
            {/* Floating Stickers */}
            <Sticker text="Data Scientist" color="bg-accent-cyan" rotate={-5} className="top-4 right-[40%] md:right-[35%]" />
            <Sticker text="AI Engineer" color="bg-accent-yellow" rotate={8} className="bottom-20 left-10 md:left-24" />
            <Sticker text="Builder" color="bg-accent-orange" rotate={-12} className="top-12 right-4 md:right-20" />

            <Sticker text="Vlogger" color="bg-accent-red" rotate={6} className="top-[45%] right-2 md:right-16" />
            <Sticker text="Rubik's Cube Solver" color="bg-accent-cyan" rotate={-4} className="bottom-[15%] right-4 md:right-28" />
            <Sticker text="Footballer" color="bg-accent-yellow" rotate={10} className="top-[60%] left-[60%] md:left-[50%]" />
            <Sticker text="Runner" color="bg-accent-orange" rotate={-8} className="bottom-12 right-[40%] md:right-[45%]" />

            <h2 className="text-muted-grey font-fira text-sm md:text-base mb-4 tracking-widest uppercase">
              <RevealText text="Portfolio & Resume" delay={0.1} />
            </h2>
            <h1 className="text-7xl md:text-9xl font-oswald font-bold leading-[0.85] uppercase tracking-tighter text-soft-white mix-blend-difference mb-6">
              <span className="block">Aziz</span>
              <span className="block text-outline-white text-transparent" style={{ WebkitTextStroke: '2px #ededed' }}>Barwani</span>
              <span className="block">wala.</span>
            </h1>
          </div>

          <div className="max-w-md space-y-8 relative z-20">
            <p className="text-muted-grey text-lg font-inter leading-relaxed">
              Crafting intelligent solutions with raw data and precise code. Based in Jaipur.
            </p>
            <div className="flex gap-4">
              <MagneticButton>
                <NavHashLink to="/#projects" scroll={scrollWithOffset} className="group inline-flex items-center gap-3 px-8 py-4 bg-soft-white text-black font-oswald font-bold text-lg uppercase tracking-wide hover:bg-accent-yellow transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                  See Work <FiArrowRight />
                </NavHashLink>
              </MagneticButton>
              <MagneticButton>
                <NavHashLink to="/#contact" scroll={scrollWithOffset} className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-soft-white font-oswald font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
                  Contact
                </NavHashLink>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Right Side: Image & Grid */}
        <div className="w-full md:w-2/5 relative min-h-[50vh] md:min-h-screen bg-deep-slate overflow-hidden border-l-2 border-white/10 flex items-center justify-center">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />

          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative w-3/4 aspect-[3/4] max-w-sm rounded-none border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] overflow-hidden transition-all duration-500 z-10"
          >
            <img src={HeroImage} alt="Aziz Barwaniwala" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-accent-yellow/10 mix-blend-multiply opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-accent-yellow overflow-hidden py-3 border-t-4 border-black z-30 transform rotate-1 scale-105 origin-bottom-left pointer-events-none">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-oswald font-bold text-2xl uppercase tracking-widest flex items-center gap-4">
              Open for work <span className="w-3 h-3 bg-black rounded-full inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;