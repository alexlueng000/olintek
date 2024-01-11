
// 智力超群的运算力
import Stats from './stats'

export default function Computational() {

    return (
        <section className="mt-12 md:mt-20" data-aos-id-3>
            <div className="bg-slate-900 bg-[url(/images/hero-bg.png)]">
                {/* Bg */}
                <div
                className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
                aria-hidden="true"
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pb-6 pt-12 md:pt-20">
                        {/* detail */}
                        <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
                        {/* Content */}
                            <div className="w-[512px] max-w-full shrink-0 md:order-1">
                                
                                <p className="text-lg text-white mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="200">
                                装货计算能力是装柜软件最基本的要求，即使拥有再多的功能，计算结果不好，也是无法达到实质效用。SkyLoadiQ不但拥有强大的功能可以满足您实际的飞机配载、货物打板作业需求，快速、稳定以及坚强的计算能力更是我们长期以来所坚持、不断研发突破并且引以自豪的利器。
                                </p>
                            </div>

                            {/* title */}
                            <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                                <h2 className="h2 mb-4 text-white" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="100">
                                智力超群的<br/>运算力
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status */}
                <div className="md:w-full order-1 md:order-none py-28" data-aos="fade-right">
                    <Stats />
                </div>
            </div>
        </section>
    )

}