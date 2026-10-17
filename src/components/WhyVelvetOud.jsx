const features = [
  { n: '01', title: 'Long Lasting Performance', text: 'A rich fragrance designed to stay with you throughout the day.' },
  { n: '02', title: 'Premium Luxury Scent', text: 'A sophisticated blend created for an unforgettable presence.' },
  { n: '03', title: 'Day & Night', text: 'Perfect for everyday elegance and special occasions.' },
  { n: '04', title: 'For Men & Women', text: 'A versatile fragrance designed to complement every personality.' },
  { n: '05', title: 'Elegant 50ml Bottle', text: 'A refined bottle that looks as premium as the fragrance inside.' },
]

export default function WhyVelvetOud() {
  return (
    <section className="relative bg-ink py-24 md:py-36" aria-labelledby="why-title">
      <div className="container-lux grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow reveal">Why Choose It</p>
          <h2 id="why-title" className="h-display reveal reveal-d1 mt-6 text-[clamp(2.6rem,5.5vw,4.6rem)] uppercase">
            Why <br className="hidden lg:block" /><span className="italic text-gold-soft">Velvet Oud?</span>
          </h2>
          <div className="hairline reveal reveal-d2 my-8" />
          <p className="reveal reveal-d2 max-w-sm text-[15px] leading-relaxed text-cream-dim">Five reasons it becomes the bottle you reach for — on ordinary days and the ones you want remembered.</p>
        </div>

        <ol className="border-t border-cream/10">
          {features.map((f, i) => (
            <li
              key={f.n}
              className={`reveal reveal-d${(i % 3) + 1} group grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-b border-cream/10 py-8 transition-colors duration-500 hover:bg-[linear-gradient(90deg,rgba(110,27,46,.18),transparent)] sm:grid-cols-[5rem_1fr] md:py-10`}
            >
              <span className="font-serif text-3xl italic text-gold/70 transition-colors group-hover:text-gold sm:text-4xl">{f.n}</span>
              <div>
                <h3 className="text-[13px] font-medium uppercase tracking-[0.24em] text-cream">{f.title}</h3>
                <p className="mt-3 font-serif text-xl leading-snug text-cream-dim sm:text-[1.4rem]">{f.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
