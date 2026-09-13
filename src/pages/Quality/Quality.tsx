import { CheckCircle2, ClipboardCheck, PackageCheck } from 'lucide-react'
import './Quality.css'

const pillars = [
  ['Product selection', 'Product selection is aligned with customer and export requirements.'],
  ['Preparation', 'Packaging and shipment preparation are planned for the order.'],
  ['Clear coordination', 'Customer requirements remain central to the supply and export process.'],
] as const

const icons = [CheckCircle2, PackageCheck, ClipboardCheck]

export function Quality() {
  return (
    <>
      <section className="page-hero page-hero--quality">
        <div>
          <span className="section-label">QUALITY & APPROACH</span>
          <h1>Careful coordination for <em>every requirement.</em></h1>
          <p>STOCON is building its export business around suitable products, customer requirements and clear coordination.</p>
        </div>
      </section>
      <section className="quality-page">
        <div className="quality-page__intro">
          <span className="section-label">OUR APPROACH</span>
          <h2>Quality begins with <em>the right requirement.</em></h2>
        </div>
        <div className="quality-page__grid">
          {pillars.map(([title, text], index) => {
            const Icon = icons[index]
            return <article key={title}><Icon size={28} /><h3>{title}</h3><p>{text}</p></article>
          })}
        </div>
      </section>
    </>
  )
}
