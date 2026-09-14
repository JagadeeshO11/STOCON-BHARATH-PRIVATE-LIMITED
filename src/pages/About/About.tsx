import { ArrowRight, Globe2, Leaf, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companyContent } from '../../data/companyContent'
import './About.css'

export function About() {
  const { overview, businessPrinciples } = companyContent
  return (
    <>
      <section className="page-hero page-hero--about"><AnimatedPageHero label="ABOUT STOCON BHARATH" prefix="From India, with an" typed="export-first direction." description="STOCON BHARATH PRIVATE LIMITED is based in India and focused primarily on export business." /></section>

      <section className="about-story">
        <div className="about-story__copy">
          <span className="section-label">WHO WE ARE</span>
          <h2>A new company with a clear <em>business direction.</em></h2>
          <p>{overview.primaryFocus}</p>
          <p>{overview.domesticSales}</p>
          <Link to="/products">Explore our product categories <ArrowRight size={17} /></Link>
        </div>

        <div className="about-story__cards">
          <article><Target /><h3>Established</h3><p>STOCON BHARATH PRIVATE LIMITED was established in August 2025.</p></motion.article>
          <article><Leaf /><h3>Core focus</h3><p>Food products, fruits, vegetables and spices form the current business direction.</p></motion.article>
          <article><Globe2 /><h3>Future direction</h3><p>{overview.futureDirection}</p></motion.article>
        </div>
      </section>

      <section className="about-principles">
        <div><span className="section-label">BUSINESS PRINCIPLES</span><h2>A practical direction, <em>built around requirements.</em></h2></div>
        <div className="about-principles__list">
          {businessPrinciples.map(({ title, text }, index) => <motion.article key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-7}} transition={{duration:.35}}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}
        </div>
      </section>
    </>
  )
}

import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { motion } from 'framer-motion'
