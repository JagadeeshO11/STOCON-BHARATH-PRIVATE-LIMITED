import { CheckCircle2, MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { company } from '../../constants/company'
import type { ProductCategory } from '../../types/product'
import './ProductCatalogModal.css'

type Props = {
  category: ProductCategory | null
  onClose: () => void
}

export function ProductCatalogModal({ category, onClose }: Props) {
  if (!category) return null

  const message = encodeURIComponent(
    'Hello STOCON, I am interested in ' + category.title + '. Please share details and availability for the products I require.'
  )

  return (
    <AnimatePresence>
      <motion.div
        className="catalog-modal"
        role="dialog"
        aria-modal="true"
        aria-label={category.title + ' product catalogue'}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        onClick={onClose}
      >
        <motion.div
          className="catalog-modal__panel"
          initial={{opacity:0,y:30,scale:.97}}
          animate={{opacity:1,y:0,scale:1}}
          exit={{opacity:0,y:20,scale:.97}}
          transition={{type:'spring',stiffness:260,damping:24}}
          onClick={(event)=>event.stopPropagation()}
        >
          <button className="catalog-modal__close" onClick={onClose} aria-label="Close catalogue"><X size={20}/></button>

          <div className="catalog-modal__hero">
            <img src={category.image} alt={category.title}/>
            <div/>
            <span>PRODUCT CATALOGUE</span>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>

          <div className="catalog-modal__content">
            <div className="catalog-modal__heading">
              <div>
                <span className="section-label">AVAILABLE PRODUCTS</span>
                <h3>Explore the range</h3>
              </div>
              <span className="catalog-modal__count">{category.products.length} PRODUCTS</span>
            </div>

            <div className="catalog-modal__products">
              {category.products.map((product,index)=>(
                <div key={product}>
                  <span>{String(index+1).padStart(2,'0')}</span>
                  <strong>{product}</strong>
                  <CheckCircle2 size={17}/>
                </div>
              ))}
            </div>

            <a
              className="catalog-modal__whatsapp"
              href={'https://wa.me/'+company.whatsappNumber+'?text='+message}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19}/>
              Enquire about {category.title}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
