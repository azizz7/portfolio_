import React from 'react';
import { motion } from 'framer-motion';
import RevealText from './RevealText';

const Experience = () => {
  const experiences = [
    {
      company: 'JONES LANG LASALLE (JLL)',
      role: 'Strategic Research Intern',
      period: 'March 2025 - June 2025',
      location: 'Mumbai, India',
      description: 'Optimized CAPEX/OPEX strategies for digital infrastructure benchmarking.',
      color: 'bg-accent-cyan',
      responsibilities: [
        'Analyzed submarine cable infrastructure & global investment trends.',
        'Proposed regulatory reforms for Domestic Submarine Cable Licensing.',
        'Benchmarked India against global hubs using Python data analysis.'
      ]
    },
    {
      company: 'MOTHERSON TECHNOLOGY',
      role: 'Project Training Intern',
      period: 'June 2024 - July 2024',
      location: 'Noida, UP',
      description: 'Developed LSTM-based spam/sentiment classifier pipelines.',
      color: 'bg-accent-yellow',
      responsibilities: [
        'Built end-to-end NLP preprocessing pipelines.',
        'Optimized LSTM architecture for high accuracy binary classification.',
        'Evaluated models using confusion matrices & classification reports.'
      ]
    },
    {
      company: 'I-CLASS SOLUTIONS',
      role: 'Junior Data Analyst Intern',
      period: 'April 2022 - Sept 2022',
      location: 'Indore, MP',
      description: 'Automated workflows and prototyped blockchain applications.',
      color: 'bg-accent-orange',
      responsibilities: [
        'Developed Excel automation solutions to streamline workflows.',
        'Contributed to blockchain application prototyping in CodeJam.',
        'Optimized data processing for better efficiency.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">

        {/* Header */}
        <div className="mb-24">
          <h2 className="text-accent-gold font-fira font-bold tracking-widest text-sm uppercase mb-4">
            <RevealText text="Career Path" />
          </h2>
          <h3 className="text-6xl md:text-9xl font-oswald font-bold text-soft-white leading-[0.8] uppercase tracking-tighter mix-blend-difference">
            Professional <br />
            <span className="text-transparent text-outline-white" style={{ WebkitTextStroke: '2px #ededed' }}>Experience.</span>
          </h3>
        </div>

        {/* Experience Cards */}
        <div className="space-y-20 relative">
          {/* Decorative Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -z-10 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative md:w-5/6 ${index % 2 === 0 ? 'mr-auto md:pr-12' : 'ml-auto md:pl-12'}`}
            >
              {/* Card Container */}
              <div className="relative group">
                {/* Hard Shadow */}
                <div className={`absolute top-4 left-4 w-full h-full border-2 border-black ${exp.color} -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2`} />

                <div className="bg-deep-slate border-2 border-black p-8 md:p-10 relative">
                  {/* Period Badge */}
                  <div className={`absolute -top-5 right-8 ${exp.color} border-2 border-black px-4 py-2 rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <span className="font-fira font-bold text-xs text-black uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-3xl md:text-4xl font-oswald font-bold text-soft-white mb-2 uppercase">
                    {exp.company}
                  </h4>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-grey font-fira text-sm">
                    <span className="text-accent-gold">{exp.role}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-lg font-inter text-soft-white/90 mb-6 leading-relaxed border-l-2 border-white/20 pl-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-grey font-inter group/item">
                        <span className={`mt-1.5 w-1.5 h-1.5 ${exp.color.replace('bg-', 'bg-')} shrink-0`} />
                        <span className="group-hover/item:text-soft-white transition-colors">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;