import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoClose, IoCall, IoTimeOutline } from 'react-icons/io5'
import { company } from '../../constants/company'
import './PhoneFloat.css'

export function PhoneFloat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Call Button above WhatsApp button */}
      <button
        type="button"
        className="phone-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Call Us Quick Contact"
        title="Call STOCON BHARATH"
      >
        <FaPhoneAlt size={20} />
      </button>

      {/* Phone Call Popup Modal */}
      {isOpen && (
        <div className="phone-popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="phone-popup-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="phone-popup-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close call popup"
            >
              <IoClose size={22} />
            </button>

            <div className="phone-popup-header">
              <div className="phone-popup-icon-badge">
                <IoCall size={26} />
              </div>
              <h4>Call STOCON BHARATH</h4>
              <p>Direct hotline for instant export inquiries</p>
            </div>

            <div className="phone-popup-body">
              {company.phoneNumbers.map((ph) => (
                <div key={ph.number} className="phone-number-item">
                  <div className="phone-number-info">
                    <span className="phone-label">{ph.name}</span>
                    <span className="phone-value">+91 {ph.number}</span>
                  </div>
                  <a
                    href={`tel:+91${ph.number}`}
                    className="phone-call-action-btn"
                  >
                    <FaPhoneAlt size={14} /> Call Now
                  </a>
                </div>
              ))}

              <div className="phone-hours">
                <IoTimeOutline size={16} />
                <span>Available Mon – Sat: 9:00 AM – 8:00 PM (IST)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
