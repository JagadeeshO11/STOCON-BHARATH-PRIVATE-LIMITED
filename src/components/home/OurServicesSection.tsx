import { motion } from 'framer-motion'
import { Plane, FileCheck2, Warehouse, Truck, ArrowRight } from 'lucide-react'
import './OurServicesSection.css'

const services = [
  {
    icon: Plane,
    title: 'Air & Sea Freight',
    description: 'Fast air cargo for high-perishable produce and cost-effective containerized sea freight for bulk shipments.'
  },
  {
    icon: FileCheck2,
    title: 'Customs Clearance',
    description: 'Complete documentation support, phytosanitary certifications, and smooth customs clearance for hassle-free exports.'
  },
  {
    icon: Warehouse,
    title: 'Storage & Export Packaging',
    description: 'International export-grade packaging with proper temperature-controlled cold chain handling to ensure freshness.'
  },
  {
    icon: Truck,
    title: 'Transportation',
    description: 'Reliable refrigerated inland transport connecting verified farms directly to ports and shipping hubs.'
  }
]

export function OurServicesSection() {
  return (
    <section className="our-services-section" id="services">
      <div className="section-container">
        <div className="services-header">
          <div>
            <span className="services-badge">OUR SERVICES</span>
            <h2>End-to-End Agri Export & <em>Import Solutions</em></h2>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="service-icon">
                  <Icon size={26} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="services-cta-wrapper">
          <a href="#contact" className="services-cta-btn">
            Request a Quote <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
