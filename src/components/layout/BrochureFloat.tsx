import { Download } from 'lucide-react'
import './BrochureFloat.css'

export function BrochureFloat(){
  return (
    <a
      className="brochure-float"
      href="/brochure.pdf"
      target="_blank"
      rel="noreferrer"
      aria-label="Open company brochure"
    >
      <Download size={16}/>
      <span>BROCHURE</span>
    </a>
  )
}