import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Rose, Peony, Eucalyptus, WatercolorWash, FloatingPetal, FloralWreath } from './BotanicalIllustrations';
import { Diya } from './Diya';
import { MarigoldGarland } from './MarigoldGarland';
import { Swastika, Ganesh } from './NepaliWeddingElements';

const SwayingFlower = ({ children, duration = 5, delay = 0, className = '' }) => (
    <motion.div
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        className={className}
    >
        {children}
    </motion.div>
);

const BreathingFlower = ({ children, duration = 3, delay = 0, className = '' }) => (
    <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        className={className}
    >
        {children}
    </motion.div>
);

const ParallaxElement = ({ children, offset = 50, className = '' }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, offset]);
    return (
        <motion.div style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.2, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const PetalBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(35)].map((_, i) => (
            <FloatingPetal
                key={i}
                className="absolute w-4 h-4 md:w-6 md:h-6"
                delay={i * 0.5}
                color={i % 3 === 0 ? '#FFB7C5' : i % 3 === 1 ? '#FFE4E1' : '#E6E6FA'}
                style={{ left: `${Math.random() * 100}%`, top: -50 }}
            />
        ))}
        {[...Array(10)].map((_, i) => (
            <motion.div
                key={`leaf-${i}`}
                className="absolute w-8 h-8 text-[#9DC183] opacity-40"
                initial={{ x: -100, y: Math.random() * 1000, rotate: 0 }}
                animate={{ x: '120vw', y: Math.random() * 1000 + 200, rotate: 360 }}
                transition={{ duration: 20 + Math.random() * 20, repeat: Infinity, ease: 'linear', delay: i * 2 }}
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2C12,2 12,22 12,22C12,22 2,12 2,12C2,12 12,2 12,2Z" />
                    <path d="M12,2C12,2 12,22 12,22C12,22 22,12 22,12C22,12 12,2 12,2Z" opacity="0.6" />
                </svg>
            </motion.div>
        ))}
    </div>
);

const MarigoldAccent = ({ className = '' }) => (
    <svg viewBox="0 0 40 40" className={className} fill="none">
        <circle cx="20" cy="20" r="12" fill="#FF9933" opacity="0.8" />
        <circle cx="20" cy="20" r="8" fill="#FFD700" opacity="0.9" />
        <circle cx="20" cy="20" r="4" fill="#FF9933" />
        {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const x = 20 + 10 * Math.cos(angle);
            const y = 20 + 10 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="2" fill="#FFD700" opacity="0.6" />;
        })}
    </svg>
);

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
                <div className="absolute left-16 md:left-24 top-0">
                    <MarigoldGarland delay={0} className="h-72 md:h-96 opacity-40" />
                </div>
                <div className="absolute right-16 md:right-24 top-0">
                    <MarigoldGarland delay={0.15} className="h-56 md:h-72 opacity-40" />
                </div>
            </div>

            <motion.div
                className="absolute top-8 left-1/2 -translate-x-1/2 z-10 opacity-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
            >
                <Ganesh className="w-16 h-16 md:w-20 md:h-20 text-[#8B7355]" />
            </motion.div>

            <motion.div style={{ y, opacity }} className="relative z-30 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="mb-8"
                >
                    <p className="text-[#6B6B6B] text-lg md:text-xl tracking-[0.2em] uppercase mb-4 font-serif">
                        Wedding Reception Invitation
                    </p>
                </motion.div>

                <div className="relative py-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.2 }}
                        className="text-7xl md:text-9xl text-[#4A4A4A] font-script leading-tight z-10 relative drop-shadow-sm"
                    >
                        Bishwas & Shruti
                    </motion.h1>
                    <WatercolorWash
                        variant="green"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-15 rotate-12"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="text-[#6B6B6B] text-xl md:text-2xl font-serif italic mt-8 max-w-2xl mx-auto"
                >
                    as they begin a new journey together filled with love, respect, and togetherness
                </motion.p>
            </motion.div>

            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
                <div className="w-px h-24 bg-gradient-to-b from-[#9DC183] to-transparent" />
            </motion.div>
        </section>
    );
};

