import { FloralWreath } from '../decorative/BotanicalIllustrations';
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

const FamilyCard = ({ name, parents, grandparents, relationship, role, delay = 0 }) => (
    <FadeIn delay={delay} className="relative h-full">
        <div className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E6E6FA] relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-700 h-full flex flex-col">
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
                {/* Role Label (Bride/Groom) */}
                <div className="mb-3">
                    <span className="text-xs md:text-sm text-[#C9A0A0] font-serif uppercase tracking-[0.3em] opacity-80">{role}</span>
                </div>
                <h3 className="text-4xl md:text-5xl text-[#4A4A4A] mb-4 font-script leading-tight">{name}</h3>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A0A0] to-transparent" />
                    <MarigoldAccent className="w-6 h-6 opacity-60" />
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A0A0] to-transparent" />
                </div>
                {/* Combined Box for Son/Daughter of and Granddaughter of */}
                <div className={`bg-gradient-to-br from-[#FFF8E7]/50 to-white/30 rounded-2xl p-6 md:p-8 border border-[#E6E6FA]/50 backdrop-blur-sm w-full ${!grandparents ? 'flex-1 flex flex-col justify-center' : ''}`}>
                    <p className="text-sm text-[#8B7355] font-serif italic mb-3 uppercase tracking-wider opacity-80">{relationship}</p>
                    <div className="text-lg md:text-xl text-[#6B6B6B] font-serif leading-relaxed">
                        {parents.split('\n').map((parent, index) => (
                            <p key={index} className="mb-1 last:mb-0">{parent}</p>
                        ))}
                    </div>
                    {grandparents ? (
                        <>
                            <div className="flex items-center justify-center gap-2 my-4">
                                <div className="w-1 h-1 bg-[#FFD700] rounded-full opacity-40" />
                                <div className="w-1 h-1 bg-[#C9A0A0] rounded-full opacity-40" />
                                <div className="w-1 h-1 bg-[#FFD700] rounded-full opacity-40" />
                            </div>
                            <p className="text-sm text-[#8B7355] font-serif italic mb-3 uppercase tracking-wider opacity-80">Grand-daughter of</p>
                            <p className="text-lg md:text-xl text-[#6B6B6B] font-serif">{grandparents}</p>
                            <div className="flex items-center justify-center gap-3 mt-4">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A0A0]/40 to-transparent" />
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-[#C9A0A0] rounded-full opacity-50" />
                                    <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50" />
                                    <div className="w-1.5 h-1.5 bg-[#C9A0A0] rounded-full opacity-50" />
                                </div>
                                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A0A0]/40 to-transparent" />
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center gap-3 my-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A0A0]/40 to-transparent" />
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 bg-[#C9A0A0] rounded-full opacity-50" />
                                <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50" />
                                <div className="w-1.5 h-1.5 bg-[#C9A0A0] rounded-full opacity-50" />
                            </div>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A0A0]/40 to-transparent" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </FadeIn>
);

export const FamilySection = () => (
    <section className="relative py-16 md:py-20 px-4 bg-[#FFFFF0]">
        <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-10 md:mb-12">
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

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                <FamilyCard
                    name="Bishwas Rajbhandari"
                    role="Groom"
                    parents={"Bibek Rajbhandari\nYamuna Rajbhandari"}
                    relationship="Son of"
                    delay={0.2}
                />
                <FamilyCard
                    name="Shruti Yogi"
                    role="Bride"
                    parents={"Bikash Nath Yogi\nAmrit Hira Tuladhar Yogi"}
                    grandparents="Radha Devi Yogi"
                    relationship="Daughter of"
                    delay={0.4}
                />
            </div>
        </div>
    </section>
);
