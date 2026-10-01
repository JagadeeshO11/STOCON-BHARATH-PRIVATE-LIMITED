import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send, Plus, X, ClipboardList, Globe2, PackageCheck, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { company } from '../../constants/company'
import { productCategories } from '../../data/products'
import { AnimatedPageHero } from '../../components/ui/AnimatedPageHero'
import './Contact.css'

export function Contact() {
  const [categoryId, setCategoryId] = useState('')
  const [product, setProduct] = useState('')
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', country: '', quantity: '', message: '' })

  const category = useMemo(() => productCategories.find(item => item.id === categoryId), [categoryId])
  const update = (key: string, value: string) => setForm(current => ({ ...current, [key]: value }))
  const addProduct = () => {
    if (product && !selectedProducts.includes(product)) {
      setSelectedProducts(current => [...current, product])
      setProduct('')
    }
  }
  const removeProduct = (item: string) => setSelectedProducts(current => current.filter(value => value !== item))

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    const lines = [
      '*New Product Enquiry for STOCON BHARATH PRIVATE LIMITED*',
      '',
      '*Customer Details*',
      'Name: ' + form.name,
      'Company: ' + (form.company || 'Not provided'),
      'Phone: ' + form.phone,
      'Email: ' + (form.email || 'Not provided'),
      'Country: ' + (form.country || 'Not provided'),
      '',
      '*Requirement*',
      'Category: ' + (category?.title || 'Not selected'),
      'Products: ' + (selectedProducts.length ? selectedProducts.join(', ') : 'Not selected'),
      'Quantity: ' + (form.quantity || 'Not specified'),
      'Message: ' + (form.message || 'No additional message')
    ]
    window.open('https://wa.me/' + company.whatsappNumber + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section className="page-hero page-hero--contact">
        <AnimatedPageHero label="CONTACT STOCON BHARATH" prefix="Let's begin the" typed="conversation." description="Share your product or export requirement and connect with STOCON BHARATH PRIVATE LIMITED." />
      </section>

      <section className="contact-page">
        <div className="contact-page__intro">
          <span className="section-label">BUSINESS INQUIRIES</span>
          <h2>Tell us what you are <em>looking for.</em></h2>
          <p>Select products from our catalogue, share your requirement, and send the complete enquiry directly to WhatsApp.</p>
          <p className="contact-page__intro-note">For a faster quotation discussion, include the destination, approximate quantity, product specifications and preferred packing format.</p>
          <div className="contact-page__quicklinks">
            <a href={'mailto:' + company.email}>
              <Mail size={18} />
              <div><small>EMAIL</small><strong>{company.email}</strong></div>
              <ArrowRight size={16} />
            </a>
            {company.phoneNumbers.map(person => (
              <a key={person.number} href={'tel:+91' + person.number}>
                <Phone size={18} />
                <div><small>{person.name.toUpperCase()}</small><strong>+91 {person.number}</strong></div>
                <ArrowRight size={16} />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-enquiry" onSubmit={submit}>
          <div className="contact-enquiry__head">
            <div>
              <span className="section-label">SEND AN ENQUIRY</span>
              <h3>Build your <em>product request.</em></h3>
            </div>
            <MessageCircle size={24} />
          </div>

          <div className="contact-enquiry__grid">
            <label>Product Category
              <select required value={categoryId} onChange={e => { setCategoryId(e.target.value); setProduct('') }}>
                <option value="">Select category</option>
                {productCategories.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
              </select>
            </label>

            <div className="contact-product-picker">
              <label>Product
                <select disabled={!category} value={product} onChange={e => setProduct(e.target.value)}>
                  <option value="">{category ? 'Select a product' : 'Select category first'}</option>
                  {category?.products.filter(item => !selectedProducts.includes(item)).map(item => <option key={item}>{item}</option>)}
                </select>
              </label>
              <button type="button" className="contact-product-add" onClick={addProduct} disabled={!product}>
                <Plus size={17} /> Add
              </button>
            </div>

            <div className="contact-selected-products">
              {selectedProducts.length === 0 ? (
                <span>Select products and press + Add to include multiple products.</span>
              ) : (
                selectedProducts.map(item => (
                  <button type="button" key={item} onClick={() => removeProduct(item)}>
                    {item} <X size={13} />
                  </button>
                ))
              )}
            </div>

            <label>Full Name
              <input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your full name" />
            </label>
            <label>Company Name
              <input value={form.company} onChange={e => update('company', e.target.value)} placeholder="Company / organization" />
            </label>

            <label>Phone Number
              <input required type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="Phone / WhatsApp number" />
            </label>
            <label>Email Address
              <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="Email address" />
            </label>

            <label>Country
              <input value={form.country} onChange={e => update('country', e.target.value)} placeholder="Your country" />
            </label>
            <label>Required Quantity
              <input value={form.quantity} onChange={e => update('quantity', e.target.value)} placeholder="Example: 10 MT" />
            </label>

            <label className="contact-enquiry__full">Additional Requirement
              <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Packaging, quality specifications, destination, or other requirements..." />
            </label>
          </div>

          <button type="submit" className="contact-enquiry__submit">
            <Send size={17} /> Send enquiry on WhatsApp <ArrowRight size={17} />
          </button>
        </form>
      </section>

      <section className="contact-expectations">
        <div className="contact-expectations__heading">
          <span className="section-label">WHAT HAPPENS NEXT</span>
          <h2>A better enquiry starts with <em>the right details.</em></h2>
          <p>We can use your enquiry to structure the next conversation around product, quantity, destination and practical shipment requirements.</p>
        </div>
        <div className="contact-expectations__grid">
          {[
            ['01', 'Requirement review', 'We review the requested products, quantities, destination and specifications.', ClipboardList],
            ['02', 'Supply discussion', 'We discuss availability, quality expectations and suitable packing options.', PackageCheck],
            ['03', 'Trade coordination', 'The conversation can then move toward documentation, logistics and shipment planning.', Truck],
            ['04', 'Destination focus', 'International enquiries can be aligned to the intended market and delivery route.', Globe2]
          ].map(([n, title, text, Icon]) => {
            const I = Icon as typeof ClipboardList
            return (
              <motion.article key={String(n)} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span>{String(n)}</span>
                <I />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="contact-page__address">
        <MapPin />
        <div>
          <span className="section-label">STOCON BHARATH PRIVATE LIMITED</span>
          <p>{company.address.singleLine}</p>
          <p>Focused on fresh produce, food products, spices and requirement-based agri sourcing from India.</p>
        </div>
      </section>
    </>
  )
}