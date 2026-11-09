export const MusicIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

export const VolumeMuteIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);

export const VolumeUpIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

export const CalendarIcon = ({ className = 'w-4 h-4 text-[#832232]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const PinIcon = ({ className = 'w-4 h-4 text-[#832232]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

export const HeartIcon = ({ className = 'w-4 h-4 text-[#e11d48]', fill = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="0.5">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const BlessingIcon = ({ className = 'w-4 h-4 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-.3 0-.6.1-.8.4L8.5 6.2c-.3.4-.3.9-.1 1.3l2.8 5.6V20c0 1.1.9 2 2 2s2-.9 2-2v-6.9l2.8-5.6c.2-.4.2-.9-.1-1.3L15.3 2.4c-.2-.3-.5-.4-.8-.4h-2.5z M10.5 8.5L12 4.8l1.5 3.7-1.5 3-1.5-3z" />
  </svg>
);

export const ClockIcon = ({ className = 'w-3.5 h-3.5 text-[#832232]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const FamilyIcon = ({ className = 'w-5 h-5 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="9" cy="8" r="3" />
    <path d="M4 17c0-2.2 2.2-4 5-4s5 1.8 5 4v1H4v-1z" />
    <circle cx="16" cy="10" r="2.5" />
    <path d="M15 15.5c1.4.3 3 .9 3 2.5v1h-4.5v-1c0-.9-.5-1.7-1.3-2.1.9-.3 1.9-.4 2.8-.4z" />
  </svg>
);

export const CameraIcon = ({ className = 'w-5 h-5 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const LotusIcon = ({ className = 'w-5 h-5 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3c-1.5 3-3 6.5-3 9.5 0 2.5 1.3 4.5 3 4.5s3-2 3-4.5C15 9.5 13.5 6 12 3z" />
    <path d="M5.5 10c0 4 2.5 6.5 5 7-1.5-1.5-2.5-3.5-2.5-5.5 0-1.8.6-3.2 1.3-4.5-2.2 1-3.8 2.5-3.8 4z" opacity="0.8" />
    <path d="M18.5 10c0-1.5-1.6-3-3.8-4 .7 1.3 1.3 2.7 1.3 4.5 0 2-1 4-2.5 5.5 2.5-.5 5-3 5-7z" opacity="0.8" />
    <path d="M2 17c3.5 0 6.5-1.5 8-3.5-1.2 2.5-4 4.5-8 4.5v-1z" opacity="0.6" />
    <path d="M22 17c-4 0-6.8-2-8-4.5 1.5 2 4.5 3.5 8 3.5v1z" opacity="0.6" />
    <path d="M3 20c4.5.5 9 .5 18 0-4.5 1.5-13.5 1.5-18 0z" />
  </svg>
);

export const HaldiPotIcon = ({ className = 'w-6 h-6 text-[#d97706]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="16" rx="6" ry="5" />
    <ellipse cx="12" cy="11" rx="4" ry="1.5" />
    <path d="M8 11L6 7h3l3 4 3-4h3l-2 4z" fill="#16a34a" />
    <circle cx="12" cy="7" r="3" fill="#92400e" />
    <path d="M6 20h12v1H6z" />
  </svg>
);

export const MehndiHandIcon = ({ className = 'w-6 h-6 text-[#9d174d]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2.5c-.8 0-1.5.7-1.5 1.5v6.5h-1V1c-.8 0-1.5.7-1.5 1.5v8h-1V3.5C8 2.7 7.3 2 6.5 2S5 2.7 5 3.5v9c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5V7.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3h-1V4c0-.8-.7-1.5-1.5-1.5S13 3.2 13 4v-1.5z" />
  </svg>
);

export const SangeetDandiyaIcon = ({ className = 'w-6 h-6 text-[#7c3aed]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <line x1="4" y1="20" x2="18" y2="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="6" y1="4" x2="20" y2="20" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="12" cy="7" r="2" fill="#ec4899" />
    <circle cx="12" cy="17" r="2" fill="#ec4899" />
  </svg>
);

export const WeddingAgniIcon = ({ className = 'w-6 h-6 text-[#ea580c]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-.5 2.5-3 5-3 8 0 3 2.2 5 5 5 2.5 0 4.5-1.8 4.5-4.2C18.5 7 14 5 12 2z" fill="#f59e0b" />
    <path d="M12 8c-.3 1.5-1.8 3-1.8 4.5 0 1.8 1.3 3 3 3 1.5 0 2.8-1.2 2.8-2.5C16 11 13 10 12 8z" fill="#ef4444" />
    <polygon points="4,18 20,18 18,22 6,22" fill="#78350f" />
    <rect x="2" y="17" width="20" height="2" rx="1" fill="#b45309" />
  </svg>
);

export const ReceptionGlassesIcon = ({ className = 'w-6 h-6 text-[#d97706]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 3l3 6v5H8v2h4v-2h-1V9l3-6H7zm7.5 2.5l1.5-2.5h5l-3 6v5h2v2h-4v-2h1V9l-2.5-3.5z" />
  </svg>
);

export const UsersIcon = ({ className = 'w-4 h-4 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const ChatBubbleIcon = ({ className = 'w-4 h-4 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
  </svg>
);

export const InfinityIcon = ({ className = 'w-4 h-4 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.178 8c5.096 0 5.096 8 0 8-2.695 0-4.758-2.888-6.178-5-1.42 2.112-3.483 5-6.178 5-5.096 0-5.096-8 0-8 2.695 0 4.758 2.888 6.178 5 1.42-2.112 3.483-5 6.178-5z" />
  </svg>
);

export const HangerIcon = ({ className = 'w-5 h-5 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v2" />
    <path d="M3 17l9-8 9 8H3z" />
  </svg>
);

export const CarIcon = ({ className = 'w-6 h-6 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
    <circle cx="7.5" cy="14.5" r="1.5" />
    <circle cx="16.5" cy="14.5" r="1.5" />
  </svg>
);

export const TrainIcon = ({ className = 'w-6 h-6 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.5 0 6 .4 6 2H6c0-1.6 2.5-2 6-2zm6 11.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V9h12v6.5z" />
    <circle cx="8.5" cy="13.5" r="1.5" />
    <circle cx="15.5" cy="13.5" r="1.5" />
  </svg>
);

export const PlaneIcon = ({ className = 'w-6 h-6 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

export const GiftIcon = ({ className = 'w-5 h-5 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

export const InstagramIcon = ({ className = 'w-4 h-4 text-white' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const WhatsAppIcon = ({ className = 'w-4 h-4 text-white' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.67-1.39 1.29-1.92 1.37-.5.08-1.14.12-3.32-.78-2.61-1.08-4.3-3.71-4.43-3.89-.13-.17-1.06-1.41-1.06-2.69s.67-1.91.91-2.17c.24-.26.53-.33.71-.33.18 0 .36 0 .52.01.17.01.4.06.62.53.24.52.82 2 .89 2.15.07.15.12.33.02.53-.1.19-.15.31-.3.48-.15.18-.32.39-.46.53-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.05 2.16 1.37 2.47 1.52.31.15.49.13.67-.08.19-.21.79-.92 1-1.24.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.77-.16 1.44z" />
  </svg>
);

export const EnvelopeIcon = ({ className = 'w-5 h-5 text-[#b8741a]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const CopyIcon = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
