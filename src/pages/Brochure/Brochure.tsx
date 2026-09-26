import { ArrowRight, Download, FileText, Globe2, PackageSearch, ShieldCheck, Truck } from 'lucide-react'
import { company } from '../../constants/company'
import { productCategories } from '../../data/products'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import './Brochure.css'

export function Brochure(){
  const steps = [
    [FileText, 'Requirement', 'Share product, quantity, destination and specifications.'],
    [PackageSearch, 'Sourcing', 'We align sourcing with the requested category and supply requirement.'],
    [ShieldCheck, 'Quality & packing', 'Discuss quality expectations, packing format and practical shipment details.'],
    [Truck, 'Logistics', 'Move toward documentation, dispatch planning and destination coordination.'],
  ] as const

  return <>
    <section className="page-hero brochure-hero">
      <AnimatedPageHero
        label="STOCON BHARATH PRIVATE LIMITED"
        prefix="A focused"
        typed="export partner."
        description="Explore our product categories, sourcing approach and enquiry workflow in a clean digital brochure."
      />
    </section>

    <section className="brochure-page">
      <section className="brochure-intro">
        <div>
          <span className="section-label">COMPANY BROCHURE</span>
          <h2>From Indian sourcing to <em>international supply.</em></h2>
          <p>STOCON BHARATH PRIVATE LIMITED works around practical buyer requirements across fresh produce, food products, spices, grains and imported fruit categories.</p>
        </div>
        <div className="brochure-intro__actions">
          <a className="brochure-action brochure-action--primary" href="/brochure.pdf" target="_blank" rel="noreferrer"><Download size={17}/> Download PDF</a>
          <a className="brochure-action" href="/contact">Start an enquiry <ArrowRight size={17}/></a>
        </div>
      </section>

      <section className="brochure-categories">
        <div className="brochure-section-head"><span className="section-label">PRODUCT RANGE</span><h2>Built around <em>real requirements.</em></h2></div>
        <div className="brochure-category-grid">
          {productCategories.map((item,index)=>(
            <article key={item.id} className="brochure-category">
              <span>{String(index+1).padStart(2,'0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="brochure-category__products">{item.products.slice(0,6).map(product=><small key={product}>{product}</small>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="brochure-flow">
        <div className="brochure-section-head"><span className="section-label">HOW WE WORK</span><h2>A straightforward <em>trade conversation.</em></h2></div>
        <div className="brochure-flow__grid">
          {steps.map(([Icon,title,text],index)=>{
            const I=Icon
            return <article key={title}><span>0{index+1}</span><I/><h3>{title}</h3><p>{text}</p></article>
          })}
        </div>
      </section>

      <section className="brochure-contact">
        <div>
          <span className="section-label">DIRECT CONTACT</span>
          <h2>Let's take the next step <em>together.</em></h2>
          <p>{company.address.singleLine}</p>
        </div>
        <div className="brochure-contact__details">
          <a href={'mailto:'+company.email}>{company.email}</a>
          {company.phoneNumbers.map(person=><a key={person.number} href={'tel:+91'+person.number}>+91 {person.number}</a>)}
        </div>
        <a className="brochure-action brochure-action--light" href="/contact">Contact STOCON <ArrowRight size={17}/></a>
      </section>

      <section className="brochure-market">
        <div><span className="section-label">FOCUS AREAS</span><h2>Freshness, sourcing and <em>trade readiness.</em></h2></div>
        <div className="brochure-market__items">
          <div><Globe2/><strong>India to international markets</strong><span>Requirement-led sourcing and export coordination.</span></div>
          <div><PackageSearch/><strong>Category-led sourcing</strong><span>Fresh and shelf-stable categories across multiple buyer needs.</span></div>
        </div>
      </section>
    </section>
  </>
}
