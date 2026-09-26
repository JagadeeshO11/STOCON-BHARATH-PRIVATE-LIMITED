import { Hero } from '../../components/home/Hero'
import { AnnouncementTicker } from '../../components/home/AnnouncementTicker'
import { ProductGrid } from '../../components/home/ProductGrid'
import { WhatWeDo } from '../../components/home/WhatWeDo'
import { WhyGlobalBuyersChoose } from '../../components/home/WhyGlobalBuyersChoose'
import { OurServicesSection } from '../../components/home/OurServicesSection'
import { TrustFactorsSection } from '../../components/home/TrustFactorsSection'
import { ReadyToSourceBanner } from '../../components/home/ReadyToSourceBanner'
import './Home.css'

export function Home() {
  return (
    <>
      <Hero />
      <AnnouncementTicker />
      <ProductGrid />
      <WhatWeDo />
      <WhyGlobalBuyersChoose />
      <OurServicesSection />
      <TrustFactorsSection />
      <ReadyToSourceBanner />
    </>
  )
}
