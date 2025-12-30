import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { WatercolorWash, FloralWreath } from '../decorative/BotanicalIllustrations';
import { Diya } from '../decorative/Diya';
import { FadeIn, ParallaxElement } from '../decorative/AnimationWrappers';

const MarigoldAccent = ({ className = '' }) => (
    <svg viewBox="0 0 40 40" className={className} fill="none">
        <circle cx="20" cy="20" r="12" fill="#FF9933" opacity="0.8" />
        <circle cx="20" cy="20" r="8" fill="#FFD700" opacity="0.9" />
        <circle cx="20" cy="20" r="4" fill="#FF9933" />
        {[...Array(8)].map((_, i) => {
            const angle = i * Math.PI * 2 / 8;
            const x = 20 + 10 * Math.cos(angle);
            const y = 20 + 10 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="2" fill="#FFD700" opacity="0.6" />;
        })}
    </svg>
);

export const EventDetailsSection = () => (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#F0F5F0] to-[#FFFFF0] overflow-hidden">
        <ParallaxElement offset={-50} className="absolute inset-0 pointer-events-none">
            <WatercolorWash variant="green" className="absolute top-0 right-0 w-full h-full opacity-20 transform rotate-180" />
        </ParallaxElement>

        <div className="absolute top-12 left-12 opacity-10 pointer-events-none hidden md:block">
            <FloralWreath className="w-32 h-32 text-[#C9A0A0]" />
        </div>
        <div className="absolute bottom-12 right-12 opacity-10 pointer-events-none hidden md:block">
            <FloralWreath className="w-32 h-32 text-[#C9A0A0]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
            <FadeIn className="text-center mb-20">
                <h2 className="text-6xl md:text-7xl text-[#8B7355] font-script mb-6">Join Us in Celebration</h2>
                <div className="flex justify-center items-center gap-6 mb-4">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                        <MarigoldAccent className="w-10 h-10" />
                    </motion.div>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
                </div>
                <p className="text-[#6B6B6B] text-lg font-serif italic">As they begin a new journey together filled with love, respect, and togetherness</p>
            </FadeIn>

            <FadeIn delay={0.3}>
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#FFD700]/20 via-[#FF9933]/10 to-[#C9A0A0]/20 rounded-[3rem] blur-2xl" />
                    <div className="relative bg-gradient-to-br from-white via-[#FFF8E7]/80 to-white backdrop-blur-xl p-12 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(139,115,85,0.15)] border-2 border-[#FFD700]/30 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFD700] via-[#FF9933] to-[#FFD700]" />
                        <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#FFD700]/40 rounded-tl-3xl" />
                        <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[#FFD700]/40 rounded-tr-3xl" />
                        <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[#FFD700]/40 rounded-bl-3xl" />
                        <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#FFD700]/40 rounded-br-3xl" />

                        <div className="text-center mb-12 pb-12 border-b-2 border-dashed border-[#FFD700]/30 relative">
                            <div className="flex justify-center items-center gap-3 mb-4">
                                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#FFD700]/50" />
                                <Calendar className="w-5 h-5 text-[#FFD700]" />
                                <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#FFD700]/50" />
                            </div>
                            <h3 className="text-3xl font-script text-[#8B7355] mb-4">When</h3>
                            <p className="text-2xl font-serif text-[#6B6B6B] mb-2">Saturday</p>
                            <p className="text-5xl md:text-6xl font-script text-[#C9A0A0] my-3 drop-shadow-sm">14th February</p>
                            <p className="text-3xl font-serif text-[#8B7355]">2026</p>
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                                <MarigoldAccent className="w-6 h-6 opacity-60" />
                            </div>
                        </div>

                        <div className="text-center relative">
                            <div className="flex justify-center items-center gap-3 mb-4">
                                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#FFD700]/50" />
                                <MapPin className="w-5 h-5 text-[#FFD700]" />
                                <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#FFD700]/50" />
                            </div>
                            <h3 className="text-3xl font-script text-[#8B7355] mb-4">Where</h3>
                            <p className="text-4xl md:text-5xl font-script text-[#C9A0A0] mb-4 drop-shadow-sm">Indreni Function Center</p>
                            <div className="max-w-md mx-auto">
                                <p className="text-xl text-[#6B6B6B] font-serif leading-relaxed">588 Princes Highway, Rockdale</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-6">
                            <Diya className="w-12 h-12" delay={0.9} />
                            <Diya className="w-12 h-12" delay={1.1} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFD700] via-[#FF9933] to-[#FFD700]" />
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);
