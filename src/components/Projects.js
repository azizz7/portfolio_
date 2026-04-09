import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import ProjectPlaceholder from '../assets/images/project-placeholder.png';
import RevealText from './RevealText';

const Projects = () => {
  const projects = [
    {
      title: 'Ad Engine',
      category: 'Analytics Platform',
      description: 'AI-powered analytics platform generating actionable insights and performance predictions for digital advertising campaigns.',
      technologies: ['Next.js', 'FastAPI', 'Python', 'ML'],
      link: 'https://github.com/azizz7/ad-engine',
      color: 'bg-accent-cyan'
    },
    {
      title: 'AI Journal',
      category: 'Mobile Application',
      description: 'Architected a robust mobile journaling app with offline-first synchronization, OpenAI integration, and conflict resolution.',
      technologies: ['React Native', 'TypeScript', 'Supabase', 'OpenAI'],
      link: null,
      color: 'bg-accent-yellow'
    },
    {
      title: 'Spam Detector',
      category: 'NLP Security Model',
      description: 'LSTM-based classifier for comment spam detection, served via a RESTful API with advanced text preprocessing pipelined.',
      technologies: ['TensorFlow', 'Python', 'Node.js', 'MongoDB'],
      link: 'https://github.com/azizz7/text-classification-nlp-app',
      color: 'bg-accent-orange'
    },
    {
      title: 'Data Automator',
      category: 'Workflow Automation',
      description: 'Automated complex data processing workflows for logistics, reducing manual effort by 75% and ensuring data consistency.',
      technologies: ['Excel Macros', 'VBA', 'Data Processing'],
      link: null,
      color: 'bg-accent-red'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-accent-gold font-fira font-bold tracking-widest text-sm uppercase mb-4">
              <RevealText text="Selected Works" />
            </h2>
            <h3 className="text-6xl md:text-9xl font-oswald font-bold text-soft-white leading-[0.8] uppercase tracking-tighter mix-blend-difference">
              Featured <br />
              <span className="text-transparent text-outline-white" style={{ WebkitTextStroke: '2px #ededed' }}>Projects.</span>
            </h3>
          </div>
          <div className="hidden md:block">
            <a href="https://github.com/azizz7" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-fira text-accent-cyan hover:text-white transition-colors">
              VIEW ALL REPOS <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Hard Shadow Offset */}
              <div className={`absolute top-4 left-4 w-full h-full border-2 border-black ${project.color} -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2`} />

              <div className="bg-deep-slate border-2 border-black p-0 h-full flex flex-col">
                {/* Image Container */}
                <div className="aspect-video w-full border-b-2 border-black overflow-hidden relative">
                  <img
                    src={ProjectPlaceholder}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-fira text-xs font-bold border border-white">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-4xl font-oswald font-bold text-soft-white uppercase leading-none">
                      {project.title}
                    </h4>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-grey hover:text-white transition-colors p-2 border border-transparent hover:border-white rounded-full"
                      >
                        <FiGithub size={24} />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-grey font-inter mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black/20">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-fira font-bold text-black bg-white px-2 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-12 text-center">
          <a href="https://github.com/azizz7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-fira text-accent-cyan hover:text-white transition-colors">
            VIEW ALL REPOS <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 