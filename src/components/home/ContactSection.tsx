import { ArrowRight, Mail, MapPin, MessageCircle } from 'lucide-react'
import { company } from '../../constants/company'
import './ContactSection.css'

export function ContactSection() {
  return <section className="contact-section" id="contact"><div className="contact-bg"/><div className="contact-content">
    <div><div className="section-label light">05 / LET'S CONNECT</div><h2>Let's start the <em>conversation.</em></h2><p>Tell us what you are looking to source or export. Our team can discuss your requirements and the next steps.</p></div>
    <div className="contact-card"><a href={'mailto:'+company.email}><Mail size={19}/><span><small>EMAIL</small><strong>{company.email}</strong></span></a><a href={'https://wa.me/'+company.whatsappNumber} target="_blank" rel="noreferrer"><MessageCircle size={19}/><span><small>WHATSAPP</small><strong>Start a conversation</strong></span><ArrowRight size={17}/></a></div>
  </div><div className="address"><MapPin size={18}/> {company.address}</div></section>
}