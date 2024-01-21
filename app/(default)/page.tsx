export const metadata = {
  title: 'Home - OLINTEK',
  description: 'Page description', // used for SEO
}

import Hero from '@/components/hero-home'
import Target from '@/components/target'
import Clients1 from '@/components/clients1'
import Different from '@/components/different'
import Products from '@/components/products'
import Challenge1 from '@/components/challenge1'


export default function Home() {
  return (
    <>
      <Hero />
      <Products />  
      {/* 是什么让我们与众不同1 */}     
      <Different /> 
      <Challenge1 />
      {/*智力超群的运算力*/}
      <Target /> 
      <Clients1 />
    </>
  )
}
