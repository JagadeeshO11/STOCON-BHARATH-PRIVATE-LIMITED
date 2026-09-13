import { ArrowRight } from 'lucide-react'
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
          <span className="section-label">CATEGORIES</span>
          <h2>Explore our <em>export-focused range.</em></h2>
        </div>
        <div className="products-page__grid">
          {productCategories.map((product) => (
            <article key={product.id}>
              <img src={product.image} alt={product.title} loading="lazy" />
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span><ArrowRight size={18} /></span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
