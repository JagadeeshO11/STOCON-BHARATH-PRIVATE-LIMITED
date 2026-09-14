import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import { company } from '../../constants/company'
import { productCategories } from '../../data/products'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import './Contact.css'

export function Contact(){
 const [categoryId,setCategoryId]=useState('')
 const [product,setProduct]=useState('')
 const [form,setForm]=useState({name:'',company:'',phone:'',email:'',country:'',quantity:'',message:''})
 const category=useMemo(()=>productCategories.find(item=>item.id===categoryId),[categoryId])
 const update=(key:string,value:string)=>setForm(current=>({...current,[key]:value}))
 const submit=(event:React.FormEvent)=>{event.preventDefault();const lines=['*New Product Enquiry*','', '*Customer Details*', 'Name: '+form.name, 'Company: '+(form.company||'Not provided'), 'Phone: '+form.phone, 'Email: '+(form.email||'Not provided'), 'Country: '+(form.country||'Not provided'), '', '*Requirement*', 'Category: '+(category?.title||'Not selected'), 'Product: '+(product||'Not selected'), 'Quantity: '+(form.quantity||'Not specified'), 'Message: '+(form.message||'No additional message')];window.open('https://wa.me/'+company.whatsappNumber+'?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener,noreferrer')}
 return <><section className="page-hero page-hero--contact"><AnimatedPageHero label="CONTACT STOCON" prefix="Let's begin the" typed="conversation." description="Share your product or export requirement and connect with STOCON BHARATH PRIVATE LIMITED."/></section>
 <section className="contact-page"><div className="contact-page__intro"><span className="section-label">BUSINESS INQUIRIES</span><h2>Tell us what you are <em>looking for.</em></h2><p>Select a category and product, share your requirement, and send the complete enquiry directly to our WhatsApp.</p></div>
 <form className="contact-enquiry" onSubmit={submit}><div className="contact-enquiry__head"><div><span className="section-label">SEND AN ENQUIRY</span><h3>Build your <em>product request.</em></h3></div><MessageCircle size={24}/></div>
 <div className="contact-enquiry__grid"><label>Product Category<select required value={categoryId} onChange={e=>{setCategoryId(e.target.value);setProduct('')}}><option value="">Select category</option>{productCategories.map(item=><option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
 <label>Product<select required disabled={!category} value={product} onChange={e=>setProduct(e.target.value)}><option value="">{category?'Select product':'Select category first'}</option>{category?.products.map(item=><option key={item}>{item}</option>)}</select></label>
 <label>Full Name<input required value={form.name} onChange={e=>update('name',e.target.value)} placeholder="Your full name"/></label><label>Company Name<input value={form.company} onChange={e=>update('company',e.target.value)} placeholder="Company / organization"/></label>
 <label>Phone Number<input required type="tel" value={form.phone} onChange={e=>update('phone',e.target.value)} placeholder="Phone / WhatsApp number"/></label><label>Email Address<input type="email" value={form.email} onChange={e=>update('email',e.target.value)} placeholder="Email address"/></label>
 <label>Country<input value={form.country} onChange={e=>update('country',e.target.value)} placeholder="Your country"/></label><label>Required Quantity<input value={form.quantity} onChange={e=>update('quantity',e.target.value)} placeholder="Example: 10 MT"/></label>
 <label className="contact-enquiry__full">Additional Requirement<textarea value={form.message} onChange={e=>update('message',e.target.value)} placeholder="Packaging, quality specifications, destination, or other requirements..."/></label></div>
 <button type="submit" className="contact-enquiry__submit"><Send size={17}/> Send enquiry on WhatsApp <ArrowRight size={17}/></button></form>
 <div className="contact-page__details"><motion.a initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{x:6}} href={'mailto:'+company.email}><Mail size={22}/><div><small>EMAIL</small><strong>{company.email}</strong></div><ArrowRight size={18}/></motion.a>{company.phoneNumbers.map(person=><motion.a key={person.number} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{x:6}} href={'tel:+91'+person.number}><Phone size={22}/><div><small>{person.name.toUpperCase()}</small><strong>+91 {person.number}</strong></div><ArrowRight size={18}/></motion.a>)}</div>
 <div className="contact-page__address"><MapPin size={28}/><div><span className="section-label">OFFICE ADDRESS</span><p>{company.address.singleLine}</p></div></div></section></>
}