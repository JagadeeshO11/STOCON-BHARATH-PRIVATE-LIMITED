import { ArrowRight, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { productCategories } from '../../data/products'
import './ProductGrid.css'

export function ProductGrid() {
  return (
    <section className="products-section" id="product-categories">
      <div className="section products-shell">
        <div className="section-head">
          <div>
            <div className="section-label">OUR PRODUCT CATEGORIES</div>
            <h2>Explore what India <em>grows and creates.</em></h2>
          </div>
          <p>Browse our export-focused product categories and explore the products available under each category.</p>
        </div>

        <div className="product-grid">
          {productCategories.map((product, index) => (
            <motion.article className="product-card" key={product.id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-6}}>
              <img src={product.image} alt={product.title} />
              <div className="product-overlay" />
              <span className="product-number">0{index + 1}</span>
              <div className="category-tag"><Tag size={12}/> CATEGORY</div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <Link to={'/products#'+product.id} aria-label={'Explore '+product.title}>
                  Explore category <ArrowRight size={17}/>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}