import { CheckCircle2, ClipboardCheck, PackageCheck, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Quality.css'

type Pillar = { title: string; text: string; icon: LucideIcon }

const pillars: Pillar[] = [
  { title: 'Clear product requirement', text: 'The product category and customer requirement should be clearly understood before business discussions move forward.', icon: CheckCircle2 },
  { title: 'Requirement-based discussion', text: 'STOCON’s stated approach allows product and domestic-sales discussions to be considered according to customer requirements.', icon: PackageCheck },
  { title: 'Direct communication', text: 'Buyers and customers can contact STOCON directly to discuss their food, fruit, vegetable or spice requirements.', icon: ClipboardCheck },
]

export function Quality() {
  return <>
    <section className="page-hero page-hero--quality"><AnimatedPageHero label="QUALITY & REQUIREMENTS" prefix="The right conversation starts with" typed="a clear requirement." description="STOCON’s current business information emphasizes product categories, customer requirements and an export-first direction." /></section>
    <section className="quality-page">
      <div className="quality-page__intro"><div><span className="section-label">OUR APPROACH</span><h2>Understand the requirement. <em>Then move forward.</em></h2></div><ShieldCheck size={52}/></div>
      <div className="quality-page__grid">{pillars.map(({ title, text, icon: Icon }, index) => <motion.article key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-7}} transition={{duration:.35}}><span>0{index + 1}</span><Icon size={30}/><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
      <div className="quality-page__statement"><div><span className="section-label">BUSINESS DISCUSSION</span><h3>Food products, fruits, vegetables or spices? Tell us what you need.</h3></div><Link to="/contact">Send an enquiry →</Link></div>
    </section>
  </>
}

import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { motion } from 'framer-motion'
