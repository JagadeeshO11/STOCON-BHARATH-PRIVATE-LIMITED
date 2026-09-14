import { ArrowRight, Globe2, Leaf, Sprout } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Typewriter } from '../ui/Typewriter'
import './Hero.css'

const reveal={hidden:{opacity:0,y:28},show:{opacity:1,y:0}}

export function Hero(){
 return <section className="hero" id="home">
  <motion.div className="hero-copy" initial="hidden" animate="show" transition={{staggerChildren:.14}}>
   <motion.div variants={reveal} className="eyebrow"><span/>INDIA • GLOBAL EXPORT PARTNER</motion.div>
   <motion.h1 variants={reveal}>Rooted in India.<br/><em><Typewriter text="Ready for the world." delay={700}/></em></motion.h1>
   <motion.p variants={reveal}>We focus on exporting food products, fresh fruits, vegetables and spices to customers and partners across international markets.</motion.p>
   <motion.div variants={reveal} className="hero-actions"><Link className="primary-btn" to="/products">Explore Products <ArrowRight size={18}/></Link><Link className="text-btn" to="/about">Discover STOCON <ArrowRight size={18}/></Link></motion.div>
   <motion.div variants={reveal} className="hero-proof"><div><Globe2/><span><strong>Export Focus</strong><small>International markets</small></span></div><div><Sprout/><span><strong>Natural Products</strong><small>Food & agriculture</small></span></div></motion.div>
  </motion.div>
  <motion.div className="hero-visual" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.25}}>
   <div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/><div className="hero-image"/>
   <motion.div className="floating-card card-top" animate={{y:[0,-8,0]}} transition={{duration:3,repeat:Infinity}}><Leaf size={18}/><span>Fresh & Natural<small>Export-oriented supply</small></span></motion.div>
   <motion.div className="floating-card card-bottom" animate={{y:[0,8,0]}} transition={{duration:3.5,repeat:Infinity}}><Globe2 size={18}/><span>Global Vision<small>From India outward</small></span></motion.div>
  </motion.div>
 </section>
}