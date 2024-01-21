'use client'

import { useState } from 'react';

import Image from 'next/image'

import Link from 'next/link'
import FeatureSC from '@/public/images/sc-feature.png'
import Feature2 from '@/public/images/skycubeiq-p2.png'
import Features from './features'

import SkyCubeFt1 from '@/public/images/skycube.png'


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
      <section className="relative bg-[url(/images/plane-352730_1920.jpg)] bg-cover bg-center bg-no-repeat mt-5 h-[700px] md:h-[700px]">


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

                <div className="flex justify-center items-center" data-aos="fade-right">
  <div className="relative">
    <div className="absolute inset-0 pointer-events-none  -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
    <Image className="mx-auto md:max-w-none" src={SkyCubeFt1} width={540} height={405} alt="Customer 01" />
  </div>
</div>
              </div>

              {/* Line */}
              <div className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200" aria-hidden="true"></div>



            </div>
          </div>
        </section>

        <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">Auto Interlocking</h2>
            <p className="max-w-6xl text-lg  text-left leading-relaxed mt-6 text-black mt-6">智能化的运算引擎，自动判断每个货物的尺寸和形状，选择最合适的堆叠模式 (Block、Brick、Pinwheel)，实现最优的堆叠方案。提高堆叠的稳定性和紧密程度，减少货物间的空隙，最大限度地利用集装板的空间。</p>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-col md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

            {/* Content */}


            {/* Gifs */}
            <div className="max-w-6xl px-4 sm:px-6 mt-16">
              <div className="w-full mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3 md:-mx-5 md:gap-20 items-start md:max-w-none justify-center">
                 
                {/* GIF 1 */}
                <div>
                  <img src="/images/gifs/skycube-auto-up-1.gif" alt="Description of GIF 1" />
                  <p className='font-bold text-xl'>自动层堆叠方式</p>
                </div>
                {/* GIF 2 */}
                <div>
                  <img src="/images/gifs/skycube-auto-up-2.gif" alt="Description of GIF 2" />
                  {/* <p className='font-bold text-xl'>PMC A2</p> */}
                </div>
                {/* GIF 3 */}
                <div>
                  <img src="/images/gifs/skycube-auto-up-3.gif" alt="Description of GIF 3" />
                  {/* <p className='font-bold text-xl'>PMC Q7</p> */}
                </div>
                {/* GIF 4 */}
                <div>
                  <img src="/images/gifs/skycube-auto-down-1.gif" alt="Description of GIF 4" />
                  <p className='font-bold text-xl'>上下层交错方式</p>
                </div>
                {/* GIF 5 */}
                <div>
                  <img src="/images/gifs/skycube-auto-down-2.gif" alt="Description of GIF 4" />
                  {/* <p>PMC Q5</p> */}
                </div>
                {/* GIF 6 */}
                <div className='flex flex-col justify item-center'>
                  <img src="/images/gifs/skycube-auto-down-3.gif" alt="Description of GIF 4" />
                  {/* <p>AKE LD3</p> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">Auto Overhang Loading</h2>
            <p className="max-w-6xl text-lg  text-left leading-relaxed mt-6 text-black mt-6">装货计算能力是装柜软件最基本的要求，即使拥有再多的功能，计算结果不好，也是无法达到实质效用。SkyLoadiQ不但拥有强大的功能可以满足您实际的飞机配载、货物打板作业需求，快速、稳定以及坚强的计算能力更是我们长期以来所坚持、不断研发突破并且引以自豪的利器。</p>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-col md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

            {/* Content */}


            {/* Gifs */}
            <div className="max-w-6xl px-4 sm:px-6 mt-16">
              <div className="w-full mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-2 md:-mx-5 md:gap-20 items-start md:max-w-none justify-center">
                 
                {/* GIF 1 */}
                <div>
                  <img src="/images/gifs/Overhang_1.gif" alt="Description of GIF 1" />
                  {/* <p>PMC A1</p> */}
                </div>
                {/* GIF 2 */}
                <div>
                  <img src="/images/gifs/Overhang_2.gif" alt="Description of GIF 2" />
                  {/* <p>PMC A2</p> */}
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
