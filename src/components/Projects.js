import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiTensorflow, SiPandas, SiScikitlearn, SiNextdotjs, SiFastapi
} from 'react-icons/si';
import { BiData, BiBarChartAlt2, BiWindow, BiSpreadsheet, BiCode, BiBrain } from 'react-icons/bi';
import { BsArrowRightCircleFill } from 'react-icons/bs';

// Animation variants for container
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother motion
      delayChildren: 0.1,
      staggerChildren: 0.08
    }
  }
};

// Animation variants for individual projects
const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 15
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Projects = () => {
  const projects = [
    {
      title: 'Ad Performance Intelligence Engine',
      duration: 'Jan 2026 - Present',
      description: 'AI-powered analytics platform that analyzes digital advertising data to generate actionable insights and predict future performance.',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Python', icon: SiPython },
        { name: 'Pandas', icon: SiPandas },
        { name: 'Scikit-learn', icon: SiScikitlearn }
      ],
      highlights: [
        'Real-time performance analytics (CTR, CPC, ROAS)',
        'ML-based revenue and conversion forecasting',
        'Automated plain-English business insights generation',
        'Built with FastAPI backend and Next.js frontend'
      ],
      githubLink: 'https://github.com/azizz7/ad-engine'
    },
    {
      title: 'Journaling Application (Full-Stack, AI-Integrated)',
      duration: 'Sept 2022 - May 2026',
      description: 'Architected and developed a full-stack React Native journaling application using Expo Router, TypeScript, and modern React patterns, implementing file-based routing and type-safe navigation across 8+ main screens.',
      technologies: [
        { name: 'React Native', icon: BiWindow },
        { name: 'TypeScript', icon: BiCode },
        { name: 'Supabase', icon: BiData },
        { name: 'OpenAI', icon: BiBrain }
      ],
      highlights: [
        'Engineered robust cloud synchronization system with bidirectional sync between local SQLite storage and Supabase PostgreSQL database',
        'Implemented operation logging, conflict resolution, and exponential backoff for 99%+ data consistency',
        'Integrated OpenAI services for intelligent journal analysis, personalized prompts, and sentiment analysis',
        'Managed offline queuing and secured API key storage'
      ],
      githubLink: null // Will be added when repo is uploaded
    },
    {
      title: 'Comment Spam Detection (Full-Stack Deployment)',
      duration: 'June 2024 - July 2024',
      description: 'Developed an LSTM-based spam detection model with advanced text preprocessing; served predictions via a RESTful Node.js + Express API.',
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'Node.js', icon: BiWindow },
        { name: 'MongoDB', icon: BiData }
      ],
      highlights: [
        'Developed an LSTM-based spam detection model with advanced text preprocessing',
        'Served predictions via a RESTful Node.js + Express API',
        'Used MongoDB for logging, analytics, and dataset; implemented validation and structured error handling',
        'Built Streamlit UI for dataset uploads and real-time metrics visualization'
      ],
      githubLink: 'https://github.com/azizz7/text-classification-nlp-app'
    },
    {
      title: 'Forklift Data Automation',
      duration: 'July 2022 - Sept 2022',
      description: 'Automated data processing for an Australian company using Excel Macros, significantly reducing manual effort and improving data accuracy.',
      technologies: [
        { name: 'Excel Macros', icon: BiSpreadsheet }
      ],
      highlights: [
        'Streamlined data processing workflow',
        'Reduced manual processing time by 75%',
        'Improved data accuracy and consistency'
      ],
      githubLink: null // Will be added when repo is uploaded
    }
  ];

  return (
    <section className="min-h-screen bg-dark-bg text-white py-24 px-4 md:px-6" id="projects">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={projectVariants}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-neon-orange mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-xl border-2 border-neon-blue/10 hover:border-neon-orange/50 transition-all duration-300 group backdrop-blur-sm shadow-lg shadow-black/30 cursor-pointer"
              variants={projectVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              onClick={() => project.githubLink && window.open(project.githubLink, '_blank')}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-neon-blue/5 rounded-xl filter blur-xl group-hover:bg-neon-orange/5 transition-all duration-300" />

              {/* Content Container */}
              <div className="relative">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-neon-blue mb-3 group-hover:text-neon-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-montserrat tracking-wider">
                    {project.duration}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-base text-gray-300 font-montserrat mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm uppercase font-orbitron text-neon-orange mb-4 tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center space-x-2 text-sm text-gray-300 bg-gray-900/50 px-4 py-2 rounded-full shadow-sm transform transition-transform duration-200 hover:scale-105"
                      >
                        <tech.icon className="text-neon-blue text-lg" />
                        <span className="font-montserrat">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase font-orbitron text-neon-orange mb-4 tracking-wider">
                    Highlights
                  </h4>
                  <ul className="space-y-4">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-3 text-sm text-gray-300 transform transition-transform duration-200 hover:translate-x-1"
                      >
                        <BsArrowRightCircleFill className="text-neon-blue mt-1 flex-shrink-0 group-hover:text-neon-orange transition-colors duration-300" />
                        <span className="font-montserrat leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Link Button */}
                {project.githubLink && (
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-2 text-neon-blue hover:text-neon-orange transition-colors duration-300 group">
                      <span className="text-sm font-montserrat font-medium">View on GitHub</span>
                      <BsArrowRightCircleFill className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 