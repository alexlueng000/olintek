export const metadata = {
  title: 'Home - OLINTEK',
  description: 'Page description', // used for SEO
}

import Hero from '@/components/hero-home'
import Features03 from '@/components/features-home-03'
import Target from '@/components/target'
import Target1 from '@/components/target1'
import Clients1 from '@/components/clients1'

export default function Home() {
  return (
    <>
      <Hero />
      <Features03 /> {/* 智能化软件为您所用 */}
      
      <Target1 /> {/* 是什么让我们与众不同 */}
      <Target /> {/* 智力超群的运算力 */}
      <Clients1 />
    </>
  )
}
