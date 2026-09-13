import { Globe2, Leaf, Target } from 'lucide-react'
import './About.css'

export function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div>
          <span className="section-label">ABOUT STOCON BHARATH</span>
          <h1>Rooted in India. <em>Built for global trade.</em></h1>
          <p>STOCON BHARATH PRIVATE LIMITED was established in August 2025 with an export-first focus on food products, fruits, vegetables and spices.</p>
        </div>
      </section>
      <section className="page-section about-story">
        <div className="about-story__copy">
          <span className="section-label">OUR BUSINESS</span>
          <h2>An export-first direction with <em>natural products at the center.</em></h2>
          <p>Our primary business priority is export. Domestic sales are considered according to customer requirements.</p>
        </div>
        <div className="about-story__cards">
          <article><Target /><h3>Priority</h3><p>Export business is the core direction of STOCON.</p></article>
          <article><Leaf /><h3>Portfolio</h3><p>Food products, fruits, vegetables and spices of different types.</p></article>
          <article><Globe2 /><h3>Future</h3><p>Future plans include frozen-condition seafood exports.</p></article>
        </div>
      </section>
    </>
  )
}
