import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { formatPrice, waLink } from '../config'
import { WhatsAppIcon } from './Icons'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel', required: true, placeholder: '03XX XXXXXXX' },
  { name: 'address', label: 'Delivery Address', type: 'textarea', autoComplete: 'street-address', required: true },
  { name: 'city', label: 'City', type: 'text', autoComplete: 'address-level2', required: true },
  { name: 'note', label: 'Order Note', type: 'textarea', required: false, placeholder: 'Gift wrapping, delivery timing…' },
]

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  const digits = v.phone.replace(/\D/g, '')
  if (!digits) e.phone = 'Please enter your phone number.'
  else if (digits.length < 10 || digits.length > 13) e.phone = 'Please enter a valid phone number.'
  if (v.address.trim().length < 6) e.address = 'Please enter your complete delivery address.'
  if (v.city.trim().length < 2) e.city = 'Please enter your city.'
  return e
}

export function buildOrderMessage(v, items, subtotal) {
  const priced = subtotal > 0
  const lines = items.flatMap((l, i) => [
    ...(items.length > 1 ? [`Item ${i + 1}:`] : []),
    `Product: ${l.name}`,
    `Size: ${l.size}`,
    `Quantity: ${l.qty}`,
  ])
  return [
    'Assalam o Alaikum! 🌹',
    '',
    'NEW ORDER — MUSK E DIL',
    '',
    'Customer Details:',
    `Name: ${v.name.trim()}`,
    `Phone: ${v.phone.trim()}`,
    `Address: ${v.address.trim().replace(/\s*\n\s*/g, ', ')}`,
    `City: ${v.city.trim()}`,
    '',
    'Order Details:',
    ...lines,
    '',
    `Price: ${priced ? `Rs. ${items[0].price.toLocaleString('en-PK')}` : 'To be confirmed'}`,
    `Total: ${priced ? `Rs. ${subtotal.toLocaleString('en-PK')}` : 'To be confirmed'}`,
    '',
    'Order Note:',
    v.note.trim() || '—',
    '',
    'Please confirm my order and delivery details.',
    '',
    'Thank you!',
    'Musk e Dil',
    '“A Fragrance That Touches The Heart” ✨',
  ].join('\n')
}

export default function CheckoutForm({ items, subtotal, count, onBack }) {
  const [values, setValues] = useState({ name: '', phone: '', address: '', city: '', note: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    if (!items.length) return
    const er = validate(values)
    setErrors(er)
    if (Object.keys(er).length) {
      const first = fields.find((f) => er[f.name])
      document.getElementById(`co-${first.name}`)?.focus()
      return
    }
    const url = waLink(buildOrderMessage(values, items, subtotal))
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    if (!win) window.location.href = url // popup blocked → open in same tab
    setSent(true)
  }

  return (
    <form onSubmit={submit} noValidate className="flex min-h-0 flex-1 flex-col" aria-label="Delivery details">
      <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
        <button type="button" onClick={onBack} className="mb-6 inline-flex min-h-[40px] items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cream-mute hover:text-cream">
          <ArrowLeft size={14} /> Back to cart
        </button>
        <p className="font-serif text-3xl text-cream">Delivery details</p>
        <p className="mt-2 text-sm text-cream-mute">We'll send your order to WhatsApp so we can confirm it with you personally.</p>

        <div className="mt-8 space-y-6">
          {fields.map((f) => {
            const id = `co-${f.name}`
            const err = errors[f.name]
            const common = {
              id,
              name: f.name,
              value: values[f.name],
              onChange: update(f.name),
              autoComplete: f.autoComplete,
              placeholder: f.placeholder,
              required: f.required,
              'aria-invalid': !!err,
              'aria-describedby': err ? `${id}-err` : undefined,
              className: `field ${err ? 'field-error' : ''}`,
            }
            return (
              <div key={f.name}>
                <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.28em] text-cream-dim">
                  {f.label} {f.required ? <span className="text-gold" aria-hidden="true">*</span> : <span className="normal-case tracking-normal text-cream-mute">(optional)</span>}
                </label>
                {f.type === 'textarea'
                  ? <textarea rows={f.name === 'note' ? 2 : 2} {...common} className={`${common.className} resize-none`} />
                  : <input type={f.type} inputMode={f.type === 'tel' ? 'tel' : undefined} {...common} />}
                {err && <p id={`${id}-err`} className="mt-2 text-xs text-[#e08597]" role="alert">{err}</p>}
              </div>
            )
          })}
        </div>
      </div>

      <div className="border-t border-cream/10 bg-noir px-6 py-6 sm:px-8">
        <div className="flex items-baseline justify-between text-sm">
          <span className="text-cream-dim">{count} item{count === 1 ? '' : 's'}</span>
          <span className="font-serif text-2xl text-cream">{subtotal > 0 ? formatPrice(subtotal) : 'Price on request'}</span>
        </div>
        <button type="submit" disabled={!items.length} className="btn mt-5 w-full bg-whatsapp/95 text-ink hover:bg-whatsapp" data-testid="continue-whatsapp">
          <WhatsAppIcon size={17} /> Continue to WhatsApp
        </button>
        {sent && <p className="mt-3 text-center text-xs text-cream-dim" role="status">WhatsApp opened with your order — just press send to place it.</p>}
      </div>
    </form>
  )
}
