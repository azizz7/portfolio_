import React from 'react';

const BackgroundPattern = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-30 mix-blend-overlay">
            <svg
                className="w-full h-full"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="tribal-geometric"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                        patternTransform="rotate(0)"
                    >
                        {/* Geometric Tribal/Art Deco Pattern */}
                        <path
                            d="M0 30 L30 0 L60 30 L30 60 Z"
                            fill="none"
                            stroke="#d4af37"
                            strokeWidth="0.8"
                            opacity="0.4"
                        />
                        <path
                            d="M30 0 L30 60 M0 30 L60 30"
                            stroke="#d4af37"
                            strokeWidth="0.5"
                            opacity="0.2"
                        />
                        <rect x="28" y="28" width="4" height="4" fill="#d4af37" opacity="0.3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tribal-geometric)" />
            </svg>
            {/* Vignette to focus attention on center */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-primary/20 to-bg-primary/90" />
        </div>
    );
};

export default BackgroundPattern;
