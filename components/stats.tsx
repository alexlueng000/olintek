import Counter from '@/components/counter'

interface StatProps {
  number: number
  suffix: string
  text: string
}

export default function Stats() {

  const stats: StatProps[] = [
    {
      number: 144,
      suffix: 'K',
      text: 'Number of AWB',
    },
    {
      number: 214,
      suffix: 'K',
      text: 'Number of Dimensions',
    },
    {
      number: 4694,
      suffix: 'M+',
      text: 'Number of Package',
    },
    {
      number: 6,
      suffix: 'K',
      text: 'Number of ULD Type',
    },
    {
      number: 37,
      suffix: 'K',
      text: 'Number of ULD',
    },
    {
      number: 12,
      suffix: 'K',
      text: 'Calculate time  ( m )',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="w-full mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3 md:-mx-5 md:gap-4 items-start md:max-w-none">

        {stats.map((stat, index) => (
          <div key={index} className="relative text-center py-2 md:px-5">
            <h4 className="font-inter-tight text-xl md:text-6xl font-bold tabular-nums text-lime-500">
              <Counter number={stat.number} />
              {/* {stat.suffix} */}
            </h4>
            <p className="text-md text-bold">{stat.text}</p>
          </div>
        ))}

      </div>
    </div>
  )
}