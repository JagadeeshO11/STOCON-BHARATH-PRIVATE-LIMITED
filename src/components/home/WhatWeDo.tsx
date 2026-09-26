import { motion } from 'framer-motion'
import { Truck, Globe, ShieldCheck, Award } from 'lucide-react'
import './WhatWeDo.css'

const pillars = [
  {
    num: '01',
    icon: Truck,
    title: 'Supply to Indian Exporters',
    text: 'We provide export-quality fruits and vegetables to Indian exporters, ensuring timely delivery, consistent quality, and dependable sourcing support for international shipments.'
  },
  {
    num: '02',
    icon: Globe,
    title: 'Direct International Export',
    text: 'We directly export fresh Indian produce to global markets including UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain, Malaysia, Singapore, Vietnam, Europe, and Africa.'
  },
  {
    num: '03',
    icon: Award,
    title: 'Import of Premium Fruits',
    text: 'We also import high-quality fruits such as apples, kiwi, dragon fruit, and beauty pear to meet the increasing demand in the Indian market.'
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Quality & Commitment',
    text: 'Our focus on freshness, quality inspection, secure packaging, and professional service makes us a trusted name in the agri-export industry.'
  }
]

export function WhatWeDo() {
  return (
    <section className="what-we-do-section" id="what-we-do">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">WHAT WE DO</span>
          <h2>Your Trusted Partner for <em>Global Fruit & Vegetable Trade</em></h2>
          <p className="section-description">
            STOCON BHARATH PRIVATE LIMITED is a leading Indian exporter and supplier of premium-quality fresh fruits and vegetables, committed to delivering excellence, freshness, and reliability across domestic and international markets.
          </p>
          <p className="section-subdescription">
            With a strong sourcing network, modern handling practices, and export-focused quality standards, we ensure seamless supply chain solutions for exporters, importers, wholesalers, and global buyers.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="pillar-top">
                  <span className="pillar-num">{item.num}</span>
                  <div className="pillar-icon">
                    <Icon size={24} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
