import { ArrowRight, Globe2, Leaf, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import './About.css'

const principles = [
  ['Export priority', 'The primary business direction is focused on export opportunities.'],
  ['Customer requirements', 'Domestic business may be considered according to customer requirements.'],
  ['Portfolio growth', 'The product direction includes food and agricultural categories with future expansion plans.'],
]

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

      <section className="about-story">
        <div className="about-story__copy">
          <span className="section-label">OUR BUSINESS DIRECTION</span>
          <h2>An export-first journey with <em>natural products at the center.</em></h2>
          <p>Our primary business priority is export. Domestic sales are considered according to customer requirements.</p>
          <Link to="/products">Explore our products <ArrowRight size={17} /></Link>
        </div>

        <div className="about-story__cards">
          <article><Target /><h3>Priority</h3><p>Export business is the core direction of STOCON.</p></article>
          <article><Leaf /><h3>Portfolio</h3><p>Food products, fruits, vegetables and spices of different types.</p></article>
          <article><Globe2 /><h3>Future</h3><p>Future plans include frozen-condition seafood exports.</p></article>
        </div>
      </section>

      <section className="about-principles">
        <div><span className="section-label">HOW WE THINK</span><h2>A focused business direction, <em>built step by step.</em></h2></div>
        <div className="about-principles__list">
          {principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>
    </>
  )
}
