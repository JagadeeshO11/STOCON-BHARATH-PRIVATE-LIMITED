import { useState } from 'react'
import {
  ArrowRight, CheckCircle2, ChevronRight, Globe2, Leaf, Menu, Package,
  Phone, Ship, Sprout, X, Mail, MapPin, MessageCircle, Boxes
} from 'lucide-react'

const products = [
  { title: 'Fresh Fruits', text: 'Naturally sourced fruits selected for export requirements.', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=85' },
  { title: 'Fresh Vegetables', text: 'Farm-fresh vegetables for international buyers and supply partners.', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=85' },
  { title: 'Indian Spices', text: 'Aromatic Indian spices and food ingredients for global markets.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85' },
  { title: 'Food Products', text: 'Quality food products supplied according to customer requirements.', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85' },
]

const process = [
  ['01', 'Source', 'Product sourcing aligned with buyer requirements.'],
  ['02', 'Select', 'Careful selection for quality and export suitability.'],
  ['03', 'Prepare', 'Packaging and export preparation for the order.'],
  ['04', 'Deliver', 'Coordinated dispatch for international markets.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = ['Home', 'About', 'Products', 'Export Process', 'Contact']

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <header className="header">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="STOCON BHARATH home">
          <span className="brand-mark"><Leaf size={21} /></span>
          <span><strong>STOCON</strong><small>BHARATH PRIVATE LIMITED</small></span>
        </button>

        <nav className="desktop-nav">
          {nav.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}>{item}</button>)}
        </nav>

        <a className="nav-cta desktop-only" href="#contact" onClick={() => scrollTo('contact')}>Send Inquiry <ArrowRight size={16}/></a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && <div className="mobile-menu">
          {nav.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}>{item}</button>)}
          <button className="mobile-inquiry" onClick={() => scrollTo('contact')}>Send Inquiry</button>
        </div>}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> INDIA • GLOBAL EXPORT PARTNER</div>
            <h1>Rooted in India.<br/><em>Ready for the world.</em></h1>
            <p>We focus on exporting food products, fresh fruits, vegetables and spices to customers and partners across international markets.</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo('products')}>Explore Products <ArrowRight size={18}/></button>
              <button className="text-btn" onClick={() => scrollTo('about')}>Discover STOCON <ChevronRight size={18}/></button>
            </div>
            <div className="hero-proof">
              <div><Globe2 /><span><strong>Export Focus</strong><small>International markets</small></span></div>
              <div><Sprout /><span><strong>Natural Products</strong><small>Food & agriculture</small></span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-a"></div><div className="hero-orbit orbit-b"></div>
            <div className="hero-image"></div>
            <div className="floating-card card-top"><Leaf size={18}/><span>Fresh & Natural<small>Export-oriented supply</small></span></div>
            <div className="floating-card card-bottom"><Globe2 size={18}/><span>Global Vision<small>From India outward</small></span></div>
          </div>
        </section>

        <section className="ticker">
          <div>FOOD PRODUCTS <i>✦</i> FRESH FRUITS <i>✦</i> VEGETABLES <i>✦</i> INDIAN SPICES <i>✦</i> GLOBAL EXPORT <i>✦</i></div>
        </section>

        <section className="section intro" id="about">
          <div className="section-label">01 / ABOUT STOCON</div>
          <div className="intro-grid">
            <h2>Building an export journey around <em>India's natural abundance.</em></h2>
            <div>
              <p>STOCON BHARATH PRIVATE LIMITED was established in August 2025 with a primary focus on the export business of food products, fruits, vegetables and spices.</p>
              <p>Domestic sales may be undertaken according to customer requirements, while our core direction remains international trade and export opportunities.</p>
              <button className="link-btn" onClick={() => scrollTo('contact')}>Talk to our team <ArrowRight size={17}/></button>
            </div>
          </div>
          <div className="stats">
            <div><strong>2025</strong><span>Established</span></div>
            <div><strong>4+</strong><span>Core product categories</span></div>
            <div><strong>India</strong><span>Business base</span></div>
            <div><strong>Global</strong><span>Export vision</span></div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="section-head">
            <div><div className="section-label">02 / WHAT WE EXPORT</div><h2>Products with a <em>passport to travel.</em></h2></div>
            <p>Our product portfolio is designed around food and agricultural products, with flexibility to serve buyer requirements.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.title}>
                <img src={product.image} alt={product.title} />
                <div className="product-overlay"></div>
                <span className="product-number">0{index + 1}</span>
                <div className="product-info"><h3>{product.title}</h3><p>{product.text}</p><button aria-label={'Learn about ' + product.title}><ArrowRight size={19}/></button></div>
              </article>
            ))}
          </div>
          <div className="future-note"><span><Boxes size={20}/></span><div><strong>Future direction</strong><p>The company plans to explore frozen seafood exports as part of its future expansion.</p></div></div>
        </section>

        <section className="process-section" id="export-process">
          <div className="section process-inner">
            <div className="process-title"><div className="section-label light">03 / EXPORT PROCESS</div><h2>A clearer path from <em>source to shipment.</em></h2><p>Each order has its own requirements. This workflow presents the core journey we are building around export-oriented supply.</p></div>
            <div className="process-list">
              {process.map(([number, title, text]) => <div className="process-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={20}/></div>)}
            </div>
          </div>
        </section>

        <section className="section values">
          <div className="section-label">04 / OUR DIRECTION</div>
          <div className="value-grid">
            <div><span><Leaf /></span><h3>Natural focus</h3><p>A business direction centered on food and agricultural products.</p></div>
            <div><span><Globe2 /></span><h3>Global outlook</h3><p>Building relationships and opportunities beyond domestic boundaries.</p></div>
            <div><span><Package /></span><h3>Buyer requirements</h3><p>Product and domestic sales requirements can be shaped around customer needs.</p></div>
            <div><span><Ship /></span><h3>Export priority</h3><p>International export remains the primary business priority for STOCON.</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-bg"></div>
          <div className="contact-content">
            <div>
              <div className="section-label light">05 / LET'S CONNECT</div>
              <h2>Let's start the <em>conversation.</em></h2>
              <p>Tell us what you are looking to source or export. Our team can discuss your requirements and the next steps.</p>
            </div>
            <div className="contact-card">
              <a href="tel:+919566055540"><Phone size={19}/><span><small>CALL</small><strong>Kishore · +91 95660 55540</strong></span></a>
              <a href="tel:+919908149764"><Phone size={19}/><span><small>CALL</small><strong>Vijendra Rao · +91 99081 49764</strong></span></a>
              <a href="mailto:stoconbharath@gmail.com"><Mail size={19}/><span><small>EMAIL</small><strong>stoconbharath@gmail.com</strong></span></a>
              <a href="https://wa.me/919566055540" target="_blank" rel="noreferrer"><MessageCircle size={19}/><span><small>WHATSAPP</small><strong>Start a conversation</strong></span><ArrowRight size={17}/></a>
            </div>
          </div>
          <div className="address"><MapPin size={18}/> 18-1-421/4/F, 3rd Floor, City Center Complex, Tirupati, Andhra Pradesh, India · 517501</div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark"><Leaf size={19}/></span><div><strong>STOCON BHARATH</strong><small>PRIVATE LIMITED</small></div></div>
        <p>Food products, fruits, vegetables and spices for an export-focused future.</p>
        <span>© {new Date().getFullYear()} STOCON BHARATH PRIVATE LIMITED</span>
      </footer>
    </div>
  )
}

export default App