import { motion, useScroll, useTransform } from 'framer-motion';
import { Rose, Peony, Eucalyptus, WatercolorWash, FloatingPetal } from '../decorative/BotanicalIllustrations';
import { MarigoldGarland } from '../decorative/MarigoldGarland';
import { Ganesh } from '../decorative/Ganesh';
import { SwayingFlower, BreathingFlower, ParallaxElement } from '../decorative/AnimationWrappers';

const PetalBackground = ({ hasEntered }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {hasEntered && [...Array(35)].map((_, i) => (
            <FloatingPetal key={i} className="absolute w-4 h-4 md:w-6 md:h-6" delay={i * 0.5} color={i % 3 === 0 ? '#FFB7C5' : i % 3 === 1 ? '#FFE4E1' : '#E6E6FA'} style={{ left: `${Math.random() * 100}%`, top: -50 }} />
        ))}
        {hasEntered && [...Array(10)].map((_, i) => (
            <motion.div key={`leaf-${i}`} className="absolute w-8 h-8 text-[#9DC183] opacity-40" initial={{ x: -100, y: Math.random() * 1000, rotate: 0 }} animate={{ x: '120vw', y: Math.random() * 1000 + 200, rotate: 360 }} transition={{ duration: 20 + Math.random() * 20, repeat: Infinity, ease: 'linear', delay: i * 2 }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2C12,2 12,22 12,22C12,22 2,12 2,12C2,12 12,2 12,2Z" />
                    <path d="M12,2C12,2 12,22 12,22C12,22 22,12 22,12C22,12 12,2 12,2Z" opacity="0.6" />
                </svg>
            </motion.div>
        ))}
    </div>
);

export const HeroSection = ({ hasEntered }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 800], [1, 0]);

    return (
        <section className="relative h-[100dvh] flex flex-col items-center overflow-hidden px-4 py-4 bg-[#FFFFF0]">
            <WatercolorWash variant="pink" className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" />
            <PetalBackground hasEntered={hasEntered} />

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

            <div className="absolute top-0 left-0 w-full pointer-events-none z-5">
                <div className="absolute left-24 top-0 hidden md:block">
                    <MarigoldGarland delay={0} className="h-96 opacity-40" />
                </div>
                <div className="absolute right-2 -top-12 md:right-24 md:top-0">
                    <MarigoldGarland delay={0.15} className="h-32 md:h-72 opacity-25 md:opacity-40" />
                </div>
            </div>

            <motion.div
                className="relative z-10 flex flex-col items-center mt-4 md:mt-6"
                initial={{ opacity: 0, y: -20 }}
                animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 2.5, delay: hasEntered ? 0.5 : 0 }}
            >
                <p className="text-[#8B7355] text-xs md:text-sm opacity-60 text-center leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, serif' }}>
                    वक्रतुंड महाकाय सूर्यकोटि समप्रभ।<br />
                    निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
                </p>
                <Ganesh className="w-12 h-12 md:w-16 md:h-16 text-[#8B7355] opacity-70 my-2" />
                <p className="text-[#8B7355] text-sm md:text-base opacity-60" style={{ fontFamily: 'Noto Sans Devanagari, serif' }}>
                    ||  श्री गणेशाय नमः ||
                </p>
            </motion.div>

            <motion.div style={{ y, opacity }} className="relative z-30 text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center -mt-8 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={hasEntered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 2.5, ease: 'easeOut', delay: hasEntered ? 0.5 : 0 }}
                    className="mb-4 md:mb-6"
                >
                    <p className="text-[#6B6B6B] text-base md:text-xl tracking-[0.2em] uppercase mb-2 font-serif text-center">
                        Wedding Reception Invitation
                    </p>
                </motion.div>

                <div className="relative py-6 md:py-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: hasEntered ? 1.2 : 0, duration: 2 }}
                        className="text-6xl md:text-7xl lg:text-9xl text-[#4A4A4A] font-script leading-tight z-10 relative drop-shadow-sm text-center"
                    >
                        Bishwas & Shruti
                    </motion.h1>
                    <WatercolorWash variant="green" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-15 rotate-12" />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: hasEntered ? 2 : 0, duration: 1.5 }}
                    className="text-[#6B6B6B] text-sm md:text-base lg:text-lg font-serif italic mt-6 md:mt-8 max-w-2xl mx-auto text-center px-4"
                >
                    With immense joy and heartfelt gratitude,<br />
                    we request the pleasure of your company for the wedding reception of Bishwas & Shruti
                </motion.p>
            </motion.div>

            <motion.div
                className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={hasEntered ? { opacity: 0.6 } : { opacity: 0 }}
                transition={{ delay: hasEntered ? 3 : 0, duration: 1 }}
                whileInView={{ opacity: hasEntered ? 0.6 : 0 }}
                viewport={{ once: false }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                whileHover={{ scale: 1.1, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className="flex flex-col items-center"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="w-5 h-8 border-2 border-[#8B7355]/40 rounded-full flex justify-center pt-1.5">
                        <motion.div
                            className="w-1.5 h-1.5 bg-[#8B7355]/60 rounded-full"
                            animate={{ y: [0, 10, 0], opacity: [0.8, 0.2, 0.8] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                </motion.div>
                <span className="text-[#8B7355]/50 text-[10px] md:text-xs tracking-[0.2em] uppercase font-serif mt-2">
                    Scroll Down
                </span>
            </motion.div>
        </section>
    );
};

