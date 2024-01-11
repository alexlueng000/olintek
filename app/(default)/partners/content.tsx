import CampaignCard from "@/components/campaign"

export default function CompanyContent() {  

    // Some dummy campaigns data
  const campaigns = [
    {
      id: 0,
      category: '1',
      members: [
        {
          name: 'User 01',
          link: '#0'
        },
        {
          name: 'User 02',
          link: '#0'
        },
        {
          name: 'User 03',
          link: '#0'
        },
      ],
      title: '合作伙伴1',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'One-Time'
    },
    {
      id: 1,
      category: '2',
      members: [
        {
          name: 'User 04',
          link: '#0'
        },
        {
          name: 'User 05',
          link: '#0'
        },
      ],
      title: '合作伙伴2',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'Off-Track'
    },
    {
      id: 3,
      category: '3',
      members: [
        {
          name: 'User 07',
          link: '#0'
        },
        {
          name: 'User 08',
          link: '#0'
        },
        {
          name: 'User 09',
          link: '#0'
        },
      ],
      title: '合作伙伴3',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'At Risk'
    },
    {
      id: 4,
      category: '1',
      members: [
        {
          name: 'User 10',
          link: '#0'
        },
      ],
      title: '合作伙伴4',
      link: '#0',
      content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      dates: {
        from: 'Jan 20',
        to: 'Jan 27'
      },
      type: 'At Risk'
    },

  ]
    return (
      <section className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
          <div className="pb-12 md:pb-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-lg text-center text-slate-500 mt-20">
                <h2 className="h3 font-playfair-display text-slate-800 mb-4 mt-20">合作伙伴</h2>
                <p className="mb-8">
                OLINTEK，除了本身拥有卓越的软件产品，先进的技术能力之外，OLINTEK 与专业的合作伙伴一起，协助当地客户创造最大的商业效益与客户满意度。
                </p>
              </div>
            </div>

              {/* Section content */}
            <div className="max-w-6xl grid grid-cols-4 gap-12 items-start">
              {campaigns.map(campaign => (
                <CampaignCard
                  key={campaign.id}
                  campaign={campaign} />
              ))}
            </div>


          </div>
        </div>
      </section>
    )
  }