import { MessageCircle } from 'lucide-react'
import { company } from '../../constants/company'
import './WhatsAppFloat.css'
export function WhatsAppFloat(){return <a className="whatsapp-float" href={'https://wa.me/'+company.whatsappNumber} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={25}/></a>}