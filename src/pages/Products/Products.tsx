import { ArrowRight, Globe2, PackageSearch, Tag, CheckCircle2, Boxes } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { productCategories } from '../../data/products'
import './Products.css'

const highlights=['Export-focused categories','Requirement-based discussions','Direct buyer communication']

export function Products() {
  return (
    <>
      <section className="page-hero page-hero--products">
        <AnimatedPageHero label="OUR PRODUCT CATEGORIES" prefix="Explore six categories built for" typed="global opportunities." description="Discover STOCON's food and agricultural product categories and start a direct requirement-focused discussion." />
      </section>

      <section className="products-page">
        <div className="products-page__intro">
          <div>
            <span className="section-label">EXPLORE THE CATALOGUE</span>
            <h2>Six categories. <em>One global outlook.</em></h2>
          </div>
          <div className="products-page__note"><PackageSearch size={25}/><p>Choose a category to explore its direction and discuss the products that match your requirement.</p></div>
        </div>

        <div className="products-page__highlights">
          {highlights.map((item,i)=><motion.div key={item} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><CheckCircle2 size={17}/>{item}</motion.div>)}
        </div>

        <div className="products-page__grid">
          {productCategories.map((product,index)=>(
            <motion.article id={product.id} key={product.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} whileHover={{y:-7}} transition={{duration:.35}}>
              <div className="products-page__image">
                <img src={product.image} alt={product.title} loading={index<2?'eager':'lazy'} />
                <span className="product-index">0{index+1}</span>
                <span className="product-tag"><Tag size={12}/> PRODUCT CATEGORY</span>
                <div className="product-shade"/>
              </div>
              <div className="products-page__content">
                <div><span className="products-page__eyebrow">STOCON CATEGORY</span><h3>{product.title}</h3></div>
                <p>{product.description}</p>
                <div className="products-page__card-footer">
                  <span><Boxes size={16}/> Explore products</span>
                  <Link to="/contact" aria-label={'Discuss '+product.title}>Discuss category <ArrowRight size={17}/></Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <section className="products-page__guide">
          <div><span className="section-label">HOW TO START</span><h2>Found your category? <em>Let's talk requirements.</em></h2></div>
          <div className="products-page__guide-steps">
            <div><b>01</b><h3>Select a category</h3><p>Choose the product category closest to your requirement.</p></div>
            <div><b>02</b><h3>Share your requirement</h3><p>Tell us what product or requirement you want to discuss.</p></div>
            <div><b>03</b><h3>Start the conversation</h3><p>Connect directly with STOCON for the next business discussion.</p></div>
          </div>
        </section>

        <div className="products-page__export">
          <Globe2 size={38}/>
          <div><span className="section-label">BUYER REQUIREMENTS</span><h3>Looking for something specific?</h3><p>Share your product requirement with STOCON and start a direct export-focused conversation.</p></div>
          <Link to="/contact">Send an enquiry <ArrowRight size={18}/></Link>
        </div>
      </section>
    </>
  )
}