import { motion } from 'framer-motion';
import { Rose, FloralWreath, FloatingPetal } from '../decorative/BotanicalIllustrations';
import { Diya } from '../decorative/Diya';
import { FadeIn } from '../decorative/AnimationWrappers';

const PetalBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(35)].map((_, i) => (
            <FloatingPetal key={i} className="absolute w-4 h-4 md:w-6 md:h-6" delay={i * 0.5} color={i % 3 === 0 ? '#FFB7C5' : i % 3 === 1 ? '#FFE4E1' : '#E6E6FA'} style={{ left: `${Math.random() * 100}%`, top: -50 }} />
        ))}
    </div>
);

export const FooterSection = () => (
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
                    <h2 className="text-4xl md:text-6xl font-script mb-6 text-[#4A4A4A]">We look forward to celebrating with you</h2>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#9DC183] to-transparent mx-auto mb-8" />
                    <p className="text-2xl md:text-3xl text-[#C9A0A0] font-serif italic">Save the Date</p>
                    <p className="text-lg text-[#6B6B6B] mt-2 font-serif uppercase tracking-widest">February 14, 2026</p>
                </div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="flex justify-center items-center gap-4 mt-16">
                    <Rose className="w-6 h-6 text-[#9DC183] opacity-50" />
                    <p className="text-xs text-[#9DC183] uppercase tracking-[0.3em]">#BishwasWedsShruti2026</p>
                    <Rose className="w-6 h-6 text-[#9DC183] opacity-50 transform scale-x-[-1]" />
                </motion.div>
            </FadeIn>
        </div>
    </footer>
);
