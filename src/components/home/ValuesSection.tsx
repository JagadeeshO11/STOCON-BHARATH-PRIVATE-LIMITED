import { Globe2, Leaf, Package, Ship } from 'lucide-react'
import { motion } from 'framer-motion'
import './ValuesSection.css'

const values = [
  { icon: Leaf, title: 'Farm-to-market focus', text: 'Fresh and food products are considered with sourcing, quality and destination requirements in mind.' },
  { icon: Globe2, title: 'Global outlook', text: 'The business is structured around export opportunities and international buyer requirements.' },
  { icon: Package, title: 'Export-standard preparation', text: 'Packaging, handling and documentation are treated as important parts of the supply process.' },
  { icon: Ship, title: 'Reliable coordination', text: 'Sourcing, logistics and dispatch are coordinated to support clear and timely shipments.' },
]

export function ValuesSection() { return <section className="section values-section"><div className="section-label">04 / OUR DIRECTION</div><div className="value-grid">{values.map(({icon: Icon,title,text}) => <motion.article key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-6}}><span><Icon /></span><h3>{title}</h3><p>{text}</p></motion.article>)}</div></section> }
