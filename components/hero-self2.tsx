export default function HeroSelf2() {
    return (
        <section>
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                {/* <!-- Component --> */}
                <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
                    {/* <!-- Hero Content --> */}
                    <div className="flex flex-col">
                    {/* <!-- Hero Title --> */}
                    <h1 className="mb-4 text-4xl font-bold md:text-6xl"> 超越经验的世界</h1>
                    <p className="mb-6 max-w-lg text-lg text-[#636262] md:mb-10 lg:mb-12"> 这是一款基于飞机货舱配载、货物打板的智慧决策软件，可适应您不同的作业方式，优化您的装载效率，帮助您获得更高水平的营收 </p>
                    {/* <!-- Hero Button --> */}
                    <div className="flex items-center">
                        <a href="#" className="mr-5 flex items-center bg-lime-500 px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8">
                        <p className="mr-6 font-bold">联系我们</p>
                        <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none">
                            <title>Arrow Right</title>
                            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                        </svg>
                        </a>
                        <a href="#" className="flex font-bold">
                        <p className="text-black">在线演示</p>
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357752f71727ed3edf9213b_Vector (5).svg" alt="" className="ml-2 inline-block" />
                        </a>
                    </div>
                    </div>
                    {/* <!-- Hero Image --> */}
                    <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b560b014d2b7cb8452be7_Frame 48031-3.jpg" alt="" className="inline-block h-full w-full max-w-[640px]" />
                </div>
            </div>
        </section>
    )
}
