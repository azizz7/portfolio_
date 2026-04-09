import React from 'react';
import { motion } from 'framer-motion';

const RotatingBadge = ({ text, className = "" }) => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className={`relative flex items-center justify-center w-32 h-32 rounded-full border-2 border-accent-cyan bg-bg-primary ${className}`}
        >
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <defs>
                    <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                </defs>
                <text className="font-fira font-bold text-[10px] tracking-[0.15em] fill-accent-cyan uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                        {text} • {text} •
                    </textPath>
                </text>
            </svg>
            <div className="w-2 h-2 bg-accent-cyan rounded-full" />
        </motion.div>
    );
};

export default RotatingBadge;
