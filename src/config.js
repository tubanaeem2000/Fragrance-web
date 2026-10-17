// =====================================================================
//  MUSK E DIL — STORE SETTINGS
//  Everything you'll want to change lives in this one file.
// =====================================================================

import velvetOudBottle from './assets/velvet-oud-bottle.jpg'
import slideVelvetOudMan from './assets/slide-velvet-oud-man.jpg'
import slideMidnightSmoke from './assets/slide-midnight-desire-smoke.jpg'
import slideMidnightMirror from './assets/slide-midnight-desire-mirror.jpg'
import slideIceRushSpray from './assets/slide-ice-rush-spray.jpg'
import slideDarkObsession from './assets/slide-dark-obsession.jpg'
import slideSignatureTeal from './assets/slide-signature-teal.jpg'
import slideSignatureSpray from './assets/slide-signature-spray.jpg'
import packaging from './assets/packaging.jpg'
import collection from './assets/collection.jpg'
import darkObsession from './assets/dark-obsession.jpg'
import iceRush from './assets/ice-rush.jpg'
import midnightDesire from './assets/midnight-desire.jpg'

// ---- PRICE (in PKR). Set your real price here, e.g. 3500 ----------------
// While this is 0 the site shows "Price on request" and the WhatsApp
// order says the price is to be confirmed.
export const PRODUCT_PRICE = 0

// ---- CONTACT -------------------------------------------------------------
export const WHATSAPP_NUMBER = '923167897838' // international format, no + or spaces
export const WHATSAPP_DISPLAY = '+92 316 7897838'
export const CONTACT_EMAIL = 'muskedil78@gmail.com'

// ---- SOCIAL (replace '#' with your real profile links) -------------------
export const SOCIAL_LINKS = {
  instagram: '#',
  tiktok: '#',
  facebook: '#',
}

// ---- PRODUCT -------------------------------------------------------------
export const product = {
  id: 'velvet-oud-50',
  brand: 'Musk e Dil',
  name: 'Musk e Dil – Velvet Oud',
  shortName: 'Velvet Oud',
  size: '50ml',
  price: PRODUCT_PRICE,
  image: velvetOudBottle,
  gallery: [
    { src: velvetOudBottle, pos: '50% 45%', alt: 'Musk e Dil Velvet Oud 50ml black bottle on a dark stone plinth' },
    { src: slideVelvetOudMan, pos: '42% 50%', alt: 'A man in a suit holding a bottle of Musk e Dil Velvet Oud' },
    { src: packaging, pos: '50% 50%', alt: 'Musk e Dil gift box lined with ivory satin' },
  ],
}

// Other photography used around the page
export const images = { velvetOudBottle, packaging, collection }

// ---- HERO CAROUSEL ---------------------------------------------------------
// Add, remove or reorder slides here.
//   focus  – which part of the photo to keep in view (CSS object-position)
//   shift  – desktop only: nudges the photo right (in %) so the text on the
//            left doesn't cover the bottle; the left edge fades into black
//   action – 'shop' (Velvet Oud buttons) or 'enquire' (WhatsApp enquiry)
export const slides = [
  { src: slideMidnightSmoke, focus: '50% 50%', shift: 18, name: 'Midnight Desire', line: 'Wrapped in smoke, made for the night.', action: 'enquire',
    alt: 'Musk e Dil Midnight Desire bottle surrounded by drifting smoke' },
  { src: slideIceRushSpray, focus: '28% 50%', shift: 30, name: 'Ice Rush', line: 'A soft mist, a lasting memory.', action: 'enquire',
    alt: 'A woman spraying Musk e Dil Ice Rush on her neck' },
  { src: slideVelvetOudMan, focus: '42% 50%', shift: 18, name: 'Velvet Oud', line: 'Where every spray leaves a lasting impression.', action: 'shop',
    alt: 'A man in a suit holding Musk e Dil Velvet Oud close' },
  { src: slideDarkObsession, focus: '45% 40%', shift: 26, name: 'Dark Obsession', line: 'Bold, dark and impossible to ignore.', action: 'enquire',
    alt: 'A man in a tailored jacket spraying Musk e Dil Dark Obsession' },
  { src: slideSignatureTeal, focus: '52% 50%', shift: 16, name: 'Musk e Dil', line: 'A Fragrance That Touches The Heart.', action: 'shop',
    alt: 'A woman resting her hand on a Musk e Dil bottle on a mirrored table' },
  { src: slideMidnightMirror, focus: '66% 50%', shift: 8, name: 'Midnight Desire', line: 'Elegance, reflected.', action: 'enquire',
    alt: 'A woman in a gold metallic top beside Musk e Dil Midnight Desire on a mirror' },
  { src: slideSignatureSpray, focus: '58% 50%', shift: 10, name: 'Made to Be Remembered', line: 'A fragrance that is not only felt… but remembered.', action: 'shop',
    alt: 'A hand spraying a Musk e Dil bottle beside a dark suit' },
]

// The rest of the house — shown as a small "enquire" gallery
export const house = [
  { name: 'Dark Obsession', image: darkObsession },
  { name: 'Midnight Desire', image: midnightDesire },
  { name: 'Ice Rush', image: iceRush },
]

// ---- HELPERS -------------------------------------------------------------
export const formatPrice = (n) =>
  n > 0 ? `Rs. ${Number(n).toLocaleString('en-PK')}` : 'Price on request'

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`
