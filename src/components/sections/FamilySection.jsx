import { FloralWreath } from '../decorative/BotanicalIllustrations';
import { Diya } from '../decorative/Diya';
import { Ganesh } from '../decorative/Ganesh';
import { FadeIn } from '../decorative/AnimationWrappers';

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

const FamilyCard = ({ name, parents, grandparents, relationship, delay = 0 }) => (
    <FadeIn delay={delay} className="relative h-full">
        <div className="bg-white/70 backdrop-blur-sm p-10 md:p-14 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E6E6FA] relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-700 h-full flex flex-col">
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-60" />
            <div className="absolute top-6 left-6 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                <Ganesh className="w-8 h-8" />
            </div>
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
                                <p className="text-sm text-[#8B7355] font-serif italic mb-3 uppercase tracking-wider opacity-80">Grand-daughter of</p>
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

export const FamilySection = () => (
    <section className="relative py-32 px-4 bg-[#FFFFF0]">
        <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-20">
                <div className="flex justify-center items-center gap-3 mb-6">
                    <Ganesh className="w-6 h-6 opacity-25" />
                    <h2 className="text-5xl md:text-6xl text-[#4A4A4A] font-script">The Families</h2>
                    <Ganesh className="w-6 h-6 opacity-25" />
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
                />
                <FamilyCard
                    name="Miss Shruti Yogi"
                    parents="Bikash Nath Yogi & Amrit Hira Tuladhar Yogi"
                    grandparents="Radha Devi Yogi"
                    relationship="Daughter of"
                    delay={0.4}
                />
            </div>
        </div>
    </section>
);
