import { House, Info, Package, ShieldCheck, ShipWheel } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import './BottomNav.css'
const items=[['/', 'Home', House],['/about','About',Info],['/products','Products',Package],['/export-services','Export',ShipWheel],['/quality','Quality',ShieldCheck]] as const
export function BottomNav(){return <nav className="bottom-nav" aria-label="Quick navigation">{items.map(([path,label,Icon])=><NavLink key={path} to={path} end={path==='/'}><Icon size={19}/><span>{label}</span></NavLink>)}</nav>}