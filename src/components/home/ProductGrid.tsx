import { ArrowRight } from 'lucide-react'
import { productCategories } from '../../data/products'
import './ProductGrid.css'

export function ProductGrid() {
  return <section className="products-section" id="products">
    <div className="section products-shell">
      <div className="section-head"><div><div className="section-label">02 / WHAT WE EXPORT</div><h2>Products with a <em>passport to travel.</em></h2></div><p>Our product portfolio is designed around food and agricultural products, with flexibility to serve buyer requirements.</p></div>
      <div className="product-grid">{productCategories.map((product,index) => <article className="product-card" key={product.id}><img src={product.image} alt={product.title}/><div className="product-overlay"/><span className="product-number">0{index+1}</span><div className="product-info"><h3>{product.title}</h3><p>{product.description}</p><button aria-label={'Explore '+product.title}><ArrowRight size={19}/></button></div></article>)}</div>
    </div>
  </section>
}