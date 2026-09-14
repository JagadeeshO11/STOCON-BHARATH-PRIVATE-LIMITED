import { ArrowRight, Globe2, Leaf, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { companyContent } from '../../data/companyContent'
import './About.css'

export function About(){
 const {overview,businessPrinciples}=companyContent
 return <><section className="page-hero page-hero--about"><AnimatedPageHero label="ABOUT STOCON BHARATH" prefix="From India, with an" typed="export-first direction." description="STOCON BHARATH PRIVATE LIMITED is based in India and focused primarily on export business."/></section>
 <section className="about-story"><motion.div className="about-story__copy" initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><span className="section-label">WHO WE ARE</span><h2>A new company with a clear <em>business direction.</em></h2><p>{overview.primaryFocus}</p><p>{overview.domesticSales}</p><Link to="/products">Explore our product categories <ArrowRight size={17}/></Link></motion.div>
 <div className="about-story__cards">{[[Target,'Established','STOCON BHARATH PRIVATE LIMITED was established in August 2025.'],[Leaf,'Core focus','Food products, fruits, vegetables and spices form the current business direction.'],[Globe2,'Future direction',overview.futureDirection]].map(([Icon,title,text],i)=>{const I=Icon as typeof Target;return <motion.article key={String(title)} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-7}} transition={{delay:i*.08}}><I/><h3>{String(title)}</h3><p>{String(text)}</p></motion.article>})}</div></section>
 <section className="about-principles"><div><span className="section-label">BUSINESS PRINCIPLES</span><h2>A practical direction, <em>built around requirements.</em></h2></div><div className="about-principles__list">{businessPrinciples.map(({title,text},index)=><motion.article key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}</div></section></>
}