const FamilyCard = ({ name, parents, grandparents, relationship, delay = 0, showSwastik = false }) => (
    <FadeIn delay={delay} className="relative h-full">
        <div className="bg-white/70 backdrop-blur-sm p-10 md:p-14 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E6E6FA] relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-700 h-full flex flex-col">
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-60" />

            {showSwastik && (
                <div className="absolute top-6 left-6 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                    <Swastika className="w-10 h-10" />
                </div>
            )}

            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <MarigoldAccent className="w-12 h-12" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <FloralWreath className="w-64 h-64 text-[#9DC183]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center flex-1">
                <h3 className="text-5xl md:text-6xl text-[#4A4A4A] mb-5 font-script leading-tight">{name}</h3>

                <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-[#FFD700]/10 blur-xl" />
                    <p className="relative text-lg text-[#8B7355] font-serif tracking-wide italic px-6 py-2">{relationship}</p>
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A0A0] to-transparent" />
                    <MarigoldAccent className="w-6 h-6 opacity-60" />
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A0A0] to-transparent" />
                </div>

                <div className="space-y-6 flex-1 flex flex-col justify-center w-full">
                    <div className="bg-gradient-to-br from-[#FFF8E7]/50 to-white/30 rounded-2xl p-8 border border-[#E6E6FA]/50 backdrop-blur-sm">
                        <p className="text-xl md:text-2xl text-[#6B6B6B] font-serif leading-relaxed">{parents}</p>
                    </div>

                    {grandparents && (
                        <>
                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="w-1 h-1 bg-[#FFD700] rounded-full opacity-40" />
                                <div className="w-1 h-1 bg-[#C9A0A0] rounded-full opacity-40" />
                                <div className="w-1 h-1 bg-[#FFD700] rounded-full opacity-40" />
                            </div>
                            <div className="bg-gradient-to-br from-[#FFF8E7]/50 to-white/30 rounded-2xl p-8 border border-[#E6E6FA]/50 backdrop-blur-sm">
                                <p className="text-sm text-[#8B7355] font-serif italic mb-3 uppercase tracking-wider opacity-80">
                                    Grand-daughter of
                                </p>
                                <p className="text-lg md:text-xl text-[#6B6B6B] font-serif">{grandparents}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-60">
                <Diya className="w-10 h-10" delay={delay + 0.5} />
            </div>
        </div>
    </FadeIn>
);

const FamilySection = () => (
    <section className="relative py-32 px-4 bg-[#FFFFF0]">
        <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-20">
                <div className="flex justify-center items-center gap-3 mb-6">
                    <Swastika className="w-8 h-8 opacity-30" />
                    <h2 className="text-5xl md:text-6xl text-[#4A4A4A] font-script">The Families</h2>
                    <Swastika className="w-8 h-8 opacity-30" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C9A0A0] to-transparent opacity-50" />
                    <MarigoldAccent className="w-8 h-8 opacity-60" />
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C9A0A0] to-transparent opacity-50" />
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
                <FamilyCard
                    name="Mr. Bishwas Rajbhandari"
                    parents="Bibek Rajbhandari & Yamuna Rajbhandari"
                    relationship="Son of"
                    delay={0.2}
                    showSwastik={true}
                />
                <FamilyCard
                    name="Miss Shruti Yogi"
                    parents="Bikash Nath Yogi & Amrit Hira Tuladhar Yogi"
                    grandparents="Radha Devi Yogi"
                    relationship="Daughter of"
                    delay={0.4}
                    showSwastik={true}
                />
            </div>
        </div>
    </section>
);

