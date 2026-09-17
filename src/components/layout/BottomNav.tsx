import { FaHouse, FaCircleInfo, FaBoxOpen, FaAddressBook } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import './BottomNav.css'

const items = [
  ['/', 'Home', FaHouse],
  ['/about', 'About', FaCircleInfo],
  ['/products', 'Products', FaBoxOpen],
  ['/contact', 'Contact', FaAddressBook],
] as const

export function BottomNav() {
  return (
    <div className="bottom-bar">
      <nav className="bottom-nav" aria-label="Quick navigation">
        {items.map(([path, label, Icon]) => (
          <NavLink key={path} to={path} end={path === '/'}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
