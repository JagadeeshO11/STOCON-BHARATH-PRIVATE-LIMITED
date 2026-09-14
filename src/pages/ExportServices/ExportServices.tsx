import { ArrowRight, ClipboardCheck, Globe2, PackageCheck, SearchCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companyContent } from '../../data/companyContent'
import './ExportServices.css'

const focusAreas=[
 ['01','Export-first business','Export is the primary business priority of STOCON BHARATH PRIVATE LIMITED.'],
 ['02','Product categories','Current business discussions focus on food products, fruits, vegetables and spices.'],
 ['03','Customer requirements','Product and domestic-sales discussions may be considered according to customer requirements.'],
 ['04','Future growth','Frozen-condition seafood export has been identified as a future business direction.'],
]

export function ExportServices(){
 return <>
  <section className="page-hero page-hero--services"><AnimatedPageHero label="EXPORT FOCUS" prefix="A business direction built around" typed="international opportunities." description="Export is the primary business priority of STOCON BHARATH PRIVATE LIMITED." /></section>
  <section className="services-page">
   <div className="services-page__intro"><div><span className="section-label">WHAT STOCON DOES</span><h2>Start with the requirement. <em>Build the right discussion.</em></h2></div><p>STOCON is an export-focused business. The exact product, destination and commercial requirements can be discussed directly with the company.</p></div>
   <div className="services-page__steps">{focusAreas.map(([no,title,text],i)=>{const Icon=[Globe2,PackageCheck,SearchCheck,ClipboardCheck][i];return <motion.article key={no} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-7}} transition={{duration:.35}}><span>{no}</span><Icon size={25}/><h3>{title}</h3><p>{text}</p></motion.article>})}</div>
   <div className="services-page__cta"><div><span className="section-label">START AN ENQUIRY</span><h3>Have a food or agricultural product requirement?</h3><p>Tell STOCON what you are looking for and begin a direct business discussion.</p></div><Link to="/contact">Send enquiry <ArrowRight size={18}/></Link></div>
  </section>
 </>
}

import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import { motion } from 'framer-motion'
