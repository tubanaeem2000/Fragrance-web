import { useState } from 'react'
import { Check, Minus, Plus, ShoppingBag } from 'lucide-react'
import { product, formatPrice, waLink } from '../config'
import { useCart } from '../cart'
import { WhatsAppIcon } from './Icons'

const details = [
  'Long Lasting Performance',
  'Premium Luxury Scent',
  'Perfect for Day & Night Wear',
  'Suitable for Men & Women',
  'Elegant 50ml Bottle',
]

export default function ProductShowcase() {
  const { add, setOpen } = useCart()
  const [active, setActive] = useState(0)
  const [qty, setQty] = useState(1)

  const buyNow = () => { add(product, qty); setOpen(true) }

  return (
    <section id="velvet-oud" className="relative overflow-hidden bg-noir py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_25%_50%,rgba(45,20,38,.75),transparent)]" aria-hidden="true" />
      <div className="container-lux relative grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* Gallery */}
        <div className="reveal">
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            {product.gallery.map((g, i) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                style={{ objectPosition: g.pos }}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${i === active ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'}`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(10,7,8,.6)]" />
            <span className="absolute left-5 top-5 border border-gold/40 bg-ink/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-gold backdrop-blur-sm">Signature</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3" role="tablist" aria-label="Product images">
            {product.gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show image ${i + 1}`}
                onClick={() => setActive(i)}
                className={`relative aspect-square overflow-hidden transition-all duration-500 ${i === active ? 'ring-1 ring-gold' : 'opacity-50 hover:opacity-90'}`}
              >
                <img src={g.src} alt="" loading="lazy" style={{ objectPosition: g.pos }} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow reveal">{product.brand}</p>
          <h2 className="h-display reveal reveal-d1 mt-5 text-[clamp(2.6rem,5.2vw,4.4rem)] uppercase">Velvet <span className="italic text-gold-soft">Oud</span></h2>
          <div className="reveal reveal-d1 mt-4 flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-cream-mute">
            <span>{product.size}</span><span className="h-3 w-px bg-cream/20" /><span>Unisex</span><span className="h-3 w-px bg-cream/20" /><span>Oud · Musk · Amber</span>
          </div>
          <p className="reveal reveal-d2 mt-7 font-serif text-2xl italic leading-snug text-cream/90">“Where every spray leaves a lasting impression.”</p>
          <p className="reveal reveal-d2 mt-4 max-w-md text-[15px] leading-relaxed text-cream-dim">Unleash the power of elegance with Musk e Dil Velvet Oud — where every spray leaves a lasting impression.</p>

          <ul className="reveal reveal-d3 mt-8 space-y-3.5">
            {details.map((d) => (
              <li key={d} className="flex items-center gap-4 text-[14px] text-cream">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"><Check size={12} strokeWidth={1.8} /></span>
                {d}
              </li>
            ))}
          </ul>

          <div className="reveal reveal-d3 mt-10 border-y border-cream/10 py-6">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream-mute">Price</p>
                <p className="mt-2 font-serif text-4xl text-cream" data-testid="product-price">{formatPrice(product.price)}</p>
              </div>
              <div className="flex items-center border border-cream/20" role="group" aria-label="Quantity">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="flex h-12 w-12 items-center justify-center text-cream-dim hover:text-cream disabled:opacity-30" disabled={qty <= 1} aria-label="Decrease quantity"><Minus size={14} /></button>
                <span className="w-10 text-center tabular-nums" aria-live="polite">{qty}</span>
                <button type="button" onClick={() => setQty((q) => Math.min(99, q + 1))} className="flex h-12 w-12 items-center justify-center text-cream-dim hover:text-cream" aria-label="Increase quantity"><Plus size={14} /></button>
              </div>
            </div>
          </div>

          <div className="reveal reveal-d4 mt-7 grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={() => add(product, qty)} className="btn-wine" data-testid="add-to-cart">
              <ShoppingBag size={15} strokeWidth={1.4} /> Add to Cart
            </button>
            <button type="button" onClick={buyNow} className="btn-primary">Shop Now</button>
          </div>
          <a
            href={waLink(`Assalam o Alaikum! I'd like to know more about Musk e Dil – Velvet Oud (${product.size}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-d4 mt-5 inline-flex items-center gap-2 self-start text-[12px] text-cream-dim transition-colors hover:text-cream"
          >
            <WhatsAppIcon size={15} className="text-whatsapp" /> Questions? Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
