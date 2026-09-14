import { ArrowLeft, ArrowRight, CheckCircle2, Globe2, MessageCircle, PackageSearch, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { company } from '../../constants/company'
import { productCategories } from '../../data/products'
import './Products.css'

export function Products() {
  const [searchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const selected = productCategories.find((category) => category.id === requestedCategory) ?? productCategories[0]

  const whatsappMessage = encodeURIComponent(
    'Hello STOCON, I am interested in ' + selected.title + '. Please share details and availability for the products I require.'
  )

  return (
    <>
      <section className="page-hero page-hero--products">
        <AnimatedPageHero
          label="OUR PRODUCTS"
          prefix="Explore products under"
          typed={selected.title + '.'}
          description="Discover the available product range in your selected category and connect with STOCON for export requirements."
        />
      </section>

      <main className="products-page">
        <div className="products-page__breadcrumb">
          <Link to="/categories"><ArrowLeft size={16}/> All Categories</Link>
          <span>/</span>
          <strong>{selected.title}</strong>
        </div>

        <section className="products-page__panel">
          <div className="products-page__panel-image">
            <img src={selected.image} alt={selected.title} />
            <div className="products-page__image-label"><Tag size={14}/> {selected.title}</div>
          </div>

          <div className="products-page__panel-content">
            <span className="section-label"><PackageSearch size={14}/> PRODUCT CATEGORY</span>
            <h1>{selected.title}</h1>
            <p className="products-page__description">{selected.description}</p>

            <div className="products-page__stats">
              <div><strong>{selected.products.length}</strong><span>Products listed</span></div>
              <div><CheckCircle2 size={20}/><span>Export discussions</span></div>
            </div>

            <div className="products-page__product-list">
              {selected.products.map((product, index) => (
                <motion.article
                  key={product}
                  initial={{opacity:0,y:10}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:index*.04}}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{product}</strong>
                  <CheckCircle2 size={16}/>
                </motion.article>
              ))}
            </div>

            <a
              className="products-page__whatsapp"
              href={'https://wa.me/' + company.whatsappNumber + '?text=' + whatsappMessage}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20}/>
              Discuss {selected.title} on WhatsApp
              <ArrowRight size={17}/>
            </a>
          </div>
        </section>

        <section className="products-page__requirement">
          <Globe2 size={40}/>
          <div>
            <span className="section-label">CUSTOM REQUIREMENT</span>
            <h2>Looking for a specific product?</h2>
            <p>Share your product requirement, quantity and destination market with our team for an export-focused discussion.</p>
          </div>
          <a href={'https://wa.me/' + company.whatsappNumber + '?text=' + encodeURIComponent('Hello STOCON, I have a specific product export requirement.')} target="_blank" rel="noreferrer">
            Send requirement <ArrowRight size={18}/>
          </a>
        </section>
      </main>
    </>
  )
}
