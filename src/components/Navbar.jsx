import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../cart'
import { scrollToId } from '../hooks'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'fragrance', label: 'Fragrance' },
  { id: 'velvet-oud', label: 'Shop Now' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { count, setOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [bump, setBump] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!count) return
    setBump(true)
    const t = setTimeout(() => setBump(false), 450)
    return () => clearTimeout(t)
  }, [count])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMenu(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menu])

  const go = (id) => (e) => { e.preventDefault(); setMenu(false); scrollToId(id) }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-ink/90 py-3 shadow-[0_1px_0_rgba(198,162,107,.12)] backdrop-blur-md' : 'bg-gradient-to-b from-ink/70 to-transparent py-5'
        }`}
      >
        <nav className="container-lux flex items-center justify-between gap-4" aria-label="Main">
          <a href="#home" onClick={go('home')} className="group flex items-baseline gap-2" aria-label="Musk e Dil — home">
            <span className="font-serif text-[26px] leading-none tracking-[0.04em] text-cream">Musk <em className="text-gold">e</em> Dil</span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={go(l.id)} className="group relative text-[11px] uppercase tracking-[0.24em] text-cream-dim transition-colors hover:text-cream">
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex min-h-[44px] items-center gap-2 px-2 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:text-gold-soft"
              aria-label={`Open cart, ${count} item${count === 1 ? '' : 's'}`}
            >
              <ShoppingBag size={19} strokeWidth={1.3} className={bump ? 'scale-125 text-gold transition-transform' : 'transition-transform'} />
              <span className="hidden sm:inline">Cart</span>
              <span className="tabular-nums" data-testid="cart-count">({count})</span>
            </button>
            <a href="#velvet-oud" onClick={go('velvet-oud')} className="btn-primary hidden !min-h-[40px] !px-5 md:inline-flex">Shop Now</a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-cream lg:hidden"
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              aria-expanded={menu}
            >
              <Menu size={22} strokeWidth={1.3} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — kept outside <header> so the header's backdrop-blur doesn't trap this fixed overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink transition-all duration-500 lg:hidden ${menu ? 'visible opacity-100' : 'invisible opacity-0'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,rgba(110,27,46,.35),transparent)]" />
        <div className="container-lux relative flex items-center justify-between py-5">
          <span className="font-serif text-[26px] text-cream">Musk <em className="text-gold">e</em> Dil</span>
          <button type="button" className="flex h-11 w-11 items-center justify-center" onClick={() => setMenu(false)} aria-label="Close menu">
            <X size={22} strokeWidth={1.3} />
          </button>
        </div>
        <ul className="container-lux relative mt-8 space-y-1">
          {links.map((l, i) => (
            <li key={l.id} style={{ transitionDelay: menu ? `${120 + i * 60}ms` : '0ms' }} className={`transition-all duration-700 ${menu ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <a href={`#${l.id}`} onClick={go(l.id)} className="flex items-baseline gap-5 border-b border-cream/10 py-3.5 font-serif text-2xl text-cream">
                <span className="font-sans text-[10px] tracking-[0.3em] text-gold">0{i + 1}</span>{l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-lux relative mt-8">
          <a href="#velvet-oud" onClick={go('velvet-oud')} className="btn-primary w-full">Shop Velvet Oud</a>
        </div>
      </div>
    </>
  )
}
