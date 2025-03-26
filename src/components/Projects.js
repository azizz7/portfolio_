import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiTensorflow, SiPandas
} from 'react-icons/si';
import { BiData, BiBarChartAlt2, BiWindow, BiSpreadsheet } from 'react-icons/bi';
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
      title: 'Comment Spam Detection Model',
      duration: 'June 2024 - July 2024',
      description: 'Developed an LSTM-based text classification model for real-time spam detection in comments, achieving high accuracy with performance metrics visualization.',
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'LSTM', icon: BiData },
        { name: 'Streamlit', icon: BiWindow }
      ],
      highlights: [
        'Implemented LSTM architecture for text classification',
        'Real-time performance metrics and visualization',
        'Interactive web interface using Streamlit'
      ]
    },
    {
      title: 'Crop Recommendation System',
      duration: 'Oct 2024 - Nov 2024',
      description: 'Built an advanced crop recommendation system using GANs and deep learning, featuring comprehensive data visualizations for informed decision-making.',
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'Pandas', icon: SiPandas },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'GANs', icon: BiBarChartAlt2 }
      ],
      highlights: [
        'GAN-based data augmentation for improved accuracy',
        'Interactive data visualizations for insights',
        'Multi-parameter crop recommendation engine'
      ]
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
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-dark-bg text-white py-24 px-4 md:px-6" id="projects">
      <motion.div
        className="max-w-6xl mx-auto"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-xl border-2 border-neon-blue/10 hover:border-neon-orange/50 transition-all duration-300 group backdrop-blur-sm shadow-lg shadow-black/30"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
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
                <div>
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 