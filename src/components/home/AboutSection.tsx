import { company } from '../../constants/company'
import { motion } from 'framer-motion'
import './AboutSection.css'

const stats = [
  ['2025', 'Established'],
  ['5+', 'Product categories'],
  ['India', 'Sourcing base'],
  ['Global', 'Export direction'],
] as const

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-label">01 / ABOUT STOCON</div>
      <div className="about-grid">
        <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>Connecting Indian sourcing with <em>global product requirements.</em></motion.h2>
        <div className="about-copy">
          <p>{company.name} was established in {company.established} with a primary focus on export-oriented food products, fresh fruits, vegetables and spices.</p>
          <p>Our approach brings together requirement-based sourcing, quality-focused preparation and coordinated shipment support for buyers and trade partners.</p>
        </div>
      </div>
      <div className="about-stats">{stats.map(([value, label]) => <motion.div key={label} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-4}}><strong>{value}</strong><span>{label}</span></motion.div>)}</div>
    </section>
  )
}
