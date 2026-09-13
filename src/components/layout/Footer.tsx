import { Leaf } from 'lucide-react'
import { company } from '../../constants/company'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-brand">
        <span className="brand-mark"><Leaf size={19} /></span>
        <div>
          <strong>STOCON BHARATH</strong>
          <small>PRIVATE LIMITED</small>
        </div>
      </div>

      <p>Food products, fruits, vegetables and spices with an export-focused business direction.</p>

      <span>© {year} {company.name}</span>
    </footer>
  )
}
