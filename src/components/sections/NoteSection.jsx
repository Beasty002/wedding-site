import { Peony } from '../decorative/BotanicalIllustrations';
import { SwayingFlower, FadeIn } from '../decorative/AnimationWrappers';

export const NoteSection = () => (
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
                        With hearts full of gratitude and joy, we warmly invite you to share in one of the most meaningful moments of our lives.
                        Your presence will mean the world to us as we celebrate love, family, and new beginnings.
                    </p>
                    <p>
                        Thank you for being part of our story; we look forward to sharing this special day with you.
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
