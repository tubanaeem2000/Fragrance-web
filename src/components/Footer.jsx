import { CONTACT_EMAIL, SOCIAL_LINKS, WHATSAPP_DISPLAY, waLink } from '../config'
import { scrollToId } from '../hooks'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'fragrance', label: 'Fragrance' },
  { id: 'contact', label: 'Contact' },
]

const socials = [
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon },
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
]

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-[#070505] pb-10 pt-20">
      <div className="container-lux">
        <div className="grid gap-12 text-center md:grid-cols-[1.4fr_1fr_1fr] md:text-left">
          <div>
            <p className="font-serif text-4xl text-cream">Musk <em className="text-gold">e</em> Dil</p>
            <p className="mt-3 font-serif text-lg italic text-cream-dim">“A Fragrance That Touches The Heart”</p>
            <div className="mt-7 flex justify-center gap-3 md:justify-start">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href === '#' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onClick={href === '#' ? (e) => e.preventDefault() : undefined}
                  aria-label={`Musk e Dil on ${label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream-dim transition-all duration-500 hover:border-gold hover:text-gold"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Explore</p>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollToId(l.id) }} className="text-sm text-cream-dim transition-colors hover:text-cream">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-cream-dim transition-colors hover:text-cream">WhatsApp: {WHATSAPP_DISPLAY}</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-cream-dim transition-colors hover:text-cream">{CONTACT_EMAIL}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-8 text-[11px] tracking-[0.12em] text-cream-mute md:flex-row">
          <p>© 2026 Musk e Dil. All Rights Reserved.</p>
          <p>All orders are confirmed personally on WhatsApp</p>
        </div>
      </div>
    </footer>
  )
}
