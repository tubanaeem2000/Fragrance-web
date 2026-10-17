// Small brand icons Lucide doesn't ship (WhatsApp, TikTok, Instagram, Facebook)
const base = { width: 18, height: 18, 'aria-hidden': true, focusable: 'false' }

export const WhatsAppIcon = ({ className = '', size = 18 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.3l5.7-1.5a11.3 11.3 0 0 0 5.74 1.47h.01c6.26 0 11.35-5.1 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02z" />
  </svg>
)

export const InstagramIcon = ({ className = '' }) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </svg>
)

export const FacebookIcon = ({ className = '' }) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
    <path d="M14 8h3V4.5h-3a4 4 0 0 0-4 4V11H7v3.5h3V21h3.5v-6.5h3L17 11h-3.5V8.5c0-.3.2-.5.5-.5z" />
  </svg>
)

export const TikTokIcon = ({ className = '' }) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.1 4.3 5 4.6" strokeLinecap="round" />
  </svg>
)

// Thin ornamental mark echoing the bottle logo
export const Crest = ({ className = '' }) => (
  <svg viewBox="0 0 40 28" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-hidden="true">
    <path d="M15 2h10l-3 7h-4z" />
    <path d="M4 14c4 8 28 8 32 0" />
    <path d="M20 12v8" />
  </svg>
)
