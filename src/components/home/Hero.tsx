import { ArrowRight, Globe2, Leaf, ShieldCheck, Sprout, MessageCircle, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const logoUrl = 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789366884/3fe8f148-a5fe-4691-b999-b68f25e84bc2.png'
const heroVideo = 'https://res.cloudinary.com/dwmjz9csc/video/upload/v1789390588/now_genrate_the_video_tqrqom.mp4'

const categories = [
  { name: 'Fresh Vegetables', slug: 'fresh-vegetables', image: 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789838380/b66d7612-89e6-4095-aba2-841d5589b533.png', pos: 'node-spices' },
  { name: 'Fresh Fruits', slug: 'fresh-fruits', image: 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789837773/d6a404c1-aaa2-4d32-8f63-70b006a346db.png', pos: 'node-grains' },
  { name: 'Non-Perishable', slug: 'non-perishable', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389022/hero-dehydrated-products.jpg', pos: 'node-oil' },
  { name: 'Imported Fruits', slug: 'imported-fruits', image: 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789837850/707a1f94-e13f-4bfa-9d61-e11352b91c2a.png', pos: 'node-fruits' },
  { name: 'Spices & Herbs', slug: 'spices-herbs', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376285/hero-spices.webp', pos: 'node-dehydrated' },
  { name: 'Grains & Pulses', slug: 'grains-pulses', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376279/hero-grains.webp', pos: 'node-processed' },
]

export function Hero() {
  return (
    <section className="hero" id="home">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />

      <div className="hero-inner">
        <motion.div className="hero-network" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75 }}>
          <svg className="network-lines" viewBox="0 0 640 640" aria-hidden="true">
            <circle className="orbit orbit-main" cx="320" cy="320" r="230" />
            <circle className="orbit orbit-inner" cx="320" cy="320" r="128" />
            <path className="spokes" d="M320 320L320 90M320 320L519.2 205M320 320L519.2 435M320 320L320 550M320 320L120.8 435M320 320L120.8 205" />
            <circle className="connector" cx="320" cy="90" r="6" />
            <circle className="connector" cx="519.2" cy="205" r="6" />
            <circle className="connector" cx="519.2" cy="435" r="6" />
            <circle className="connector" cx="320" cy="550" r="6" />
            <circle className="connector" cx="120.8" cy="435" r="6" />
            <circle className="connector" cx="120.8" cy="205" r="6" />
          </svg>

          <div className="brand-hub">
            <div className="brand-hub__ring">
              <img className="brand-hub__logo" src={logoUrl} alt="STOCON BHARATH PRIVATE LIMITED" />
            </div>
          </div>

          {categories.map((item, index) => (
            <motion.div key={item.name} className={'category-node ' + item.pos} initial={{ opacity: 0, scale: 0.65 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + index * 0.07, type: 'spring', stiffness: 110 }}>
              <Link to={'/products#' + item.slug} className="category-link" aria-label={'Explore ' + item.name}>
                <img src={item.image} alt={item.name} loading="eager" />
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="hero-copy" initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.18 }}>
          <div className="hero-leaf-badge">
            <Leaf size={16} className="leaf-badge-icon" />
            <span>Trusted Indian Exporter of Fresh Fruits & Vegetables for Global Markets</span>
          </div>

          <h1 className="hero-title">
            <span>STOCON BHARATH is a leading Indian exporter of fresh fruits & vegetables,</span>
            <em className="hero-title__accent">
              supplying export-quality agri products to global buyers across the GCC, Europe, UK, USA, Southeast Asia, and Africa.
            </em>
          </h1>

          <p className="hero-text-highlight">
            Whether you’re an international importer or an Indian exporter, we deliver reliable, on-time shipments with full transparency.
          </p>

          <div className="hero-actions">
            <Link className="primary-btn" to="/contact">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <a className="secondary-whatsapp-btn" href="https://wa.me/919566055540" target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a className="secondary-brochure-btn" href="/brochure.pdf" target="_blank" rel="noreferrer">
              <Download size={18} /> View Brochure
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-features">
        <div><Globe2 /><span><strong>Global Markets</strong><small>GCC, Europe, UK, USA, SE Asia, Africa</small></span></div>
        <div><Leaf /><span><strong>Verified Farm Sourcing</strong><small>Freshness & competitive pricing</small></span></div>
        <div><ShieldCheck /><span><strong>Quality & Transparency</strong><small>Strict inspection & full compliance</small></span></div>
        <div><Sprout /><span><strong>End-to-End Export</strong><small>Packaging, Cold Chain & Shipping</small></span></div>
      </div>
    </section>
  )
}
