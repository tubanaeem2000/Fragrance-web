import { Crest } from './Icons'

export default function BrandQuote() {
  return (
    <section className="grain relative isolate overflow-hidden py-32 md:py-48" aria-label="Brand statement">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#0a0708_0%,#2d1426_45%,#4a1220_70%,#0a0708_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,162,107,.16),transparent_60%)] animate-glow" />
        <div className="smoke animate-drift" />
        <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,.7))]" />
      </div>
      <div className="container-lux text-center">
        <Crest className="reveal mx-auto h-8 w-12 text-gold/80" />
        <blockquote className="reveal reveal-d1 mx-auto mt-10 max-w-4xl font-serif text-[clamp(2rem,4.8vw,4rem)] font-medium italic leading-[1.1] text-cream">
          “A fragrance that is not only felt…
          <span className="mt-2 block text-gold-soft">but remembered.”</span>
        </blockquote>
        <p className="reveal reveal-d2 mt-6 text-sm text-cream-dim">A Scent That Becomes A Memory.</p>
        <div className="hairline reveal reveal-d2 mx-auto my-10" />
        <p className="eyebrow reveal reveal-d3">Musk e Dil Fragrance</p>
        <p className="reveal reveal-d3 mt-3 font-serif text-xl italic text-cream/80">“A Fragrance That Touches The Heart”</p>
      </div>
    </section>
  )
}
