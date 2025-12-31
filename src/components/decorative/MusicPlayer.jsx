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

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden && audioRef.current && isPlaying) {
                audioRef.current.pause();
            } else if (!document.hidden && audioRef.current && isPlaying) {
                audioRef.current.play();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isPlaying]);

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
                <motion.svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#FFFFF0"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </motion.svg>
            ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFF0">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
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
