'use client'

import Hero from './hero'
import Image from 'next/image'
import AccordionBasic from '@/components/accordion'
import { useState } from 'react'

interface FaqProps {
  title: string;
  content: string;
}

export default function FAQ() {  

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const handleAccordionClick = (title: string) => {
    if (openAccordion === title) {
      setOpenAccordion(null); // Close the accordion if it's already open
    } else {
      setOpenAccordion(title); // Open the clicked accordion
    }
  };

  const faqs: FaqProps[] = [
    {
      "title": "SkyLoad iQ的特色是什么?",
      "content": "SkyLoad iQ是专为航空公司的飞机配载与货物打板需求的优化系统。可依据CBA的运送条件，自动建立组板计划，打板作业的堆叠指示，飞机舱位的搭载配置，以及飞机搭载计划的LIR分析。"
    },
    {
      "title": "SkyCube iQ的特色是什么?",
      "content": "SkyCube iQ是专为GHA、GSA、以及航空货运代理，在订舱时求出最佳成本的ULD种类与数量，以确保每个ULD的使用效益最大化。"
    },
    {
      "title": "SkyLoad iQ，包含那些功能?",
      "content": "SkyLoad iQ的既有功能，更包含了SkyCube iQ的所有功能，详细请参考我们的网站说明。"
    },
    {
      "title": "市面上的装箱/装柜软件都说能计算航空ULD，为何要选用SkyLoad iQ?",
      "content": "首先、SkyLoad iQ是High-End Aircraft Cargo Load Optimization Software，应用最先进组合运算技术，精心设计独自开发完成的高效率装载运算引擎，更在航空运输业的飞机装载、货物打板的多种严苛装载业务条件下获得最高实绩，不但计算速度快速，优异的计算结果更是可帮您装载更多货物并节省更多ULD。无论您的装载业务多么复杂，绝对符合您实际装载作业需求。我们欢迎对产品功能的比较，即可知道这不是一般市面上装箱/装柜软件所能做到的。"
    },
    {
      "title": "SkyLoad iQ与市面上其他的装箱/装柜软件相比，主要有哪些优势？",
      "content": "首先、计算速度及计算能力绝对是航空货运业挑选一个好的装柜软件的首要条件，这也是为什么要使用软件计算来取代人工规划。SkyLoad iQ是迄今为止最佳的飞机货舱配载、货物打板的智能决策软件，其主要优势如下：" +
      "1. 实时算出货机或客机使用最少的ULD，提升客户服务，降低运送成本。\n" +
      "2. 计算能力强，节省更多ULD空间，装载更多货物，投资报酬率高。\n" +
      "3. 可设定ULD柜角(corner casting)及ULD内任何不可堆叠空间(Dead Space)，堆叠效果符合实际作业需求。\n" +
      "4. 支持各种机型的ULD轮廓外形，一次满足您多样的装货需求。\n" +
      "5. 提单货物可指定特定的ULD装载，如冷冻食品装冷冻柜、CAO货物由Open ULD装载，符合物品鲜度及运送安全性管理。\n" +
      "6. 客机装载放射性物质的货物，自动判断与人员隔离的安全距离。\n" +
      "7. 转口货物自动判断最小衔接时间，自动安排装载顺序。\n" +
      "8. 重货的G力与展延面积自动判断，垫板与捆绑辅材的数量自动计算。"
    },
    {
      "title": "对于大货的装载，SkyLoad iQ可以支持吗?",
      "content": "可以的。SkyLoad iQ会自动判断大货的装载优先考虑，当大货的尺寸大于底板尺寸时，会自动考虑在下货舱室的探板装载，完全利用舱位的空间。面对超长尺寸货物时，SkyLoad iQ会自动进行凹凸盘的装载堆叠。"
    },
    {
      "title": "对于Overhang的货物装载与大尺寸货物的跨板装载时，货物必须垫高，如何设定?",
      "content": "不用设定。在下货舱室的货物探板装载与超长尺寸货物的跨板装载时，SkyLoad iQ会自动判断Skid Size，以防止挡住卡锁轨，保证装载合规性。"
    },
    {
      "title": "对于重货的装载，SkyLoad iQ可以支持吗?",
      "content": "可以的。SkyLoad iQ会自动判断重货的装载优先考虑，防止重压轻导致货物的毁损，当重货的重量大于地板承载重量时，自动判断货物的展延面积与垫板与枕木的使用数量，以及捆绑辅材的种类与数量。"
    },
    {
      "title": "对于特货与危险品的装载，SkyLoad iQ可以支持吗?",
      "content": "可以的。SkyLoad iQ会自动判断货物的Special Load Code，依据Incompatibility Chart的定义，自动进行货物的装载限制与隔离限制。"
    },
    {
      "title": "各机型的货舱装载布局，不是只有一种布局，货舱的舱位布局设计会很麻烦吗?",
      "content": "不会的。SkyLoad iQ所提供的舱位布局精灵，依据机型所能使用的ULD种类，即可快速建立各种不同的装载布局。当计划建立时所使用的ULD版本，我们的组合优化引擎，会自动将ULD配置到最佳的舱位。"
    },
    {
      "title": "SkyLoad iQ支持几种提单类型?",
      "content": "SkyLoad iQ支持AWB、CBV、CN38的提单类型。各提单类型的货物不会混载在同一个ULD。"
    },
    {
      "title": "SkyLoad iQ有没有考虑BUP或Baggage….等的装载业务?",
      "content": "有的。SkyLoad iQ支持BUP、QRT、Baggage的装载业务要求。"
    },
    {
      "title": "如果在Booking System里已有CBA数据，是否可直接将数据导入到SkyLoad iQ?",
      "content": "可以的。如果您的Booking System系统已存有详尽的提单数据，您可以依据SkyLoad iQ的ICD，直接将提单数据由Booking System的数据库传进SkyLoad iQ的数据库，减少人工键入的时间。"
    },
    {
      "title": "SkyLoad iQ，可以和货站的Cargo Handling System集成吗？",
      "content": "可以的。SkyLoad iQ的ICD，可以从Cargo Handling System获取Flight Details、Booking Status、Movement Status，以及Shipment Transit Flight Details、Irregularity Code，掌握货物的实时信息，提升计划的准确性。"
    },
    {
      "title": "还没有进入货站的货物以及转口货物，以致货物装载顺序、或配载计划的更动，这种情况下也可以使用SkyLoad iQ帮我们规划吗?",
      "content": "可以的。其实这种情况是常遇到的情形。SkyLoad iQ拥有强大的再计算Reloading功能，可以针对特定计划、特定ULD重新计算，重新计算时也可选择是否要固定原本ULD中已装载之货物，可以因应计划的随时改变，并使其异动最小，可以帮您解决常变动的装载计划问题。"
    },
    {
      "title": "SkyLoad iQ 计算出来的装载计划，在实际打板时，打板人员如何参考?",
      "content": "所有的装载计划都可产生报表，其中包含航班搭载ULD总表、申打总表、申打明细表，可导出Excel文件。打板人员只要依照申打明细表的装载指示，将各货物按规划出之堆叠位置与堆叠顺序指示，即可将货物装载到ULD内。"
    },
    {
      "title": "SkyLoad iQ 计算出来的装载计划，在实际打板时，会不会有规划出来装的下，但是实际装不下的情况?",
      "content": "在规划时，只要输入的货物尺寸、ULD内可装载空间尺寸，以及精确设定ULD轮廓的收口斜面，SkyLoad iQ规划出来的结果即是实际可装载结果。"
    },
    {
      "title": "SkyLoad iQ，可与自动化采集设备与自动化装载机器人的数据做集成吗?",
      "content": "可以的。货物进入货站时，自动化采集设备可对货物的基础数据包括：件数、重量、尺寸、体积等，采集后传给SkyLoad iQ，即可对比订舱件数与进站件数，以及货物尺寸来源。SkyLoad iQ的装载结果数据，可传送给自动化装载机器人，实现自动化打板操作的航空物流货物数字化。"
    },
    {
      "title": "订舱的货物，如何知道货物可以允许装载到飞机的货舱?",
      "content": "SkyLoad iQ提供的装载可能性确认精灵，自动判断货物可允许装载进入飞机的货舱门，占用舱位数等的信息。"
    },
    {
      "title": "订舱的货物，指定使用货柜，如何知道货物可以允许装载到货柜?",
      "content": "当货物尺寸在货柜的空间里虽然可以装载进入，但是超过货柜的门尺寸限制时，SkyLoad iQ会自动判断不可装载到货柜，自动搜寻可装载的ULD。"
    },
    {
      "title": "SkyLoad iQ有考虑装卸货顺序的装载堆叠吗?",
      "content": "在SkyLoad iQ可以设定提单货物的装载顺序，最先下货的货物可设定最后装载，透过提单货物装载顺序的设定，即可于装货时同时考虑下货的便利性。"
    },
    {
      "title": "我可以任意设定几张提单货物要装在同一ULD吗?这样在理货时比较方便。",
      "content": "当然可以。SkyLoad iQ可设定货物的群组，不同的提单货物可设定同一群组，同一群组的货物在一个ULD可装得下的情况之下，只会装在同一个ULD，不会分散装到别的ULD。"
    },
    {
      "title": "我们的货物有的是比较脆弱的，必须放在ULD的最底层，且此货物上面不可再放任货物。这在SkyLoad iQ可以做到吗?",
      "content": "当然可以。在SkyLoad iQ可设定货物指定摆放在最上、或是摆放在最下面的装载要求，以及货物的最大堆叠层数及货物的最大支撑重量等。您可设定此货物指定摆放在最下面的装载要求，则此货物一定装在ULD最底层，同时指定上面不可堆叠其他货物时，则此货物的上面即不会再放任何货物。"
    },
    {
      "title": "我们的货物只能水平回转，不能任意翻转，SkyLoad iQ可以做到吗?",
      "content": "可以的。在SkyLoad iQ的货物装载条件里，可设定货物的可翻转方向，若你的货物只能水平回转装载时，则在货物回转方向指定「水平回转」即可。"
    },
    {
      "title": "需要申请试用才能使用SkyLoad iQ、SkyCube iQ吗？",
      "content": "是的。需要申请才能使用SkyLoad iQ或SkyCube iQ。申请后，我们会在3个工作天，把确认的电子邮件发送到您提供的电子邮件信箱。按下该连结将允许您登录您的账户。然后，您可以不受任何限制地在免费试用中使用SkyLoad iQ或SkyCube iQ的所有功能。"
    },
    {
      "title": "试用SkyLoad iQ的期间，你们会教我们怎么使用吗?",
      "content": "SkyLoad iQ虽然在运算上牵扯非常复杂的数学问题，但其实在使用起来是相当简单、直观，这也是SkyLoad iQ于当初设计时的一贯理念。使用者在试用时可先观看我们网站上的在线教学视屏，如要有疑问时，则可随时以Email、电话、微信、LINE等跟我们询问。透过以上方式，大部份客户即可相当了解SkyLoad iQ的运作。"
    },
    {
      "title": "可以从MS-Excel 导入数据到SkyLoad iQ、SkyCube iQ吗？",
      "content": "可以的。SkyLoad iQ、SkyCube iQ提供完整的MS-Excel数据导入模板，您所要做的就是按照字段说明与数据格式要求导入数据。数据导入包含运输代码、ULD数据、提单数据…等。"
    },
    {
      "title": "我们是学校教育单位，我们对SkyLoad iQ在航空物流实务操作上的运用非常感兴趣，并想要将SkyLoad iQ列入教学课程使用，请问SkyLoad iQ是否有教育版?",
      "content": "航空物流作业电脑化及信息化是一直是我们所推行及秉持的理念，也一直希望藉由理论与实务作业的结合，开发出既符合实务要求又能增加作业效率、减少资源浪费及提升整体航空物流竞争力的产品。我们相当期望此理念能由学校扎根，以教育未来的优秀物流人才。因此我们提供学校教育单位的教育版以供教学使用，非常欢迎各学校机关洽询。"
    },
    {
      "title": "SkyLoad iQ、SkyCube iQ提供哪些语言？",
      "content": "SkyLoad iQ、SkyCube iQ提供中文繁体、中文简体、英文、日文版本。"
    },
  ]

  return (
    <>
    <section className="relative">

      <Hero />

      <div className="max-w-full flex flex-col mx-auto px-4 sm:px-6 bg-slate-100 flex justify-center">
        <div className="max-w-6xl py-12 border-t border-gray-800 lg:border-0 lg:pt-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-12">
            <p className="text-4xl font-bold">常见问题</p>
          </div>
        </div >

            
        <div className="">

          {/* Content */}
          <div className="max-w-xl md:max-w-none md:max-w-3xl" data-aos="fade-left">
            <div className="md:pl-4 lg:pl-12 xl:pl-16">

              {
                faqs.map((faq, index) => (
                  <AccordionBasic
                    key={index}
                    title={faq.title}
                    isOpen={openAccordion === faq.title}
                    onClick={() => handleAccordionClick(faq.title)}
                  >
                    {/* The content inside the accordion goes here */}
                    {faq.content}
                  </AccordionBasic>
                ))
              }
                
            </div>
          </div>

        </div>
      </div>


      
    </section>



    </>
  )
}