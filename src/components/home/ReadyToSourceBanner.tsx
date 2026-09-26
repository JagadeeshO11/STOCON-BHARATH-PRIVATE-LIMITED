import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Download } from 'lucide-react'
import './ReadyToSourceBanner.css'

export function ReadyToSourceBanner() {
  return (
    <section className="ready-banner-section">
      <div className="section-container">
        <motion.div
          className="ready-banner-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="ready-banner-content">
            <h2>Ready to Source Export-Quality <em>Fruits & Vegetables from India?</em></h2>
            <p>
              From farm sourcing to global delivery — we handle everything so your shipments arrive fresh, compliant, and on time.
            </p>
            <div className="ready-banner-actions">
              <a href="#contact" className="ready-btn-primary">
                Request a Quote <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/919566055540" target="_blank" rel="noreferrer" className="ready-btn-whatsapp">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a href="/brochure.pdf" target="_blank" rel="noreferrer" className="ready-btn-brochure">
                <Download size={18} /> Download Brochure
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
