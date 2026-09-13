import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '../../constants/company'
import './Contact.css'

export function Contact() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span className="section-label">CONTACT STOCON</span>
          <h1>Let's begin the <em>conversation.</em></h1>
          <p>Share your product or export requirement and connect with STOCON BHARATH PRIVATE LIMITED.</p>
        </div>
      </section>
      <section className="contact-page">
        <div className="contact-page__details">
          <a href={'mailto:' + company.email}><Mail size={22} /><div><small>EMAIL</small><strong>{company.email}</strong></div></a>
          <a href="tel:+919566055540"><Phone size={22} /><div><small>PHONE</small><strong>+91 95660 55540</strong></div></a>
          <a href={'https://wa.me/' + company.whatsappNumber} target="_blank" rel="noreferrer"><MessageCircle size={22} /><div><small>WHATSAPP</small><strong>Start a conversation</strong></div></a>
        </div>
        <div className="contact-page__address"><MapPin size={26} /><div><span className="section-label">OFFICE ADDRESS</span><p>{company.address.singleLine}</p></div></div>
      </section>
    </>
  )
}
