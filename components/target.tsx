import Image from 'next/image'
import TargetImage from '@/public/images/target.png'
import Stats from './stats'

export default function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">智力超群的运算力</h2>
            <p className="max-w-6xl text-lg  text-center leading-relaxed mt-6 text-slate-500 mt-6">装货计算能力是装柜软件最基本的要求，即使拥有再多的功能，计算结果不好，也是无法达到实质效用。SkyLoadiQ不但拥有强大的功能可以满足您实际的飞机配载、货物打板作业需求，快速、稳定以及坚强的计算能力更是我们长期以来所坚持、不断研发突破并且引以自豪的利器。</p>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-col md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

            {/* Content */}
            <div className="md:w-full order-1 md:order-none" data-aos="fade-right">
              <Stats />
            </div>

            {/* Gifs */}
            <div className="max-w-6xl px-4 sm:px-6 mt-16">
              <div className="w-full mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3 md:-mx-5 md:gap-20 items-start md:max-w-none justify-center">
                 
                {/* GIF 1 */}
                <div>
                  <img src="/images/target1.gif" alt="Description of GIF 1" />
                </div>
                {/* GIF 2 */}
                <div>
                  <img src="/images/target2.gif" alt="Description of GIF 2" />
                </div>
                {/* GIF 3 */}
                <div>
                  <img src="/images/target3.gif" alt="Description of GIF 3" />
                </div>
                {/* GIF 4 */}
                <div>
                  <img src="/images/target4.gif" alt="Description of GIF 4" />
                </div>
                {/* GIF 5 */}
                <div>
                  <img src="/images/target5.gif" alt="Description of GIF 4" />
                </div>
                {/* GIF 6 */}
                <div>
                  <img src="/images/target6.gif" alt="Description of GIF 4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}