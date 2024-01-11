import Image from 'next/image'

import About from '@/public/images/about-picture.jpg'

export default function HeroAbout() {  
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-teal-950 pointer-events-none -z-10" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={About} width={1440} height={497} alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-28 md:pt-40 md:pb-36">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-center">

              <h1 className="h1 font-playfair-display text-slate-100 mb-4">创造一个超越经验的世界</h1>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}