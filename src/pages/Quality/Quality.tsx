import { CheckCircle2, ClipboardCheck, PackageCheck, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Quality.css'

type Pillar = { title: string; text: string; icon: LucideIcon }

const pillars: Pillar[] = [
  { title: 'Product selection', text: 'Product selection is aligned with customer and export requirements.', icon: CheckCircle2 },
  { title: 'Preparation', text: 'Packaging and shipment preparation are planned for the order.', icon: PackageCheck },
  { title: 'Clear coordination', text: 'Customer requirements remain central to the supply and export process.', icon: ClipboardCheck },
]

export function Quality() {
  return <>
    <section className="page-hero page-hero--quality"><div><span className="section-label">QUALITY & APPROACH</span><h1>Careful coordination for <em>every requirement.</em></h1><p>STOCON is building its export business around suitable products, customer requirements and clear coordination.</p></div></section>
    <section className="quality-page">
      <div className="quality-page__intro"><div><span className="section-label">OUR APPROACH</span><h2>Quality begins with <em>the right requirement.</em></h2></div><ShieldCheck size={52}/></div>
      <div className="quality-page__grid">{pillars.map(({ title, text, icon: Icon }, index) => <article key={title}><span>0{index + 1}</span><Icon size={30}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="quality-page__statement"><div><span className="section-label">STOCON APPROACH</span><h3>Clear requirements create a clearer export journey.</h3></div><Link to="/contact">Discuss your requirement →</Link></div>
    </section>
  </>
}