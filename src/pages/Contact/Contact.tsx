import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '../../constants/company'
import './Contact.css'

export function Contact() {
  return (
    <>
      <section className="page-hero page-hero--contact"><AnimatedPageHero label="CONTACT STOCON" prefix="Let's begin the" typed="conversation." description="Share your product or export requirement and connect with STOCON BHARATH PRIVATE LIMITED." /></section>

      <section className="contact-page">
        <div className="contact-page__intro">
          <span className="section-label">BUSINESS INQUIRIES</span>
          <h2>Tell us what you are <em>looking for.</em></h2>
          <p>Contact STOCON regarding product requirements and export-related business discussions.</p>
        </div>

        <div className="contact-page__details">
          <motion.a initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{x:6}} href={'mailto:' + company.email}><Mail size={22} /><div><small>EMAIL</small><strong>{company.email}</strong></div><ArrowRight size={18}/></motion.a>
          {company.phoneNumbers.map((person) => (
            <motion.a key={person.number} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{x:6}} href={'tel:+91' + person.number}><Phone size={22} /><div><small>{person.name.toUpperCase()}</small><strong>+91 {person.number}</strong></div><ArrowRight size={18}/></motion.a>
          ))}
          <motion.a initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{x:6}} href={'https://wa.me/' + company.whatsappNumber} target="_blank" rel="noreferrer"><MessageCircle size={22} /><div><small>WHATSAPP</small><strong>Start a business conversation</strong></div><ArrowRight size={18}/></motion.a>
        </div>

        <div className="contact-page__address">
          <MapPin size={28} />
          <div><span className="section-label">OFFICE ADDRESS</span><p>{company.address.singleLine}</p></div>
        </div>
      </section>
    </>
  )
}