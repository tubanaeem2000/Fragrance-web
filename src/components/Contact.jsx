import { Mail } from 'lucide-react'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, waLink } from '../config'
import { WhatsAppIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(60%_60%_at_80%_40%,rgba(74,18,32,.35),transparent)]" aria-hidden="true" />
      <div className="container-lux relative grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="text-center lg:text-left">
          <p className="eyebrow reveal">Musk e Dil</p>
          <h2 className="h-display reveal reveal-d1 mt-6 text-[clamp(2.4rem,4.8vw,4rem)] uppercase">Get in <span className="italic text-gold-soft">Touch</span></h2>
          <p className="reveal reveal-d2 mx-auto mt-6 max-w-md font-serif text-2xl italic leading-snug text-cream-dim lg:mx-0">Have a question or ready to experience Velvet Oud?</p>
          <p className="reveal reveal-d2 mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream-mute lg:mx-0">Orders are confirmed personally on WhatsApp — add Velvet Oud to your cart, share your delivery details, and we'll take it from there.</p>
        </div>

        <div className="grid gap-4 self-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex items-center gap-5 border border-cream/10 bg-charcoal/60 p-6 transition-all duration-500 hover:border-whatsapp/50 sm:p-8"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-whatsapp/40 text-whatsapp"><WhatsAppIcon size={22} /></span>
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-cream-mute">WhatsApp</span>
              <span className="mt-1.5 block font-serif text-xl text-cream sm:text-2xl">{WHATSAPP_DISPLAY}</span>
            </span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="reveal reveal-d1 group flex items-center gap-5 border border-cream/10 bg-charcoal/60 p-6 transition-all duration-500 hover:border-gold/50 sm:p-8"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"><Mail size={20} strokeWidth={1.3} /></span>
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-cream-mute">Email</span>
              <span className="mt-1.5 block font-serif text-lg text-cream [overflow-wrap:anywhere] sm:text-2xl">{CONTACT_EMAIL}</span>
            </span>
          </a>
          <div className="reveal reveal-d2 mt-2 grid gap-3 sm:grid-cols-2">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon size={16} className="text-whatsapp" /> WhatsApp Us</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-ghost"><Mail size={15} strokeWidth={1.4} /> Email Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
