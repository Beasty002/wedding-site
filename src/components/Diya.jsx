import { motion } from 'framer-motion';

export function Diya({ className = '', delay = 0 }) {
    return (
        <motion.div
            className={`relative w-16 h-16 ${className}`}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay }}
        >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Lamp Base */}
                <path d="M10 60 Q50 90 90 60 L80 50 Q50 70 20 50 Z" fill="#8B4513" />
                <path d="M20 50 Q50 70 80 50" fill="#A0522D" />

                {/* Oil */}
                <path d="M25 52 Q50 65 75 52" fill="#FFD700" opacity="0.6" />

                {/* Flame */}
                <motion.g
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{
                        scale: [0.8, 1.1, 0.9, 1.2, 0.8],
                        opacity: [0.8, 1, 0.7, 1, 0.8],
                        y: [0, -2, 0, -1, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    style={{ originY: 1, originX: 0.5 }}
                >
                    {/* Outer Flame */}
                    <path d="M50 50 Q35 35 50 10 Q65 35 50 50" fill="#FF9933" />
                    {/* Inner Flame */}
                    <path d="M50 48 Q40 38 50 20 Q60 38 50 48" fill="#FFD700" />
                </motion.g>
            </svg>

            {/* Glow effect */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-yellow-400 blur-xl"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 2 }}
            />
        </motion.div>
    );
}
