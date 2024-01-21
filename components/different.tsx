'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Feature01 from '@/public/images/Feature01.jpg'
import Feature03 from '@/public/images/Feature03.jpg'
import Feature04 from '@/public/images/Feature04.jpg'

export default function Different() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative max-w-full mx-auto bg-slate-100">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 md:pb-20">
          
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">是什么让我们与众不同</h2>
                <p className="text-lg text-black   mt-6">「实践经验的专家」 x 「最强的运算引擎」</p>
          </div>
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">我们了解您的挑战</div>
                    <div className="text-gray-600">在这个快速变化的数字时代，将技术创新有效地应用于航空物流领域是一项极具挑战性的使命。作为航空物流行业的专家，我们秉持着结合航空物流和信息技术的最佳实践，致力于协助客户在其运营过程中不断实现优化和改进，从而为客户创造商业价值。</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">用户最佳体验的操作设计</div>
                    <div className="text-gray-600">我们不会在用户体验上妥协，简洁直观的操作界面与智能化的运算引擎协同运作，快速、稳定以及坚强的计算能力，高质量的计算结果来呈现给使用者，才能最大限度地产生价值，让用户保持对决策的控制。</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">驱动智能决策的优化引擎</div>
                    <div className="text-gray-600">针对各种机型的约束设定，智能化的运算引擎，会根据游戏规则，并据此做出自动装载规划的回应，全新的创新技术方法，满足航空公司对货物配载更加灵活、高效地应对复杂的飞机配载、货物打板规划需求，同时实现更好的业务表现和收益。</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">安全、可靠、弹性的服务</div>
                    <div className="text-gray-600">我们的软件产品，不仅能够在公共云端上部署，同样也可以在私有云端上运行，从而提供了极高的灵活性和可扩展性。您也可以将系统无缝集成到您现有的架构中，确保使用者的体验不受影响。无论您选择的是公共云还是私有云，我们的产品都能够实现最佳的效能，满足多样化的需求。</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                  
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={Feature04} width={500} height={375} alt="Features bg" />
                  
                      
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                  
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={Feature03} width={500} height={375} alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                  
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={Feature04} width={500} height={375} alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 4}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                  
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={Feature01} width={500} height={375} alt="Features bg" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}