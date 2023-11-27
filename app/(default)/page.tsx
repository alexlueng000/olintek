export const metadata = {
  title: 'Home - Tidy',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import Features from '@/components/features-home'
import Features02 from '@/components/features-home-02'
import Features03 from '@/components/features-home-03'
import Features04 from '@/components/features-home-04'
import Target from '@/components/target'
import Target1 from '@/components/target1'
import PricingSection from '@/components/pricing'
import Cta from '@/components/cta'
import Challenge from '@/components/challenge'
import Clients1 from '@/components/clients1'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Features04 />
      <Challenge />
      {/* <FeaturesBlocks /> */}

      {/* <Features02 /> */}
      
      <Features03 />
      
      <Target1 />
      <Target />
      {/* <PricingSection /> */}
      <Clients1 />
      {/* <Cta /> */}
    </>
  )
}
