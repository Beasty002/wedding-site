import { HeroSection } from './sections/HeroSection';
import { FamilySection } from './sections/FamilySection';
import { EventDetailsSection } from './sections/EventDetailsSection';
import { NoteSection } from './sections/NoteSection';
import { FooterSection } from './sections/FooterSection';

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
