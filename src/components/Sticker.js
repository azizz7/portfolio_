import React from 'react';
import { motion } from 'framer-motion';

const Sticker = ({ text, color = "bg-accent-yellow", rotate = 0, className = "" }) => {
    // Randomized floating animations to feel organic
    const randomDuration = Math.random() * 2 + 3; // 3-5s
    const randomDelay = Math.random() * 2; // 0-2s
    const randomY = Math.random() * 15 + 10; // 10-25px
    const randomRotate = Math.random() * 10 - 5; // -5 to 5deg

    return (
        <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.2}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className={`absolute z-30 cursor-grab active:cursor-grabbing ${className}`}
        >
            <motion.div
                animate={{
                    y: [0, -randomY, 0],
                    rotate: [rotate, rotate + randomRotate, rotate]
                }}
                transition={{
                    duration: randomDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: randomDelay,
                    times: [0, 0.5, 1]
                }}
                whileHover={{
                    scale: 1.15,
                    rotate: rotate + 5,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)"
                }}
                whileTap={{ scale: 0.9 }}
                className={`inline-flex items-center justify-center px-6 py-3 font-oswald font-bold text-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${color} select-none whitespace-nowrap`}
            >
                {text}
            </motion.div>
        </motion.div>
    );
};

export default Sticker;
