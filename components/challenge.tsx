import Link from 'next/link'
import Image from 'next/image'
import CustomerAvatar01 from '@/public/images/customer-avatar-01.jpg'
import CustomerAvatar02 from '@/public/images/customer-avatar-02.jpg'
import CustomerAvatar03 from '@/public/images/customer-avatar-03.jpg'
import Customers01 from '@/public/images/customers-01.jpg'
import Customers02 from '@/public/images/customers-02.jpg'
import Customers03 from '@/public/images/customers-03.jpg'

export default function Challenge() {  
  return (
    <section className="bg-slate-100">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Line */}
          <div className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200" aria-hidden="true"></div>

          {/* Customers */}
          <div className="max-w-xl mx-auto md:max-w-none space-y-20">

            {/* 1st Customer */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                  <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="/wall-of-love//wall-of-love-single">可靠性的挑战</Link>
                </h2>
                <ul
                className="inline-flex flex-col text-slate-500 space-y-2.5"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-6]"
                data-aos-delay="300"
            >
                <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                        <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                    </svg>
                    <span>出口及转口的货物尺寸不一，货型亦不尽相同，需考虑货物的优先级</span>
                </li>
                <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                        <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                    </svg>
                    <span>空运货物进仓来源、时效、不同机型之限重及作业场地因素</span>
                </li>
                <li className="flex items-center">
                <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                    <path
                    className="fill-blue-500"
                    d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                    />
                </svg>
                <span>精算货物堆叠规则及效益评估，增进班机的 ULD 利用效率</span>
                </li>
                </ul>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Customers01} width={540} height={405} alt="Customer 01" />
                </div>
                <button className="absolute group">
                  <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                    <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
                    <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                  </svg>
                </button>
              </div>

            </div>

            <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                  <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="/wall-of-love//wall-of-love-single">安全性的挑战</Link>
                </h2>
                <ul
                className="inline-flex flex-col text-slate-500 space-y-2.5"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-6]"
                data-aos-delay="300"
            >
                <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                        <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                    </svg>
                    <span>人工智能 ( AI ) 不是口号，而是解决特定业务问题的工具</span>
                </li>
                <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                        <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                    </svg>
                    <span>集成所有的装载参数（法规、飞机技术数据、行李、货物、航班运行时间和航班计划信息）</span>
                </li>
                <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                        <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                    </svg>
                    <span>符合 IATA 和航空公司标准的装载要求规范，优化的搭载分布，以实现最佳重心，和最大的运行稳定性</span>
                </li>
                </ul>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  <Image className="mx-auto md:max-w-none" src={Customers02} width={540} height={405} alt="Customer 02" />
                </div>
                <button className="absolute group">
                  <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                    <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
                    <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                  </svg>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}