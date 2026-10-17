import { CartProvider, useCart } from './cart'
import { useReveal } from './hooks'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FragranceProfile from './components/FragranceProfile'
import ProductShowcase from './components/ProductShowcase'
import BrandQuote from './components/BrandQuote'
import House from './components/House'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

function Toast() {
  const { toast, setOpen } = useCart()
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4" aria-live="polite">
      {toast && (
        <div key={toast.key} className="pointer-events-auto flex animate-[toastIn_.5s_cubic-bezier(.2,.7,.2,1)] items-center gap-4 border border-gold/30 bg-charcoal/95 px-5 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,.6)] backdrop-blur" role="status" data-testid="toast">
          <span className="text-sm text-cream">{toast.msg}</span>
          <button type="button" onClick={() => setOpen(true)} className="text-[10px] uppercase tracking-[0.24em] text-gold hover:text-gold-soft">View cart</button>
        </div>
      )}
    </div>
  )
}

function Page() {
  useReveal()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-cream focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <FragranceProfile />
        <ProductShowcase />
        <BrandQuote />
        <House />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  )
}
