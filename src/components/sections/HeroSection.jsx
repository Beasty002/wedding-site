import { motion, useScroll, useTransform } from 'framer-motion';
import { Rose, Peony, Eucalyptus, WatercolorWash, FloatingPetal } from '../decorative/BotanicalIllustrations';
import { MarigoldGarland } from '../decorative/MarigoldGarland';
import { Ganesh } from '../decorative/Ganesh';
import { SwayingFlower, BreathingFlower, ParallaxElement } from '../decorative/AnimationWrappers';

const PetalBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(35)].map((_, i) => (
            <FloatingPetal key={i} className="absolute w-4 h-4 md:w-6 md:h-6" delay={i * 0.5} color={i % 3 === 0 ? '#FFB7C5' : i % 3 === 1 ? '#FFE4E1' : '#E6E6FA'} style={{ left: `${Math.random() * 100}%`, top: -50 }} />
        ))}
        {[...Array(10)].map((_, i) => (
            <motion.div key={`leaf-${i}`} className="absolute w-8 h-8 text-[#9DC183] opacity-40" initial={{ x: -100, y: Math.random() * 1000, rotate: 0 }} animate={{ x: '120vw', y: Math.random() * 1000 + 200, rotate: 360 }} transition={{ duration: 20 + Math.random() * 20, repeat: Infinity, ease: 'linear', delay: i * 2 }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2C12,2 12,22 12,22C12,22 2,12 2,12C2,12 12,2 12,2Z" />
                    <path d="M12,2C12,2 12,22 12,22C12,22 22,12 22,12C22,12 12,2 12,2Z" opacity="0.6" />
                </svg>
            </motion.div>
        ))}
    </div>
);

export const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 800], [1, 0]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 bg-[#FFFFF0]">
            <WatercolorWash variant="pink" className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" />
            <PetalBackground />

            <ParallaxElement offset={100} className="absolute top-32 left-4 md:left-12 w-48 h-64 pointer-events-none z-5">
                <SwayingFlower duration={6} className="origin-top-left">
                    <Eucalyptus className="absolute top-0 left-0 w-32 h-64 transform -rotate-15 text-[#9DC183]" />
                    <BreathingFlower>
                        <Rose className="absolute top-16 left-12 w-24 h-24" color="#C9A0A0" delay={0.5} />
                    </BreathingFlower>
                </SwayingFlower>
            </ParallaxElement>

            <ParallaxElement offset={120} className="absolute top-32 right-4 md:right-12 w-48 h-64 pointer-events-none z-5">
                <SwayingFlower duration={7} delay={1} className="origin-top-right">
                    <Eucalyptus className="absolute top-0 right-0 w-32 h-64 transform rotate-15 scale-x-[-1] text-[#9DC183]" />
                    <BreathingFlower delay={1}>
                        <Peony className="absolute top-16 right-12 w-28 h-28" color="#FFE4E1" delay={0.7} />
                    </BreathingFlower>
                </SwayingFlower>
            </ParallaxElement>

            <div className="absolute top-0 left-0 w-full pointer-events-none z-15 hidden md:block">
                <div className="absolute left-24 top-0">
                    <MarigoldGarland delay={0} className="h-96 opacity-40" />
                </div>
                <div className="absolute right-24 top-0">
                    <MarigoldGarland delay={0.15} className="h-72 opacity-40" />
                </div>
            </div>

            <motion.div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.5, delay: 1 }}>
                <Ganesh className="w-16 h-16 md:w-20 md:h-20 text-[#8B7355] opacity-70" />
                <p className="text-[#8B7355] text-sm md:text-base mt-2 opacity-60" style={{ fontFamily: 'Noto Sans Devanagari, serif' }}>
                    ॐ श्री गणेशाय नमः
                </p>
            </motion.div>

            <motion.div style={{ y, opacity }} className="relative z-30 text-center max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }} className="mb-8">
                    <p className="text-[#6B6B6B] text-lg md:text-xl tracking-[0.2em] uppercase mb-4 font-serif text-center">
                        Wedding Reception Invitation
                    </p>
                </motion.div>

                <div className="relative py-12">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 2 }} className="text-7xl md:text-9xl text-[#4A4A4A] font-script leading-tight z-10 relative drop-shadow-sm text-center">
                        Bishwas & Shruti
                    </motion.h1>
                    <WatercolorWash variant="green" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-15 rotate-12" />
                </div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1.5 }} className="text-[#6B6B6B] text-xl md:text-2xl font-serif italic mt-8 max-w-2xl mx-auto text-center">
                    With immense joy and heartfelt gratitude, we request the pleasure of your company
                </motion.p>
            </motion.div>

            <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30" animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>
                <div className="w-px h-24 bg-gradient-to-b from-[#9DC183] to-transparent" />
            </motion.div>
        </section>
    );
};
