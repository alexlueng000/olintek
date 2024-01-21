
'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import Brain from '@/public/images/brain.jpg'
import AccordionBasic from '@/components/accordion'


export default function SkyOptimizer() {

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleAccordionClick = (title: string) => {
    if (openAccordion === title) {
      setOpenAccordion(null); // Close the accordion if it's already open
    } else {
      setOpenAccordion(title); // Open the clicked accordion
    }
  };

  useEffect(() => {
    heightFix()
  }, []) 


  return (
    <>
      {/* <Hero /> */}
      <section className="relative bg-[url(/images/backgrounds-8436664_1280.jpg)] bg-cover bg-center bg-no-repeat mt-5 h-[700px] md:h-[700px]">

        <div
        className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:justify-start lg:px-8 h-full"
        >
          <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-7xl md:text-5xl lg:text-7xl font-extrabold">
            SkyOptimizer
            </h1>

            <p className="mt-12 max-w-lg text-lg text-black  md:text-xl">
            聪明有智慧交给我们、降本增效的交给您。
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

        <section className=''>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">历经实战训练的最强运算引擎</h2>
            <p className='max-w-6xl text-lg text-left text-black  sm:text-xl mt-6'>SkyOptimizer以创新为核心，基于人工智能的关键核心技术 ”组合优化” 研发而成的智能化运算引擎。我们自己开发的SkyMetaheuristics算法，將航空货运行业公认的专业知识和信息技术相结合，只要告诉SkyOptimizer游戏规则，让SkyOptimizer自己进行智能化的货物配载思考，自动将每个航班的货物装载到ULD，再将ULD配置到各舱室中的每个舱区与舱位，提升飞机配载、货物打板的全新境界。</p>
            
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
          <div className='text-center'>
          <h3 className="text-4xl font-bold font-playfair-display text-black mb-10 mt-12">BlackBox of Knowledge is Power</h3>

          </div>

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full rounded shadow-lg mx-auto md:max-w-none h-auto" src={Brain} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <AccordionBasic
                      title="容量约束"
                      isOpen={openAccordion === "容量约束"}
                      onClick={() => handleAccordionClick("容量约束")}
                    >
                      {/* The content inside the accordion goes here */}
                      SkyOptimizer可以考虑每架飞机上可用的货物舱位，并考虑重量和体积限制。它确保货物的总重量和体积不超过飞机的舱位允许载重，同时最大程度地利用舱位的可用空间。
                    </AccordionBasic>
                    <AccordionBasic
                      title="装卸效率"
                      isOpen={openAccordion === "装卸效率"}
                      onClick={() => handleAccordionClick("装卸效率")}
                    >
                      SkyOptimizer可以提高货物装卸过程的效率。智能确定飞机内货物的最佳舱位，最小化了装卸操作所需的时间。
                    </AccordionBasic>
                    <AccordionBasic
                      title="货物兼容性"
                      isOpen={openAccordion === "货物兼容性"}
                      onClick={() => handleAccordionClick("货物兼容性")}
                    >
                      SkyOptimizer可以考虑一些货物具有特定的处理要求或限制，确保不兼容的货物不被一起装载，并满足特殊处理要求。
                    </AccordionBasic>
                    <AccordionBasic
                      title="装载合规性"
                      isOpen={openAccordion === "装载合规性"}
                      onClick={() => handleAccordionClick("装载合规性")}
                    >
                      SkyOptimizer可以将重货在装载操作时，考虑飞机地板负重时的展延面积和捆绑固定的安全标准约束纳入计算中，确保生成的装载计划符合相关法规。
                    </AccordionBasic>
                    <AccordionBasic
                      title="容易集成"
                      isOpen={openAccordion === "容易集成"}
                      onClick={() => handleAccordionClick("容易集成")}
                    >
                      SkyOptimizer可以配置为与任何能生成标准数据的现有系统一起运作。通过我们强大的API，您的系统集成商将在短短几天内投入运行。
                    </AccordionBasic>
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
