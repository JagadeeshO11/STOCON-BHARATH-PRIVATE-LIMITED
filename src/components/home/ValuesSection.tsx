import { Globe2, Leaf, Package, Ship } from 'lucide-react'
import './ValuesSection.css'

const values = [
  { icon: Leaf, title: 'Natural focus', text: 'A business direction centered on food and agricultural products.' },
  { icon: Globe2, title: 'Global outlook', text: 'Building relationships and opportunities beyond domestic boundaries.' },
  { icon: Package, title: 'Buyer requirements', text: 'Product and domestic sales requirements can be shaped around customer needs.' },
  { icon: Ship, title: 'Export priority', text: 'International export remains the primary business priority for STOCON.' },
]

export function ValuesSection() {
  return <section className="section values-section"><div className="section-label">04 / OUR DIRECTION</div><div className="value-grid">{values.map(({icon: Icon,title,text}) => <article key={title}><span><Icon /></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
}
