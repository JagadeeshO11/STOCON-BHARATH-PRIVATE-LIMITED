import { motion } from 'framer-motion'
import { Sprout, CheckCircle2, Snowflake, Clock, Layers, MessageSquareText, ShieldAlert } from 'lucide-react'
import './TrustFactorsSection.css'

const trustPoints = [
  {
    icon: Sprout,
    title: 'Farm-Fresh Sourcing with Faster Turnaround',
    text: 'We source directly from verified farms across India, ensuring products are harvested at peak freshness and shipped quickly for export.'
  },
  {
    icon: CheckCircle2,
    title: 'Strict Quality Grading & Export Compliance',
    text: 'Every shipment undergoes detailed size, color and quality checks to meet international import standards and reduce rejection risks.'
  },
  {
    icon: Snowflake,
    title: 'Export-Standard Packaging & Cold Chain',
    text: 'We use export-grade packaging and temperature-controlled handling to maintain freshness and quality during long-distance transit.'
  },
  {
    icon: Clock,
    title: 'Reliable Partner for On-Time Shipments',
    text: 'Strong coordination across logistics, documentation and dispatch ensures timely and hassle-free delivery worldwide.'
  },
  {
    icon: Layers,
    title: 'Wide Range of Export Products',
    text: 'From fresh fruits and vegetables to non-perishable products, we provide a reliable and consistent supply through one trusted network.'
  },
  {
    icon: MessageSquareText,
    title: 'Transparent Process & Clear Communication',
    text: 'We provide real-time updates, accurate documentation and transparent communication for smooth and long-term business partnerships.'
  },
  {
    icon: ShieldAlert,
    title: 'Active Exporter, Not Just a Trader',
    text: 'We operate as hands-on exporters, offering buyers greater reliability, better coordination and more control compared to middlemen.'
  }
]

export function TrustFactorsSection() {
  return (
    <section className="trust-factors-section">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-badge">GLOBAL TRUST</span>
          <h2>Why Buyers Worldwide Trust <em>STOCON BHARATH for Agri Exports</em></h2>
          <p className="subtitle">
            Uncompromising commitment to quality, hands-on export management, and verified farm partnerships across India.
          </p>
        </div>

        <div className="trust-grid">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                className="trust-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
              >
                <div className="trust-icon-box">
                  <Icon size={22} />
                </div>
                <div className="trust-content">
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
