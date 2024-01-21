import Image from 'next/image'

import About from '@/public/images/about-picture.jpg'

export default function HeroAbout() {  
  return (

    <>


<section className="relative bg-[url(/images/book-4126483_1920.jpg)] bg-cover bg-center bg-no-repeat h-[700px] md:h-[700px]">

      <div
        className="absolute inset-0 bg-gradient-to-r from-white to-transparent"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 lg:py-32 sm:px-6 lg:flex lg:items-center lg:justify-start lg:px-8 h-full"
      >
       <div className="max-w-3xl mx-auto text-center">
      <div className="text-center">

        <h1 className="h1 font-playfair-display text-black mb-4">创造一个超越经验的世界</h1>
      </div>

    </div>
      </div>

    </section>
    </>
    
  )
}