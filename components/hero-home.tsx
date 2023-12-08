
export default function HeroHome() {
  return (



    <section className="relative bg-[url(/images/working.jpg)] bg-cover bg-center bg-no-repeat mt-5 h-[500px] md:h-[600px]">

    <div
      className="absolute inset-0 bg-gradient-to-r from-white to-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>

    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:justify-start lg:px-8 h-full"
    >
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl">
          超越经验的世界
        </h1>

        <p className="mt-4 max-w-xl font-bold sm:text-lg/relaxed">
        这是一款基于飞机货舱配载、货物打板的智慧决策软件，可适应您不同的作业方式，优化您的装载效率，帮助您获得更高水平的营收
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
          <a
            href="/contact"
            className="block w-full rounded bg-lime-500 px-12 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
          >
            联系我们
          </a>

          <a
            href="#"
            className="block w-full rounded bg-white px-12 py-3 text-base font-medium text-lime-500 shadow hover:text-white hover:bg-lime-500 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            在线演示
          </a>
        </div>
      </div>
    </div>

    </section>
  )
}