// Minimal line icons drawn for each layer
const Spice = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="h-11 w-11" aria-hidden="true">
    <path d="M24 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" /><path d="M36 30l1.5 4.5L42 36l-4.5 1.5L36 42l-1.5-4.5L30 36l4.5-1.5z" />
  </svg>
)
const Drop = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="h-11 w-11" aria-hidden="true">
    <path d="M24 6c6 9 12 15 12 22a12 12 0 0 1-24 0c0-7 6-13 12-22z" /><path d="M19 30a5 5 0 0 0 5 5" />
  </svg>
)
const Wood = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="h-11 w-11" aria-hidden="true">
    <circle cx="24" cy="24" r="16" /><circle cx="24" cy="24" r="10" /><circle cx="24" cy="24" r="4" /><path d="M24 8v6" />
  </svg>
)

const notes = [
  { n: '01', layer: 'Top Notes', title: 'Fresh Spices', text: 'The first impression — bright, warm and inviting.', Icon: Spice },
  { n: '02', layer: 'Heart Notes', title: 'Rich Oud & Amber', text: 'The soul of the fragrance — deep, resinous and velvety.', Icon: Drop },
  { n: '03', layer: 'Base Notes', title: 'Musk, Sandalwood & Warm Woods', text: 'The lasting trail — soft, sensual and long after you leave.', Icon: Wood },
]

export default function FragranceProfile() {
  return (
    <section id="fragrance" className="grain relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(110,27,46,.28),transparent_70%)]" aria-hidden="true" />
      <div className="container-lux relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal">The Composition</p>
          <h2 className="h-display reveal reveal-d1 mt-6 text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase">The Art of <span className="italic text-gold-soft">Velvet Oud</span></h2>
          <p className="reveal reveal-d2 mt-5 font-serif text-xl italic text-cream-dim">Three layers. One unforgettable signature.</p>
        </div>

        <ol className="relative mt-16 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {/* Timeline thread */}
          <span className="absolute left-[16%] right-[16%] top-[74px] hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block" aria-hidden="true" />
          {notes.map(({ n, layer, title, text, Icon }, i) => (
            <li
              key={n}
              className={`reveal reveal-d${i + 1} group relative border border-gold/15 bg-gradient-to-b from-charcoal to-noir p-9 text-center transition-all duration-700 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_30px_60px_-25px_rgba(110,27,46,.7)] lg:p-11`}
            >
              <span className="absolute right-5 top-4 font-serif text-sm italic text-cream-mute">{n}</span>
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/25 bg-ink text-gold transition-all duration-700 group-hover:border-gold/60 group-hover:shadow-[0_0_40px_rgba(198,162,107,.25)]">
                <Icon />
              </div>
              <p className="eyebrow mt-8">{layer}</p>
              <h3 className="mt-4 font-serif text-[1.75rem] leading-tight text-cream">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-mute">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
