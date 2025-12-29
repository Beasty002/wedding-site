import { motion } from 'framer-motion';

export function MarigoldGarland({ delay = 0, className = '' }) {
    return (
        <motion.div
            className={`absolute top-0 z-10 ${className}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay }}
        >
            <motion.svg
                width="100"
                height="300"
                viewBox="0 0 100 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ originY: 0 }}
                animate={{ rotate: [-2, 2, -2], scaleY: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 4 + Math.random(), ease: 'easeInOut' }}
            >
                {/* String */}
                <line x1="50" y1="0" x2="50" y2="280" stroke="#FF9933" strokeWidth="2" />

                {/* Flowers */}
                {[...Array(6)].map((_, i) => (
                    <g key={i} transform={`translate(50, ${40 + i * 45})`}>
                        <motion.circle
                            r="20"
                            fill="#FF9933"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: delay + 0.2 + i * 0.1, type: 'spring' }}
                        />
                        <circle r="15" fill="#FFD700" opacity="0.8" />
                        <circle r="10" fill="#FF9933" />
                        <circle r="5" fill="#FF1493" />

                        {/* Petal details */}
                        {[...Array(8)].map((_, j) => (
                            <path
                                key={j}
                                d={`M0 0 L${20 * Math.cos((j * Math.PI) / 4)} ${20 * Math.sin((j * Math.PI) / 4)}`}
                                stroke="#FF6B00"
                                strokeWidth="1"
                                opacity="0.5"
                            />
                        ))}
                    </g>
                ))}

                {/* Tassel at bottom */}
                <g transform="translate(50, 280)">
                    <path d="M0 0 L-10 20 L10 20 Z" fill="#FF1493" />
                    <line x1="-8" y1="20" x2="-8" y2="30" stroke="#FF1493" />
                    <line x1="-4" y1="20" x2="-4" y2="30" stroke="#FF1493" />
                    <line x1="0" y1="20" x2="0" y2="30" stroke="#FF1493" />
                    <line x1="4" y1="20" x2="4" y2="30" stroke="#FF1493" />
                    <line x1="8" y1="20" x2="8" y2="30" stroke="#FF1493" />
                </g>
            </motion.svg>
        </motion.div>
    );
}
