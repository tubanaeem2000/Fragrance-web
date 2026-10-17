import { ShoppingBag } from 'lucide-react'
import { images, product, waLink } from '../config'
import { useCart } from '../cart'
import { WhatsAppIcon } from './Icons'

export default function CTA() {
  const { add } = useCart()
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-40" aria-labelledby="cta-title">
      <img src={images.collection} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,7,8,.96)_0%,rgba(10,7,8,.88)_45%,rgba(45,20,38,.75)_100%)]" />
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
          <p className="eyebrow reveal">Velvet Oud · 50ml</p>
          <h2 id="cta-title" className="h-display reveal reveal-d1 mt-6 text-[clamp(2.3rem,4.8vw,4rem)]">Make Your Presence <span className="italic text-gold-soft">Unforgettable.</span></h2>
          <p className="reveal reveal-d2 mt-6 max-w-lg text-[15px] leading-relaxed text-cream-dim md:text-base">Discover Musk e Dil Velvet Oud — a fragrance crafted to leave more than an impression.</p>
          <div className="reveal reveal-d3 mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <button type="button" onClick={() => add(product, 1)} className="btn-primary"><ShoppingBag size={15} strokeWidth={1.4} /> Add to Cart</button>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon size={16} className="text-whatsapp" /> WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
