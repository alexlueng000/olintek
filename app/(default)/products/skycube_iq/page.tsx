'use client'

import { useState } from 'react';

import Image from 'next/image'

import Link from 'next/link'
import FeatureSC from '@/public/images/sc-feature.png'
import Feature2 from '@/public/images/skycubeiq-p2.png'
import Features from './features'


export default function SkycubeIq() {

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      {/* <Hero /> */}
      <section className="relative bg-[url(/images/chuttersnap.jpg)] bg-cover bg-center bg-no-repeat mt-5 h-[700px] md:h-[700px]">


        <div
        className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:justify-start lg:px-8 h-full"
        >
          <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-7xl md:text-5xl lg:text-7xl font-extrabold">
            SkyCube iQ
            </h1>

            <p className="mt-12 max-w-md text-lg text-black  md:text-xl">
            把智能订舱决策交给我们，您可以获得最佳收益的装载方案。
            </p>

            <div className="mt-12 flex flex-wrap gap-4 text-center justify-start">
              <a
                href="/contact"
                className={`block w-full rounded px-12 py-3 text-base font-medium shadow sm:w-auto ${hover ? 'bg-white text-lime-600' : 'bg-lime-500 text-white'}`}
              >
                联系我们
              </a>

              <a
                href="#"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="block w-full rounded bg-white px-12 py-3 text-base font-medium text-lime-500 shadow hover:text-white hover:bg-lime-600 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                在线演示
              </a>
            </div>
          </div>
        </div>

      </section>


        <section className="">

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">包机报价神器，聪明订舱如虎添翼</h2>
                {/* <p className='max-w-6xl text-lg text-black text-left sm:text-xl mt-6'>货物装载堆叠的限制条件是指在ULD内，将货物进行堆叠时需要遵守的一些限制和规定。为了确保飞行的安全，装载的货物应该进行正确的堆叠和固定，确保货物的稳定性，防止在飞行中发生移动或滑动，干扰飞机的平衡。</p> */}
              </div>

              {/* Line */}
              <div className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200" aria-hidden="true"></div>

              {/* Features */}
              <div className="max-w-xl mx-auto md:max-w-none space-y-20">

                {/* 1st Feature */}
                <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

                  {/* Content */}
                  <div className="md:min-w-[30rem]" data-aos="fade-left">
                    <h2 className="h3 md:text-3xl font-playfair-display mb-4">
                    Auto Interlocking
                    </h2>
                    <div data-aos="fade-up">
                      <div className="mb-8 text-center">
                        <p className="text-xl text-black text-left">智能化的运算引擎，自动判断每个货物的尺寸和形状，选择最合适的堆叠模式 (Block、Brick、Pinwheel)，实现最优的堆叠方案。提高堆叠的稳定性和紧密程度，减少货物间的空隙，最大限度地利用集装板的空间。</p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center items-center" data-aos="fade-right">
                    <div className="relative">
                      <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                      <Image className="mx-auto md:max-w-none" src={Feature2} width={540} height={405} alt="Customer 01" />
                    </div>

                  </div>

                </div>

                {/* 2nd Feature */}
                <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

                  {/* Content */}
                  <div className="md:min-w-[30rem]" data-aos="fade-left">
                    <h2 className="h3 md:text-3xl font-playfair-display mb-4">
                    Auto Overhang Loading
                    </h2>
                    <div data-aos="fade-up">
                      <div className="mb-8 text-center">
                        <p className="text-xl text-black text-left">对于飞机的下货舱，为了有效利用舱室的空间，符合长尺寸货物的特殊装载作业要求，智能化的运算引擎会根据货物的尺寸、重量、平衡性等因素，自动计算探板时货物必须垫高的高尺寸，以确保装载过程的合理性和稳定性，并有效利用各舱位的空间。</p>
                        
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center items-center" data-aos="fade-right">
                    <div className="relative">
                      <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                      <Image className="mx-auto md:max-w-none" src={FeatureSC} width={540} height={405} alt="Customer 02" />
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


      {/* <Testimonials /> */}
      <Features />
    </>
  )
}
