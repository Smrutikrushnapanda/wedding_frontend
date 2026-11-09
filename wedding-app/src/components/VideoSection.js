'use client';

import React, { useState, useRef, useEffect } from 'react';
import { VolumeMuteIcon, VolumeUpIcon } from './Icons';

export default function VideoSection({ isMuteRequested, onVideoSoundActive }) {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const iframeRef = useRef(null);

  // Helper to send postMessage commands to YouTube Iframe
  const sendYTCommand = (func, args = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func, args }),
        '*'
      );
    }
  };

  // Mute video when screen background music is activated
  useEffect(() => {
    if (isMuteRequested > 0) {
      sendYTCommand('mute');
      setIsVideoMuted(true);
    }
  }, [isMuteRequested]);

  // Toggle video volume
  const handleToggleVolume = () => {
    if (isVideoMuted) {
      // Unmute video with full volume
      sendYTCommand('unMute');
      sendYTCommand('setVolume', [100]);
      setIsVideoMuted(false);
      // Mute website background music so audio does not clash
      if (onVideoSoundActive) {
        onVideoSoundActive();
      }
    } else {
      // Mute video
      sendYTCommand('mute');
      setIsVideoMuted(true);
    }
  };

  return (
    <section id="video" className="px-5 my-3 relative z-10">
      <div className="wedding-card p-1.5 overflow-hidden shadow-[0_6px_20px_rgba(235,160,180,0.25)]">
        <div className="relative rounded-[14px] overflow-hidden bg-black aspect-[16/9] shadow-inner">
          <iframe
            ref={iframeRef}
            className="w-full h-full border-0"
            src="https://www.youtube.com/embed/DC6ZzRimnYs?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=DC6ZzRimnYs&playsinline=1&controls=0&rel=0&modestbranding=1"
            title="Wedding Celebration Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          {/* Top-Right: Live Indicator Badge */}
          <div className="pointer-events-none absolute top-2.5 right-2.5 bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md z-10 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>Live</span>
          </div>

          {/* Bottom-Right: Sleek Modern Volume Toggle Button */}
          <button
            onClick={handleToggleVolume}
            aria-label={isVideoMuted ? 'Unmute Video' : 'Mute Video'}
            className="absolute bottom-2.5 right-2.5 z-20 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-white border border-white/25 shadow-lg flex items-center gap-1.5 active:scale-90 transition-all text-xs font-sans hover:bg-black/80 cursor-pointer"
          >
            {isVideoMuted ? (
              <>
                <VolumeMuteIcon className="w-3.5 h-3.5 text-white/90" />
                <span className="text-[11px] font-medium tracking-tight">Unmute</span>
              </>
            ) : (
              <>
                <VolumeUpIcon className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
                <span className="text-[11px] font-medium tracking-tight text-rose-200">Sound On</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
