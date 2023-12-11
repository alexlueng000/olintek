import Image from 'next/image'
import TargetImage from '@/public/images/features-02-image.png'
import Filght from '@/public/images/picture_flight.png'
import Pat from '@/public/images/pat.jpg'

export default function Target1() {
  return (
    <section className="bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* <div className="py-12 md:py-20 border-t border-gray-800"> */}
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h2 className="h2" data-aos="fade-up">是什么让我们与众不同</h2>
            <p className='text-xl mt-6 text-gray-400'>「现场实践经验的专家」 x 「最强的智能化运算引擎」</p>
          </div>

          {/* Items */}
          <div className="grid gap-10" data-aos-id-target>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                <Image className="mx-auto md:max-w-none h-full" src={Pat} width={540} height={600} alt="Features 02" />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">Be the change you want to see</div> */}
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-purple-600">.</span> 我们了解您的挑战</h4>
                    <p className="text-lg text-gray-400 leading-relaxed">在这个快速变化的数字时代，将技术创新有效地应用于航空物流领域是一项极具挑战性的使命。作为航空物流行业的专家，我们秉持着结合航空物流和信息技术的最佳实践，致力于协助客户在其运营过程中不断实现优化和改进，从而为客户创造商业价值。</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-teal-500">.</span> 用户最佳体验的操作设计</h4>
                    <p className="text-lg text-gray-400 leading-relaxed">我们不会在用户体验上妥协，简洁直观的操作界面与智能化的运算引擎协同运作，快速、稳定以及坚强的计算能力，高质量的计算结果来呈现给使用者，才能最大限度地产生价值，让用户保持对决策的控制。</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-pink-500">.</span> 驱动智能决策的优化引擎</h4>
                    <p className="text-lg text-gray-400 leading-relaxed">针对各种机型的约束设定，智能化的运算引擎，会根据游戏规则，并据此做出自动装载规划的回应，全新的创新技术方法，满足航空公司对货物配载更加灵活、高效地应对复杂的飞机配载、货物打板规划需求，同时实现更好的业务表现和收益。</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="800" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-pink-500">.</span> 安全、可靠、弹性的服务</h4>
                    <p className="text-lg text-gray-400 leading-relaxed">我们的软件产品，不仅能够在公共云端上部署，同样也可以在私有云端上运行，从而提供了极高的灵活性和可扩展性。您也可以将系统无缝集成到您现有的架构中，确保使用者的体验不受影响。无论您选择的是公共云还是私有云，我们的产品都能够实现最佳的效能，满足多样化的需求。</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
