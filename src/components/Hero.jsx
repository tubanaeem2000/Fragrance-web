import { useCallback, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { slides, waLink } from '../config'
import { scrollToId } from '../hooks'
import { WhatsAppIcon } from './Icons'

const SLIDE_MS = 4500 // time each slide stays on screen

const pad = (n) => String(n).padStart(2, '0')

function SlideCopy({ s, active, first }) {
  const Title = first ? 'h1' : 'h2'
  const long = s.name.length > 14
  const enquire = s.action === 'enquire'

  return (
    <div
      aria-hidden={!active}
      className={`[grid-area:1/1] self-end transition-all duration-1000 ease-out lg:self-center ${
        active ? 'visible translate-y-0 opacity-100 delay-300' : 'invisible translate-y-5 opacity-0'
      }`}
    >
      <p className="eyebrow">{enquire ? 'From the House of Musk e Dil' : 'Musk e Dil Fragrance'}</p>
      <Title className={`h-display mt-5 uppercase lg:mt-6 ${long ? 'text-[clamp(2.3rem,5vw,4.4rem)]' : 'text-[clamp(2.8rem,6.5vw,6rem)]'}`}>
        {(() => {
          const w = s.name.split(' ')
          if (long) return s.name
          if (w.length === 2) return <>{w[0]} <span className="italic text-gold-soft">{w[1]}</span></>
          if (w.length === 3) return <span className="whitespace-nowrap">{w[0]} <span className="lowercase italic text-gold-soft">{w[1]}</span> {w[2]}</span>
          return s.name
        })()}
      </Title>

      {s.intro ? (
        <>
          <p className="mt-5 font-serif text-[clamp(1.2rem,2.1vw,1.6rem)] italic text-cream/90">“A Fragrance That Touches The Heart”</p>
          <p className="mt-4 text-[11px] uppercase tracking-luxe text-gold/90">Elegant · Memorable · Irresistible</p>
        </>
      ) : (
        <p className="mt-5 max-w-md font-serif text-[clamp(1.2rem,2.1vw,1.65rem)] italic leading-snug text-cream/90">{s.line}</p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {enquire ? (
          <>
            <a
              href={waLink(`Assalam o Alaikum! I'd like to know more about Musk e Dil – ${s.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={active ? 0 : -1}
              className="btn-wa bg-ink/40 backdrop-blur-sm"
            >
              <WhatsAppIcon size={16} className="text-whatsapp" /> Enquire on WhatsApp
            </a>
            <button type="button" tabIndex={active ? 0 : -1} onClick={() => scrollToId('velvet-oud')} className="btn-ghost bg-ink/30 backdrop-blur-sm">Shop Velvet Oud</button>
          </>
        ) : (
          <>
            <button type="button" tabIndex={active ? 0 : -1} onClick={() => scrollToId('velvet-oud')} className="btn-wine group">
              Shop Now <ArrowRight size={15} strokeWidth={1.4} className="transition-transform duration-500 group-hover:translate-x-1" />
            </button>
            <button type="button" tabIndex={active ? 0 : -1} onClick={() => scrollToId('fragrance')} className="btn-ghost bg-ink/30 backdrop-blur-sm">Explore Fragrance</button>
          </>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const touchX = useRef(null)
  const n = slides.length

  const go = useCallback((i) => setIndex(((i % n) + n) % n), [n])
  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])
  const paused = userPaused || hovered

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
  }

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Musk e Dil fragrances"
      className="relative isolate overflow-hidden bg-ink lg:h-[100svh] lg:min-h-[680px]"
    >
      {/* Slides */}
      <div
        className="relative h-[62svh] min-h-[400px] sm:h-[70svh] overflow-hidden bg-ink lg:absolute lg:inset-0 lg:h-auto"
        onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 45) (dx < 0 ? next : prev)()
          touchX.current = null
        }}
      >
        {slides.map((s, i) => (
          <div
            key={s.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${n}: ${s.name}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === index ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading={i < 2 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : undefined}
              style={{ objectPosition: s.focus, '--shift': `${s.shift || 0}%` }}
              className={`slide-img transition-transform duration-[8000ms] ease-out ${s.shift ? 'has-shift' : ''} ${i === index ? 'scale-100' : 'scale-[1.07]'}`}
            />
          </div>
        ))}

        {/* Shading so the copy always reads */}
        <div className="pointer-events-none absolute inset-0 z-20 hidden bg-[linear-gradient(90deg,#0a0708_0%,rgba(10,7,8,.9)_22%,rgba(10,7,8,.45)_48%,rgba(10,7,8,0)_70%)] lg:block" />
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(10,7,8,.75)_0%,rgba(10,7,8,0)_22%,rgba(10,7,8,0)_55%,#0a0708_100%)] lg:bg-[linear-gradient(180deg,rgba(10,7,8,.7)_0%,rgba(10,7,8,0)_20%,rgba(10,7,8,0)_70%,rgba(10,7,8,.85)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(60%_70%_at_15%_60%,rgba(74,18,32,.35),transparent)] mix-blend-multiply" />
      </div>

      {/* Copy */}
      <div className="relative z-30 -mt-28 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center">
        <div className="container-lux grid pb-6 lg:pb-0 lg:pt-10">
          <div className="grid max-w-[36rem]" aria-live={paused ? 'polite' : 'off'}>
            {slides.map((s, i) => <SlideCopy key={s.src} s={s} active={i === index} first={i === 0} />)}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-30 lg:absolute lg:inset-x-0 lg:bottom-0">
        <div className="container-lux flex items-center justify-between gap-4 pb-10 pt-4 lg:pb-9">
          <div className="flex min-w-0 items-center gap-4">
            <p className="hidden shrink-0 font-serif text-lg tabular-nums text-cream sm:block" aria-hidden="true">
              {pad(index + 1)} <span className="text-cream-mute">/ {pad(n)}</span>
            </p>
            <ol className="flex items-center gap-1 sm:gap-1.5" aria-label="Choose slide">
              {slides.map((s, i) => (
                <li key={s.src}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Show slide ${i + 1}: ${s.name}`}
                    aria-current={i === index}
                    className="group flex h-8 items-center"
                  >
                    <span className={`relative block h-px overflow-hidden bg-cream/25 transition-all duration-500 group-hover:bg-cream/60 ${i === index ? 'w-10 sm:w-14' : 'w-2.5 sm:w-4'}`}>
                      {i === index && (
                        <span
                          key={index}
                          onAnimationEnd={next}
                          className="absolute inset-0 origin-left bg-gold"
                          style={{ animation: `slideProgress ${SLIDE_MS}ms linear forwards`, animationPlayState: paused ? 'paused' : 'running' }}
                        />
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <button
            type="button"
            onClick={() => scrollToId('about')}
            className="hidden text-[10px] uppercase tracking-luxe text-cream-mute transition-colors hover:text-gold lg:block"
          >
            Scroll to discover
          </button>

          <div className="flex shrink-0 items-center gap-2" onKeyDown={onKeyDown}>
            <button type="button" onClick={() => setUserPaused((p) => !p)} aria-label={userPaused ? 'Play slideshow' : 'Pause slideshow'} className="flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11 text-cream-dim transition-colors hover:text-cream">
              {userPaused ? <Play size={15} strokeWidth={1.4} /> : <Pause size={15} strokeWidth={1.4} />}
            </button>
            <button type="button" onClick={prev} aria-label="Previous slide" className="flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11 border border-cream/25 text-cream transition-all duration-500 hover:border-gold hover:text-gold">
              <ChevronLeft size={18} strokeWidth={1.3} />
            </button>
            <button type="button" onClick={next} aria-label="Next slide" className="flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11 border border-cream/25 text-cream transition-all duration-500 hover:border-gold hover:text-gold">
              <ChevronRight size={18} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
