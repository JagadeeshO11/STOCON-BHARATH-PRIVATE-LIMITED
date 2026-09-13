import { ArrowRight, Leaf, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../../constants/navigation'
import './Header.css'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <Link className="brand" to="/" aria-label="Go to STOCON home">
        <span className="brand-mark"><Leaf size={21} /></span>
        <span><strong>STOCON</strong><small>BHARATH PRIVATE LIMITED</small></span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigationItems.map(({ label, path }) => (
          <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''}>
            {label}
          </NavLink>
        ))}
      </nav>

      <Link className="nav-cta desktop-only" to="/contact">
        Send Inquiry <ArrowRight size={16} />
      </Link>

      <button className="menu-btn" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navigationItems.map(({ label, path }) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <NavLink className="mobile-inquiry" to="/contact" onClick={() => setOpen(false)}>
            Send Inquiry
          </NavLink>
        </nav>
      )}
    </header>
  )
}
