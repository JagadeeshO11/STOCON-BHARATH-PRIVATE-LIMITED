import { FaArrowRight } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../../constants/navigation'
import './Header.css'

const logoUrl = 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789366884/3fe8f148-a5fe-4691-b999-b68f25e84bc2.png'

export function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/" aria-label="Go to STOCON BHARATH home">
        <img className="brand-logo" src={logoUrl} alt="STOCON BHARATH PRIVATE LIMITED logo" />
        <span><strong>STOCON</strong><small>BHARATH PVT LIMITED</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigationItems.map(({ label, path }) => (
          <NavLink key={path} to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
            {label}
          </NavLink>
        ))}
      </nav>
      <Link className="nav-cta" to="/contact">Request a Quote <FaArrowRight /></Link>
    </header>
  )
}