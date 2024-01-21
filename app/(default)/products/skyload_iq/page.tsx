'use client'

import { useState } from 'react';
import Image from 'next/image'

import Features1  from './features1'

import skyloadiqP1 from '@/public/images/skyloadiq-p1.png'
import skyloadiqP2 from '@/public/images/skyloadiq-p2.png'

import skyload from '@/public/images/skyload.png'
import POS3 from '@/public/images/pos-3.png'
import Overhang from '@/public/images/overhang-1.png'
import Spread from '@/public/images/spreader.png'
import LIR from '@/public/images/LIR.png'


export default function SkyloadIq() {

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
      <section className="relative bg-[url(/images/plane.jpg)] bg-cover bg-center bg-no-repeat mt-5 h-[700px] md:h-[700px]">

        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>


        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:justify-start lg:px-8 h-full"
        >
          <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-7xl md:text-5xl lg:text-7xl font-extrabold">
            SkyLoad iQ
            </h1>

            <p className="mt-12 max-w-md text-lg text-black  md:text-xl">
            您可以将飞机舱室配载和管理提升到全新境界，让智能装载为您所用。
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">为航空货运的收益优化所打造</h2>
            {/* <p className='max-w-6xl text-lg text-left text-black sm:text-xl mt-6'>
              货机或客机的货舱内，使用ULD进行货物装卸时，搭载ULD时需要遵守的一些限制和规定。这些限制和规定是为了确保货物的安全运输，以确保货物在ULD的正确装载和稳定性，同时保证飞行过程中的安全性。
            </p> */}

            {/* 1st Feature */}
            <div className="">

{/* Content */}
{/* <div className="md:min-w-[30rem]" data-aos="fade-left">
  <div className='flex justify-start'>

    <p className="text-sm md:text-3xl font-bold font-playfair-display mb-4">
      超长货物的跨板装载自动计算
    </p>
  </div>
  
  <div data-aos="fade-up">
    <div className="mb-8 text-center">
      <p className="text-xl text-slate-500 text-left">智能化决策的AI技术，展现可视化和自动化的装载优化，在现代航空物流中具有关键性的地位，可大幅提升装载过程的效率和准确性。我们在信息技术和人工智能领域的最新研究成果，将「组合优化」方法实际应用于现实环境。这不仅是基于过去成功案例积累的宝贵经验，同时也是在持续创新的推动下，不断追求更高水平的效能和成果</p>
    </div>
  </div>
</div> */}

{/* Image */}
<div className="flex justify-center items-center" data-aos="fade-right">
  <div className="relative">
    <div className="absolute inset-0 pointer-events-none  -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
    <Image className="mx-auto md:max-w-none" src={skyload} width={540} height={405} alt="Customer 01" />
  </div>
</div>

</div>
          </div>

          <div className="py-12 md:py-20">

            {/* Line */}
            <div className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200" aria-hidden="true"></div>

            {/* Skyload Features */}
            <div className="max-w-xl mx-auto md:max-w-none space-y-20">

              

              {/* 3rd Feature */}
              <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

                {/* Content */}
                <div className="md:min-w-[30rem]" data-aos="fade-left">
                  <h2 className="h3 md:text-3xl font-playfair-display mb-4">
                  组合优化的智能运算引擎，帮助你最大程度地利用舱位
                  </h2>
                  <div data-aos="fade-up">
                    <div className="mb-8 text-center">
                      <p className="text-xl text-black text-left">我们独家的PPS技术(Position Pattern Service)，应用组合优化技术，依据机型的装载布局设计，以及使用的ULD版本，进行全自动的ULD搭载组合分析。考虑舱位的搭载重量，以及舱位搭载的平衡、危险品的搭载位置与隔离条件…等，智能选择适用的ULD类型和数量，自动配置最佳搭载舱位，以最大程度地利用舱位空间。</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center" data-aos="fade-right">
                  <div className="relative">
                    <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                    <Image className="mx-auto md:max-w-none" src={POS3} width={540} height={405} alt="Customer 02" />
                  </div>
                </div>

              </div>

              <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

                {/* Content */}
                <div className="md:min-w-[30rem]" data-aos="fade-left">
                  <h2 className="h3 md:text-3xl font-playfair-display mb-4">
                  超长货物的跨板装载自动计算
                  </h2>
                  <div data-aos="fade-up">
                    <div className="mb-8 text-center">
                      <p className="text-xl text-black text-left">超长尺寸的货物，一般无法使用一个集装板来装载，在现场作业上最常使用并板(凹凸板)的方法来做超长尺寸的货物装载。一般跨板装载作业时，须考虑集装板所能承载的重量之外，更须考虑每个舱位所能搭载的重量限制。支持超长尺寸货物的跨板装载时，自动计算所需要的集装板类型与数量，以及跨板时货物必须撑高的尺寸。</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center" data-aos="fade-right">
                  <div className="relative">
                    <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                    <Image className="mx-auto md:max-w-none" src={Overhang} width={540} height={405} alt="Customer 02" />
                  </div>
                </div>

              </div>


              <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

                {/* Content */}
                <div className="md:min-w-[30rem]" data-aos="fade-left">
                  <h2 className="h3 md:text-3xl font-playfair-display mb-4">
                  货物垫板与货物捆绑
                  </h2>
                  <div data-aos="fade-up">
                    <div className="mb-8 text-center">
                      <p className="text-xl text-black text-left">当飞机在起飞、爬升、降落以及在飞行中遇到乱流时，装在飞机上的货物受到惯性影响，将产生向前、向后、向上、向左、向右5个方向的冲击。因此、当飞机上装有较重的货物时，必须对货物采取限动措施以及飞机货舱地板承受力的判断，自动计算展延面积及垫板与捆绑辅材的类型与数量。</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center" data-aos="fade-right">
                  <div className="relative">
                    <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                    <Image className="mx-auto md:max-w-none" src={Spread} width={540} height={405} alt="Customer 02" />
                  </div>
                </div>

              </div>


              <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

                {/* Content */}
                <div className="md:min-w-[30rem]" data-aos="fade-left">
                  <h2 className="h3 md:text-3xl font-playfair-display mb-4">
                  Loading Instruction Report（LIR）
                  </h2>
                  <div data-aos="fade-up">
                    <div className="mb-8 text-center">
                      
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center" data-aos="fade-right">
                  <div className="relative">
                    <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                    <Image className="mx-auto md:max-w-none" src={LIR} width={540} height={405} alt="Customer 02" />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* <Testimonials /> */}
      <Features1 />
    </>
  )
}
