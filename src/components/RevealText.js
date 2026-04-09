import React from 'react';
import { motion } from 'framer-motion';

const RevealText = ({ text, className = "", delay = 0 }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
            filter: "blur(0px)"
        },
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
            filter: "blur(5px)"
        },
    };

    return (
        <motion.div
            style={{ display: "inline-block", verticalAlign: "bottom", paddingBottom: "0.15em", marginBottom: "-0.15em" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default RevealText;
