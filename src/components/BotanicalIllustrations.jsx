import { motion } from 'framer-motion';

export const WatercolorWash = ({
    className = 'w-full h-full',
    variant = 'pink',
    delay = 0
}) => {
    const colors = {
        pink: ['#FFE4E1', '#FFD1DC', '#FFB7C5'],
        green: ['#9DC183', '#8FBC8F', '#E0F2F1'],
        blue: ['#E6E6FA', '#E0FFFF', '#F0F8FF']
    };
    const selectedColors = colors[variant];
    return (
        <motion.svg
            viewBox="0 0 200 200"
            className={className}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 2, delay }}
        >
            <defs>
                <filter id="blur-filter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
            </defs>
            <motion.path
                d="M45.7,38.2C29.6,56.4,12.3,73.5,14.5,95.6c2.2,22.1,22.4,49.1,48.8,53.4c26.4,4.3,59.1-14.1,72.4-39.9c13.3-25.8,7.3-58.9-10.4-76.4C107.6,15.2,61.8,20,45.7,38.2z"
                fill={selectedColors[0]}
                filter="url(#blur-filter)"
                animate={{
                    d: [
                        'M45.7,38.2C29.6,56.4,12.3,73.5,14.5,95.6c2.2,22.1,22.4,49.1,48.8,53.4c26.4,4.3,59.1-14.1,72.4-39.9c13.3-25.8,7.3-58.9-10.4-76.4C107.6,15.2,61.8,20,45.7,38.2z',
                        'M50.7,43.2C34.6,61.4,17.3,78.5,19.5,100.6c2.2,22.1,27.4,44.1,53.8,48.4c26.4,4.3,54.1-19.1,67.4-44.9c13.3-25.8,2.3-63.9-15.4-81.4C107.6,5.2,66.8,25,50.7,43.2z',
                        'M45.7,38.2C29.6,56.4,12.3,73.5,14.5,95.6c2.2,22.1,22.4,49.1,48.8,53.4c26.4,4.3,59.1-14.1,72.4-39.9c13.3-25.8,7.3-58.9-10.4-76.4C107.6,15.2,61.8,20,45.7,38.2z'
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                opacity="0.6"
            />
            <motion.path
                d="M145.7,138.2C129.6,156.4,112.3,173.5,114.5,195.6c2.2,22.1,22.4,49.1,48.8,53.4c26.4,4.3,59.1-14.1,72.4-39.9c13.3-25.8,7.3-58.9-10.4-76.4C207.6,115.2,161.8,120,145.7,138.2z"
                fill={selectedColors[1]}
                filter="url(#blur-filter)"
                transform="translate(-50, -50)"
                opacity="0.4"
            />
        </motion.svg>
    );
};

export const Rose = ({
    className = 'w-24 h-24',
    color = '#C9A0A0',
    delay = 0
}) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={className}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
    >
        <defs>
            <filter id="watercolor-blur">
                <feGaussianBlur stdDeviation="1.5" />
            </filter>
        </defs>
        <motion.g
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
            {/* Outer Petals */}
            <path
                d="M50 20 C70 10, 90 30, 80 50 C90 70, 70 90, 50 85 C30 90, 10 70, 20 50 C10 30, 30 10, 50 20 Z"
                fill={color}
                fillOpacity="0.2"
                filter="url(#watercolor-blur)"
            />
            <path
                d="M50 25 C65 18, 80 35, 75 50 C80 65, 65 80, 50 75 C35 80, 20 65, 25 50 C20 35, 35 18, 50 25 Z"
                fill={color}
                fillOpacity="0.3"
            />
            {/* Inner Petals - Spiral effect */}
            <path
                d="M50 35 C60 30, 70 40, 65 50 C70 60, 60 70, 50 65 C40 70, 30 60, 35 50 C30 40, 40 30, 50 35 Z"
                fill={color}
                fillOpacity="0.5"
            />
            <path
                d="M50 42 C55 40, 60 45, 58 50 C60 55, 55 60, 50 58 C45 60, 40 55, 42 50 C40 45, 45 40, 50 42 Z"
                fill={color}
                fillOpacity="0.7"
            />
            {/* Highlights */}
            <path d="M45 45 Q50 40 55 45" stroke="white" strokeWidth="1" strokeOpacity="0.4" fill="none" />
        </motion.g>
    </motion.svg>
);

