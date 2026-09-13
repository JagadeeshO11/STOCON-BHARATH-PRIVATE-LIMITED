import { FaLeaf, FaArrowRight } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../../constants/navigation'
import './Header.css'

export function Header() {
  return <header className="header">
    <Link className="brand" to="/" aria-label="Go to STOCON home"><span className="brand-mark"><FaLeaf /></span><span><strong>STOCON</strong><small>BHARATH PRIVATE LIMITED</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{navigationItems.map(({label,path})=><NavLink key={path} to={path} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}</nav>
    <Link className="nav-cta" to="/contact">Send Enquiry <FaArrowRight /></Link>
  </header>
}