import { ArrowRight, Globe2, PackageSearch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productCategories } from '../../data/products'
import './Products.css'

export function Products() {
  return (
    <>
      <section className="page-hero page-hero--products">
        <div>
          <span className="section-label">OUR PRODUCT PORTFOLIO</span>
          <h1>Natural products, <em>ready for global markets.</em></h1>
          <p>STOCON focuses on food products, fruits, vegetables and spices, with supply shaped around customer requirements.</p>
        </div>
      </section>

      <section className="page-section products-page">
        <div className="products-page__intro">
          <div>
            <span className="section-label">CATEGORIES</span>
            <h2>Explore our <em>export-focused range.</em></h2>
          </div>
          <div className="products-page__note"><PackageSearch size={24} /><p>Product discussions can be aligned with buyer requirements and intended markets.</p></div>
        </div>

        <div className="products-page__grid">
          {productCategories.map((product, index) => (
            <article key={product.id}>
              <div className="products-page__image">
                <img src={product.image} alt={product.title} loading="lazy" />
                <span>0{index + 1}</span>
              </div>
              <div className="products-page__content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <Link to="/contact">Send product inquiry <ArrowRight size={17} /></Link>
              </div>
            </article>
          ))}
        </div>

        <div className="products-page__export">
          <Globe2 size={34} />
          <div><span className="section-label">EXPORT DIRECTION</span><h3>From India toward international markets.</h3></div>
          <Link to="/export-services">Explore export services <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
