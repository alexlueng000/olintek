import Image from 'next/image'
import Lucina from '@/public/images/Lucina.png'
import AutoLoadPro from '@/public/images/AutoLoadPro.png'
import SkyOptimizer from '@/public/images/OLINTEK-LOGO-PNG-1.png'



export default function Products() {
    return (
        <section>
          
          <div className="relative max-w-6xl mx-auto mt-24">
            <div className=" md:py-2 md:pb-20">

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">智能化软件为您所用</h2>
                    <p className='max-w-6xl text-lg text-left text-black  sm:text-xl mt-6'>智能化决策的AI技术，展现可视化和自动化的空运货物飞机配载优化，在现代航空物流中具有关键性的地位，可大幅提升货物打板和货舱配载过程的效率和准确性。我们在信息技术和人工智能领域的最新研究成果，将「组合优化」方法实际应用于现实环境。这不仅是基于过去成功案例积累的宝贵经验，同时也是在持续创新的推动下，不断追求更高水平的效能和成果。</p>
                </div>

              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-6 items-start md:max-w-none">
    
                {/* 1st item */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:px-9 py-6"
                    data-aos="fade-up"
                >
                    <div className='mb-6 flex justify-center'>
                        <Image 
                            className="w-20 h-20 md:w-24 md:h-24 object-cover shadow-xm transition duration-700 ease-out hover:scale-110" 
                            src={Lucina} 
                            alt="SkyLoad iQ" 
                        />
                    </div>
                    <h4 className="text-2xl font-bold text-center text-slate-900 mb-4">SkyLoad iQ</h4>
                    <p className="text-center font-bold text-slate-500 mb-4">
                        Air Cargo Revenue Optimization
                    </p>
                    <p className="text-black text-lg text-left">
                    航空公司的货运配载规划人员，透过直观的3D图形，能够清楚地了解飞机货舱内各个ULD的搭载位置、货物装载密度以及重量分布等关键信息，查看您的飞机还剩下多少个舱位，快速掌握舱位的销售报价，使决策者能够更准确地制定CBA的组板装载计划和进行必要的调整，同时最大化地利用飞机货舱的舱位和重量限制，更有效利用ULD的装载空间。
                    </p>
                    <div className='flex justify-center mt-8'>

                        <a className="rounded px-12 py-3 inline-flex items-center text-blue-50 bg-lime-500 hover:bg-lime-600 group shadow-sm" href="/products/skyload_iq">
                        了解详情
                        <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                            <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                            </svg>
                        </span>
                        </a>
                    </div>
                </div>

                {/* 2nd item */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:px-9 py-6"
                    data-aos="fade-up"
                >
                    <div className='mb-6 flex justify-center'>
                        <Image 
                            className="w-20 h-20 md:w-24 md:h-24 object-cover shadow-sm transition duration-700 ease-out hover:scale-110" 
                            src={AutoLoadPro} 
                            alt="SkyLoad iQ" 
                        />
                    </div>
                    <h4 className="text-2xl font-bold text-center text-slate-900 mb-4">SkyCube iQ</h4>
                    <p className="text-center font-bold text-slate-500 mb-4">
                    Air Cargo Shipment Planning
                    </p>
                    <p className="text-black text-lg text-left">
                    包机报价神器：SkyCube iQ，协助GHA、GSA、以及航空货运代理，进一步提升作业效率并确保货物装载质量。可快速制作包机的装载方案与报价，货代的提单预订条件，进行货物量的精准预测，自动进行装载空间的优化计算，快速准确地估算所需的ULD类型和数量，以确保每个ULD的使用效益最大化。
                    </p>
                    <div className='flex justify-center mt-8'>
                        <a className="rounded px-12 py-3 inline-flex items-center text-blue-50 bg-lime-500 hover:bg-lime-600 group shadow-sm" href="/products/skycube_iq">
                        了解详情
                        <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                            <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                            </svg>
                        </span>
                        </a>
                    </div>
                </div>
    
                {/* 3rd item */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:px-9 py-6"
                    data-aos="fade-up"
                >
                    <div className='mb-6 flex justify-center'>
                        <Image 
                            className="w-16 h-16 md:w-24 md:h-24 object-cover shadow-sm transition duration-700 ease-out hover:scale-110" 
                            src={SkyOptimizer} 
                            alt="SkyLoad iQ" 
                        />
                    </div>
                    <h4 className="text-2xl font-bold text-center text-slate-900 mb-4">SkyOptimizer</h4>
                    <p className="text-center font-bold text-slate-500 mb-4">
                    Automatic Loading Engine
                    </p>
                    <p className="text-black text-lg text-left">
                    有智慧的SkyOptimize，是我们强而有力的核心引擎，全自动考虑货物的总重量和体积不超过飞机的容量，同时最大程度地利用舱位的空间。我们提供与外部系统的数据接口，可以灵活的使用SkyOptimizer API的功能来满足与各种系统数据接口的开发需求。例如：与企业内部管理系统的数据接口以及将SkyOptimizer集成到您的系统中。
                    </p>
                    <div className='flex justify-center mt-8'>
                        <a className="rounded px-12 py-3 inline-flex items-center text-blue-50 bg-lime-500 hover:bg-lime-600 group shadow-sm" href="/products/skyoptimizer">
                        了解详情
                        <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                            <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                            </svg>
                        </span>
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}