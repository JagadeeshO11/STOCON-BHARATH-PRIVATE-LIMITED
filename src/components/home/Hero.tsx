import { ArrowRight, Globe2, Leaf, ShieldCheck, Sprout } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const logoUrl = 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1789366884/3fe8f148-a5fe-4691-b999-b68f25e84bc2.png'
const heroVideo = 'https://res.cloudinary.com/dwmjz9csc/video/upload/v1789390588/now_genrate_the_video_tqrqom.mp4'

const categories = [
  { name: 'Fresh Vegetables', slug: 'fresh-vegetables', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376285/hero-spices.webp', pos: 'node-spices' },
  { name: 'Fresh Fruits', slug: 'fresh-fruits', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376279/hero-grains.webp', pos: 'node-grains' },
  { name: 'Food & Non-Perishable', slug: 'non-perishable', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789376292/hero-oil-seeds.jpg', pos: 'node-oil' },
  { name: 'Imported Fruits', slug: 'imported-fruits', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389015/hero-fresh-fruits-vegetables.png', pos: 'node-fruits' },
  { name: 'Spices & Herbs', slug: 'spices-herbs', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389022/hero-dehydrated-products.jpg', pos: 'node-dehydrated' },
  { name: 'Grains & Pulses', slug: 'grains-pulses', image: 'https://res.cloudinary.com/znbhjevm/image/upload/v1789389031/hero-processed-foods.jpg', pos: 'node-processed' },
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
              <img className="brand-hub__logo" src={logoUrl} alt="STOCON Bharath Private Limited" />
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
          <div className="eyebrow"><span />INDIA · GLOBAL EXPORT PARTNER</div>
          <h1 className="hero-title">
            <span>Fresh Indian Products.</span>
            <span>Supplying to</span>
            <em className="hero-title__accent">
              <span>Global</span>
              <span>Markets.</span>
            </em>
          </h1>
          <p>Export-focused sourcing of fresh fruits, vegetables and food products, prepared around buyer requirements and destination markets.</p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/products">Explore Our Products <ArrowRight size={18} /></Link>
          </div>
        </motion.div>
      </div>

      <div className="hero-features">
        <div><Globe2 /><span><strong>Global Markets</strong><small>Export-focused supply</small></span></div>
        <div><Leaf /><span><strong>Quality Focus</strong><small>Freshness & grading</small></span></div>
        <div><ShieldCheck /><span><strong>Reliable Supply</strong><small>Clear coordination</small></span></div>
        <div><Sprout /><span><strong>Export Ready</strong><small>Packaging & logistics</small></span></div>
      </div>

      <style>{`
        .hero .hero-copy .hero-title {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          text-wrap: balance;
        }
        .hero .hero-copy .hero-title > span {
          display: block;
          max-width: 100%;
        }
        .hero .hero-copy .hero-title__accent {
          display: block;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          white-space: normal !important;
          overflow: visible !important;
          overflow-wrap: normal;
          word-break: normal;
          line-height: 1.06;
          font-size: clamp(34px, 4.2vw, 64px);
        }
        .hero .hero-copy .hero-title__accent > span {
          display: block;
          max-width: 100%;
        }
        @media (max-width: 1180px) {
          .hero .hero-copy {
            width: min(100%, 640px);
          }
        }
        @media (max-width: 760px) {
          .hero .hero-copy {
            width: min(100%, 560px);
          }
          .hero .hero-copy .hero-title {
            font-size: clamp(34px, 10vw, 52px);
            line-height: 1.06;
            letter-spacing: -0.04em;
          }
          .hero .hero-copy .hero-title__accent {
            font-size: clamp(24px, 7.2vw, 40px);
            line-height: 1.12;
            letter-spacing: -0.025em;
          }
        }
        @media (max-width: 420px) {
          .hero .hero-copy .hero-title {
            font-size: clamp(30px, 9.4vw, 44px);
          }
          .hero .hero-copy .hero-title__accent {
            font-size: clamp(21px, 6.8vw, 31px);
          }
        }
      `}</style>
    </section>
  )
}
