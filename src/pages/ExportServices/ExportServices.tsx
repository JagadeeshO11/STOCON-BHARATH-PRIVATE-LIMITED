import { ArrowRight, ClipboardCheck, Globe2, PackageCheck, SearchCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import './ExportServices.css'

const steps=[
 ['01','Understand the requirement','Product and buyer requirements are reviewed before the export process is coordinated.'],
 ['02','Prepare the supply','Product selection and preparation are aligned with the agreed requirement.'],
 ['03','Coordinate the shipment','Packaging and shipment preparation are coordinated for the order.'],
 ['04','Stay connected','Clear communication supports the journey from inquiry through export coordination.'],
]

export function ExportServices(){
 return <>
  <section className="page-hero page-hero--services"><div><span className="section-label">EXPORT SERVICES</span><h1>From requirement to <em>export coordination.</em></h1><p>A clear, step-by-step approach designed around product requirements and international business needs.</p></div></section>
  <section className="services-page">
   <div className="services-page__intro"><div><span className="section-label">OUR PROCESS</span><h2>Clear steps. <em>Focused coordination.</em></h2></div><p>STOCON's business approach keeps customer requirements at the center of product and export discussions.</p></div>
   <div className="services-page__steps">{steps.map(([no,title,text],i)=>{const Icon=[SearchCheck,ClipboardCheck,PackageCheck,Globe2][i];return <article key={no}><span>{no}</span><Icon size={25}/><h3>{title}</h3><p>{text}</p></article>})}</div>
   <div className="services-page__cta"><div><span className="section-label">START AN INQUIRY</span><h3>Have a product requirement?</h3><p>Tell us what you are looking for and begin the conversation with STOCON.</p></div><Link to="/contact">Contact STOCON <ArrowRight size={18}/></Link></div>
  </section>
 </>
}