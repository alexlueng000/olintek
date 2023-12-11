import Image from 'next/image'
import HeroImage from '@/public/images/about-hero.jpg'
import TurnOn from '@/public/images/turn_on.jpg'

export default function FAQ() {  
  return (
    <>
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[30rem]" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={TurnOn} width={1440} height={497} priority alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-16">
            <h1 className="h1 font-playfair-display text-slate-100">您关心的问题都在这里</h1>
          </div>

          {/* Hero image */}
          <div className="flex justify-center items-center mt-20" data-aos="fade-up" data-aos-delay="100" >
            <Image className="mx-auto" src={HeroImage} width={1024} height={576} priority alt="About intro" />
          </div>

        </div>
      </div>
    </section>




    </>
  )
}