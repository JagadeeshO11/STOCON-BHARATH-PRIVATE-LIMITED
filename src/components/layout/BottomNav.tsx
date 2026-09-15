import { FaHouse, FaCircleInfo, FaLayerGroup, FaShip, FaShieldHalved, FaAddressBook, FaWhatsapp } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { company } from '../../constants/company'
import './BottomNav.css'

const items=[
  ['/', 'Home', FaHouse],
  ['/about', 'About', FaCircleInfo],
  ['/categories', 'Categories', FaLayerGroup],
  ['/export-services', 'Export', FaShip],
  ['/quality', 'Quality', FaShieldHalved],
  ['/contact', 'Contact', FaAddressBook],
] as const

export function BottomNav(){return <div className="bottom-bar"><nav className="bottom-nav" aria-label="Quick navigation">{items.map(([path,label,Icon])=><NavLink key={path} to={path} end={path==='/' }><Icon/><span>{label}</span></NavLink>)}</nav><a className="bottom-whatsapp" href={'https://wa.me/'+company.whatsappNumber} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><FaWhatsapp/></a></div>}