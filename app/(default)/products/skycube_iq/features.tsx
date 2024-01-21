interface FeatureProps {
    icon: React.ReactNode
    title: string
    text: string
  }


export default function Features() {

    const features: FeatureProps[] = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: 'ULD的堆叠方向限制',
            text: '航空货物在打板作业中，通常需要根据货物的特性和尺寸，选择合适的堆叠方向。同时还要考虑ULD的承载能力和稳定性，确保货物在装载过程中不会倾斜或损坏。对于混装货物的情况，可以灵活地选择横向堆叠和纵向堆叠的组合，以最大限度地利用ULD的空间，并确保货物的安全运输。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: 'ULD Type的优先使用指定',
            text: '可以自由指定ULD Type的优先使用顺序，有助于更好地满足不同Shipment的作业需求，提高装载效率和灵活性，让使用者根据实际情况自主选择ULD Type的使用顺序，以更有效地进行货物装载作业，实现最大程度地利用舱位空间。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: 'ULD Type的自动选择',
            text: '自动分析各种货物的特性、尺寸和重量，根据目的地点和货物种类，选择最合适的ULD Type的组合和使用数量，利用最大程度的舱位空间，提高航空货运的ULD装载效率和最佳利用率。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '货物的回转方向限制',
            text: '对于不同包装类型的货物，可自由弹性设定相应的回转方向限制条件来符合空间利用、货物的安全性和操作要求。支持复杂的缠绕式回转条件，以及水平回转、长度翻转、宽度翻转等的限制都能同时考虑。借助智能化的运算引擎，可确保回转后的货物能够最大程度地利用空间，避免出现空间浪费或过于紧凑的堆叠，同时确保货物的堆叠不会影响货物的稳定性和安全性，防止出现货物倾倒或受损的情况。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '货物装载堆叠位置的限制',
            text: '允许自由指定货物的摆放位置是在货物装载堆叠时的一项重要功能，它能够满足不同情况下的特定装载作业要求，包括只能摆放在最上面、只能摆放在最下面、或任意摆放等。这样的功能使得货物装载更加灵活，能够根据不同的实际需求进行堆叠和摆放，为客户和航空物流提供更加灵活和个性化的装载服务。同时，还需考虑整体堆叠的平衡和稳定性，确保货物装载作业的安全和高效进行。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '上方禁止摆放货物的堆叠限制',
            text: '在货物装载堆叠时，同种类的货物可允许互相堆叠，但禁止上方摆放其他种类货物的装载堆叠限制时，以防止货物之间相互压迫或影响堆叠稳定性。智能化的运算引擎，可以确保在货物装载堆叠时，上方禁止摆放其他种类货物的限制得到合理的考虑和执行，保障货物装载堆叠的平衡和安全性。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '货物的堆叠层数限制',
            text: '可自由设定货物在装载堆叠时的最大堆叠层数是一个重要的功能，它可以帮助确保在货物装载过程中不会超过合理的堆叠层数，避免堆叠过高而导致不稳定或安全风险。智能化的运算引擎，自动考虑货物的尺寸、重量和特性，以及堆叠的稳定性要求，计算出最佳的堆叠方案。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '货物的最大负载重量限制',
            text: '货物的最大负载重量在装载堆叠作业是非常重要的，这可以确保在货物堆叠时不会超过货物本身的负重限制，避免超重而导致安全风险或损坏。智能化的运算引擎，自动考虑货物的最大负重限制，使得货物的装载组合达到最大化，同时确保不超过货物本身的最大负载重量。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '货物互相堆叠时的下陷量考虑',
            text: '考虑货物互相堆叠时的下陷量是非常重要的，特别是对于一些容易受压的货物类型，如纸制品、化学材料和食品等。借助智能化的运算引擎，考虑货物互相堆叠时，其上层重量使下层货物因而降低高度，并确保货物在互相堆叠时不会造成损坏或影响货物的质量。同时，还需考虑整体堆叠的平衡和安全性，确保货物装载作业的顺利进行。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '相同群组的货物装载考虑',
            text: '可自由指定每个不同的货物视为相同群组，尽可能装载在同一个ULD中。为了满足打板规定的要求，自动计算相同群组的货物装载在同一个ULD，减少装卸和处理的次数，实现相同群组货物的优化装载，提高装载效率和准确性。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '圆筒形混合装载',
            text: '混合装载圆筒形和立方形货物是一个具有挑战性的技术，因为这两种形状的货物在装载时可能需要不同的处理方式，确保圆筒形货物和立方形货物之间不会互相压损。智能化的运算引擎，考虑堆叠时的空间利用，合理安排圆筒形货物和立方形货物的堆叠位置，使得装载空间得到最大化利用。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '固定货物再装载计算',
            text: '固定货物再装载计算，是在已经完成的ULD装载货物后，当ULD还有空间时，将额外的货物追加装载到ULD中。为了充分利用ULD的空间，并在已经排定的ULD使货物装载不改变的前提下，可以使用Re-Loading进行再装载计算，根据ULD的剩余空间，自动追加货物的数量和位置。能够提高装载效率，避免浪费空间。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '指定货物的装载顺序考虑',
            text: '货物的装载顺序限制是指在货物的装载过程中，可自由指定货物的装卸先后顺序，确保在目的地或转运地卸货时，按照货物相应的顺序快速卸货，方便进行分拣作业。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: '集装箱的门尺寸装载限制',
            text: '在现场进行集装箱装载作业中，考虑货物尺寸和集装箱的门尺寸之间的比较。如果货物尺寸超过集装箱的门尺寸的允许装载限制时，自动判断不装载，提高装载过程的准确性和安全性，让作业人员能够及时了解装载的情况，确保货物的装载符合要求。',
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-tilt stroke-lime-500" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
            </svg>),
            title: 'ULD的装载重心范围限制',
            text: '可以根据使用者设定的装载重心范围，自动考虑货物的尺寸、重量和装载位置等信息，在横向和纵向装载货物时自动进行重心平衡的配置，确保整个ULD装载过程中货物的重心在合理的范围内，以保障装载的安全性和稳定性。',
        },
    ]

    return (
        <section className="bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h2 className="text-4xl font-bold font-playfair-display text-black mb-10">认识 SkyCube iQ</h2>
                    <p className='max-w-6xl text-lg text-left text-black  sm:text-xl mt-6'>货物装载堆叠的限制条件是指在ULD内，将货物进行堆叠时需要遵守的一些限制和规定。为了确保飞行的安全，装载的货物应该进行正确的堆叠和固定，确保货物的稳定性，防止在飞行中发生移动或滑动，干扰飞机的平衡。以下是货物装载堆叠的限制条件的功能介绍：</p>
                </div>  
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
                                <p className="text-black text-sm">{feature.text}</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}