import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './ExportProcess.css'

const steps = [
  ['01', 'Source', 'Identify suitable products through requirement-based sourcing.'],
  ['02', 'Grade', 'Review quality, size and suitability for the destination market.'],
  ['03', 'Pack', 'Prepare export-standard packaging and temperature-controlled handling where required.'],
  ['04', 'Ship', 'Coordinate documentation, logistics and dispatch for timely delivery.'],
] as const

export function ExportProcess() {
  return (
    <section className="process-section" id="export-process">
      <div className="section process-inner">
        <div className="process-title">
          <div className="section-label light">03 / EXPORT PROCESS</div>
          <h2>A clear path from <em>source to shipment.</em></h2>
          <p>Every order is handled around its product, quantity, quality and destination requirements.</p>
        </div>
        <div className="process-list">{steps.map(([number, title, description]) => <motion.article className="process-item" key={number} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-6}}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={20} aria-hidden="true" /></motion.article>)}</div>
      </div>
    </section>
  )
}
