import Image from 'next/image'
import PageHero from '@/public/images/faq-hero1.jpg'

export default function HeroFAQ() {  
  return (
<section className="relative bg-[url(/images/ai-generated-8356763_1920.jpg)] bg-cover bg-center bg-no-repeat h-[700px] md:h-[700px]">

<div
  className="absolute inset-0 bg-gradient-to-r from-white to-transparent"
></div>

<div
  className="relative mx-auto max-w-screen-xl px-4 lg:py-32 sm:px-6 lg:flex lg:items-center lg:justify-start lg:px-8 h-full"
>
  <div className="max-w-xl text-left md:py-20">
    <h1 className="text-7xl md:text-5xl lg:text-7xl font-extrabold">
      您关心的问题都在这里
    </h1>



  </div>
</div>

</section>
  )
}