import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Clock, Sprout, Snowflake, FileCheck, Eye } from 'lucide-react'
import './WhyGlobalBuyersChoose.css'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Strict Quality Control at Every Stage',
    text: 'From farm sourcing to final delivery, every shipment undergoes multiple quality checks to meet international export standards and ensure premium freshness.'
  },
  {
    icon: Clock,
    title: 'Reliable & On-Time Global Shipments',
    text: 'We ensure timely dispatch and delivery through efficient logistics management and strong supply chain coordination, minimizing delays and losses.'
  },
  {
    icon: Sprout,
    title: 'Verified Farm Network Across India',
    text: 'We source directly from trusted farmers across India to guarantee consistent quality, competitive pricing, and year-round product availability.'
  },
  {
    icon: Snowflake,
    title: 'Export-Standard Packaging & Cold Chain',
    text: 'Our products are packed using international export standards with proper temperature-controlled handling to maintain freshness during transit.'
  },
  {
    icon: FileCheck,
    title: 'End-to-End Export Management',
    text: 'From sourcing and packaging to customs clearance, logistics, and documentation — we manage the complete export process smoothly and professionally.'
  },
  {
    icon: Eye,
    title: 'Transparent Communication & Pricing',
    text: 'We provide clear communication, accurate documentation, and transparent pricing with no hidden surprises, keeping you informed at every stage.'
  }
]

export function WhyGlobalBuyersChoose() {
  return (
    <section className="why-choose-section" id="why-choose-us">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="leaf-badge">
            <Leaf size={18} className="leaf-badge-icon" />
            <span>WHY GLOBAL BUYERS CHOOSE STOCON BHARATH</span>
          </div>
          <h2>Building Long-Term Trust Through <em>Excellence & Precision</em></h2>
          <p className="subtitle">
            Global importers rely on STOCON BHARATH PRIVATE LIMITED for verified sourcing, export-grade packaging, and seamless worldwide shipping.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                className="reason-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="reason-icon-wrapper">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
