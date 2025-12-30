import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/blinksake.mp3');
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <motion.button
            onClick={togglePlay}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FF9933 50%, #FFD700 100%)',
                border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFF0">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFF0">
                    <path d="M8 5v14l11-7z" />
                </svg>
            )}
            <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FF9933 100%)',
                    opacity: 0.3
                }}
                animate={isPlaying ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3]
                } : {}}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </motion.button>
    );
}
