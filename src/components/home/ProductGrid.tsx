import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { productCategories } from '../../data/products'
import './ProductGrid.css'

export function ProductGrid() {
  return (
    <section className="products-section">
      <div className="section products-shell">
        <div className="section-head">
          <div>
            <div className="section-label">02 / WHAT WE EXPORT</div>
            <h2>Products with a <em>passport to travel.</em></h2>
          </div>
          <p>Our product portfolio is designed around food and agricultural products, with flexibility to serve buyer requirements.</p>
        </div>

        <div className="product-grid">
          {productCategories.map((product, index) => (
            <motion.article className="product-card" key={product.id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-6}}>
              <img src={product.image} alt={product.title} />
              <div className="product-overlay" />
              <span className="product-number">0{index + 1}</span>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <Link to="/products" aria-label={'Explore ' + product.title}><ArrowRight size={19} /></Link>
              </div>
            </motion.article>
          ))}
        </div>

        <Link className="products-page-link" to="/products">
          View all product categories <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
