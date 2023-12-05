import Image from 'next/image'
import FeaturesImage01 from '@/public/images/features-home-3-01.jpg'
import FeaturesImage02 from '@/public/images/features-home-3-02.jpg'
import FeaturesImage03 from '@/public/images/features-home-3-03.jpg'
import AutoLoadPro from '@/public/images/AutoLoadPro.png'
import Lucina from '@/public/images/Lucina.png'

export default function FeaturesHome03() {
  return (
    <section className="relative">

      {/* Dark background */}
      {/* <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_85%)] h-96 md:h-auto md:mb-64" aria-hidden="true"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-5xl font-bold font-playfair-display text-black mb-10">智能化软件为您所用</h2>
            <p className='max-w-6xl text-base sm:text-xl mt-12'>智能化决策的AI技术，展现可视化和自动化的装载优化，在现代航空物流中具有关键性的地位，可大幅提升装载过程的效率和准确性。我们在信息技术和人工智能领域的最新研究成果，将「组合优化」方法实际应用于现实环境。这不仅是基于过去成功案例积累的宝贵经验，同时也是在持续创新的推动下，不断追求更高水平的效能和成果</p>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">

            {/* 1st article */}
            <section data-aos="fade-up">

                {/* <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div> */}
              <div className="overflow-hidden flex item-center gap-4 border-8 border-neutral-50">
                <Image className="w-16 h-16 aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={AutoLoadPro} width={64} height={64} alt="Product 01" />
                <div> 
                  <p className='text-4xl font-bold'>SkyLoad iQ</p>
                  <p>Cargo Revenue Optimization</p>
                </div>
              </div>

              <p className="text-lg text-black leading-relaxed mt-10 leading-8 p-4">
                航空公司的配载规划人员，透过直观的 3D 图形，能够清楚地了解飞机货舱内各个 ULD的搭载位置、货物装载密度以及重量分布等关键信息，查看您的飞机还剩下多少个舱位，快速掌握舱位的销售报价，使决策者能够更准确地制定装载计划和进行必要的调整，同时最大化地利用飞机货舱的舱位和重量限制。
              </p>

              <div className='flex justify-center mt-10'>
                <a
                  href="#"
                  className="w-1/3 rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                >
                  了解详情
                </a>
              </div>
              
            </section>


            <section data-aos="fade-up">

                {/* <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div> */}
              <div className="overflow-hidden flex item-center gap-4 border-8 border-neutral-50">
                <Image className="w-16 h-16 aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={Lucina} width={64} height={64} alt="Product 02" />
                <div> 
                  <p className='text-4xl font-bold'>SkyCube iQ</p>
                  <p>Cargo Revenue Optimization</p>
                </div>
              </div>

              <p className="text-lg text-black leading-relaxed mt-10 leading-8 p-4">
                协助 GHA、GSA、以及航空货运代理，进一步提升作业效率并确保货物装载质量。对于包机可快速制作包机的装载方案与报价，货站的组板装载、货代的提单预订条件，进行货物量的精准预测，自动进行装载空间的优化计算，快速准确地估算所需的ULD类型和数量，以确保每个ULD的使用效益最大化。
              </p>

              <div className='flex justify-center mt-10'>
                <a
                  href="#"
                  className="w-1/3 rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                >
                  了解详情
                </a>
              </div>
              
            </section>


            <section data-aos="fade-up">

                {/* <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div> */}
              <div className="overflow-hidden flex item-center gap-4 border-8 border-neutral-50">
                <Image className="w-16 h-16 aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={AutoLoadPro} width={64} height={64} alt="News 01" />
                <div> 
                  <p className='text-4xl font-bold'>SkyOptimizer</p>
                  <p>Cargo Revenue Optimization</p>
                </div>
              </div>

              <p className="text-lg text-black leading-relaxed mt-10 leading-8 p-4">
                SkyOptimizer 考虑货物的总重量和体积不超过飞机的容量，同时最大程度地利用舱位的空间。我们提供与外部系统的数据接口，可以灵活的使用SkyOptimizer API 的功能来满足与各种系统数据接口的开发需求。例如：与企业内部管理系统的数据接口以及将 SkyOptimizer 集成到您的系统中。
              </p>

              <div className='flex justify-center mt-10'>
                <a
                  href="#"
                  className="w-1/3 rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                >
                  了解详情
                </a>
              </div>
              
            </section>
          </div>

        </div>
      </div>
    </section>
  )
}