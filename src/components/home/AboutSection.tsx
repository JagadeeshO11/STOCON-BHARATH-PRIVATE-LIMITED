import { company } from '../../constants/company'
import { motion } from 'framer-motion'
import './AboutSection.css'

const stats = [
  ['2025', 'Established'],
  ['4+', 'Core product categories'],
  ['India', 'Business base'],
  ['Global', 'Export direction'],
] as const

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-label">01 / ABOUT STOCON</div>

      <div className="about-grid">
        <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>Building an export journey around <em>India's natural abundance.</em></motion.h2>

        <div className="about-copy">
          <p>
            {company.name} was established in {company.established} with a primary focus on
            exporting food products, fruits, vegetables and spices.
          </p>
          <p>
            Export is our priority. Domestic sales may be undertaken according to customer
            requirements while we continue building international trade opportunities.
          </p>
        </div>
      </div>

      <div className="about-stats">
        {stats.map(([value, label]) => (
          <motion.div key={label} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-4}}>
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