export const Peony = ({
    className = 'w-32 h-32',
    color = '#FFE4E1',
    delay = 0
}) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={className}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay, ease: 'easeOut' }}
    >
        <defs>
            <filter id="soft-glow">
                <feGaussianBlur stdDeviation="2" />
            </filter>
        </defs>
        <motion.g
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
            {/* Base Layers */}
            <circle cx="50" cy="50" r="45" fill={color} fillOpacity="0.1" filter="url(#soft-glow)" />
            <path
                d="M50 10 C75 10, 90 35, 85 50 C90 75, 75 90, 50 90 C25 90, 10 75, 15 50 C10 35, 25 10, 50 10 Z"
                fill={color}
                fillOpacity="0.2"
            />
            {/* Ruffled Petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <path d="M50 20 C60 20, 65 35, 50 40 C35 35, 40 20, 50 20 Z" fill={color} fillOpacity="0.4" />
                </g>
            ))}
            {/* Center */}
            <circle cx="50" cy="50" r="15" fill="#FFFACD" fillOpacity="0.6" />
            <circle cx="50" cy="50" r="10" fill="#FFE4E1" fillOpacity="0.8" />
        </motion.g>
    </motion.svg>
);

export const Eucalyptus = ({
    className = 'w-24 h-48',
    color = '#9DC183',
    delay = 0
}) => (
    <motion.svg
        viewBox="0 0 60 120"
        className={className}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2, delay }}
    >
        <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            transform-origin="30 120"
        >
            {/* Stem */}
            <path d="M30 120 Q35 90 30 60 Q25 30 30 0" stroke="#8FBC8F" strokeWidth="1" fill="none" />
            {/* Leaves */}
            {[10, 30, 50, 70, 90, 110].map((y, i) => (
                <g key={i} transform={`translate(30, ${y})`}>
                    <circle cx={i % 2 === 0 ? -8 : 8} cy="0" r="6" fill={color} fillOpacity="0.6" />
                    <circle cx={i % 2 === 0 ? -8 : 8} cy="0" r="5" fill={color} fillOpacity="0.3" transform="translate(1,1)" />
                </g>
            ))}
        </motion.g>
    </motion.svg>
);

export const FloatingPetal = ({
    className = 'w-4 h-4',
    color = '#FFB7C5',
    delay = 0
}) => (
    <motion.svg
        viewBox="0 0 20 20"
        className={className}
        initial={{ y: -20, opacity: 0 }}
        animate={{
            y: [0, 100, 200],
            x: [0, 20, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0]
        }}
        transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay,
            ease: 'linear'
        }}
    >
        <path d="M10 0 C15 5, 20 10, 10 20 C0 10, 5 5, 10 0 Z" fill={color} fillOpacity="0.6" />
    </motion.svg>
);

export const FloralWreath = ({
    className = 'w-64 h-64',
    delay = 0
}) => (
    <div className={`relative ${className}`}>
        <motion.div
            className="absolute inset-0"
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay }}
        >
            <Eucalyptus className="absolute -left-4 top-0 w-16 h-32 transform -rotate-45" color="#9DC183" />
            <Eucalyptus className="absolute -right-4 top-0 w-16 h-32 transform rotate-45 scale-x-[-1]" color="#9DC183" />
            <Eucalyptus className="absolute -left-4 bottom-0 w-16 h-32 transform -rotate-135" color="#9DC183" />
            <Eucalyptus className="absolute -right-4 bottom-0 w-16 h-32 transform rotate-135 scale-x-[-1]" color="#9DC183" />
            <Rose className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16" color="#C9A0A0" delay={delay + 0.2} />
            <Peony className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20" color="#FFE4E1" delay={delay + 0.4} />
            <Rose className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12" color="#FFB7C5" delay={delay + 0.3} />
            <Rose className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12" color="#FFB7C5" delay={delay + 0.3} />
        </motion.div>
    </div>
);
