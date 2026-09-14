import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './ExportProcess.css'

const steps = [
  ['01', 'Source', 'Product sourcing aligned with buyer requirements.'],
  ['02', 'Select', 'Careful selection for quality and export suitability.'],
  ['03', 'Prepare', 'Packaging and export preparation for the order.'],
  ['04', 'Deliver', 'Coordinated dispatch for international markets.'],
] as const

export function ExportProcess() {
  return (
    <section className="process-section" id="export-process">
      <div className="section process-inner">
        <div className="process-title">
          <div className="section-label light">03 / EXPORT PROCESS</div>
          <h2>A clearer path from <em>source to shipment.</em></h2>
          <p>
            Each order has its own requirements. This workflow presents the core journey
            around export-oriented supply.
          </p>
        </div>

        <div className="process-list">
          {steps.map(([number, title, description]) => (
            <motion.article className="process-item" key={number} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-6}}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ArrowRight size={20} aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
