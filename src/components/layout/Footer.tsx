import { ArrowUpRight, Globe2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../constants/company'
import { navigationItems } from '../../constants/navigation'
import './Footer.css'

const logoUrl='https://res.cloudinary.com/dwmjz9csc/image/upload/v1789366884/3fe8f148-a5fe-4691-b999-b68f25e84bc2.png'

export function Footer(){
 const year=new Date().getFullYear()
 return <footer className="site-footer">
   <div className="site-footer__glow site-footer__glow--one"/>
   <div className="site-footer__glow site-footer__glow--two"/>
   <div className="site-footer__top">
     <div className="site-footer__brand">
       <Link className="footer-brand" to="/">
         <img className="footer-logo" src={logoUrl} alt="STOCON BHARATH logo"/>
         <span><strong>STOCON BHARATH</strong><small>PRIVATE LIMITED</small></span>
       </Link>
       <p>Export-focused business discussions for food products, fresh fruits, vegetables and spices from India.</p>
       <div className="footer-badge"><Globe2 size={16}/> INDIA • GLOBAL BUSINESS DIRECTION</div>
     </div>
     <div className="site-footer__links">
       <span>EXPLORE</span>
       {navigationItems.map(item=><Link key={item.path} to={item.path}>{item.label}<ArrowUpRight size={14}/></Link>)}
     </div>
     <div className="site-footer__contact">
       <span>GET IN TOUCH</span>
       <a href={'mailto:'+company.email}><Mail size={17}/><div><small>EMAIL US</small><strong>{company.email}</strong></div></a>
       <a href={'tel:+91'+company.phoneNumbers[0].number}><Phone size={17}/><div><small>CALL US</small><strong>+91 {company.phoneNumbers[0].number}</strong></div></a>
       <a href={'https://wa.me/'+company.whatsappNumber} target="_blank" rel="noreferrer"><MessageCircle size={17}/><div><small>WHATSAPP</small><strong>Start an enquiry</strong></div></a>
       <div className="footer-location"><MapPin size={17}/>{company.address.singleLine}</div>
     </div>
   </div>
   <div className="site-footer__bottom">
     <span>© {year} {company.name}. All rights reserved.</span>
     <span>Designed for global conversations from India.</span>
   </div>
 </footer>
}