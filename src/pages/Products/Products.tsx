import { ArrowRight, CheckCircle2, Globe2, MessageCircle, PackageSearch, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { company } from '../../constants/company'
import { productCategories } from '../../data/products'
import './Products.css'

const highlights=['Export-focused categories','Requirement-based discussions','Direct buyer communication']

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const selected = productCategories.find((category) => category.id === requestedCategory) ?? productCategories[0]

  useEffect(() => {
    if (requestedCategory) {
      requestAnimationFrame(() => document.getElementById('category-products')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [requestedCategory])

  const selectCategory = (id: string) => {
    setSearchParams({ category: id })
  }

  const whatsappMessage = encodeURIComponent(
    'Hello STOCON, I am interested in ' + selected.title + '. Please share details and available products.'
  )

  return (
    <>
      <section className="page-hero page-hero--products">
        <AnimatedPageHero
          label="OUR PRODUCT CATEGORIES"
          prefix="Explore six categories built for"
          typed="global opportunities."
          description="Choose a category, view the products under it, and start a direct requirement-focused discussion with STOCON."
        />
      </section>

      <section className="products-page">
        <div className="products-page__intro">
          <div>
            <span className="section-label">EXPLORE THE CATALOGUE</span>
            <h2>Six categories. <em>One global outlook.</em></h2>
          </div>
          <div className="products-page__note">
            <PackageSearch size={25}/>
            <p>Select a category to open its dedicated product panel. The products shown are the starting point for your export requirement discussion.</p>
          </div>
        </div>

        <div className="products-page__highlights">
          {highlights.map((item,i)=><motion.div key={item} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><CheckCircle2 size={17}/>{item}</motion.div>)}
        </div>

        <div className="products-page__category-grid" aria-label="Product categories">
          {productCategories.map((category, index) => (
            <button
              type="button"
              key={category.id}
              className={selected.id === category.id ? 'products-page__category is-active' : 'products-page__category'}
              onClick={() => selectCategory(category.id)}
            >
              <img src={category.image} alt="" />
              <span className="products-page__category-shade" />
              <span className="products-page__category-number">0{index + 1}</span>
              <span className="products-page__category-copy">
                <small>PRODUCT CATEGORY</small>
                <strong>{category.title}</strong>
              </span>
            </button>
          ))}
        </div>

        <section className="products-page__panel" id="category-products">
          <div className="products-page__panel-image">
            <img src={selected.image} alt={selected.title} />
          </div>

          <div className="products-page__panel-content">
            <div className="products-page__panel-heading">
              <span className="section-label"><Tag size={13}/> SELECTED CATEGORY</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>

            <div className="products-page__product-list">
              {selected.products.map((product, index) => (
                <motion.div
                  key={product}
                  initial={{opacity:0,y:10}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:index*.035}}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{product}</strong>
                </motion.div>
              ))}
            </div>

            <a
              className="products-page__whatsapp"
              href={'https://wa.me/' + company.whatsappNumber + '?text=' + whatsappMessage}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19}/>
              Discuss {selected.title} on WhatsApp
              <ArrowRight size={17}/>
            </a>
          </div>
        </section>

        <section className="products-page__guide">
          <div>
            <span className="section-label">HOW TO START</span>
            <h2>Found your category? <em>Let's talk requirements.</em></h2>
          </div>
          <div className="products-page__guide-steps">
            <div><b>01</b><h3>Select a category</h3><p>Open the category that matches your sourcing requirement.</p></div>
            <div><b>02</b><h3>Review products</h3><p>See the product range available under that category.</p></div>
            <div><b>03</b><h3>Start the conversation</h3><p>Send your requirement directly to STOCON on WhatsApp.</p></div>
          </div>
        </section>

        <div className="products-page__export">
          <Globe2 size={38}/>
          <div><span className="section-label">BUYER REQUIREMENTS</span><h3>Looking for something specific?</h3><p>Share your required product, quantity and destination market for a direct export-focused discussion.</p></div>
          <a href={'https://wa.me/' + company.whatsappNumber + '?text=' + encodeURIComponent('Hello STOCON, I have a specific export product requirement.')} target="_blank" rel="noreferrer">
            Send requirement <ArrowRight size={18}/>
          </a>
        </div>
      </section>
    </>
  )
}
