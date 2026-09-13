import { company } from '../../constants/company'
import './AboutSection.css'

const stats = [
  ['2025', 'Established'],
  ['4+', 'Core product categories'],
  ['India', 'Business base'],
  ['Global', 'Export direction'],
] as const

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-label">01 / ABOUT STOCON</div>

      <div className="about-grid">
        <h2>Building an export journey around <em>India's natural abundance.</em></h2>

        <div className="about-copy">
          <p>
            {company.name} was established in {company.established} with a primary focus on
            exporting food products, fruits, vegetables and spices.
          </p>
          <p>
            Export is our priority. Domestic sales may be undertaken according to customer
            requirements while we continue building international trade opportunities.
          </p>
        </div>
      </div>

      <div className="about-stats">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
