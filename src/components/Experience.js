import React from 'react';
import { FaPython, FaChartLine, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';

const Experience = () => {
  const experiences = [
    {
      company: 'JONES LANG LASALLE (JLL)',
      role: 'Strategic Research Intern — Digital Infrastructure',
      period: 'March 2025 - June 2025',
      location: 'Mumbai, India',
      description: 'Using software tools and writing code to analyse data for benchmarking India against global hubs (Singapore, Virginia Beach, Marseille) and delivered an investment outlook with CAPEX/OPEX optimization strategies that projected to cut the costs by up to 20%.',
      responsibilities: [
        'Researched and authored a strategic report on India\'s submarine cable infrastructure, covering global investment trends, technical architectures (DWDM, SDM, AI-enabled monitoring), and cost models',
        'Analysed regulatory frameworks (UNCLOS, TRAI/DoT, ILD/NLD licensing) and proposed reforms including a Domestic Submarine Cable License, single-window clearance, and stub-cable deployment policies',
        'Used software tools and wrote code to analyse data for benchmarking India against global hubs'
      ],
      technologies: [
        { name: 'Data Analysis', icon: FaChartLine },
        { name: 'Network Infrastructure', icon: BiNetworkChart },
        { name: 'Python', icon: FaPython }
      ]
    },
    {
      company: 'MOTHERSON TECHNOLOGY SERVICES LIMITED',
      role: 'Project Training Intern',
      period: 'June 2024 - July 2024',
      location: 'Noida, UP',
      description: 'Developed and trained an LSTM-based spam/sentiment classifier using Python, TensorFlow, and NLP pipelines (tokenization, lemmatization, padded sequences).',
      responsibilities: [
        'Built an end-to-end preprocessing pipeline and optimized the architecture with a sigmoid output layer for binary classification',
        'Achieved high accuracy and strong F1-score on real-world data; evaluated model with confusion matrix and classification reports',
        'Developed and trained an LSTM-based spam/sentiment classifier using Python, TensorFlow, and NLP pipelines'
      ],
      technologies: [
        { name: 'Python', icon: FaPython },
        { name: 'TensorFlow', icon: SiTensorflow }
      ]
    },
    {
      company: 'I-CLASS SOLUTIONS (I) PVT LTD',
      role: 'Junior Data Analyst Intern',
      period: 'April 2022 - Sept 2022',
      location: 'Indore, MP',
      description: 'Automated workflows with Excel Macros, prototyped a blockchain app in a CodeJam.',
      responsibilities: [
        'Developed Excel automation solutions',
        'Participated in blockchain prototype development',
        'Optimized data processing workflows'
      ],
      technologies: [
        { name: 'Excel', icon: FaMicrosoft },
        { name: 'Programming', icon: BsCodeSlash }
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-dark-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Professional <span className="text-neon-blue">Experience</span>
          <div className="w-20 h-1 bg-neon-blue mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-900 to-gray-800 
                         rounded-xl p-8 shadow-lg
                         hover:shadow-xl hover:shadow-neon-blue/20
                         border border-gray-800 hover:border-neon-blue/30
                         transition-all duration-500 hover:-translate-y-2
                         transform hover:scale-[1.01]"
            >
              {/* Company and Role Header */}
              <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 hover:text-neon-blue transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <p className="text-orange-400 font-medium mt-2 text-lg">
                    {exp.role}
                  </p>
                </div>
                <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
                  <p className="text-neon-blue">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm hover:text-gray-200 transition-colors duration-300">
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 
                             rounded-full bg-gray-800/50 text-gray-300 
                             hover:text-neon-blue hover:bg-gray-800
                             transition-all duration-300 cursor-pointer
                             border border-transparent hover:border-neon-blue/30"
                  >
                    <tech.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;