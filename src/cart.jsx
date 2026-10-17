import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { product } from './config'

const CartContext = createContext(null)
const STORAGE_KEY = 'muskedil-cart-v1'

const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    // keep only valid lines for products that still exist; always use current price
    return parsed
      .filter((l) => l && l.id === product.id && l.qty > 0)
      .map((l) => ({ ...product, qty: Math.min(99, Math.floor(l.qty)) }))
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef()

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items.map(({ id, qty }) => ({ id, qty })))) } catch { /* storage unavailable */ }
  }, [items])

  const notify = useCallback((msg) => {
    clearTimeout(toastTimer.current)
    setToast({ msg, key: Date.now() })
    toastTimer.current = setTimeout(() => setToast(null), 2800)
  }, [])

  const add = useCallback((p = product, qty = 1) => {
    setItems((cur) => {
      const found = cur.find((l) => l.id === p.id)
      if (found) return cur.map((l) => (l.id === p.id ? { ...l, qty: Math.min(99, l.qty + qty) } : l))
      return [...cur, { ...p, qty }]
    })
    notify(`${p.shortName} added to your cart ✨`)
  }, [notify])

  const setQty = useCallback((id, qty) => {
    setItems((cur) => (qty <= 0 ? cur.filter((l) => l.id !== id) : cur.map((l) => (l.id === id ? { ...l, qty: Math.min(99, qty) } : l))))
  }, [])

  const remove = useCallback((id) => setItems((cur) => cur.filter((l) => l.id !== id)), [])
  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const count = items.reduce((s, l) => s + l.qty, 0)
    const subtotal = items.reduce((s, l) => s + l.qty * l.price, 0)
    return { items, count, subtotal, add, setQty, remove, clear, open, setOpen, toast }
  }, [items, add, setQty, remove, clear, open, toast])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
