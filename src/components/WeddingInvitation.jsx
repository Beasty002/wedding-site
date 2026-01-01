import { useState, useRef } from 'react';
import { HeroSection } from './sections/HeroSection';
import { FamilySection } from './sections/FamilySection';
import { EventDetailsSection } from './sections/EventDetailsSection';
import { NoteSection } from './sections/NoteSection';
import { FooterSection } from './sections/FooterSection';
import { MusicPlayer } from './decorative/MusicPlayer';
import { EntranceOverlay } from './decorative/EntranceOverlay';

export function WeddingInvitation() {
    const [hasEntered, setHasEntered] = useState(false);
    const audioRef = useRef(null);

    const handleEnter = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/wedding.mp3');
            audioRef.current.loop = true;
        }
        audioRef.current.play();
        setHasEntered(true);
    };

    return (
        <div className="w-full bg-[#FFFFF0] overflow-x-hidden">
            {!hasEntered && <EntranceOverlay onEnter={handleEnter} />}
            <MusicPlayer audioRef={audioRef} isInitiallyPlaying={hasEntered} />
            <HeroSection hasEntered={hasEntered} />
            <FamilySection />
            <EventDetailsSection />
            <NoteSection />
            <FooterSection />
        </div>
    );
}
