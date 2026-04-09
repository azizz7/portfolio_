import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
    // 3D Shape Configurations
    const shapes = [
        // Top Right - Golden Partial Geometric
        {
            initial: { x: 300, y: -100, rotate: 0 },
            animate: {
                y: [-120, -80, -120],
                rotate: [0, 10, 0],
                transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            },
            style: {
                top: '5%',
                right: '5%',
                width: '150px',
                height: '150px',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '20%',
                transform: 'perspective(500px) rotateY(-15deg)',
            }
        },
        // Middle Left - Dark Cube-like
        {
            initial: { x: -200, y: 100, rotate: 45 },
            animate: {
                y: [90, 110, 90],
                rotate: [45, 55, 45],
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
            },
            style: {
                top: '40%',
                left: '2%',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transform: 'perspective(500px) rotateX(20deg) rotateZ(45deg)',
            }
        },
        // Bottom Right - Minimal Ring
        {
            initial: { x: 200, y: 300, rotate: -10 },
            animate: {
                y: [290, 310, 290],
                rotate: [-10, 20, -10],
                transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }
            },
            style: {
                bottom: '10%',
                right: '15%',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.05)',
                borderTopColor: 'rgba(212, 175, 55, 0.4)',
                transform: 'perspective(500px) rotateX(45deg)',
            }
        }
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    className="absolute shadow-2xl shadow-black/20"
                    initial={shape.initial}
                    animate={shape.animate}
                    style={shape.style}
                />
            ))}

            {/* 3D Geometric Overlay (SVGs for cleaner lines) */}
            <motion.svg
                className="absolute top-20 left-10 w-32 h-32 opacity-20"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                <rect x="25" y="25" width="50" height="50" stroke="#d4af37" strokeWidth="1" fill="none" />
                <rect x="25" y="25" width="50" height="50" stroke="#d4af37" strokeWidth="1" fill="none" transform="rotate(45 50 50)" />
            </motion.svg>
        </div>
    );
};

export default FloatingShapes;
