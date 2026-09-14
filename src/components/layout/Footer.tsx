import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../constants/company'
import { navigationItems } from '../../constants/navigation'
import './Footer.css'

const logoUrl = 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789366884/3fe8f148-a5fe-4691-b999-b68f25e84bc2.png'

export function Footer(){
 const year=new Date().getFullYear()
 return <footer className="site-footer">
  <div className="site-footer__top">
   <div className="site-footer__brand">
    <div className="footer-brand">
      <img className="footer-logo" src={logoUrl} alt="STOCON BHARATH logo" />
      <div><strong>STOCON BHARATH</strong><small>PRIVATE LIMITED</small></div>
    </div>
    <p>Food products, fruits, vegetables and spices with an export-focused business direction.</p>
   </div>
   <div className="site-footer__links"><span>EXPLORE</span>{navigationItems.map(item=><Link key={item.path} to={item.path}>{item.label}</Link>)}</div>
   <div className="site-footer__contact"><span>BUSINESS CONTACT</span><a href={'mailto:'+company.email}>{company.email}<ArrowUpRight size={15}/></a><a href={'tel:+91'+company.phoneNumbers[0].number}>+91 {company.phoneNumbers[0].number}</a></div>
  </div>
  <div className="site-footer__bottom"><span>© {year} {company.name}</span><span>India · Global export direction</span></div>
 </footer>
}