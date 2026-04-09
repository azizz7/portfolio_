import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <div ref={ref} className={`overflow-hidden relative h-full w-full`}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y, scale: 1.15 }}
                className={`w-full h-full object-cover ${className}`}
            />
        </div>
    );
};

export default ParallaxImage;
