import { FileCheck2, PackageCheck, Plane, Ship, Truck } from 'lucide-react'
import './ExportServices.css'

const services = [
  [Plane, 'Air & Sea Coordination', 'Shipment coordination according to order and destination requirements.'],
  [PackageCheck, 'Export Preparation', 'Preparation and packaging planning for products intended for export.'],
  [FileCheck2, 'Documentation Support', 'Documentation requirements coordinated as part of the shipment process.'],
  [Truck, 'Supply Coordination', 'Product movement and supply coordination based on customer requirements.'],
  [Ship, 'Future Expansion', 'Future business direction includes frozen-condition seafood exports.'],
] as const

export function ExportServices() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <div>
          <span className="section-label">EXPORT SERVICES</span>
          <h1>From product requirement <em>to export movement.</em></h1>
          <p>Our export-oriented workflow is designed around product requirements and coordinated movement toward international markets.</p>
        </div>
      </section>
      <section className="services-page">
        <div className="services-page__grid">
          {services.map(([Icon, title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
