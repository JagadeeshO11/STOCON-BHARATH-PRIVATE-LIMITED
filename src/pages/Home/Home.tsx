import { Globe2, Leaf, Package, Ship } from 'lucide-react'
import { ContactSection } from '../../components/home/ContactSection'
import { ExportProcess } from '../../components/home/ExportProcess'
import { Hero } from '../../components/home/Hero'
import { ProductGrid } from '../../components/home/ProductGrid'
import './Home.css'

export function Home() {
  return <><Hero/>
    <div className="ticker">FOOD PRODUCTS <i>✦</i> FRESH FRUITS <i>✦</i> VEGETABLES <i>✦</i> INDIAN SPICES <i>✦</i> GLOBAL EXPORT</div>
    <section className="section intro" id="about"><div className="section-label">01 / ABOUT STOCON</div><div className="intro-grid"><h2>Building an export journey around <em>India's natural abundance.</em></h2><div><p>STOCON BHARATH PRIVATE LIMITED was established in August 2025 with a primary focus on the export business of food products, fruits, vegetables and spices.</p><p>Domestic sales may be undertaken according to customer requirements, while our core direction remains international trade and export opportunities.</p></div></div><div className="stats"><div><strong>2025</strong><span>Established</span></div><div><strong>4+</strong><span>Core product categories</span></div><div><strong>India</strong><span>Business base</span></div><div><strong>Global</strong><span>Export vision</span></div></div></section>
    <ProductGrid/><ExportProcess/>
    <section className="section values"><div className="section-label">04 / OUR DIRECTION</div><div className="value-grid">
      <div><span><Leaf/></span><h3>Natural focus</h3><p>A business direction centered on food and agricultural products.</p></div>
      <div><span><Globe2/></span><h3>Global outlook</h3><p>Building relationships and opportunities beyond domestic boundaries.</p></div>
      <div><span><Package/></span><h3>Buyer requirements</h3><p>Product and domestic sales requirements can be shaped around customer needs.</p></div>
      <div><span><Ship/></span><h3>Export priority</h3><p>International export remains the primary business priority for STOCON.</p></div>
    </div></section>
    <ContactSection/>
  </>
}