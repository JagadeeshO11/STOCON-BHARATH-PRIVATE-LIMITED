import { ArrowRight, FileCheck2, Plane, Truck, Warehouse, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import './Services.css'

const mainServices = [
  {
    icon: Plane,
    badge: 'AIR & SEA FREIGHT',
    title: 'Air & Sea Freight Solutions',
    description: 'We provide end-to-end air and sea freight coordination for fresh perishable produce and bulk agri commodities.',
    features: [
      'Express air freight for high-perishable fruits & green chillies',
      'Containerized sea freight (Reefer & Dry Containers)',
      'Optimal route selection minimizing transit times',
      'Full shipment tracking and status updates'
    ]
  },
  {
    icon: FileCheck2,
    badge: 'CUSTOMS CLEARANCE',
    title: 'Customs Clearance & Documentation',
    description: 'Complete regulatory compliance and phytosanitary documentation support ensuring fast clearance at origin and destination ports.',
    features: [
      'Phytosanitary certificates & APEDA compliance',
      'Certificate of Origin & customs documentation',
      'Import/Export clearance management',
      'Regulatory compliance checks for EU, GCC, UK & US markets'
    ]
  },
  {
    icon: Warehouse,
    badge: 'STORAGE & PACKAGING',
    title: 'Storage & Export Standard Packaging',
    description: 'International export-grade packaging with temperature-controlled cold chain storage to maintain produce freshness.',
    features: [
      'Export-grade corrugated boxes & net bags',
      'Custom branding & labeling per buyer requirements',
      'Cold storage facilities maintained at optimal temperatures',
      'Pre-cooling and moisture-controlled handling'
    ]
  },
  {
    icon: Truck,
    badge: 'INLAND LOGISTICS',
    title: 'Refrigerated Inland Transportation',
    description: 'Direct temperature-controlled logistics connecting verified farms across India directly to major ports and airports.',
    features: [
      'Direct farm-to-port transportation',
      'Refrigerated trucks (reefer containers) for perishables',
      'Fast turnaround time from harvest to packing',
      'Minimized handling to prevent product damage'
    ]
  }
]

export function Services() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <AnimatedPageHero
          label="STOCON BHARATH SERVICES"
          prefix="End-to-End Agri"
          typed="Export & Import Solutions."
          description="We provide comprehensive export and import services from India, ensuring your shipments move faster, safer, and without delays."
        />
      </section>

      <section className="services-intro">
        <div>
          <span className="section-label">OUR SERVICE CAPABILITIES</span>
          <h2>End-to-End Trade Execution with <em>Precision & Compliance.</em></h2>
        </div>
      </section>

      <section className="services-detail-grid">
        {mainServices.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              className="service-detail-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-badge">
                <Icon size={18} />
                <span>{service.badge}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="card-desc">{service.description}</p>

              <ul className="feature-list">
                {service.features.map((feat) => (
                  <li key={feat}>
                    <ShieldCheck size={16} className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </section>

      <section className="services-cta">
        <div>
          <span className="section-label">NEED A CUSTOM LOGISTICS PLAN?</span>
          <h2>Request a custom quote for your <em>shipment requirements.</em></h2>
          <p>Whether you need full container loads (FCL) or air cargo consignments, our export specialists are here to assist you.</p>
        </div>
        <Link to="/contact" className="services-cta-btn">
          Request a Quote <ArrowRight size={18} />
        </Link>
      </section>
    </>
  )
}