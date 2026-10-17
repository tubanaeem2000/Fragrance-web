import { images } from '../config'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-noir py-24 md:py-36">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(60%_60%_at_30%_50%,rgba(45,20,38,.6),transparent)]" aria-hidden="true" />
      <div className="container-lux relative grid items-center gap-14 md:grid-cols-2 lg:gap-24">
        <div className="reveal relative mx-auto w-full max-w-[460px]">
          <div className="absolute -right-4 -top-4 bottom-10 left-10 border border-gold/20" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={images.packaging}
              alt="A Musk e Dil bottle resting on its box inside a black gift case lined with ivory satin"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[2s] ease-out hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/50 to-transparent" />
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-luxe text-cream-mute">The Musk e Dil gift box</p>
        </div>

        <div className="text-center md:text-left">
          <p className="eyebrow reveal">The Essence of Musk e Dil</p>
          <h2 className="reveal reveal-d1 mt-7 font-serif text-[clamp(2.1rem,4.2vw,3.5rem)] font-medium italic leading-[1.12] text-cream">
            “A fragrance that is not only felt…<br />
            <span className="text-gold-soft">but remembered.”</span>
          </h2>
          <p className="reveal reveal-d2 mt-6 font-serif text-xl text-cream-dim md:text-2xl">A Scent That Becomes A Memory.</p>
          <div className="hairline reveal reveal-d2 mx-auto my-9 md:mx-0" />
          <div className="reveal reveal-d3 space-y-5 text-[15px] leading-[1.85] text-cream-dim md:max-w-[30rem]">
            <p>Musk e Dil is created for those who believe fragrance is more than a scent — it is an expression of personality, confidence and emotion.</p>
            <p>Velvet Oud blends rich oud with soft musk, amber and warm woods to create a sophisticated fragrance that stays with you long after you leave.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
