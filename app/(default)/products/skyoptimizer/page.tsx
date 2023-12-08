
'use client'
import { useState, useEffect, useRef } from 'react'



import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function SkyOptimizer() {

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 


  return (
    <>
      {/* <Hero /> */}
      <section className="relative bg-[url(/images/campanale.jpg)] bg-cover bg-center bg-no-repeat mt-5 h-[500px] md:h-[600px]">

        {/* <div
          className="absolute inset-0 bg-gradient-to-r from-white to-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div> */}
        <div
        className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:justify-start lg:px-8 h-full"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            SkyOptimizer
            </h1>

            <p className="mt-4 max-w-xl font-bold sm:text-lg/relaxed">
            聪明有智慧交给我们、游戏规则的运用交给您。
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
              <a
                href="#"
                className="block w-full rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
              >
                联系我们
              </a>

              {/* <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-base font-medium text-lime-500 shadow hover:text-white hover:bg-lime-500 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                在线演示
              </a> */}
            </div>
          </div>
        </div>

      </section>

        <section className=''>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">智能化决策为你所用</h2>
          </div> */}
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold font-playfair-display text-black mb-10">历经实战训练的最强运算引擎</h2>
            <p className='max-w-6xl text-base sm:text-xl mt-12'>SkyOptimizer 以创新为核心，基于在航空货运行业公认的专业知识研发而成的智能化运算引擎，只要告诉 SkyOptimizer 游戏规则，让 SkyOptimizer 自己进行智能化的货物配载思考，自动将每个航班的货物装载到ULD，再将 ULD 配置到各舱室中的每个舱区与舱位，提升飞机配载、货物打板的全新境界。</p>
            <h3 className="text-3xl font-bold font-playfair-display text-black mt-10">聪明有智慧的 ” 核心 ”</h3>
            <p className='max-w-6xl text-base sm:text-base mt-4'>基于人工智能的关键核心技术 ”组合优化” ，我们自己开发的 SkyMetaheuristics 算法，将专业知识和信息技术相结合。我们将在航空物流领域，继续研发来丰富产品线，打造一个完整的航空货运智慧生态。</p>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-slate-50'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <p className="mb-3 text-2xl font-bold">容量约束</p>
                    <p className="text-lg text-slate-500 leading-relaxed mb-4"> <span className="text-purple-600">.</span> SkyOptimizer 可以考虑每架飞机上可用的货物舱位，并考虑重量和体积限制。它确保货物的总重量和体积不超过飞机的舱位允许载重，同时最大程度地利用舱位的可用空间。</p>

                    <h3 className="mb-3 text-2xl font-bold">装卸效率</h3>
                    <p className="text-lg text-slate-500 leading-relaxed mb-4"><span className="text-blue-600">.</span> SkyOptimizer 可以提高货物装卸过程的效率。智能确定飞机内货物的最佳舱位，最小化了装卸操作所需的时间。</p>

                    <h3 className="mb-3 text-2xl font-bold">货物兼容性</h3>
                    <p className="text-lg text-slate-500 leading-relaxed mb-4"> <span className="text-green-600">.</span> 一些货物具有特定的处理要求或限制。SkyOptimizer 可以考虑这些约束，确保不兼容的货物不被一起装载，并满足特殊处理要求。</p>

                    <h3 className="mb-3 text-2xl font-bold">装载合规性</h3>
                    <p className="text-lg text-slate-500 leading-relaxed mb-4"> <span className="text-red-600">.</span>空运货物操作的地板展延和捆绑固定受到各种安全标准的约束。 SkyOptimizer 可以将这些规则纳入计算中，确保生成的装载计划符合相关法规。</p>

                    <h3 className="mb-3 text-2xl font-bold">容易集成</h3>
                    <p className="text-lg text-slate-500 leading-relaxed mb-4"> <span className="text-yellow-600">.</span> SkyOptimizer 可以配置为与任何能生成标准模式数据的现有系统一起运作。通过我们直观而强大的API，您的系统集成商将在短短几天内投入运行。</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
