import Link from 'next/link'

import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';



export default function Cta() {
  return (
    <section className="bg-slate-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="relative max-w-3xl mx-auto text-center">

            <div className="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block" aria-hidden="true">
              <svg className="fill-slate-300" width="56" height="43">
                <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
              </svg>
            </div>

            <div className="relative">
              <p className="text-4xl font-bold font-playfair-display text-slate-800 mb-4">导入简单！免费试用</p>
              <p className="text-xl text-left text-slate-500 mb-8">我们欢迎您试用我们的产品，并将我们的装载结果与您目前正在进行评估或手上现有的系统进行比较。同时也将我们的功能与竞争对手产品的功能进行比较，我们自信您对差异会感到惊讶。</p>
              <div>
                <p className="text-xl text-left text-slate-500 mb-8">我们的优势：</p>
                <ul className='list-inside text-left'>
                  <li className='mb-4'>
                    <Icon icon={ic_check_circle} size={22} className="text-lime-500 mr-2" /> 完整的数据汇入模板，您所要做的就是按照字段说明与数据格式要求汇入数据，因此无需与我们讨论麻烦的需求定义。
                  </li>
                  <li className='mb-4'>
                    <Icon icon={ic_check_circle} size={22} className="text-lime-500 mr-2" /> 如果您在试用期间有任何问题，请立即询问我们。
                  </li>
                  <li>
                    <Icon icon={ic_check_circle} size={22} className="text-lime-500 mr-2" /> 免费试用 “30天” 足以验证系统的可用性和有效性。
                  </li>
                </ul>
              </div>
              
              <div className='mt-8'>
                <Link className="btn text-white bg-lime-500 hover:bg-lime-600 group" href="/request-demo">
                  试用申请 <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}