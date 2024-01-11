import Link from 'next/link'
import Image from 'next/image'
import PartnersBG from '@/public/images/partners-bg.jpg'

export default function HeroLessons() {  
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-teal-950 pointer-events-none -z-10" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={PartnersBG} width={1440} height={497} alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-28 md:pt-40 md:pb-36">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-center">

              <h1 className="h1 font-playfair-display text-slate-100 mb-4">我们的合作伙伴</h1>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}