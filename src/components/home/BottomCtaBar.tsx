import { ArrowRight, MessageCircle, Download } from 'lucide-react'
import './BottomCtaBar.css'

export function BottomCtaBar() {
  return (
    <section className="bottom-cta-section">
      <div className="section-container">
        <div className="bottom-cta-inner">
          <div className="bottom-cta-text">
            <h3>Looking for a Reliable Fresh Fruits & Vegetables Exporter from India?</h3>
            <p>From farm sourcing to global delivery — we handle everything so your shipments arrive fresh, compliant, and on time.</p>
          </div>
          <div className="bottom-cta-buttons">
            <a href="#contact" className="bottom-btn-quote">
              Request a Quote <ArrowRight size={17} />
            </a>
            <a href="https://wa.me/919566055540" target="_blank" rel="noreferrer" className="bottom-btn-whatsapp">
              <MessageCircle size={17} /> WhatsApp Us
            </a>
            <a href="/brochure.pdf" target="_blank" rel="noreferrer" className="bottom-btn-brochure">
              <Download size={17} /> Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
