import Image from 'next/image'
import HeroImage from '@/public/images/about-hero.jpg'
import TurnOn from '@/public/images/turn_on.jpg'
import Universe from '@/public/images/guillermo.jpg'
import Henning from '@/public/images/henning.jpg'

export default function FAQ() {  
  return (
    <>
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-800 pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[30rem]" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={Henning} width={1440} height={497} priority alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt- md:pt-24">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-8">
            <h1 className="h1 font-playfair-display text-slate-100">您关心的问题都在这里</h1>
          </div>

          {/* Hero image */}
          <div className="flex justify-center items-center mt-16" data-aos="fade-up" data-aos-delay="100" >
            <Image className="mx-auto" src={HeroImage} width={1024} height={576} priority alt="About intro" />
          </div>

        </div>
      </div>
    </section>

    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2">常见问题</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Publishing industries for previewing layouts?</h4>
              <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </li>
          </ul>

        </div>
      </div>
    </section>


    </>
  )
}