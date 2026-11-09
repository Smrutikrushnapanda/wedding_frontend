'use client';

import React, { useState, useRef, useEffect } from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';
import { CameraIcon, CopyIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import ModalPortal from './ModalPortal';

export default function ShareJoySection({ copiedHashtag, onCopyHashtag }) {
  const [isRecordingModalOpen, setIsRecordingModalOpen] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordSecondsLeft, setRecordSecondsLeft] = useState(10);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const [guestName, setGuestName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [cameraError, setCameraError] = useState(null);

  const videoPreviewRef = useRef(null);
  const recordedPlaybackRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const timerIntervalRef = useRef(null);
  const fileInputRef = useRef(null);

  const stopCameraStream = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    setIsCameraActive(false);
    setIsRecording(false);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  const startCamera = async () => {
    setCameraError(null);
    setRecordedVideoUrl(null);
    setUploadSuccess(false);
    try {
      if (!navigator?.mediaDevices?.getUserMedia) {
        throw new Error('Camera not supported');
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 1280 } },
        audio: true,
      });
      mediaStreamRef.current = stream;
      setIsCameraActive(true);
      if (videoPreviewRef.current) {
        videoPreviewRef.current.srcObject = stream;
        videoPreviewRef.current.play().catch(() => {});
      }
    } catch {
      setCameraError('Camera access unavailable. You can upload an existing video below!');
    }
  };

  const handleOpenRecorder = () => {
    setIsRecordingModalOpen(true);
    setUploadSuccess(false);
    setRecordedVideoUrl(null);
    startCamera();
  };

  const handleCloseRecorder = () => {
    stopCameraStream();
    setIsRecordingModalOpen(false);
    if (recordedVideoUrl && recordedVideoUrl.startsWith('blob:')) {
      URL.revokeObjectURL(recordedVideoUrl);
    }
  };

  const startRecording = () => {
    if (!mediaStreamRef.current) return;
    recordedChunksRef.current = [];
    setRecordSecondsLeft(10);
    setIsRecording(true);

    try {
      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
        ? 'video/webm;codecs=vp9'
        : MediaRecorder.isTypeSupported('video/webm')
        ? 'video/webm'
        : 'video/mp4';

      const recorder = new MediaRecorder(mediaStreamRef.current, { mimeType });
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          recordedChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        setRecordedVideoUrl(url);
        stopCameraStream();
      };

      recorder.start();

      let seconds = 10;
      timerIntervalRef.current = setInterval(() => {
        seconds -= 1;
        setRecordSecondsLeft(seconds);
        if (seconds <= 0) {
          clearInterval(timerIntervalRef.current);
          if (recorder.state !== 'inactive') {
            recorder.stop();
          }
          setIsRecording(false);
        }
      }, 1000);
    } catch {
      setIsRecording(false);
      setCameraError('Recording failed. Please try file upload.');
    }
  };

  const stopRecordingEarly = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setRecordedVideoUrl(url);
      stopCameraStream();
      setIsCameraActive(false);
      setIsRecordingModalOpen(true);
    }
  };

  const handleSubmitBlessing = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setGuestName('');
      setGuestMessage('');
    }, 1200);
  };

  useEffect(() => {
    return () => {
      stopCameraStream();
      if (recordedVideoUrl && recordedVideoUrl.startsWith('blob:')) {
        URL.revokeObjectURL(recordedVideoUrl);
      }
    };
  }, []);

  return (
    <section id="share" className="px-4 my-5 relative z-10">
      <SwirlHeader title="Share the Joy" icon={<CameraIcon className="w-5 h-5 text-[#b8741a]" />} />

      {/* Ornate Luxury Card Matching Reference Screenshot 100% */}
      <div className="relative p-4 rounded-[26px] bg-gradient-to-b from-[#fffefe]/95 via-[#fff9fa]/95 to-[#fff2f5]/95 border-2 border-[#e7b878]/80 shadow-[0_6px_24px_rgba(235,160,180,0.22)] mt-2">
        {/* Subtle decorative inner border */}
        <div className="absolute inset-1.5 rounded-[20px] border border-[#f0c391]/40 pointer-events-none" />

        <div className="relative z-10 flex items-start justify-between gap-2">
          {/* Left Column: Guestbook Ribbon Badge, Cursive Title, Description */}
          <div className="flex-1 min-w-0 pr-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fde6ed] border border-[#f8cad6] text-[#801c31] font-serif font-bold text-[10.5px] mb-1.5 shadow-2xs">
              <svg className="w-3.5 h-3.5 fill-[#801c31]" viewBox="0 0 24 24">
                <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
              <span>Video Guestbook</span>
            </span>

            <h3 className="font-script text-[23px] sm:text-[25px] leading-tight text-[#78182a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
              Record 10s Video Wish
            </h3>

            <p className="font-serif text-[11px] text-[#3d1620] leading-snug mt-1.5 max-w-[215px]">
              Record a warm 10-second personal video wish or upload from your gallery for the couple!
            </p>
          </div>

          {/* Right Column: Authentic Glossy Floral Clapperboard Play Icon */}
          <div className="w-32 shrink-0 flex items-center justify-center -mr-1 -mt-1 pointer-events-none select-none">
            <SafeImage
              src="/images/Glossy Floral Clapperboard Play Icon.png"
              alt="Video Clapperboard"
              className="w-full h-auto object-contain drop-shadow-[0_6px_16px_rgba(217,72,108,0.22)]"
            />
          </div>
        </div>

        {/* Feature Pills Strip: 10 Seconds | Personal Wish | For the Couple */}
        <div className="relative z-10 w-full bg-[#fff0f4]/85 border border-[#fbd0dc] rounded-full py-1.5 px-3 flex items-center justify-between text-[10.5px] font-serif text-[#6e2030] my-3 select-none">
          <div className="flex-1 flex items-center justify-center gap-1 font-medium">
            <span className="text-[12px]">⏱</span>
            <span>10 Seconds</span>
          </div>
          <div className="w-[1px] h-3.5 bg-[#f5b8c6]" />
          <div className="flex-1 flex items-center justify-center gap-1 font-medium">
            <span className="text-[12px] text-[#e11d48]">♡</span>
            <span>Personal Wish</span>
          </div>
          <div className="w-[1px] h-3.5 bg-[#f5b8c6]" />
          <div className="flex-1 flex items-center justify-center gap-1 font-medium">
            <span className="text-[12px]">👥</span>
            <span>For the Couple</span>
          </div>
        </div>

        {/* Two Pill Buttons: Record Video (10s) and Upload Video */}
        <div className="relative z-10 grid grid-cols-2 gap-2.5">
          <button
            onClick={handleOpenRecorder}
            className="py-2.5 px-3 rounded-full bg-gradient-to-r from-[#d93b68] via-[#e54b77] to-[#ec5580] text-white font-serif font-semibold text-[12px] shadow-[0_3px_12px_rgba(217,59,104,0.32)] active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer select-none"
          >
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
            <span>Record Video (10s)</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="py-2.5 px-3 rounded-full bg-white/95 border border-[#e5a870] text-[#6e2030] font-serif font-semibold text-[12px] shadow-2xs active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer select-none"
          >
            <svg
              className="w-4 h-4 text-[#801c31]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span>Upload Video</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            capture="user"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      {/* Official Hashtag & Social Shares with Golden Leaves */}
      <div className="mt-4 flex flex-col items-center text-center">
        <p className="font-serif text-[11px] text-[#592631] mb-2 font-medium">
          Tag your wedding memories with our official hashtag:
        </p>

        {/* Hashtag Pill Flanked by Delicate Golden Leaf Sprays */}
        <div className="flex items-center justify-center gap-2 select-none">
          {/* Left Golden Leaf Flourish */}
          <svg className="w-6 h-5 text-[#c58428] opacity-85" viewBox="0 0 30 18" fill="currentColor">
            <path d="M2 9 C8 4 16 4 28 9 C16 14 8 14 2 9 Z" opacity="0.3" />
            <path d="M2 9 Q14 7 28 9" stroke="currentColor" strokeWidth="1.4" fill="none" />
            <ellipse cx="8" cy="6" rx="4" ry="2" transform="rotate(-20 8 6)" />
            <ellipse cx="16" cy="5" rx="4" ry="2" transform="rotate(-15 16 5)" />
            <ellipse cx="23" cy="6" rx="3.5" ry="1.8" transform="rotate(-10 23 6)" />
          </svg>

          {/* Hashtag Pill */}
          <div
            onClick={onCopyHashtag}
            className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-white via-[#fff8f6] to-white border border-[#deb86d] text-[#801c31] font-serif font-bold text-[13px] px-5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(222,184,109,0.22)] active:scale-95 transition-transform"
          >
            <span>#AdityaWedsSubhashree</span>
            {copiedHashtag ? (
              <span className="text-xs text-emerald-600 font-bold">✓</span>
            ) : (
              <CopyIcon className="w-3.5 h-3.5 text-[#801c31]" />
            )}
          </div>

          {/* Right Golden Leaf Flourish */}
          <svg className="w-6 h-5 text-[#c58428] opacity-85 transform scale-x-[-1]" viewBox="0 0 30 18" fill="currentColor">
            <path d="M2 9 C8 4 16 4 28 9 C16 14 8 14 2 9 Z" opacity="0.3" />
            <path d="M2 9 Q14 7 28 9" stroke="currentColor" strokeWidth="1.4" fill="none" />
            <ellipse cx="8" cy="6" rx="4" ry="2" transform="rotate(-20 8 6)" />
            <ellipse cx="16" cy="5" rx="4" ry="2" transform="rotate(-15 16 5)" />
            <ellipse cx="23" cy="6" rx="3.5" ry="1.8" transform="rotate(-10 23 6)" />
          </svg>
        </div>

        {/* Social Icons with Divider Line */}
        <div className="flex items-center justify-center gap-3.5 mt-3 select-none">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Share"
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-sm active:scale-95 transition-transform"
          >
            <InstagramIcon className="w-4.5 h-4.5 text-white" />
          </a>

          <div className="w-[1px] h-5 bg-[#deb86d]/60" />

          <a
            href="https://wa.me/?text=Aditya%20%26%20Subhashree%20Wedding%20%23AdityaWedsSubhashree"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Share"
            className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
          </a>
        </div>
      </div>

      {/* Full-Screen Video Recorder Modal - Portalled directly to body to prevent stacking context clipping */}
      <ModalPortal isOpen={isRecordingModalOpen}>
        <div className="w-full h-full bg-black text-white flex flex-col justify-between overflow-hidden select-none">
          {/* Top Bar with Glass Gradient */}
          <div className="relative z-30 pt-5 pb-3 px-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">📹</span>
              <div>
                <h3 className="font-script text-[24px] text-amber-200 leading-none">
                  Record 10s Video Wish
                </h3>
                <p className="font-serif text-[10.5px] text-rose-100/80 leading-none mt-1">
                  For Aditya &amp; Subhashree
                </p>
              </div>
            </div>

            <button
              onClick={handleCloseRecorder}
              aria-label="Close Recorder"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white flex items-center justify-center text-sm font-bold shadow-md active:scale-90 transition-transform cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Full-Screen Camera Viewport */}
          <div className="relative flex-1 w-full bg-black flex items-center justify-center overflow-hidden">
            {!recordedVideoUrl && isCameraActive && (
              <>
                <video
                  ref={videoPreviewRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover transform scale-x-[-1]"
                />

                {isRecording && (
                  <div className="absolute top-4 inset-x-0 flex justify-center z-20">
                    <div className="px-4 py-1.5 rounded-full bg-red-600/95 text-white font-mono text-sm font-bold flex items-center gap-2 shadow-2xl animate-pulse">
                      <span className="w-2.5 h-2.5 rounded-full bg-white" />
                      <span>REC • 00:{recordSecondsLeft.toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                )}

                {!isRecording && (
                  <div className="absolute top-4 inset-x-0 flex justify-center z-20">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-200 text-xs font-serif border border-white/15">
                      ✨ Ready to Record
                    </span>
                  </div>
                )}
              </>
            )}

            {recordedVideoUrl && (
              <video
                ref={recordedPlaybackRef}
                src={recordedVideoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            )}

            {!recordedVideoUrl && !isCameraActive && (
              <div className="text-center p-6 text-white/90 max-w-xs">
                <span className="text-4xl block mb-2">📸</span>
                <p className="font-serif text-sm mb-3">
                  {cameraError || 'Camera initializing...'}
                </p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2 rounded-full bg-rose-600 text-white font-serif text-xs font-bold shadow-md cursor-pointer"
                >
                  Choose From Gallery
                </button>
              </div>
            )}
          </div>

          {/* Bottom Bar Controls */}
          <div className="relative z-30 pb-7 pt-4 px-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
            {!recordedVideoUrl && isCameraActive && (
              <div className="flex flex-col items-center justify-center">
                {!isRecording ? (
                  <button
                    onClick={startRecording}
                    className="w-20 h-20 rounded-full border-4 border-white/90 p-1 flex items-center justify-center active:scale-90 transition-transform cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  >
                    <span className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold" />
                  </button>
                ) : (
                  <button
                    onClick={stopRecordingEarly}
                    className="w-20 h-20 rounded-full border-4 border-white/90 p-1 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                  >
                    <span className="w-10 h-10 rounded-md bg-red-600 shadow-md" />
                  </button>
                )}

                <span className="text-white/80 font-serif text-[11px] mt-2 tracking-wide">
                  {isRecording ? 'Tap to finish recording early' : 'Tap red button to record (10s max)'}
                </span>
              </div>
            )}

            {recordedVideoUrl && !uploadSuccess && (
              <form
                onSubmit={handleSubmitBlessing}
                className="bg-white/95 backdrop-blur-md text-[#333] rounded-[24px] p-4 space-y-2.5 shadow-2xl border border-[#f5d6c6]"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-bold text-[#801c31]">
                    Your Video Blessing is Ready!
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setRecordedVideoUrl(null);
                      startCamera();
                    }}
                    className="text-xs text-rose-600 underline font-serif font-semibold cursor-pointer hover:text-rose-800"
                  >
                    ↺ Retake
                  </button>
                </div>

                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Your Name (e.g. Ramesh Uncle / Simran)"
                  className="w-full px-3 py-2 rounded-xl border border-[#f5d6c6] text-xs font-serif focus:outline-rose-400 bg-white"
                />

                <textarea
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  placeholder="Sweet wish for Aditya & Subhashree (optional)"
                  rows={2}
                  className="w-full px-3 py-1.5 rounded-xl border border-[#f5d6c6] text-xs font-serif focus:outline-rose-400 bg-white resize-none"
                />

                <button
                  type="submit"
                  disabled={isUploading}
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#d93b68] via-[#e54b77] to-[#ec5580] text-white font-serif text-xs font-bold shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isUploading ? (
                    <>
                      <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending Video Blessing...</span>
                    </>
                  ) : (
                    <span>💌 Upload Video Blessing</span>
                  )}
                </button>
              </form>
            )}

            {uploadSuccess && (
              <div className="bg-white text-center rounded-[24px] p-5 shadow-2xl animate-fade-in border border-emerald-300">
                <span className="text-4xl block mb-1">🎉</span>
                <h4 className="font-script text-3xl text-emerald-800">Blessing Received!</h4>
                <p className="font-serif text-xs text-emerald-700 mt-1 max-w-[260px] mx-auto">
                  Thank you for showering Aditya &amp; Subhashree with your warm video love! ❤️
                </p>
                <button
                  onClick={handleCloseRecorder}
                  className="mt-3 px-6 py-2 rounded-full bg-emerald-600 text-white font-serif text-xs font-bold shadow-md cursor-pointer hover:bg-emerald-700"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </ModalPortal>
    </section>
  );
}
