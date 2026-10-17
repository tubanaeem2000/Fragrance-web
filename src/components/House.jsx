import { ArrowUpRight } from 'lucide-react'
import { house, waLink } from '../config'

// A small gallery of the wider Musk e Dil range — enquiries go to WhatsApp
export default function House() {
  return (
    <section className="bg-noir py-24 md:py-32" aria-labelledby="house-title">
      <div className="container-lux">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:items-end md:text-left">
          <div>
            <p className="eyebrow reveal">From the House of Musk e Dil</p>
            <h2 id="house-title" className="reveal reveal-d1 mt-5 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight">More signatures to discover</h2>
          </div>
          <p className="reveal reveal-d2 max-w-xs text-sm leading-relaxed text-cream-mute">Curious about the rest of the collection? Message us for availability.</p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {house.map((h, i) => (
            <li key={h.name} className={`reveal reveal-d${i + 1}`}>
              <a
                href={waLink(`Assalam o Alaikum! Is Musk e Dil – ${h.name} available?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal sm:aspect-[4/5]">
                  <img src={h.image} alt={`Musk e Dil ${h.name} bottle`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Musk e Dil</p>
                      <h3 className="mt-2 font-serif text-2xl text-cream">{h.name}</h3>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                      <ArrowUpRight size={16} strokeWidth={1.4} />
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-cream-mute transition-colors group-hover:text-cream">Enquire on WhatsApp</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
