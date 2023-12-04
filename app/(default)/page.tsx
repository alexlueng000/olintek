export const metadata = {
  title: 'Home - OLINTEK',
  description: 'Page description', // used for SEO
}

import Hero from '@/components/hero-home'
import Features03 from '@/components/features-home-03'
import Features04 from '@/components/features-home-04'
import Target from '@/components/target'
import Target1 from '@/components/target1'
import Challenge from '@/components/challenge'
import Clients1 from '@/components/clients1'

export default function Home() {
  return (
    <>
      <Hero />
      <Features04 />
      <Challenge />
      <Features03 />
      
      <Target1 />
      <Target />
      <Clients1 />
    </>
  )
}
