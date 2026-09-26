import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send, CheckCircle2 } from 'lucide-react'
import { company } from '../../constants/company'
import './ContactSection.css'

export function ContactSection() {
  const primaryPhone = company.phoneNumbers[0]
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // Keep state true for feedback
    }, 500)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg" />

      <div className="contact-container">
        <div className="contact-header">
          <span className="section-label light">CONTACT US</span>
          <h2>Get In <em>Touch</em></h2>
          <p className="contact-subtitle">
            At STOCON BHARATH PRIVATE LIMITED, we’re always here to help. Whether you need product details, pricing, or custom safety solutions, feel free to get in touch.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="contact-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Thank You for Reaching Out!</h3>
                <p>
                  Your message has been received successfully. Our trade export team will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  className="reset-form-btn"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ fullName: '', email: '', phone: '', product: '', message: '' })
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="product">Product*</label>
                  <select
                    id="product"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  >
                    <option value="" disabled>Select Product Requirement</option>
                    <option value="Fresh Fruits">Fresh Fruits (Mango, Pomegranate, Grapes, etc.)</option>
                    <option value="Fresh Vegetables">Fresh Vegetables (Onion, Chilli, Lemon, Tomato, etc.)</option>
                    <option value="Imported Fruits">Imported Fruits (Apple, Kiwi, Dragon Fruit, Beauty Pear)</option>
                    <option value="Food & Non-Perishable">Food & Non-Perishable Products (Rice, Flour, Pulses)</option>
                    <option value="Spices & Herbs">Spices & Herbs (Turmeric, Red Chilli, Pepper)</option>
                    <option value="Other Requirement">Other Export / Import Requirement</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe your requirement, quantity, packaging preference, and destination port..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact Cards */}
          <div className="contact-info-col">
            <div className="contact-card">
              <a href={'mailto:' + company.email}>
                <Mail size={20} />
                <span>
                  <small>EMAIL US</small>
                  <strong>{company.email}</strong>
                </span>
              </a>

              <a href={'tel:+91' + primaryPhone.number}>
                <Phone size={20} />
                <span>
                  <small>CALL US ({primaryPhone.name.toUpperCase()})</small>
                  <strong>+91 {primaryPhone.number}</strong>
                </span>
              </a>

              <a
                href={'https://wa.me/' + company.whatsappNumber}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                <span>
                  <small>WHATSAPP QUICK CONNECT</small>
                  <strong>Chat with Export Manager</strong>
                </span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="address-card">
              <MapPin size={20} className="map-icon" />
              <div>
                <small>HEAD OFFICE LOCATION</small>
                <p>{company.address.singleLine}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
