import { PackageSearch, Tag, ShieldCheck, Clock3, Leaf, FileCheck2, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { ProductCatalogModal } from '../../components/catalog/ProductCatalogModal'
import { productCategories } from '../../data/products'
import type { ProductCategory } from '../../types/product'
import './Categories.css'

const buyerReasons = [
  ['Verified Farm Sourcing', 'Direct sourcing from trusted Indian farms ensures peak freshness and competitive export pricing.', ShieldCheck],
  ['Export-Standard Packaging', 'Products are packed using international export standards and proper temperature-controlled cold chain handling.', Leaf],
  ['End-to-End Export Logistics', 'Air and sea freight, inland transport, and timely worldwide shipping are handled smoothly.', Clock3],
  ['Strict Quality & Compliance', 'Every shipment undergoes detailed size, color, and quality checks to meet international import standards.', FileCheck2]
] as const

const faqs = [
  ['What products does STOCON BHARATH export?', 'We export fresh fruits (mangoes, pomegranates, grapes, bananas), fresh vegetables (onions, chillies, lemons, potatoes, tomatoes), non-perishable food products, spices, and premium imported fruits.'],
  ['Which international markets do you ship to?', 'We export directly to buyers across the GCC (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), Europe, UK, USA, Southeast Asia (Malaysia, Singapore, Vietnam), and Africa.'],
  ['Can packaging be customized for destination markets?', 'Yes. All products are packed using international export standards, and custom packaging, sizing, and branding can be tailored per buyer requirements.'],
  ['Do you handle customs clearance and phytosanitary certificates?', 'Yes. We manage full export documentation, phytosanitary certifications, APEDA compliance, and customs clearance for smooth shipping.']
] as const

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <section className="page-hero page-hero--products">
        <AnimatedPageHero
          label="STOCON BHARATH PRODUCTS"
          prefix="Export-Quality Fresh Produce &"
          typed="Agri Products from India."
          description="We export a wide range of fresh fruits, vegetables, and agri products from India, sourced from verified farms and packed to meet international standards."
        />
      </section>

      <section className="categories-page">
        <div className="categories-page__intro">
          <div>
            <span className="section-label">OUR PRODUCTS</span>
            <h2>Export-Quality Produce Sourced from <em>Verified Farms</em></h2>
          </div>
          <div className="categories-page__note">
            <PackageSearch size={25} style={{ color: '#4ade80' }} />
            <p>Select any category below to view its complete product catalogue, specifications, and export availability.</p>
          </div>
        </div>

        <div className="categories-page__grid">
          {productCategories.map((category, index) => (
            <motion.button
              type="button"
              key={category.id}
              className="categories-page__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCategory(category)}
            >
              <img src={category.image} alt={category.title} />
              <div className="categories-page__shade" />
              <div className="categories-page__meta">
                <span className="categories-page__number">0{index + 1}</span>
                <span className="categories-page__tag"><Tag size={12} /> PRODUCT CATEGORY</span>
              </div>
              <div className="categories-page__copy">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="categories-page__action">View product catalogue</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="products-reasons">
        <div className="products-reasons__intro">
          <span className="section-label">WHY BUYERS CHOOSE STOCON BHARATH</span>
          <h2>Uncompromising Quality & <em>Reliable Global Supply.</em></h2>
        </div>
        <div className="products-reasons__grid">
          {buyerReasons.map(([title, text, Icon], index) => {
            const I = Icon as typeof ShieldCheck
            return (
              <motion.article key={String(title)} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span>0{index + 1}</span>
                <I size={24} style={{ color: '#4ade80', marginBottom: '10px' }} />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="products-faq">
        <div className="products-faq__heading">
          <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Everything you need to know about <em>sourcing from STOCON BHARATH.</em></h2>
        </div>
        <div className="products-faq__list">
          {faqs.map(([question, answer], index) => (
            <button
              type="button"
              key={question}
              className={'products-faq__item ' + (openFaq === index ? 'is-open' : '')}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div>
                <strong>{question}</strong>
                {openFaq === index && <p style={{ marginTop: '10px', color: 'rgba(255,255,255,0.8)' }}>{answer}</p>}
              </div>
              <ChevronDown size={19} />
            </button>
          ))}
        </div>
      </section>

      <ProductCatalogModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
    </>
  )
}