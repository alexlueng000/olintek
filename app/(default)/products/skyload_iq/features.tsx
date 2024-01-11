export default function Features() {
    return (
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
                        <p className='text-bold '>货物的装载可能性确认</p>
                        </div>
                    </div>
                    <div className="grow mb-3">
                        <p className="text-slate-500">货物只能通过飞机的货舱门装入机体内，为了便于确定一件货物的尺寸是否允许装入飞机的货舱内，需要对各舱室的货舱门收货尺寸矩阵表进行判断和分析。
        根据货物尺寸，可以快速准确地计算出可搭载的机型，装载的货舱，搬入的货舱门，以及占用舱位的数量等信息，为货物在订舱时的装载和处理提供重要的参考，提高货物装载的效率和准确性，同时减少人工操作和错误。</p>
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
                        自动舱位布局精灵
                        </div>
                    </header>
                    <div className="grow mb-3">
                        <p className="text-slate-500">「自动舱位布局精灵」是功能强大的货舱自动布局工具，支持不同机型的主货舱或下货舱的装载布局，使航空公司能够根据机队的多样性灵活调整舱位布局。可以自由设定每个舱位的重量限制，指定可以搭载的 ULD 种类，通过 3D 可视化界面，可以清晰地查看不同货舱的布局和 ULD 的搭载情况，确保整个货舱的重量分布合理，有助于飞机的平衡，进而提高飞行的安全性。</p>
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
                        全自动的舱位组合配置
                        </div>
                    </header>
                    <div className="grow mb-3">
                        <p className="text-slate-500">全自动的舱位搭载组合配置 (Automatic Position Pattern Service)，根据所使用的 ULD 版本，进行 ULD Formula 的计算，通过飞机的主货舱或下货舱的装载布局，进行全自动的 ULD 搭载组合分析。自动选择适用的 ULD 类型和数量的最佳组合，以最大程度地利用舱位空间，确保舱内货物的合理配置，提高整体运输效率并降低潜在的操作风险，同时节省了人力资源。</p>
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
                        危险品的搭载隔离限制
                        </div>
                    </header>
                    <div className="grow mb-3">
                        <p className="text-slate-500">危险品搭载的隔离限制是在航空运输中确保各种危险品与特殊货物之间的安全隔离的重要措施。在舱室的舱区与舱位的 ULD 搭载配置时，必须考虑到危险品的运输指数和隔离距离的限制，自动判断并计算危险品之间的隔离距离和搭载要求，避免不同危险品之间相互影响造成风险，以确保飞行安全和遵守相关法规和规定。例如，放射性物质与活体动物或种蛋之间需要一定距离的隔离限制，以确保活体动物或种蛋不受到放射性物质的影响。</p>
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
                        放射性物质货物与人员隔离
                        </div>
                    </header>
                    <div className="grow mb-3">
                        <p className="text-slate-500">对于放射性物质的货物，确保货物与人员的高度隔离是一项至关重要的措施。不同类别的放射性物质可能有不同的辐射范围。在装载过程中，需要进行辐射范围评估，确定放射性物质可能影响的区域范围。
        为了确保准确且符合规定的高度隔离，SkyLoad iQ 可以根据运输指数自动判断放射性物质的辐射范围，自动计算高度的隔离距离，确保在运输过程中不会对人员造成辐射危害。</p>
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
                        同一舱室中的 ULD 搭载限制
                        </div>
                    </header>
                    <div className="grow mb-3">
                        <p className="text-slate-500">在空运货物时，有时在同一舱室会出现货物性质抵触隔离搭载的情况。这通常指的是货物之间的特性或性质不兼容时，在同一舱室搭载时可能产生不安全的相互作用，必需使用特定的 ULD 搭载，或在同一舱区中更要避免性质抵触的货物相邻搭载，以防止发生意外。为了遵守 IATA 规定的隔离限制，根据货物的性质和特性，考虑飞机货舱的布局，自动配置货物在飞机货舱中的位置，确保货物得到适当的隔离和分离。</p>
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
                        陆运接驳服务
                        </div>
                    </header>
                    <div className="grow mb-3">
                        <p className="text-slate-500">陆运接驳服务是将货物从航空货站或机场运送到目的地的重要环节，其高效性和准确性直接影响到货物运输的整体效率。考虑到陆运接驳的需求与最短衔接时间，自动建立支持陆运接驳服务的卡车装载计划，确保货物能够顺利地从航空货站或机场转运至客户指定的目的地，以提供完整的货运服务。</p>
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
                        机场禁运品限制
                        </div>
                    </header>
                    <div className="grow mb-3">
                        <p className="text-slate-500">在航空货运中，"Embargo"（禁运品）是指一种临时或永久性的限制措施，用于禁止或限制某些特定货物的运输。根据各机场的禁运限制规定，自动判断货物品目，如果货物属于机场禁运或限制范围，系统自动发出违反警示，确保货物运输的安全性，同时遵循合规性规定，避免违规运输或潜在的安全风险。</p>
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
    )
}