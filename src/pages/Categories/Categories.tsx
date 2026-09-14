import { ArrowRight, CheckCircle2, PackageSearch, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { productCategories } from '../../data/products'
import './Categories.css'

const highlights = ['Export-focused categories', 'Fresh & processed food ranges', 'Direct buyer communication']

export function Categories() {
  return (
    <>
      <section className="page-hero page-hero--products">
        <AnimatedPageHero
          label="OUR CATEGORIES"
          prefix="Explore India's finest products by"
          typed="category."
          description="Choose a category to explore the products available for export and discuss your requirement directly with STOCON."
        />
      </section>

      <section className="categories-page">
        <div className="categories-page__intro">
          <div>
            <span className="section-label">EXPLORE THE CATALOGUE</span>
            <h2>Six categories. <em>One global outlook.</em></h2>
          </div>
          <div className="categories-page__note">
            <PackageSearch size={25}/>
            <p>Browse our product categories and open the dedicated products page for the category that matches your sourcing requirement.</p>
          </div>
        </div>

        <div className="categories-page__highlights">
          {highlights.map((item, i) => (
            <motion.div key={item} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
              <CheckCircle2 size={17}/>{item}
            </motion.div>
          ))}
        </div>

        <div className="categories-page__grid" aria-label="Product categories">
          {productCategories.map((category, index) => (
            <motion.article
              key={category.id}
              className="categories-page__card"
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*.06}}
              whileHover={{y:-6}}
            >
              <img src={category.image} alt={category.title} />
              <div className="categories-page__shade" />
              <span className="categories-page__number">0{index + 1}</span>
              <div className="categories-page__copy">
                <div className="categories-page__tag"><Tag size={12}/> CATEGORY</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link to={'/products?category=' + category.id}>
                  Explore products <ArrowRight size={17}/>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
