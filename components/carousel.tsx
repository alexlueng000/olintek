'use client'

import { useEffect } from 'react'
import Image from 'next/image'



import F30_777F from '@/public/images/30_77.gif'
import gif1 from '@/public/images/gif1.gif'
import gif2 from '@/public/images/gif2.gif'
import gif3 from '@/public/images/gif3.gif'
import gif4 from '@/public/images/gif4.gif'

import planeBG from '@/public/images/plane-bg.png'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Navigation])

export default function Carousel() {

  useEffect(() => {
    const carousel = new Swiper('.carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-black">出色的打板和装载能力</h2>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none ">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide flex flex-col">
                  {/* Image */}
                  <div>
                    <Image className="w-full " src={gif1} width={518} height={296} alt="Carousel 01" />
                  </div>
                  {/* White box */}
                  <div className="grow bg-white px-6 pb-8">
                      {/* Avatars */}
                      {/* Title */}
                      <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Ullamco laboris</a>
                      <div className="text-sm text-gray-500 italic">Lorem ipsum dolor sit amet</div>
                  </div>
              </div>

              <div className="swiper-slide flex flex-col">
                  {/* Image */}
                  <div>
                    <Image className="w-full " src={gif2} width={518} height={296} alt="Carousel 01" />
                  </div>
                  {/* White box */}
                  <div className="grow bg-white px-6 pb-8">
                      {/* Avatars */}
                      {/* Title */}
                      <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Ullamco laboris</a>
                      <div className="text-sm text-gray-500 italic">Lorem ipsum dolor sit amet</div>
                  </div>
              </div>

              <div className="swiper-slide flex flex-col">
                  {/* Image */}
                  <div>
                    <Image className="w-full " src={gif3} width={518} height={296} alt="Carousel 01" />
                  </div>
                  {/* White box */}
                  <div className="grow bg-white px-6 pb-8">
                      {/* Avatars */}
                      {/* Title */}
                      <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Ullamco laboris</a>
                      <div className="text-sm text-gray-500 italic">Lorem ipsum dolor sit amet</div>
                  </div>
              </div>


              <div className="swiper-slide flex flex-col">
                  {/* Image */}
                  <div>
                    <Image className="w-full " src={gif4} width={518} height={296} alt="Carousel 01" />
                  </div>
                  {/* White box */}
                  <div className="grow bg-white px-6 pb-8">
                      {/* Avatars */}
                      {/* Title */}
                      <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Ullamco laboris</a>
                      <div className="text-sm text-gray-500 italic">Lorem ipsum dolor sit amet</div>
                  </div>
              </div>


              <div className="swiper-slide flex flex-col">
                  {/* Image */}
                  <div>
                    <Image className="w-full " src={gif1} width={518} height={296} alt="Carousel 01" />
                  </div>
                  {/* White box */}
                  <div className="grow bg-white px-6 pb-8">
                      {/* Avatars */}
                      {/* Title */}
                      <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Ullamco laboris</a>
                      <div className="text-sm text-gray-500 italic">Lorem ipsum dolor sit amet</div>
                  </div>
              </div>


              <div className="swiper-slide flex flex-col">
                  {/* Image */}
                  <div>
                    <Image className="w-full " src={gif1} width={518} height={296} alt="Carousel 01" />
                  </div>
                  {/* White box */}
                  <div className="grow bg-white px-6 pb-8">
                      {/* Avatars */}
                      {/* Title */}
                      <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Ullamco laboris</a>
                      <div className="text-sm text-gray-500 italic">Lorem ipsum dolor sit amet</div>
                  </div>
              </div>

            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-lime-500 hover:bg-lime-600 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-white group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-lime-500 hover:bg-lime-600 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-white group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}