import { FaHouse, FaCircleInfo, FaLayerGroup, FaShip, FaShieldHalved, FaAddressBook } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import './BottomNav.css'

const items = [
  ['/', 'Home', FaHouse],
  ['/about', 'About', FaCircleInfo],
  ['/categories', 'Categories', FaLayerGroup],
  ['/export-services', 'Export', FaShip],
  ['/quality', 'Quality', FaShieldHalved],
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
