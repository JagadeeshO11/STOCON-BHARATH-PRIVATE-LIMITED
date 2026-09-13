import './AboutSection.css'

const stats = [
  ['2025', 'Established'],
  ['4+', 'Core product categories'],
  ['India', 'Business base'],
  ['Global', 'Export vision'],
] as const

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-label">01 / ABOUT STOCON</div>
      <div className="about-grid">
        <h2>Building an export journey around <em>India's natural abundance.</em></h2>
        <div className="about-copy">
          <p>STOCON BHARATH PRIVATE LIMITED was established in August 2025 with a primary focus on the export business of food products, fruits, vegetables and spices.</p>
          <p>Domestic sales may be undertaken according to customer requirements, while our core direction remains international trade and export opportunities.</p>
        </div>
      </div>
      <div className="about-stats">{stats.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    </section>
  )
}
