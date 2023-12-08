export const metadata = {
  title: 'OLINTEK - Skyload iQ',
  description: 'Page description',
}

import Image from 'next/image'

import Link from 'next/link'
import Customers01 from '@/public/images/customers-01.jpg'
import Customers02 from '@/public/images/customers-02.jpg'

export default function SkycubeIq() {
  return (
    <>
      {/* <Hero /> */}
      <section className="relative bg-[url(/images/chuttersnap.jpg)] bg-cover bg-center bg-no-repeat mt-5 h-[500px] md:h-[600px]">

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
            SkyCube iQ
            </h1>

            <p className="mt-4 max-w-xl font-bold sm:text-lg/relaxed">
            把智能订舱决策交给我们，您可以获得最佳收益的装载方案。
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
              <a
                href="#"
                className="block w-full rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
              >
                联系我们
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-base font-medium text-lime-500 shadow active:text-rose-500 sm:w-auto"
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
                <h2 className="text-5xl font-bold font-playfair-display text-black mb-10">订舱和包机报价，更加智能化</h2>
                <p className='max-w-6xl text-lg text-slate-500 sm:text-xl mt-12'>货物装载堆叠的限制条件是指在ULD内，将货物进行堆叠时需要遵守的一些限制和规定。为了确保飞行的安全，装载的货物应该进行正确的堆叠和固定，确保货物的稳定性，防止在飞行中发生移动或滑动，干扰飞机的平衡。</p>
              </div>

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
                        <p className="text-xl text-slate-500 leading-relaxed text-left">支持各种机型在各舱室、各舱区、各舱位的ULD轮廓外形自动设计是一个复杂且具有挑战性的技术。ULD轮廓设计精灵可以依据机型的装载限制，自动建立适用于各舱区、舱位的ULD的轮廓外形。</p>
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
                        <p className="text-xl text-slate-500 leading-relaxed text-left">使用 Interlocking 的堆叠方法是在集装板堆叠时的一种常用策略。这种方法可以使货物的装载重心分布更均匀，提高堆叠的稳定性和紧密程度，减少货物间的空隙，最大限度地利用集装板的空间。</p>
                        <p className="text-xl text-slate-500 leading-relaxed text-left">智能化的运算引擎，可以判断每个货物的尺寸和形状，根据集装板的大小和装载需求，自动选择最合适的堆叠模式 (Block、Brick、Pinwheel)，实现最优的堆叠方案。同时，还需考虑货物的重心平衡、稳定性和安全性，确保堆叠过程中不会出现货物倾倒或受损的情况。</p>
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


      {/* <Testimonials /> */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-playfair-display text-slate-800">What our customers are saying about us</h2>
            </div> */}
            {/* Testimonials container */}
            <div className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16" data-aos-id-testimonials>
              {/* 1st Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <div>
                  <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold text-2xl mb-4">
                    <p className='text-bold '>ULD的堆叠方向限制</p>
                  </div>
                </div>
                <div className="grow mb-3">
                  <p className="text-slate-500">航空货物在打板作业中，通常需要根据货物的特性和尺寸，选择合适的堆叠方向。同时，还要考虑ULD的承载能力和稳定性，确保货物在装载过程中不会倾斜或损坏。对于混装货物的情况，可以灵活地选择横向堆叠和纵向堆叠的组合，以最大限度地利用ULD的空间，并确保货物的安全运输。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 2nd Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  ULD Type的优先使用指定
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">可以自由指定ULD Type的优先使用顺序，有助于更好地满足不同Shipment的作业需求，提高装载效率和灵活性，让使用者根据实际情况自主选择ULD Type的使用顺序，以更有效地进行货物装载作业，实现最大程度地利用舱位空间。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>

              {/* 3rd Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  ULD Type的自动选择
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">自动分析各种货物的特性、尺寸和重量，根据目的地点和货物种类，选择最合适的ULD Type的组合和使用数量，利用最大程度的舱位空间，提高航空货运的ULD装载效率和最佳利用率。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 4th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  货物的回转方向限制
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">对于不同包装类型的货物，可自由弹性设定相应的回转方向限制条件来符合空间利用、货物的安全性和操作要求。支持复杂的缠绕式回转条件，以及水平回转、长度翻转、宽度翻转等的限制都能同时考虑。借助智能化的运算引擎，可确保回转后的货物能够最大程度地利用空间，避免出现空间浪费或过于紧凑的堆叠，同时确保货物的堆叠不会影响货物的稳定性和安全性，防止出现货物倾倒或受损的情况。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 5th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  货物互相堆叠时下陷量考虑
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">考虑货物互相堆叠时的下陷量是非常重要的，特别是对于一些容易受压的货物类型，如纸制品、化学材料和食品等。借助智能化的运算引擎，考虑货物互相堆叠时，其上层重量使下层货物因而降低高度，并确保货物在互相堆叠时不会造成损坏或影响货物的质量。同时，还需考虑整体堆叠的平衡和安全性，确保货物装载作业的顺利进行。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 6th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  AWB的装载顺序考虑
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">AWB（空运货物提单，Air Waybill）的装载顺序限制是指在货物的装载过程中，可自由指定 AWB 的货物装卸先后顺序，确保在目的地卸货时，按照相应 AWB的顺序快速卸货，方便进行分拣作业。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 7th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  货物装载堆叠位置的限制
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">允许自由指定货物的摆放位置是在货物装载堆叠时的一项重要功能，它能够满足不同情况下的特定装载作业要求，包括只能摆放在最上面、只能摆放在最下面、或任意摆放等。这样的功能使得货物装载更加灵活，能够根据不同的实际需求进行堆叠和摆放，为客户和航空物流提供更加灵活和个性化的装载服务。同时，还需考虑整体堆叠的平衡和稳定性，确保货物装载作业的安全和高效进行。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 8th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  上方禁止摆放货物堆叠限制
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">在货物装载堆叠时，同种类的货物可允许互相堆叠，但禁止上方摆放其他种类货物的装载堆叠限制时，以防止货物之间相互压迫或影响堆叠稳定性。智能化的运算引擎，可以确保在货物装载堆叠时，上方禁止摆放其他种类货物的限制得到合理的考虑和执行，保障货物装载堆叠的平衡和安全性。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 9th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  货物的堆叠层数限制
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">可自由设定货物在装载堆叠时的最大堆叠层数是一个重要的功能，它可以帮助确保在货物装载过程中不会超过合理的堆叠层数，避免堆叠过高而导致不稳定或安全风险。智能化的运算引擎，自动考虑货物的尺寸、重量和特性，以及堆叠的稳定性要求，计算出最佳的堆叠方案。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 10th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  货物的最大负重限制
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">货物的最大负载重量在装载堆叠作业是非常重要的，这可以确保在货物堆叠时不会超过货物本身的负重限制，避免超重而导致安全风险或损坏。智能化的运算引擎，自动考虑货物的最大负重限制，使得货物的装载组合达到最大化，同时确保不超过货物本身的最大负载重量。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 11th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  相同群组的货物装载考虑
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">可自由指定每个不同的 AWB 视为相同群组，尽可能装载在同一个 ULD 中。为了满足打板规定的要求，自动计算相同群组的货物装载在同一个 ULD ，减少装卸和处理的次数，实现相同群组货物的优化装载，提高装载效率和准确性。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 12th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  圆筒形混合装载
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">混合装载圆筒形和立方形货物是一个具有挑战性的技术，因为这两种形状的货物在装载时可能需要不同的处理方式，确保圆筒形货物和立方形货物之间不会互相压损。智能化的运算引擎，考虑堆叠时的空间利用，合理安排圆筒形货物和立方形货物的堆叠位置，使得装载空间得到最大化利用。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 13th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  货物堆叠时支撑面积率限制
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">货物堆叠时的支撑面积率限制是确保堆叠的稳定性和安全性的重要措施。这对于多种尺寸的货物堆叠时特别重要，因为不同尺寸的货物可能需要不同的支撑面积，以防止货物倾倒或损坏。智能化的运算引擎，自动判断不同尺寸的货物在堆叠时所需的最小支撑面积，同时考虑货物的形状、重量和堆叠方式等特性，确保在此限制范围内进行堆叠。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 14th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  货物堆叠时的高低差的限制
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">货物堆叠时的高低差的限制是非常有用的功能，可以在提升装载效率的同时，确保堆叠的稳定性和安全性。这对于多种尺寸的货物堆叠时特别重要，因为不同尺寸的货物可能会产生高低差间隙，可自由设定允许的高低差尺寸范围，确保堆叠的货物在高低差范围内稳定堆放。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
              {/* 15th Testimonial */}
              <div className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                <header className='text-center'>
                <div className='flex justify-center'>
                    <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <rect className="fill-current text-lime-500" width="64" height="64" rx="32" />
                      <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                        <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                        <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold md:text-2xl mb-4">
                  固定货物再装载计算
                  </div>
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500">固定货物再装载计算，是在已经完成的 ULD 装载货物后，当 ULD 还有空间时，将额外的货物追加装载到 ULD 中。为了充分利用 ULD 的空间，并在已经排定的 ULD 使货物装载不改变的前提下，可以使用 Re-Loading 进行再装载计算，根据 ULD 的剩余空间，自动追加货物的数量和位置。能够提高装载效率，避免浪费空间。</p>
                </div>
                {/* <footer className="text-sm font-medium">
                  <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                  <span className="text-slate-300"> · </span>
                  <span className="text-slate-500">CEO, Acme Inc.</span>
                </footer> */}
              </div>
            </div>
            {/* See All Customers */}
            {/* <div className="text-center">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 group">
                See All Customers <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
