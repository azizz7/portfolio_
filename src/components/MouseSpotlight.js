import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the movement slightly for a premium feel
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }) => {
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Create the gradient string dynamically
    const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(212, 175, 55, 0.03), transparent 40%)`;

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-700"
            style={{ background }}
        />
    );
};

export default MouseSpotlight;
