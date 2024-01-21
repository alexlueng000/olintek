import Image from 'next/image'
import Lucina from '@/public/images/man-6340117_1280.jpg'
import AutoLoadPro from '@/public/images/laptop-6093394_1280.jpg'
import SkyOptimizer from '@/public/images/SkyOptimizer.png'





export default function Challenges1() {
    return (
        <section>
          
          <div className="relative max-w-6xl mx-auto mt-24">
            <div className=" md:py-2 md:pb-20">

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">空运货物配载打板2大挑战</h2>
                    
                </div>

              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-2 md:-mx-9 md:gap-6 items-start md:max-w-none">
    
                {/* 1st item */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:px-9 py-6"
                    data-aos="fade-up"
                >
                    <div className='mb-6 flex justify-center'>
                        <Image 
                            className="object-cover shadow-xm transition duration-700 ease-out" 
                            src={Lucina} 
                            alt="SkyLoad iQ" 
                        />
                    </div>
                    <h4 className="text-2xl font-bold text-center text-slate-900 mb-4">可靠性的挑战</h4>
                    
                    
                    <ul>
                        <li>出口及转口的货物尺寸不一，货型亦不尽相同，需考虑货物的优先级</li>
                        <li>空运货物进仓来源、时效、不同机型之限重及作业场地因素</li>
                        <li>精算货物堆叠规则及效益评估，增进班机的ULD利用效率</li>
                    </ul>
                </div>

                {/* 2nd item */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:px-9 py-6"
                    data-aos="fade-up"
                >
                    <div className='mb-6 flex justify-center'>
                        <Image 
                            className="object-cover shadow-sm transition duration-700 ease-out" 
                            src={AutoLoadPro} 
                            alt="SkyLoad iQ" 
                        />
                    </div>
                    <h4 className="text-2xl font-bold text-center text-slate-900 mb-4">安全性的挑战</h4>
                    <ul>
                        <li>人工智能( AI )不是口号，而是解决特定业务问题的工具</li>
                        <li>集成所有的装载参数（法规、飞机技术数据、货物、转运衔接时间和航班计划信息）</li>
                        <li>符合IATA和航空公司标准的装载要求规范，优化的搭载分布，以实现最佳重心，和最大的运行稳定性</li>
                    </ul>
                </div>
    

              </div>
            </div>
          </div>
        </section>
      )
}