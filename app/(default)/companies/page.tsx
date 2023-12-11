import Image from 'next/image'
import HeroImage from '@/public/images/about-hero.jpg'
import IntroImage from '@/public/images/about-intro.jpg'
import TurnOn from '@/public/images/turn_on.jpg'

import CompanyContent from './content'

export default function Companies() {  
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
            <h1 className="h1 font-playfair-display text-slate-100">我们的合作伙伴</h1>
          </div>

          {/* Hero image */}
          <div className="flex justify-center items-center mt-20" data-aos="fade-up" data-aos-delay="100" >
            <Image className="mx-auto" src={HeroImage} width={1024} height={576} priority alt="About intro" />
          </div>

        </div>
      </div>
    </section>

    <CompanyContent />

    {/* Section content */}
    <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">

        {/* 1st product */}
        <section data-aos="fade-up" className='h-full flex flex-col'>

            {/* <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div> */}
        <div className="flex flex-col md:flex-row items-center gap-4 border-8 border-neutral-50">
            {/* <Image className="w-16 h-16 md:w-24 md:h-24 object-cover group-hover:scale-105 transition duration-700 ease-out" src={Lucina} width={96} height={96} alt="Product 02" /> */}
            <div> 
            <p className='text-2xl font-bold'>SOCO System</p>
            <p className='text-xs'>Air Cargo Revenue Optimization</p>
            </div>
        </div>

        <div className='grow mb-3'>
            <p className="text-md md:text-lg text-black leading-relaxed mt-10 leading-8 px-4 md:px-4">
            航空公司的配载规划人员，透过直观的 3D 图形，能够清楚地了解飞机货舱内各个 ULD的搭载位置、货物装载密度以及重量分布等关键信息，查看您的飞机还剩下多少个舱位，快速掌握舱位的销售报价，使决策者能够更准确地制定装载计划和进行必要的调整，同时最大化地利用飞机货舱的舱位和重量限制。
            </p>

            <div className='flex justify-center mt-10'>
            <a
                href="/products/skyload_iq"
                className="w-1/3 rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
                了解详情
            </a>
            </div>
        </div>
        
        
        </section>

        {/* 2nd product */}
        <section data-aos="fade-up" className='h-full flex flex-col'>

            {/* <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div> */}
        <div className="flex flex-col md:flex-row items-center gap-4 border-8 border-neutral-50">
            
            {/* <Image className="w-16 h-16 md:w-24 md:h-24 object-cover group-hover:scale-105 transition duration-700 ease-out" src={AutoLoadPro} width={96} height={96} alt="Product 01" /> */}
            <div> 
            <p className='text-2xl font-bold'>BUTON</p>
            <p className='text-xs'>Air Cargo Shipment Planning</p>
            </div>
        </div>

        <div className='grow mb-3'>
            <p className="text-md md:text-lg text-black leading-relaxed mt-10 leading-8 px-4 md:px-4">
            协助 GHA、GSA、以及航空货运代理，进一步提升作业效率并确保货物装载质量。对于包机可快速制作包机的装载方案与报价，货站的组板装载、货代的提单预订条件，进行货物量的精准预测，自动进行装载空间的优化计算，快速准确地估算所需的ULD类型和数量，以确保每个ULD的使用效益最大化。
            </p>

            <div className='flex justify-center mt-10'>
            <a
                href="/products/skycube_iq"
                className="w-1/3 rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
                了解详情
            </a>
            </div>
        </div>
        
        
        </section>

        {/* 3rd product */}
        <section data-aos="fade-up" className='h-full flex flex-col'>

            {/* <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div> */}
        <div className="flex flex-col md:flex-row items-center gap-4 border-8 border-neutral-50">
            {/* <Image className="w-16 h-16 md:w-24 md:h-24 object-cover group-hover:scale-105 transition duration-700 ease-out" src={AutoLoadPro} width={96} height={96} alt="News 01" /> */}
            <div> 
            <p className='text-2xl font-bold'>LICENCEDFT</p>
            <p className='text-xs'>Automatic Loading Engine</p>
            </div>
        </div>

        <div className='grow mb-3'>
        <p className="text-md md:text-lg text-black leading-relaxed mt-10 leading-8 px-4 md:px-4">
            SkyOptimizer 考虑货物的总重量和体积不超过飞机的容量，同时最大程度地利用舱位的空间。我们提供与外部系统的数据接口，可以灵活的使用SkyOptimizer API 的功能来满足与各种系统数据接口的开发需求。例如：与企业内部管理系统的数据接口以及将 SkyOptimizer 集成到您的系统中。
        </p>

        <div className='flex justify-center mt-10'>
            <a
            href="/products/skyoptimizer"
            className="w-1/3 rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
            了解详情
            </a>
        </div>
        </div>
        
        </section>
        </div>

    </>
  )
}