import { Tag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { productCategories } from '../../data/products'
import type { ProductCategory } from '../../types/product'
import { ProductCatalogModal } from '../catalog/ProductCatalogModal'
import './ProductGrid.css'

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null)

  return (
    <section className="products-section" id="products">
      <div className="section products-shell">
        <div className="section-head">
          <div>
            <div className="section-label">OUR PRODUCTS</div>
            <h2>Export-Quality Fresh Produce & <em>Agri Products from India</em></h2>
          </div>
          <p>
            We export a wide range of export-quality fresh fruits, vegetables, and agri products from India, sourced from verified farms and packed to meet international export standards. Our products are selected for freshness, consistency, and global market demand, ensuring a reliable supply for international buyers.
          </p>
        </div>

        <div className="product-grid">
          {productCategories.map((product, index) => (
            <motion.button
              type="button"
              className="product-card"
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCategory(product)}
              aria-label={'Open ' + product.title + ' catalogue'}
            >
              <img src={product.image} alt={product.title} />
              <div className="product-overlay" />
              <span className="product-number">0{index + 1}</span>
              <div className="category-tag"><Tag size={12} /> CATEGORY</div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className="product-info__action">View product catalogue <ArrowRight size={14} /></span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProductCatalogModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
    </section>
  )
}