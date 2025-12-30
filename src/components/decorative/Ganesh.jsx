import { motion } from 'framer-motion';

export const Ganesh = ({ className = 'w-32 h-32', delay = 0 }) => (
    <motion.svg viewBox="0 0 100 100" className={className} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay, ease: 'easeOut' }}>
        <defs>
            <radialGradient id="ganeshGlow">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#ganeshGlow)" />
        <ellipse cx="50" cy="45" rx="25" ry="28" fill="#FF9933" />
        <path d="M50 45 Q45 55 40 65 Q38 70 42 72 Q45 70 48 65 Q50 60 50 55" fill="#FF9933" />
        <ellipse cx="25" cy="40" rx="10" ry="15" fill="#FF9933" />
        <ellipse cx="75" cy="40" rx="10" ry="15" fill="#FF9933" />
        <path d="M30 25 L50 15 L70 25 L65 30 L50 22 L35 30 Z" fill="#FFD700" />
        <circle cx="50" cy="15" r="3" fill="#DC143C" />
        <circle cx="42" cy="40" r="2" fill="#000" />
        <circle cx="58" cy="40" r="2" fill="#000" />
        <path d="M50 32 L48 38 L52 38 Z" fill="#DC143C" />
        <ellipse cx="50" cy="70" rx="20" ry="18" fill="#FF9933" />
        <path d="M30 65 Q25 70 28 75" stroke="#FF9933" strokeWidth="3" fill="none" />
        <circle cx="28" cy="75" r="4" fill="#FFD700" />
        <path d="M70 65 Q75 70 72 75" stroke="#FF9933" strokeWidth="3" fill="none" />
        <circle cx="50" cy="70" r="3" fill="#FFD700" />
    </motion.svg>
);
