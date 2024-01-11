interface FeatureProps {
    icon: React.ReactNode
    title: string
    text: string
  }


export default function Features1() {

    const features: FeatureProps[] = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '货物的装载可能性确认',
            text: '货物只能通过飞机的货舱门装入机体内，为了便于确定一件货物的尺寸是否允许装入飞机的货舱内，需要对各舱室的货舱门收货尺寸矩阵表进行判断和分析。根据货物尺寸，可以快速准确地计算出可搭载的机型，装载的货舱，搬入的货舱门，以及占用舱位的数量等信息，为货物在订舱时的装载和处理提供重要的参考，提高货物装载的效率和准确性，同时减少人工操作和错误。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '自动舱位布局精灵',
            text: '「自动舱位布局精灵」是功能强大的货舱自动布局工具，支持不同机型的主货舱或下货舱的装载布局，使航空公司能够根据机队的多样性灵活调整舱位布局。可以自由设定每个舱位的重量限制，指定可以搭载的 ULD 种类，通过 3D 可视化界面，可以清晰地查看不同货舱的布局和 ULD 的搭载情况，确保整个货舱的重量分布合理，有助于飞机的平衡，进而提高飞行的安全性。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '全自动的舱位组合配置',
            text: '全自动的舱位搭载组合配置 (Automatic Position Pattern Service)，根据所使用的 ULD 版本，进行 ULD Formula 的计算，通过飞机的主货舱或下货舱的装载布局，进行全自动的 ULD 搭载组合分析。自动选择适用的 ULD 类型和数量的最佳组合，以最大程度地利用舱位空间，确保舱内货物的合理配置，提高整体运输效率并降低潜在的操作风险，同时节省了人力资源。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '危险品的搭载隔离限制',
            text: '危险品搭载的隔离限制是在航空运输中确保各种危险品与特殊货物之间的安全隔离的重要措施。在舱室的舱区与舱位的 ULD 搭载配置时，必须考虑到危险品的运输指数和隔离距离的限制，自动判断并计算危险品之间的隔离距离和搭载要求，避免不同危险品之间相互影响造成风险，以确保飞行安全和遵守相关法规和规定。例如，放射性物质与活体动物或种蛋之间需要一定距离的隔离限制，以确保活体动物或种蛋不受到放射性物质的影响。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '放射性物质货物与人员隔离',
            text: '对于放射性物质的货物，确保货物与人员的高度隔离是一项至关重要的措施。不同类别的放射性物质可能有不同的辐射范围。在装载过程中，需要进行辐射范围评估，确定放射性物质可能影响的区域范围。为了确保准确且符合规定的高度隔离，SkyLoad iQ 可以根据运输指数自动判断放射性物质的辐射范围，自动计算高度的隔离距离，确保在运输过程中不会对人员造成辐射危害。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '同一舱室中的 ULD 搭载限制',
            text: '在空运货物时，有时在同一舱室会出现货物性质抵触隔离搭载的情况。这通常指的是货物之间的特性或性质不兼容时，在同一舱室搭载时可能产生不安全的相互作用，必需使用特定的 ULD 搭载，或在同一舱区中更要避免性质抵触的货物相邻搭载，以防止发生意外。为了遵守 IATA 规定的隔离限制，根据货物的性质和特性，考虑飞机货舱的布局，自动配置货物在飞机货舱中的位置，确保货物得到适当的隔离和分离。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '运送方案与ULD 的用途限制',
            text: '货物运送与 ULD 用途的方案计算是一项高度复杂的运输规划，其中需要考虑多个关键因素，如货物种类、运送需求、ULD 用途、舱位载重限制等。每个 ULD 版本在不同的货物运送方案下，允许灵活选择使用不同种类的 ULD，自动判断货物的性质、数量以及运送目的地，同时优化 ULD 的搭载顺序，以实现 ULD 使用的最小化，严格遵守载重限制、安全规定，并满足客户的需求。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '快速转运 (QRT / QWT)',
            text: '在航班运输过程中，货物分为两种类型：一部分货物需要卸除至当地站点，另一部分则需转运至下一个中转航班。其中，机坪快速转运 (QRT) 与仓库快速转运 (QWT) 是一种需要转运至下一个中转航班的货物。SkyLoad iQ 会根据货物的紧急程度以及目的地的时限要求，在确保最短转运时间 (Minimum Connection Time) 的前提下，自动计算出最佳的装载顺序，优先处理急需转运的货物。提高货物转运的效率和准确性，同时确保时效和安全的转运过程。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '货物捆绑辅材的自动计算',
            text: '对于飞机在起飞、降落或遇到乱流等情况下，货舱内的货物可能会发生移动，此时需要考虑货物在向前 (FWD)、向后 (AFT)、以及向上(UP)这三个方向的 G 力限制条件，以确保货物装载的安全性和稳定性。当货物超过特定重量时，必须对货物采取限动措施，自动计算所需的捆绑辅材种类和数量，确保货物在飞行过程中保持稳固状态，为货物运输提供更智能、安全性的国际运输规定要求。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '相同目的地的货物装载考虑',
            text: '将同一目的地的 AWB 的货物，尽可能装载在同一个 ULD 中，可以减少分拣和装载步骤，提高货物的运输效率，同时也降低了货物转运中可能出现的错误和混乱。根据相同目的地的货物，自动计算优化的 ULD 装载方案，减少装卸和处理次数，提升装载效率。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '大货与重货的优先装载',
            text: '一件货物如超过长度允许，或是超过重量允许范围时，即可视为大货或重货，在面对大货或重货时，更要考虑货物负载强度的堆栈组合条件限制是非常重要的，避免重物压在轻物上面而导致损坏或安全风险。聪明有智能的运算引擎，可以确保在装载计算过程中，优先考虑装载大货或重货的装载位置，自动判断堆栈组合限制，保障整体货物装载的稳定和安全。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '地板展延面积的自动计算',
            text: '货舱内的地板承载能力，指每一平方公尺可承受一定的重量，被称为“地板限制重量”。如果超过地板限制重量时，需要考虑使用展延面积来分散超重的负荷，减轻对地板的压力。当一件货物大于特定重量时，根据货物的尺寸，自动计算所需的展延面积，选择合适的支撑板或垫板种类、尺寸与数量，以扩大接触面积，进一步分散重量，确保不超过地板的承重限制，以避免潜在的损害。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '陆运接驳服务',
            text: '陆运接驳服务是将货物从航空货站或机场运送到目的地的重要环节，其高效性和准确性直接影响到货物运输的整体效率。考虑到陆运接驳的需求与最短衔接时间，自动建立支持陆运接驳服务的卡车装载计划，确保货物能够顺利地从航空货站或机场转运至客户指定的目的地，以提供完整的货运服务。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '机场禁运品限制',
            text: '在航空货运中，"Embargo"（禁运品）是指一种临时或永久性的限制措施，用于禁止或限制某些特定货物的运输。根据各机场的禁运限制规定，自动判断货物品目，如果货物属于机场禁运或限制范围，系统自动发出违反警示，确保货物运输的安全性，同时遵循合规性规定，避免违规运输或潜在的安全风险。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '固定货物再装载计算',
            text: '固定货物再装载计算，是在已经完成的 ULD 装载货物后，当 ULD 还有空间时，将额外的货物追加装载到 ULD 中。为了充分利用 ULD 的空间，并在已经排定的 ULD 使货物装载不改变的前提下，可以使用 Re-Loading 进行再装载计算，根据 ULD 的剩余空间，自动追加货物的数量和位置。能够提高装载效率，避免浪费空间。',
        },
    ]

    return (
        <section className="bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                
                {/* Testimonials container */}
                <div className="max-w-full sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 items-start mb-12 md:mb-16" data-aos-id-testimonials>
                    {/* 1st Testimonial */}
                    {features.map((feature, index) => (
                        <div key={index} className="h-full flex flex-col bg-white p-6 shadow-xl hover:scale-120 hover:shadow-2xl transition-transform duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]">
                            <div>
                                <div className='flex justify-center'>
                                {feature.icon}
                                </div>
                                <div className="flex justify-center text-xl font-bold mb-4">
                                <p className='mt-4'>{feature.title}</p>
                                </div>
                            </div>
                            <div className="grow mb-3">
                                <p className="text-slate-500 text-sm">{feature.text}</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}