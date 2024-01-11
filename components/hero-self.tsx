export default function HeroSelf() {

  return (

    <section className="relative bg-contain bg-no-repeat bg-[url(/images/earth.jpg)] bg-[center_50%] h-128">
    {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* <!-- Component --> */}
            <div className="flex min-h-screen flex-col justify-center mx-auto w-full max-w-3xl py-12 md:py-16 lg:py-20 gap-10">
                {/* <!-- Title --> */}
                <div className="flex flex-col items-center gap-y-5">
                    <h1 className="text-center text-black text-4xl font-bold md:text-6xl">超越经验的世界</h1>
                    <p className="text-center text-black max-w-lg text-sm sm:text-base">这是一款基于飞机货舱配载、货物打板的智慧决策软件，可适应您不同的作业方式，优化您的装载效率，帮助您获得更高水平的营收</p>
                </div>
                {/* <!-- Buttons --> */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="#" className="flex rounded-md items-center border border-solid border-black px-6 py-3 font-bold text-black">
                        <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg" alt="" className="mr-2 inline-block max-h-4 w-5" />
                        <p className="text-sm sm:text-base">联系我们</p>
                    </a>
                    <a href="#" className="flex rounded-md items-center border border-solid border-black px-6 py-3 font-bold text-black">
                        <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg" alt="" className="mr-2 inline-block max-h-4 w-5" />
                        <p className="text-sm sm:text-base">在线演示</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}


