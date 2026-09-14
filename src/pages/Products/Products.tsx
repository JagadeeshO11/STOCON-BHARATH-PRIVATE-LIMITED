import { ArrowRight, Globe2, PackageSearch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { productCategories } from '../../data/products'
import { companyContent } from '../../data/companyContent'
import './Products.css'

export function Products() {
  return (
    <>
      <section className="page-hero page-hero--products"><AnimatedPageHero label="OUR PRODUCT CATEGORIES" prefix="Food and natural products for" typed="export opportunities." description="STOCON’s stated business focus covers food products, fruits, vegetables and spices of different types." /></section>

      <section className="page-section products-page">
        <div className="products-page__intro">
          <div>
            <span className="section-label">WHAT WE FOCUS ON</span>
            <h2>Four core categories. <em>One export direction.</em></h2>
          </div>
          <div className="products-page__note"><PackageSearch size={24} /><p>Specific product discussions can be taken forward according to customer requirements.</p></div>
        </div>

        <div className="products-page__grid">
          {productCategories.map((product, index) => {
            const detail = companyContent.productCategories[index]
            return (
              <motion.article key={product.id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-7}} transition={{duration:.35}}>
                <div className="products-page__image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                  <span>0{index + 1}</span>
                </div>
                <div className="products-page__content">
                  <h3>{detail.title}</h3>
                  <p>{detail.description}</p>
                  <Link to="/contact">Discuss this category <ArrowRight size={17} /></Link>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="products-page__export">
          <Globe2 size={34} />
          <div><span className="section-label">BUYER REQUIREMENTS</span><h3>Looking for a particular product?</h3><p>Share your requirement with STOCON so the discussion can be aligned with the product category and customer need.</p></div>
          <Link to="/contact">Send an enquiry <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
