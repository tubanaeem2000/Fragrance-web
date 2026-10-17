import { useEffect, useRef, useState } from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '../cart'
import { formatPrice, product } from '../config'
import { scrollToId } from '../hooks'
import { WhatsAppIcon } from './Icons'
import CheckoutForm from './CheckoutForm'

export default function CartDrawer() {
  const { items, count, subtotal, setQty, remove, clear, open, setOpen } = useCart()
  const [step, setStep] = useState('cart')
  const panel = useRef(null)
  const lastFocus = useRef(null)

  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement
      document.body.style.overflow = 'hidden'
      setTimeout(() => panel.current?.querySelector('button')?.focus(), 50)
    } else {
      document.body.style.overflow = ''
      setTimeout(() => setStep('cart'), 400)
      lastFocus.current?.focus?.()
    }
    const onKey = (e) => {
      if (!open) return
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab' && panel.current) {
        const f = panel.current.querySelectorAll('button:not([disabled]), a[href], input, textarea')
        if (!f.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  useEffect(() => { if (!items.length) setStep('cart') }, [items.length])

  const close = () => setOpen(false)

  return (
    <div className={`fixed inset-0 z-[60] transition-[visibility] ${open ? 'visible delay-0' : 'invisible delay-500'}`} aria-hidden={!open}>
      <div onClick={close} className={`absolute inset-0 bg-black/70 backdrop-blur-[2px] transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`} />
      <aside
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[460px] flex-col border-l border-gold/15 bg-charcoal shadow-[-30px_0_80px_rgba(0,0,0,.6)] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <header className="flex items-center justify-between border-b border-cream/10 px-6 py-5 sm:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{step === 'cart' ? 'Your Selection' : 'Checkout'}</p>
            <p className="mt-1 font-serif text-2xl">Cart <span className="text-cream-mute">({count})</span></p>
          </div>
          <button type="button" onClick={close} className="flex h-11 w-11 items-center justify-center text-cream-dim hover:text-cream" aria-label="Close cart">
            <X size={20} strokeWidth={1.3} />
          </button>
        </header>

        {step === 'checkout' && items.length ? (
          <CheckoutForm items={items} subtotal={subtotal} count={count} onBack={() => setStep('cart')} />
        ) : !items.length ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/25 text-gold"><ShoppingBag size={26} strokeWidth={1} /></span>
            <p className="mt-7 font-serif text-3xl">Your cart is empty</p>
            <p className="mt-3 max-w-xs text-sm text-cream-mute">Velvet Oud is waiting — a fragrance that is not only felt, but remembered.</p>
            <button type="button" onClick={() => { close(); setTimeout(() => scrollToId('velvet-oud'), 350) }} className="btn-primary mt-8">Discover Velvet Oud</button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-cream/10 overflow-y-auto px-6 sm:px-8">
              {items.map((l) => (
                <li key={l.id} className="flex gap-5 py-6" data-testid="cart-line">
                  <div className="h-28 w-[5.5rem] shrink-0 overflow-hidden bg-ink">
                    <img src={l.image} alt={`${l.shortName} bottle`} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{l.brand}</p>
                        <p className="mt-1 font-serif text-2xl leading-tight">{l.shortName}</p>
                        <p className="mt-1 text-xs text-cream-mute">{l.size}</p>
                      </div>
                      <button type="button" onClick={() => remove(l.id)} className="-mr-2 flex h-10 w-10 items-center justify-center text-cream-mute hover:text-[#e08597]" aria-label={`Remove ${l.shortName} from cart`} data-testid="remove-item">
                        <Trash2 size={16} strokeWidth={1.3} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-cream/20" role="group" aria-label={`Quantity of ${l.shortName}`}>
                        <button type="button" onClick={() => setQty(l.id, l.qty - 1)} className="flex h-10 w-10 items-center justify-center text-cream-dim hover:text-cream" aria-label="Decrease quantity" data-testid="qty-dec"><Minus size={13} /></button>
                        <span className="w-8 text-center text-sm tabular-nums" aria-live="polite" data-testid="line-qty">{l.qty}</span>
                        <button type="button" onClick={() => setQty(l.id, l.qty + 1)} className="flex h-10 w-10 items-center justify-center text-cream-dim hover:text-cream" aria-label="Increase quantity" data-testid="qty-inc"><Plus size={13} /></button>
                      </div>
                      <p className="text-sm text-cream" data-testid="line-total">{l.price > 0 ? formatPrice(l.price * l.qty) : formatPrice(0)}</p>
                    </div>
                  </div>
                </li>
              ))}
              <li className="py-4">
                <button type="button" onClick={clear} className="text-[11px] uppercase tracking-[0.22em] text-cream-mute underline-offset-4 hover:text-cream hover:underline" data-testid="clear-cart">Clear cart</button>
              </li>
            </ul>

            <div className="border-t border-cream/10 bg-noir px-6 py-6 sm:px-8">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between text-cream-dim"><dt>Price</dt><dd>{formatPrice(product.price)} <span className="text-cream-mute">/ {product.size}</span></dd></div>
                <div className="flex items-baseline justify-between"><dt className="text-cream-dim">Subtotal</dt><dd className="font-serif text-3xl text-cream" data-testid="subtotal">{subtotal > 0 ? formatPrice(subtotal) : 'Price on request'}</dd></div>
              </dl>
              <p className="mt-2 text-xs text-cream-mute">Delivery charges, if any, are confirmed on WhatsApp.</p>
              <div className="mt-6 grid gap-3">
                <button type="button" onClick={() => setStep('checkout')} className="btn w-full bg-whatsapp/95 text-ink hover:bg-whatsapp" data-testid="order-whatsapp">
                  <WhatsAppIcon size={17} /> Order via WhatsApp
                </button>
                <button type="button" onClick={close} className="btn-ghost w-full">Continue Shopping</button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
