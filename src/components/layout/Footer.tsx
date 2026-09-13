import { Leaf } from 'lucide-react'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-brand">
        <span className="brand-mark"><Leaf size={19} /></span>
        <div><strong>STOCON BHARATH</strong><small>PRIVATE LIMITED</small></div>
      </div>
      <p>Food products, fruits, vegetables and spices for an export-focused future.</p>
      <span>© {year} STOCON BHARATH PRIVATE LIMITED</span>
    </footer>
  )
}
