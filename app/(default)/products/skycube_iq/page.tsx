export const metadata = {
  title: 'OLINTEK - Skyload iQ',
  description: 'Page description',
}

import Image from 'next/image'
import HeroImage from '@/public/images/about-hero.jpg'
import IntroImage from '@/public/images/about-intro.jpg'

import Link from 'next/link'
import Customers01 from '@/public/images/customers-01.jpg'
import Customers02 from '@/public/images/customers-02.jpg'

export default function SkycubeIq() {
  return (
    <>
      {/* <Hero /> */}
      <section className="relative">

        {/* Dark background */}
        <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[30rem]" aria-hidden="true">
          <div className="w-full h-full" data-aos="fade">
            <Image className="opacity-10 w-full h-full object-cover" src={HeroImage} width={1440} height={497} priority alt="Hero" />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-16">
              <h3 className="h3 font-playfair-display text-slate-100">SkyCube iQ：智能化的决策交给我们，将装载方案和包机报价作业的效能提升到全新境界</h3>
            </div>

            {/* Hero image */}
            <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="100">
              <Image className="mx-auto" src={IntroImage} width={1024} height={576} priority alt="About intro" />
            </div>

            <div className="text-center">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 group mt-10 mb-10">
                试用申请 <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </button>
            </div>

          </div>
        </div>
        </section>

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
                      <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="/wall-of-love//wall-of-love-single">ULD轮廓设计精灵</Link>
                    </h2>
                    <div data-aos="fade-up">
                      <div className="mb-8 text-center">
                        <p className="text-xl text-slate-500 leading-loose text-left">支持各种机型在各舱室、各舱区、各舱位的ULD轮廓外形自动设计是一个复杂且具有挑战性的技术。ULD轮廓设计精灵可以依据机型的装载限制，自动建立适用于各舱区、舱位的ULD的轮廓外形。</p>
                      </div>
                    </div>
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
                      <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href="/wall-of-love//wall-of-love-single">Interlocking</Link>
                    </h2>
                    <div data-aos="fade-up">
                      <div className="mb-8 text-center">
                        <p className="text-xl text-slate-500 leading-loose text-left">使用 Interlocking 的堆叠方法是在集装板堆叠时的一种常用策略。这种方法可以使货物的装载重心分布更均匀，提高堆叠的稳定性和紧密程度，减少货物间的空隙，最大限度地利用集装板的空间。</p>
                        <p className="text-xl text-slate-500 leading-loose text-left">智能化的运算引擎，可以判断每个货物的尺寸和形状，根据集装板的大小和装载需求，自动选择最合适的堆叠模式 (Block、Brick、Pinwheel)，实现最优的堆叠方案。同时，还需考虑货物的重心平衡、稳定性和安全性，确保堆叠过程中不会出现货物倾倒或受损的情况。</p>
                      </div>
                    </div>
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
      <section> 
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">The majority our customers do not understand their workflows.</h2>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">ULD的堆叠方向限制</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">ULD Type的优先使用指定</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">ULD Type的自动选择</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">货物的回转方向限制</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">同一舱室中的 ULD 搭载限制</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">货物互相堆叠时下陷量考虑</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">AWB的装载顺序考虑</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">机场禁运品限制</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">固定货物再装载计算</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  )
}
