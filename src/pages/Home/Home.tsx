import { AboutSection } from '../../components/home/AboutSection'
import { AnnouncementTicker } from '../../components/home/AnnouncementTicker'
import { ContactSection } from '../../components/home/ContactSection'
import { ExportProcess } from '../../components/home/ExportProcess'
import { FutureVision } from '../../components/home/FutureVision'
import { Hero } from '../../components/home/Hero'
import { ProductGrid } from '../../components/home/ProductGrid'
import { ValuesSection } from '../../components/home/ValuesSection'
import './Home.css'

export function Home() {
  return (
    <>
      <Hero />
      <AnnouncementTicker />
      <AboutSection />
      <ProductGrid />
      <ExportProcess />
      <FutureVision />
      <ValuesSection />
      <ContactSection />
    </>
  )
}
