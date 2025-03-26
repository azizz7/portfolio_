import React from 'react';
import { FaPython, FaChartLine, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';

const Experience = () => {
  const experiences = [
    {
      company: 'JONES LANG LASALLE (JLL)',
      role: 'Research Intern',
      period: 'March 2025 - Present',
      location: 'India',
      description: 'Engaged in research on digital infrastructure, focusing on subsea communication systems and connectivity trends.',
      responsibilities: [
        'Reviewed industry reports and regulations for insights',
        'Used tools to automate data collection',
        'Prepared reports for decision-making'
      ],
      technologies: [
        { name: 'Data Analysis', icon: FaChartLine },
        { name: 'Network Infrastructure', icon: BiNetworkChart },
        { name: 'Python', icon: FaPython }
      ]
    },
    {
      company: 'Motherson Technology Services Limited',
      role: 'Project Training Intern',
      period: 'June 2024 - July 2024',
      location: 'Noida, UP',
      description: 'Built a sentiment analysis and spam classification model using LSTM, Python, TensorFlow, NLP.',
      responsibilities: [
        'Implemented deep learning models',
        'Utilized advanced NLP techniques',
        'Optimized model performance'
      ],
      technologies: [
        { name: 'Python', icon: FaPython },
        { name: 'TensorFlow', icon: SiTensorflow }
      ]
    },
    {
      company: 'I-Class Solutions (I) Pvt Ltd',
      role: 'Junior Data Analyst Intern',
      period: 'July 2022 - Sept 2022',
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