const EventDetailsSection = () => (
    <section className="relative py-32 px-4 bg-[#F0F5F0] overflow-hidden">
        <ParallaxElement offset={-50} className="absolute inset-0 pointer-events-none">
            <WatercolorWash variant="green" className="absolute top-0 right-0 w-full h-full opacity-20 transform rotate-180" />
        </ParallaxElement>

        <div className="max-w-6xl mx-auto relative z-10">
            <FadeIn className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl text-[#4A4A4A] font-script mb-8">The Celebration</h2>
                <div className="flex justify-center items-center gap-6">
                    <div className="h-px w-16 bg-[#9DC183] opacity-50" />
                    <BreathingFlower>
                        <Rose className="w-10 h-10" color="#C9A0A0" />
                    </BreathingFlower>
                    <div className="h-px w-16 bg-[#9DC183] opacity-50" />
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Calendar, title: 'Date', content: 'Saturday, 14th February', sub: '2026' },
                    { icon: Clock, title: 'Venue', content: 'Indreni Function Center', sub: '' },
                    { icon: MapPin, title: 'Address', content: '588 Princes Highway', sub: 'Rockdale' }
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 0.3} className="relative group h-full">
                        <div className="bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-sm border border-[#E6E6FA] text-center h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                            <div className="mb-6 p-4 rounded-full bg-[#F0F5F0] group-hover:bg-[#FFF8E7] transition-colors duration-500">
                                <item.icon className="w-8 h-8 text-[#9DC183]" />
                            </div>

                            <h3 className="text-2xl font-serif text-[#4A4A4A] mb-4">{item.title}</h3>
                            <p className="text-xl font-medium text-[#6B6B6B] mb-2">{item.content}</p>
                            <p className="text-[#9DC183] font-serif italic">{item.sub}</p>

                            <SwayingFlower
                                duration={4}
                                className="absolute bottom-[-20px] right-[-20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                            >
                                <Eucalyptus className="w-24 h-24 text-[#9DC183]" />
                            </SwayingFlower>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);

const NoteSection = () => (
    <section className="relative py-32 px-4 bg-[#FFFFF0]">
        <div className="max-w-4xl mx-auto text-center relative p-12 md:p-20 border border-[#FFE4E1] rounded-[3rem] bg-white/30 backdrop-blur-sm">
            <SwayingFlower className="absolute -top-12 -left-12 pointer-events-none">
                <Peony className="w-40 h-40" color="#FFE4E1" />
            </SwayingFlower>
            <SwayingFlower delay={2} className="absolute -bottom-12 -right-12 pointer-events-none">
                <Peony className="w-40 h-40" color="#FFE4E1" />
            </SwayingFlower>

            <FadeIn>
                <h2 className="text-4xl md:text-5xl text-[#4A4A4A] font-script mb-12">A Note from the Bride & Groom</h2>

                <div className="prose prose-lg mx-auto text-[#6B6B6B] leading-relaxed font-serif text-lg md:text-xl italic">
                    <p className="mb-8">
                        "With hearts full of gratitude and joy, we warmly invite you to share in one of the most meaningful moments
                        of our lives. Your presence will mean the world to us as we celebrate love, family, and new beginnings."
                    </p>
                    <p>
                        "Thank you for being part of our story; we look forward to sharing this special day with you."
                    </p>
                </div>

                <div className="mt-16">
                    <p className="text-[#9DC183] font-medium uppercase tracking-[0.2em] text-sm mb-6">With love and happiness</p>
                    <p className="text-5xl md:text-7xl text-[#C9A0A0] font-script">Bishwas & Shruti</p>
                </div>
            </FadeIn>
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-[#FDFBF7] py-24 px-4 relative overflow-hidden border-t border-[#FFE4E1]">
        <PetalBackground />

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-24 pointer-events-none opacity-60">
            {[...Array(3)].map((_, i) => (
                <Diya key={i} className="w-12 h-12" delay={i * 0.3} />
            ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
                <div className="mb-20">
                    <FloralWreath className="w-24 h-24 mx-auto text-[#C9A0A0] opacity-60 mb-8" />
                    <h2 className="text-4xl md:text-6xl font-script mb-6 text-[#4A4A4A]">
                        We look forward to celebrating with you
                    </h2>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#9DC183] to-transparent mx-auto mb-8" />
                    <p className="text-2xl md:text-3xl text-[#C9A0A0] font-serif italic">Save the Date</p>
                    <p className="text-lg text-[#6B6B6B] mt-2 font-serif uppercase tracking-widest">February 14, 2026</p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex justify-center items-center gap-4 mt-16"
                >
                    <Rose className="w-6 h-6 text-[#9DC183] opacity-50" />
                    <p className="text-xs text-[#9DC183] uppercase tracking-[0.3em]">#BishwasWedsShruti2026</p>
                    <Rose className="w-6 h-6 text-[#9DC183] opacity-50 transform scale-x-[-1]" />
                </motion.div>
            </FadeIn>
        </div>
    </footer>
);

export function WeddingInvitation() {
    return (
        <div className="w-full bg-[#FFFFF0] overflow-x-hidden">
            <HeroSection />
            <FamilySection />
            <EventDetailsSection />
            <NoteSection />
            <FooterSection />
        </div>
    );
}
