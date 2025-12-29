import { motion } from 'framer-motion';

// Lord Ganesh - Remover of obstacles, blessed at weddings
export const Ganesh = ({ className = 'w-32 h-32', delay = 0 }) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={className}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
    >
        {/* Glow effect */}
        <defs>
            <radialGradient id="ganeshGlow">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#ganeshGlow)" />

        {/* Head */}
        <ellipse cx="50" cy="45" rx="25" ry="28" fill="#FF9933" />

        {/* Trunk */}
        <path d="M50 45 Q45 55 40 65 Q38 70 42 72 Q45 70 48 65 Q50 60 50 55" fill="#FF9933" />

        {/* Ears */}
        <ellipse cx="25" cy="40" rx="10" ry="15" fill="#FF9933" />
        <ellipse cx="75" cy="40" rx="10" ry="15" fill="#FF9933" />

        {/* Crown */}
        <path d="M30 25 L50 15 L70 25 L65 30 L50 22 L35 30 Z" fill="#FFD700" />
        <circle cx="50" cy="15" r="3" fill="#DC143C" />

        {/* Eyes */}
        <circle cx="42" cy="40" r="2" fill="#000" />
        <circle cx="58" cy="40" r="2" fill="#000" />

        {/* Tilak (forehead mark) */}
        <path d="M50 32 L48 38 L52 38 Z" fill="#DC143C" />

        {/* Body */}
        <ellipse cx="50" cy="70" rx="20" ry="18" fill="#FF9933" />

        {/* Arms with modak (sweet) */}
        <path d="M30 65 Q25 70 28 75" stroke="#FF9933" strokeWidth="3" fill="none" />
        <circle cx="28" cy="75" r="4" fill="#FFD700" />

        <path d="M70 65 Q75 70 72 75" stroke="#FF9933" strokeWidth="3" fill="none" />

        {/* Decorative elements */}
        <circle cx="50" cy="70" r="3" fill="#FFD700" />
    </motion.svg>
);

// Kalash - Sacred pot used in Hindu ceremonies
export const Kalash = ({ className = 'w-24 h-24', delay = 0 }) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay }}
    >
        {/* Base */}
        <path d="M30 80 L35 90 L65 90 L70 80 Z" fill="#8B4513" />

        {/* Pot body */}
        <path d="M25 40 Q25 30 30 25 L70 25 Q75 30 75 40 L70 80 L30 80 Z" fill="#FFD700" />
        <path d="M30 25 L70 25 L70 30 L30 30 Z" fill="#FF9933" />

        {/* Decorative patterns on pot */}
        <path d="M35 45 Q50 50 65 45" stroke="#DC143C" strokeWidth="1" fill="none" />
        <path d="M35 55 Q50 60 65 55" stroke="#DC143C" strokeWidth="1" fill="none" />
        <circle cx="50" cy="65" r="3" fill="#DC143C" />

        {/* Mango leaves */}
        {[0, 1, 2, 3, 4].map((i) => (
            <motion.path
                key={i}
                d={`M${40 + i * 5} 25 Q${40 + i * 5} 15 ${42 + i * 5} 10 Q${44 + i * 5} 15 ${42 + i * 5} 25`}
                fill="#228B22"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: `${40 + i * 5}px`, originY: '25px' }}
            />
        ))}

        {/* Coconut on top */}
        <ellipse cx="50" cy="12" rx="8" ry="10" fill="#8B4513" />
        <path d="M50 8 L48 5 M50 8 L52 5 M50 8 L50 4" stroke="#654321" strokeWidth="1" />

        {/* Red cloth/thread */}
        <path d="M45 20 Q50 18 55 20" stroke="#DC143C" strokeWidth="2" fill="none" />
    </motion.svg>
);

// Swastika - Hindu auspicious symbol (NOT the Nazi symbol - this is the original Hindu symbol)
export const Swastika = ({ className = 'w-16 h-16', delay = 0 }) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={className}
        initial={{ opacity: 0, rotate: -90 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay }}
    >
        <g transform="translate(50, 50)">
            {/* Center square */}
            <rect x="-8" y="-8" width="16" height="16" fill="#DC143C" />

            {/* Four arms */}
            <rect x="8" y="-4" width="30" height="8" fill="#DC143C" />
            <rect x="-4" y="8" width="8" height="30" fill="#DC143C" />
            <rect x="-38" y="-4" width="30" height="8" fill="#DC143C" />
            <rect x="-4" y="-38" width="8" height="30" fill="#DC143C" />

            {/* Perpendicular extensions */}
            <rect x="34" y="-12" width="8" height="16" fill="#DC143C" />
            <rect x="4" y="34" width="16" height="8" fill="#DC143C" />
            <rect x="-42" y="-4" width="8" height="16" fill="#DC143C" />
            <rect x="-20" y="-42" width="16" height="8" fill="#DC143C" />

            {/* Decorative dots */}
            <circle cx="20" cy="20" r="3" fill="#FFD700" />
            <circle cx="-20" cy="20" r="3" fill="#FFD700" />
            <circle cx="20" cy="-20" r="3" fill="#FFD700" />
            <circle cx="-20" cy="-20" r="3" fill="#FFD700" />
        </g>
    </motion.svg>
);

// Traditional Nepali/Indian border pattern
export const TraditionalBorder = ({ className = '' }) => (
    <svg viewBox="0 0 200 20" className={className} preserveAspectRatio="none">
        <defs>
            <pattern id="borderPattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q10 0 20 10 Q30 20 40 10" stroke="#DC143C" strokeWidth="2" fill="none" />
                <circle cx="20" cy="10" r="2" fill="#FFD700" />
            </pattern>
        </defs>
        <rect width="200" height="20" fill="url(#borderPattern)" />
    </svg>
);

// Rangoli pattern - decorative floor art
export const RangoliPattern = ({ className = 'w-32 h-32', delay = 0 }) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={className}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay }}
    >
        {/* Outer circle */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#FF9933" strokeWidth="1" opacity="0.6" />

        {/* Petals */}
        {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const x = 50 + 35 * Math.cos(angle);
            const y = 50 + 35 * Math.sin(angle);
            return (
                <g key={i}>
                    <ellipse
                        cx={x}
                        cy={y}
                        rx="12"
                        ry="8"
                        fill="#DC143C"
                        opacity="0.7"
                        transform={`rotate(${(i * 360) / 8} ${x} ${y})`}
                    />
                </g>
            );
        })}

        {/* Inner circle */}
        <circle cx="50" cy="50" r="25" fill="none" stroke="#FFD700" strokeWidth="1" />

        {/* Inner petals */}
        {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8 + Math.PI / 8;
            const x = 50 + 18 * Math.cos(angle);
            const y = 50 + 18 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="4" fill="#FF9933" opacity="0.8" />;
        })}

        {/* Center */}
        <circle cx="50" cy="50" r="8" fill="#FFD700" />
        <circle cx="50" cy="50" r="4" fill="#DC143C" />
    </motion.svg>
);
