import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiTensorflow, SiPytorch, SiNumpy, 
  SiPandas, SiAmazonwebservices, SiGit, SiDocker, 
  SiMongodb, SiJavascript, SiReact, SiNodedotjs,
  SiHtml5, SiCss3
} from 'react-icons/si';
import { BiCode, BiBrain, BiData } from 'react-icons/bi';
import { AiOutlineApi } from 'react-icons/ai';
import { VscGraph } from 'react-icons/vsc';

// Animation variants for container and elements
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
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const skillVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Skills = () => {
  const categoryColors = {
    'Core Technologies': 'border-neon-blue',
    'AI & ML': 'border-neon-orange',
    'Data & Analytics': 'border-purple-500',
    'Web & Cloud': 'border-green-500',
    'DevOps & Tools': 'border-yellow-500'
  };

  // Comprehensive skill data with categories
  const skillsData = [
    // Core Skills
    { name: 'Python', icon: SiPython, category: 'Core Technologies' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Core Technologies' },
    { name: 'Problem Solving', icon: BiCode, category: 'Core Technologies' },
    { name: 'HTML', icon: SiHtml5, category: 'Core Technologies' },
    { name: 'CSS', icon: SiCss3, category: 'Core Technologies' },
    
    // AI & ML
    { name: 'Machine Learning', icon: BiBrain, category: 'AI & ML' },
    { name: 'TensorFlow', icon: SiTensorflow, category: 'AI & ML' },
    { name: 'PyTorch', icon: SiPytorch, category: 'AI & ML' },
    { name: 'NLP', icon: BiData, category: 'AI & ML' },
    
    // Data & Analytics
    { name: 'Data Analysis', icon: VscGraph, category: 'Data & Analytics' },
    { name: 'Pandas', icon: SiPandas, category: 'Data & Analytics' },
    { name: 'NumPy', icon: SiNumpy, category: 'Data & Analytics' },
    { name: 'SQL', icon: BiData, category: 'Data & Analytics' },
    
    // Web & Cloud
    { name: 'React', icon: SiReact, category: 'Web & Cloud' },
    { name: 'Node.js', icon: SiNodedotjs, category: 'Web & Cloud' },
    { name: 'REST APIs', icon: AiOutlineApi, category: 'Web & Cloud' },
    { name: 'AWS', icon: SiAmazonwebservices, category: 'Web & Cloud' },
    
    // DevOps & Tools
    { name: 'Git', icon: SiGit, category: 'DevOps & Tools' },
    { name: 'Docker', icon: SiDocker, category: 'DevOps & Tools' },
    { name: 'MongoDB', icon: SiMongodb, category: 'DevOps & Tools' }
  ];

  const categories = [
    'Core Technologies',
    'AI & ML',
    'Data & Analytics',
    'Web & Cloud',
    'DevOps & Tools'
  ];

  return (
    <section className="min-h-screen bg-dark-bg text-white py-20 px-4" id="skills">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={skillVariants}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Technical <span className="text-neon-blue">Skills</span>
          </h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto font-montserrat leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Targeting a dynamic tech career by mastering impactful skills and building real-world experience through projects and internships in 2025.
          </motion.p>
          <div className="w-20 h-1 bg-neon-orange mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              className="mb-12"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-2xl font-orbitron mb-6 text-neon-orange"
                variants={skillVariants}
              >
                {category}
              </motion.h3>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
              >
                {skillsData
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      className={`bg-dark-surface p-4 rounded-lg border-2 ${categoryColors[category]} hover:border-neon-blue transition-colors duration-300 backdrop-blur-sm`}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(0, 243, 255, 0.2)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-3">
                        <skill.icon className="text-2xl text-neon-blue" />
                        <span className="font-montserrat">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Future Goals */}
        <motion.div 
          className="mt-16 bg-dark-surface p-6 rounded-lg border-2 border-neon-orange backdrop-blur-sm"
          variants={skillVariants}
        >
          <h3 className="text-2xl font-orbitron mb-4 text-neon-blue">2025 Goals</h3>
          <p className="text-gray-300 font-montserrat">
            Aiming to secure an AI Engineering role by mastering these technologies
            and building practical experience through projects and internships.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills; 