import { AboutSection } from '../../components/home/AboutSection'
import { AnnouncementTicker } from '../../components/home/AnnouncementTicker'
import { ContactSection } from '../../components/home/ContactSection'
import { ExportProcess } from '../../components/home/ExportProcess'
import { FutureVision } from '../../components/home/FutureVision'
import { Hero } from '../../components/home/Hero'
import { ProductGrid } from '../../components/home/ProductGrid'
import { ValuesSection } from '../../components/home/ValuesSection'
import { companyContent } from '../../data/companyContent'
import { ArrowRight, CheckCircle2, Globe2, PackageCheck, Truck, Warehouse } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

export function Home() {
  return (
    <>
      <Hero />
      <AnnouncementTicker />
      <AboutSection />
      <ProductGrid />

      <section className="home-buyer-support">
        <div className="home-section-heading">
          <span className="section-label">EXPORT SUPPORT</span>
          <h2>More than a product. <em>A coordinated supply journey.</em></h2>
          <p>STOCON BHARATH connects sourcing, product preparation and shipment coordination around the requirements of each buyer.</p>
        </div>
        <div className="home-support-grid">
          {companyContent.buyerSupport.map((item, index) => {
            const icons = [PackageCheck, CheckCircle2, Warehouse, CheckCircle2, Globe2, Truck]
            const Icon = icons[index]
            return <article key={item.title}><Icon/><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
          })}
        </div>
      </section>

      <section className="home-markets">
        <div>
          <span className="section-label">MARKET DIRECTION</span>
          <h2>Built for buyers looking for <em>reliable Indian supply.</em></h2>
          <p>Our export direction is designed around practical trade conversations, from product availability and specifications to packaging, documentation and logistics.</p>
          <Link to="/contact">Discuss your requirement <ArrowRight size={17}/></Link>
        </div>
        <div className="home-market-list">
          {companyContent.marketFocus.map((market, index) => <div key={market}><span>0{index + 1}</span><strong>{market}</strong></div>)}
        </div>
      </section>

      <ExportProcess />
      <FutureVision />
      <ValuesSection />
      <ContactSection />
    </>
  )
}
