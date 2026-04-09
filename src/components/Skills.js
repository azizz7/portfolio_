import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiPostgresql, SiMongodb, SiTensorflow, SiPytorch, SiScikitlearn
} from 'react-icons/si';
import RevealText from './RevealText';

const Skills = () => {
  const skillset = [
    {
      category: "Languages",
      color: "bg-accent-cyan",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "SQL", icon: null }
      ]
    },
    {
      category: "Frontend",
      color: "bg-accent-yellow",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind", icon: SiTailwindcss }
      ]
    },
    {
      category: "Backend & DB",
      color: "bg-accent-orange",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb }
      ]
    },
    {
      category: "AI & ML",
      color: "bg-accent-red",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
        { name: "Scikit-learn", icon: SiScikitlearn }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-accent-gold font-fira font-bold tracking-widest text-sm uppercase mb-4">
            <RevealText text="Expertise" />
          </h2>
          <h3 className="text-6xl md:text-9xl font-oswald font-bold text-soft-white leading-[0.8] uppercase tracking-tighter mix-blend-difference">
            Technical <br />
            <span className="text-transparent text-outline-white" style={{ WebkitTextStroke: '2px #ededed' }}>Proficiency.</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillset.map((set, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Hard Shadow Offset */}
              <div className={`absolute top-3 left-3 w-full h-full border-2 border-black ${set.color} -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2`} />

              {/* Card Content */}
              <div className="bg-deep-slate border-2 border-black p-8 h-full relative overflow-hidden">

                <h4 className="text-3xl font-oswald font-bold text-soft-white mb-8 uppercase tracking-wide border-b-4 border-white inline-block">
                  {set.category}
                </h4>

                <ul className="space-y-4">
                  {set.skills.map((skill, i) => (
                    <li key={i} className="flex items-center justify-between group/item">
                      <div className="flex items-center gap-4">
                        <span className={`text-2xl ${set.color.replace('bg-', 'text-')} transition-transform duration-300 group-hover/item:scale-125`}>
                          {skill.icon ? <skill.icon /> : <div className="w-6 h-6 bg-current rounded-sm" />}
                        </span>
                        <span className="font-fira text-lg text-muted-grey group-hover/item:text-soft-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="opacity-0 group-hover/item:opacity-100 text-accent-gold font-fira text-xs transition-opacity">
                        {`// loading...`}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decor Corner */}
                <div className={`absolute bottom-0 right-0 w-12 h-12 ${set.color} opacity-20 rounded-tl-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 