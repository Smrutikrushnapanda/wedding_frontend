'use client';

import React, { useState, useEffect, useRef } from 'react';
import FallingHearts from '@/components/FallingHearts';
import BackgroundDecor from '@/components/BackgroundDecor';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import CountdownSection from '@/components/CountdownSection';
import OurStorySection from '@/components/OurStorySection';
import CelebrationsSection from '@/components/CelebrationsSection';
import FamiliesSection from '@/components/FamiliesSection';
import MemoriesSection from '@/components/MemoriesSection';
import RitualsSection from '@/components/RitualsSection';
import JourneySection from '@/components/JourneySection';
import DressCodeSection from '@/components/DressCodeSection';
import VenueSection from '@/components/VenueSection';
import ReachSection from '@/components/ReachSection';
import ShareJoySection from '@/components/ShareJoySection';
import RsvpSection from '@/components/RsvpSection';
import FooterSection from '@/components/FooterSection';
import StickyNav from '@/components/StickyNav';

export default function WeddingPage() {
  // Screen audio state & Video sound coordination - On by default
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoMuteTrigger, setVideoMuteTrigger] = useState(0);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const synthTimerRef = useRef(null);

  // Auto-play on mount, with fallback on first touch/interaction if browser blocks unprompted audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;

    const tryPlay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay policy prevented immediate playback; resume on first user gesture
            const resumeAudio = () => {
              audio.play().then(() => {
                setIsPlaying(true);
              }).catch(() => {});
              window.removeEventListener('click', resumeAudio);
              window.removeEventListener('touchstart', resumeAudio);
              window.removeEventListener('scroll', resumeAudio);
            };

            window.addEventListener('click', resumeAudio, { once: true });
            window.addEventListener('touchstart', resumeAudio, { once: true });
            window.addEventListener('scroll', resumeAudio, { once: true });
          });
      }
    };

    tryPlay();
  }, []);

  // When video un-mutes, automatically mute screen background music
  const handleVideoSoundActive = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
      stopSynthChime();
    }
  };

  // Love & Blessings celebration counts & animations
  const [loveCount, setLoveCount] = useState(128);
  const [blessingCount, setBlessingCount] = useState(94);
  const [fallingItems, setFallingItems] = useState([]);

  // Video state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState('00:00');

  // Story modal state
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Carousel & Lightbox state
  const carouselRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Hashtag copied indicator
  const [copiedHashtag, setCopiedHashtag] = useState(false);

  // Target countdown: 24 Feb 2027, 18:30 IST (UTC+5:30)
  const [timeLeft, setTimeLeft] = useState({
    days: '112',
    hours: '14',
    mins: '26',
    secs: '08',
  });

  useEffect(() => {
    const targetDate = new Date('2027-02-24T18:30:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((difference / 1000 / 60) % 60);
      const secs = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        mins: mins.toString().padStart(2, '0'),
        secs: secs.toString().padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Web Audio fallback wedding melody
  const startSynthChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 440.0, 392.0];
      let noteIndex = 0;

      const playNext = () => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(notes[noteIndex], ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.3);

        noteIndex = (noteIndex + 1) % notes.length;
        synthTimerRef.current = setTimeout(playNext, 1100);
      };

      playNext();
    } catch {
      // Handled silently
    }
  };

  const stopSynthChime = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
      stopSynthChime();
    } else {
      // Mute video sound when background screen audio is played
      setVideoMuteTrigger((c) => c + 1);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          startSynthChime();
        });
      } else {
        startSynthChime();
      }
    }
  };

  const triggerCelebration = (type) => {
    if (type === 'love') setLoveCount((c) => c + 1);
    if (type === 'blessing') setBlessingCount((c) => c + 1);

    const newItems = Array.from({ length: 18 }).map((_, idx) => ({
      id: Date.now() + idx + Math.random(),
      type: type,
      variant: Math.floor(Math.random() * 5),
      left: Math.random() * 88 + 6,
      size: Math.random() * 10 + 16,
      duration: Math.random() * 2 + 3.2,
      delay: Math.random() * 0.5,
    }));

    setFallingItems((prev) => [...prev.slice(-24), ...newItems]);

    setTimeout(() => {
      setFallingItems((prev) => prev.filter((item) => !newItems.some((n) => n.id === item.id)));
    }, 4500);
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
    setVideoTime(!isVideoPlaying ? '00:32' : '00:00');
  };

  const handleCopyHashtag = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText('#AdityaWedsSubhashree');
      setCopiedHashtag(true);
      setTimeout(() => setCopiedHashtag(false), 2200);
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -180 : 180;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f8dbe3] via-[#fcebf0] to-[#f7d6e0] p-0 sm:py-6 sm:px-4">
      {/* Luxury Mobile Frame Wrapper (Active on desktop sm+, native full-bleed on mobile) */}
      <div className="w-full max-w-[430px] relative sm:rounded-[54px] sm:p-3 sm:bg-gradient-to-b sm:from-[#2e141e] sm:to-[#180910] sm:shadow-[0_25px_80px_rgba(140,30,60,0.38),0_0_0_3px_#e7b878,0_0_0_9px_#2e141e,0_0_0_11px_#dfa96c]">
        {/* Dynamic Island Pill Notch (Desktop sm+ only) */}
        <div className="hidden sm:flex justify-center items-center absolute top-5 inset-x-0 z-50 pointer-events-none">
          <div className="w-26 h-5.5 bg-black rounded-full flex items-center justify-between px-3 shadow-md border border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] ring-1 ring-[#2c2c2e]" />
            <div className="w-2 h-2 rounded-full bg-[#0a1526]/80 ring-1 ring-[#1b2a47]" />
          </div>
        </div>

        {/* Screen Container */}
        <main
          id="phone-screen"
          className="w-full min-h-screen sm:min-h-0 sm:h-[860px] sm:max-h-[92vh] sm:overflow-y-auto sm:rounded-[42px] relative bg-gradient-to-b from-[#fef5f7] via-[#fde8ef] to-[#fce4eb] shadow-2xl overflow-x-hidden pb-0 selection:bg-rose-200 no-scrollbar"
        >
          <audio ref={audioRef} src="/audio/The Love Bug Has Bitten (Background Score).mp3" loop autoPlay preload="auto" />

          {/* Floating Particles Overlay */}
          <FallingHearts items={fallingItems} />

          {/* Borders & Top Lantern Garland */}
          <BackgroundDecor />

          {/* Left Sticky Circle Navigation with smooth scroll & open/close toggle */}
          <StickyNav />

      {/* 1. Hero Section */}
      <HeroSection
        isPlaying={isPlaying}
        onToggleMusic={toggleMusic}
        loveCount={loveCount}
        blessingCount={blessingCount}
        onSendLove={() => triggerCelebration('love')}
        onSendBlessings={() => triggerCelebration('blessing')}
      />

      {/* 2. Live Video Card */}
      <VideoSection
        isMuteRequested={videoMuteTrigger}
        onVideoSoundActive={handleVideoSoundActive}
      />

      {/* 3. The Big Day In (Countdown) */}
      <CountdownSection timeLeft={timeLeft} />

      {/* 4. Our Story */}
      <OurStorySection
        isStoryModalOpen={isStoryModalOpen}
        onOpenStoryModal={() => setIsStoryModalOpen(true)}
        onCloseStoryModal={() => setIsStoryModalOpen(false)}
      />

      {/* 5. Wedding Celebrations Timeline */}
      <CelebrationsSection />

      {/* 6. Meet the Families */}
      <FamiliesSection />

      {/* 7. Our Memories Carousel */}
      <MemoriesSection
        carouselRef={carouselRef}
        selectedPhoto={selectedPhoto}
        onSelectPhoto={setSelectedPhoto}
        onClosePhoto={() => setSelectedPhoto(null)}
        onScrollCarousel={scrollCarousel}
      />

      {/* 8. Wedding Rituals */}
      <RitualsSection />

      {/* 9. A Peek into Our Journey */}
      <JourneySection />

      {/* 10. Dress Code */}
      <DressCodeSection />

      {/* 11. Wedding Venue */}
      <VenueSection />

      {/* 12. How to Reach */}
      <ReachSection />

      {/* 13. Share the Joy */}
      <ShareJoySection
        copiedHashtag={copiedHashtag}
        onCopyHashtag={handleCopyHashtag}
      />

      {/* 15. RSVP */}
      <RsvpSection />

      {/* 16. Footer */}
      <FooterSection />
    </main>

    {/* Home Indicator Bar (Desktop sm+ only) */}
    <div className="hidden sm:block absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-50 pointer-events-none" />
  </div>
</div>
  );
}
