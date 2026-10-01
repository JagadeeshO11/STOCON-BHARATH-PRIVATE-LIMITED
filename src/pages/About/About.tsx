import { ArrowRight, Globe2, Leaf, Target, Handshake, ShieldCheck, Sprout, Snowflake, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import './About.css'

const strengths = [
  { icon: Sprout, title: 'Direct Farm Sourcing', text: 'We source directly from verified farms across India, ensuring products are harvested at peak freshness and competitive pricing.' },
  { icon: ShieldCheck, title: 'Strict Quality Inspection', text: 'Every shipment undergoes size, grading, and quality compliance checks to meet stringent international export standards.' },
  { icon: Snowflake, title: 'Cold Chain & Packaging', text: 'Proper temperature-controlled handling and international export-grade packaging preserve farm freshness during long transit.' },
  { icon: Truck, title: 'End-to-End Export Logistics', text: 'We manage full supply operations including inland transport, customs clearance, documentation, and global shipping.' }
]

const values = [
  { icon: Globe2, title: 'Global Market Reach', text: 'Exporting fresh Indian produce to the GCC, Europe, UK, USA, Southeast Asia, and Africa.' },
  { icon: Target, title: 'Requirement Focused', text: 'Tailoring product grade, packing specifications, and shipment schedules around buyer needs.' },
  { icon: Leaf, title: 'Uncompromising Freshness', text: 'Sourcing at peak harvest and using fast-track logistics to minimize transit delays.' },
  { icon: Handshake, title: 'Transparent Business', text: 'Clear documentation, transparent pricing, and dependable coordination for long-term partnerships.' }
]

export function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <AnimatedPageHero
          label="ABOUT STOCON BHARATH"
          prefix="Trusted Exporter of"
          typed="Fresh Fruits & Vegetables."
          description="STOCON BHARATH PRIVATE LIMITED is a leading Indian exporter and supplier of export-quality agri products, delivering freshness, consistency, and reliability to global markets."
        />
      </section>

      <section className="about-story">
        <motion.div className="about-story__copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="section-label">WHO WE ARE</span>
          <h2>Your Trusted Partner for <em>Global Fruit & Vegetable Trade</em></h2>
          <p>
            STOCON BHARATH PRIVATE LIMITED is a leading Indian exporter and supplier of premium-quality fresh fruits and vegetables, committed to delivering excellence, freshness, and reliability across domestic and international markets.
          </p>
          <p>
            With a strong sourcing network, modern handling practices, and export-focused quality standards, we ensure seamless supply chain solutions for exporters, importers, wholesalers, and global buyers.
          </p>
          <p>
            From Alphonso mangoes, pomegranates, grapes, onions, and chillies to other fresh and non-perishable products — we manage end-to-end export operations with full transparency.
          </p>
          <Link to="/products" className="about-btn">Explore Our Products <ArrowRight size={17} /></Link>
        </motion.div>

        <div className="about-story__cards">
          {strengths.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -7 }} transition={{ delay: i * 0.08 }}>
                <Icon size={26} style={{ color: '#4ade80', marginBottom: '12px' }} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="about-direction">
        <div>
          <span className="section-label">OUR CORE VALUES</span>
          <h2>Committed to Quality, Integrity & <em>Global Excellence.</em></h2>
          <p>Every trade partnership is built on clear communication, accurate documentation, and dependable shipment coordination.</p>
        </div>
        <div className="about-values">
          {values.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Icon size={24} style={{ color: '#4ade80', marginBottom: '10px' }} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="about-closing">
        <Globe2 size={40} style={{ color: '#4ade80' }} />
        <div>
          <span className="section-label">START A TRADE CONVERSATION</span>
          <h2>Ready to source export-quality <em>produce from India?</em></h2>
          <p>Tell us your requirement, target quantity, and destination port. Our trade team will respond promptly with pricing and availability.</p>
        </div>
        <Link to="/contact" className="about-closing-btn">Contact STOCON BHARATH <ArrowRight size={18} /></Link>
      </section>
    </>
  )
}