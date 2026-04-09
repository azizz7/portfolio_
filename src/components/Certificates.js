import React from 'react';
import { motion } from 'framer-motion';
import { SiCoursera } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import RevealText from './RevealText';

const Certificates = () => {
    const certificates = [
        {
            name: "Intro to Big Data",
            subtitle: "Spark & Hadoop",
            link: "https://coursera.org/share/1ac12aad53b6277b3e6f4b3e8c56f4ad",
            issuer: "Coursera",
            date: "2024",
            color: "bg-accent-cyan"
        },
        {
            name: "Financial Accounting",
            subtitle: "Formal Practices",
            link: "https://coursera.org/share/f0d12f2c4c3a94099200a5c4767ede5f",
            issuer: "Coursera",
            date: "2023",
            color: "bg-accent-yellow"
        },
        {
            name: "Machine Learning",
            subtitle: "with Python",
            link: "https://coursera.org/share/ea4c17bdf8beb3a5a58dafe8c7132c58",
            issuer: "Coursera",
            date: "2023",
            color: "bg-accent-orange"
        },
        {
            name: "Intro to Python",
            subtitle: "Programming Fundamentals",
            link: "https://coursera.org/share/a9ffb530f790ba65781d006388a2083f",
            issuer: "Coursera",
            date: "2022",
            color: "bg-accent-red"
        }
    ];

    return (
        <section id="certificates" className="py-32 bg-bg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">

                {/* Header */}
                <div className="mb-24 text-center md:text-left">
                    <h2 className="text-accent-gold font-fira font-bold tracking-widest text-sm uppercase mb-4">
                        <RevealText text="Credentials" />
                    </h2>
                    <h3 className="text-6xl md:text-9xl font-oswald font-bold text-soft-white leading-[0.8] uppercase tracking-tighter mix-blend-difference">
                        Certifications.
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative block h-full"
                        >
                            {/* Hard Shadow Offset */}
                            <div className={`absolute top-3 left-3 w-full h-full border-2 border-black ${cert.color} -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2`} />

                            <div className="bg-deep-slate border-2 border-black p-6 h-full flex flex-col justify-between relative overflow-hidden">

                                {/* Decor Circle */}
                                <div className={`absolute -top-6 -right-6 w-20 h-20 ${cert.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`} />

                                <div className="space-y-6 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <SiCoursera className={`text-4xl ${cert.color.replace('bg-', 'text-')}`} />
                                        <FiExternalLink className="text-muted-grey group-hover:text-white transition-colors" />
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-oswald font-bold text-soft-white uppercase leading-tight mb-2 group-hover:underline decoration-2 underline-offset-4">
                                            {cert.name}
                                        </h4>
                                        <p className="text-xs font-fira text-muted-grey uppercase tracking-wider">
                                            {cert.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t-2 border-white/10 flex justify-between items-center relative z-10">
                                    <span className="font-fira text-xs font-bold text-soft-white bg-white/10 px-2 py-1 rounded-sm">
                                        {cert.issuer}
                                    </span>
                                    <span className="font-oswald text-lg font-bold text-muted-grey">
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
