import { ArrowRight, ChevronRight, Globe2, Leaf, Sprout } from 'lucide-react'
import './Hero.css'

export function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return <section className="hero" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><span/> INDIA • GLOBAL EXPORT PARTNER</div>
      <h1>Rooted in India.<br/><em>Ready for the world.</em></h1>
      <p>We focus on exporting food products, fresh fruits, vegetables and spices to customers and partners across international markets.</p>
      <div className="hero-actions"><button className="primary-btn" onClick={() => go('products')}>Explore Products <ArrowRight size={18}/></button><button className="text-btn" onClick={() => go('about')}>Discover STOCON <ChevronRight size={18}/></button></div>
      <div className="hero-proof"><div><Globe2/><span><strong>Export Focus</strong><small>International markets</small></span></div><div><Sprout/><span><strong>Natural Products</strong><small>Food & agriculture</small></span></div></div>
    </div>
    <div className="hero-visual"><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/><div className="hero-image"/><div className="floating-card card-top"><Leaf size={18}/><span>Fresh & Natural<small>Export-oriented supply</small></span></div><div className="floating-card card-bottom"><Globe2 size={18}/><span>Global Vision<small>From India outward</small></span></div></div>
  </section>
}