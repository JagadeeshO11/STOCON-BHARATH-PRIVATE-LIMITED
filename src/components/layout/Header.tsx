import { useState } from 'react'
import { ArrowRight, Leaf, Menu, X } from 'lucide-react'
import './Header.css'

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Products', 'products'],
  ['Export Process', 'export-process'],
  ['Contact', 'contact'],
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <header className="header">
      <button
        className="brand"
        onClick={() => go('home')}
        aria-label="Go to STOCON home"
      >
        <span className="brand-mark"><Leaf size={21} /></span>
        <span>
          <strong>STOCON</strong>
          <small>BHARATH PRIVATE LIMITED</small>
        </span>
      </button>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, id]) => (
          <button key={id} onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </nav>

      <button className="nav-cta desktop-only" onClick={() => go('contact')}>
        Send Inquiry <ArrowRight size={16} />
      </button>

      <button
        className="menu-btn"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navigation.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
          <button className="mobile-inquiry" onClick={() => go('contact')}>
            Send Inquiry
          </button>
        </nav>
      )}
    </header>
  )
}
