import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ganesh } from './Ganesh';

export function EntranceOverlay({ onEnter }) {
    const [isExiting, setIsExiting] = useState(false);

    const handleEnter = () => {
        setIsExiting(true);
        setTimeout(() => {
            onEnter();
        }, 800);
    };

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className="fixed inset-0 z-100 flex flex-col items-center justify-center"
                    style={{
                        background: 'linear-gradient(135deg, #FFFFF0 0%, #FFF8DC 50%, #FFFFF0 100%)'
                    }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    background: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF9933' : '#E6E6FA',
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.3, 0.8, 0.3],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex flex-col items-center z-10"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        >
                            <Ganesh className="w-24 h-24 md:w-32 md:h-32 text-[#8B7355] opacity-80" />
                        </motion.div>

                        <motion.p
                            className="text-[#8B7355] text-lg md:text-xl mt-6 text-center opacity-80"
                            style={{ fontFamily: 'Noto Sans Devanagari, serif' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            || श्री गणेशाय नमः ||
                        </motion.p>

                        <motion.p
                            className="text-[#6B6B6B] text-base md:text-lg mt-8 text-center font-serif italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                        >
                            Welcome to our celebration of love
                        </motion.p>

                        <motion.button
                            onClick={handleEnter}
                            className="mt-10 px-8 py-4 rounded-full cursor-pointer relative overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #FFD700 0%, #FF9933 50%, #FFD700 100%)',
                                boxShadow: '0 4px 20px rgba(255, 153, 51, 0.4)'
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 0.6 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 6px 30px rgba(255, 153, 51, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)'
                                }}
                                animate={{
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'linear'
                                }}
                            />
                            <div className="flex items-center gap-3 relative z-10">
                                <motion.svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#FFFFF0"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                </motion.svg>
                                <span className="text-[#FFFFF0] text-base md:text-lg font-medium tracking-wide">
                                    Best Experience with Music
                                </span>
                                <motion.svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#FFFFF0"
                                    animate={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.75 }}
                                >
                                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                </motion.svg>
                            </div>
                        </motion.button>

                        <motion.p
                            className="text-[#8B7355] text-xs md:text-sm mt-4 text-center opacity-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 2, duration: 1 }}
                        >
                            Click to enter and play background music
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="2">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
