import { motion, useInView } from 'framer-motion';
import { Rose, Peony, Eucalyptus, FloatingPetal, WatercolorWash } from '../decorative/BotanicalIllustrations';
import { Diya } from '../decorative/Diya';
import { FadeIn, SwayingFlower, BreathingFlower, ParallaxElement } from '../decorative/AnimationWrappers';
import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const PetalBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(35)].map((_, i) => (
            <FloatingPetal key={i} className="absolute w-4 h-4 md:w-6 md:h-6" delay={i * 0.5} color={i % 3 === 0 ? '#FFB7C5' : i % 3 === 1 ? '#FFE4E1' : '#E6E6FA'} style={{ left: `${Math.random() * 100}%`, top: -50 }} />
        ))}
    </div>
);

// Twinkling sparkles - unique to footer
const TwinklingSparkles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut'
                }}
            >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFD700" opacity="0.6">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
            </motion.div>
        ))}
    </div>
);

// Floating hearts - romantic touch unique to footer
const FloatingHearts = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
            <motion.div
                key={`heart-${i}`}
                className="absolute text-[#FFB7C5]"
                style={{
                    left: `${15 + (i * 10)}%`,
                    bottom: -20,
                }}
                animate={{
                    y: [0, -600],
                    x: [0, Math.sin(i) * 30, 0],
                    opacity: [0, 0.4, 0.4, 0],
                    rotate: [-10, 10, -10],
                }}
                transition={{
                    duration: 12 + Math.random() * 8,
                    repeat: Infinity,
                    delay: i * 2,
                    ease: 'easeOut'
                }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </motion.div>
        ))}
    </div>
);


const useConfetti = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const hasFired = useRef(false);

    useEffect(() => {
        if (isInView && !hasFired.current) {
            hasFired.current = true;
            const rect = ref.current?.getBoundingClientRect();
            if (rect) {
                const x = (rect.left + rect.width / 2) / window.innerWidth;
                const y = (rect.top + rect.height / 2) / window.innerHeight;

                confetti({
                    particleCount: 80,
                    spread: 60,
                    origin: { x, y },
                    colors: ['#FFD700', '#FFB7C5', '#C9A0A0', '#9DC183', '#E6E6FA'],
                    ticks: 150,
                    gravity: 0.9,
                    scalar: 1
                });
            }
        }
    }, [isInView]);

    return ref;
};

export const FooterSection = () => {
    const confettiRef = useConfetti();

    return (
        <footer className="bg-gradient-to-b from-[#FDFBF7] to-[#FFF8E7] py-16 md:py-24 px-4 relative overflow-hidden border-t border-[#FFE4E1]">
            {/* Watercolor wash background */}
            <WatercolorWash variant="pink" className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" />

            <PetalBackground />
            <TwinklingSparkles />
            <FloatingHearts />

            {/* Top left floral - same as hero section */}
            <ParallaxElement offset={80} className="absolute top-0 left-0 md:left-4 w-40 h-52 pointer-events-none z-5">
                <SwayingFlower duration={6} className="origin-top-left">
                    <Eucalyptus className="absolute top-0 left-0 w-28 h-52 transform -rotate-15 text-[#9DC183] opacity-70" />
                    <BreathingFlower>
                        <Rose className="absolute top-14 left-10 w-20 h-20" color="#C9A0A0" delay={0.5} />
                    </BreathingFlower>
                </SwayingFlower>
            </ParallaxElement>

            {/* Top right floral - same as hero section */}
            <ParallaxElement offset={100} className="absolute top-0 right-0 md:right-4 w-40 h-52 pointer-events-none z-5">
                <SwayingFlower duration={7} delay={1} className="origin-top-right">
                    <Eucalyptus className="absolute top-0 right-0 w-28 h-52 transform rotate-15 scale-x-[-1] text-[#9DC183] opacity-70" />
                    <BreathingFlower delay={1}>
                        <Peony className="absolute top-14 right-10 w-24 h-24" color="#FFE4E1" delay={0.7} />
                    </BreathingFlower>
                </SwayingFlower>
            </ParallaxElement>

            {/* Diyas at bottom */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-24 pointer-events-none opacity-60 z-10">
                {[...Array(3)].map((_, i) => (
                    <Diya key={i} className="w-12 h-12" delay={i * 0.3} />
                ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <motion.div
                            ref={confettiRef}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-block relative mb-6"
                            style={{ perspective: '1000px' }}
                        >
                            <motion.div
                                className="relative"
                                animate={{
                                    y: [0, -8, 0],
                                    rotateY: [-2, 2, -2],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            >
                                <div className="absolute -inset-4 border-2 border-dashed border-[#FFD700]/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
                                <img
                                    src="/bridegroomimage.png"
                                    alt="Bishwas & Shruti"
                                    className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
                                    style={{
                                        boxShadow: '0 20px 40px -10px rgba(139, 115, 85, 0.35), 0 0 0 3px white, 0 0 20px rgba(255, 215, 0, 0.15)'
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-3xl md:text-4xl font-script text-[#4A4A4A] mb-2"
                        >
                            Bishwas & Shruti
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl font-script text-[#8B7355] mb-8"
                        >
                            We look forward to celebrating with you
                        </motion.p>

                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-10" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-10"
                    >
                        <div className="text-center">
                            <p className="text-[#C9A0A0] text-xs uppercase tracking-widest mb-2">Venue</p>
                            <p className="text-xl md:text-2xl text-[#4A4A4A] font-medium">Indreni Function Center</p>
                            <p className="text-[#6B6B6B] text-sm mt-1">588 Princes Highway, Rockdale</p>
                        </div>

                        <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-[#FFD700]/40 to-transparent" />

                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <p className="text-[#C9A0A0] text-xs uppercase tracking-widest mb-2">Date</p>
                                <p className="text-4xl md:text-5xl font-bold text-[#4A4A4A]">14</p>
                                <p className="text-sm text-[#8B7355]">February 2026</p>
                            </div>

                            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#FFD700]/40 to-transparent" />

                            <div className="text-center">
                                <p className="text-[#C9A0A0] text-xs uppercase tracking-widest mb-2">Time</p>
                                <p className="text-4xl md:text-5xl font-bold text-[#4A4A4A]">5:00</p>
                                <p className="text-sm text-[#8B7355]">PM Onwards</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex justify-center items-center gap-4 mt-12 mb-16 md:mb-0"
                    >
                        <motion.span
                            className="text-[#C9A0A0] text-lg"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            ✿
                        </motion.span>
                        <p className="text-xs text-[#9DC183] uppercase tracking-[0.3em]">#BishwasWedsShruti2026</p>
                        <motion.span
                            className="text-[#C9A0A0] text-lg"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        >
                            ✿
                        </motion.span>
                    </motion.div>
                </FadeIn>
            </div>
        </footer>
    );
};
