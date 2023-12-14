'use client'

import { useState } from 'react'
import { Icon } from 'react-icons-kit';
import {arrowRight} from 'react-icons-kit/metrize/arrowRight'
import {blockMenu} from 'react-icons-kit/metrize/blockMenu'

export default function RequestDemo() {

  const [selectedButton, setSelectedButton] = useState<string | null>('skyload');

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };  

  return (
    <>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <svg className="absolute top-0 right-0 transform translate-x-1/2 -mr-16 dark:opacity-40" width="800" height="502" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="150" r="350" fill="url(#customGradient1)" fillOpacity=".6" />
          <circle cx="250" cy="350" r="150" fill="url(#customGradient2)" fillOpacity=".4" />
          <defs>
            <radialGradient id="customGradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(80 140 260) scale(300)">
              <stop stopColor="#58a6ff" />
              <stop offset="1" stopColor="#58a6ff" stopOpacity=".01" />
            </radialGradient>
            <radialGradient id="customGradient2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(100 -30 260) scale(150)">
              <stop stopColor="#ffc107" />
              <stop offset="1" stopColor="#ffc107" stopOpacity=".01" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-6 md:pt-20 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h3 className="h3 font-bold font-red-hat-display mb-4">试用申请</h3>
              <p className="text-xl text-left text-gray-600 dark:text-gray-400">您可以填写申请表单，告诉我们相关信息。我们将审核用户申请表，于3个工作日内将试用账号通过邮件发送给您。
              </p>
              <div className='mt-4'>
                <div className='flex'>
                    <Icon icon={arrowRight} size={22} className="text-lime-500 mr-2" /> 
                    <p className="text-black mb-4">
                    针对学术与教育用户，请与我们取得联系：<a href="mailto:service@olintek.com" className="text-blue-400 hover:text-blue-300">service@olintek.com</a>
                    </p>
                </div>
                <div className='text-left'>
                  <div className='flex'>
                    <Icon icon={blockMenu} size={22} className="text-lime-500 mr-2" />
                    <p className="text-black mb-4">
                      免费试用期间的授权数量限制信息<strong className='text-black'>（限SkyLoad iQ）</strong>
                    </p>
                  </div>
                
                  <ul className="list-inside text-black mb-4">
                    <li className='mb-2'>1. 登录使用者：2人（<label><span className="text-rose-500">*</span></label>机场配载规划员，初期设置时只能注册1人）</li>
                    <li>2. 机场配载规划员，如需2人以上时，请单独与我们联系。</li>
                  </ul>
                </div>
                
                
              </div>
              
            </div>

            {/* Contact form */}
            <form className='max-w-xl mx-auto'>
                <div className="space-y-4">
                  
                  <div className='flex items-center space-x-4'>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">试用产品 <span className="text-rose-500">*</span></label>
                    <button className={`btn font-bold  ${selectedButton === 'skyload' ? 'bg-lime-500 text-white' : 'bg-white text-black'}  group`} onClick={() => handleButtonClick('skyload')}>
                      SkyLoad iQ 
                    </button>
                    <button className={`btn font-bold ${selectedButton === 'skycube' ? 'bg-lime-500 text-white' : 'bg-white text-black'}  group`} onClick={() => handleButtonClick('skycube')}>
                      SkyCube iQ 
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">公司名称 <span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input py-2 w-full" type="email" required />
                  </div>
                  {/* <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">部门 <span className="text-rose-500">*</span></label>
                    <input id="name" className="form-input py-2 w-full" type="text" required />
                  </div> */}
                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="city">职称 <span className="text-rose-500">*</span></label>
                      <input id="city" className="form-input py-2 w-full" type="text" required />
                    </div>
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="pcode">部门 <span className="text-rose-500">*</span></label>
                      <input id="pcode" className="form-input py-2 w-full" type="text" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">邮箱 <span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input py-2 w-full" type="email" required />
                  </div>

                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="city">姓名 <span className="text-rose-500">*</span></label>
                      <input id="city" className="form-input py-2 w-full" type="text" required />
                    </div>
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="pcode">电话号码 <span className="text-rose-500">*</span></label>
                      <input id="pcode" className="form-input py-2 w-full" type="text" required />
                    </div>
                  </div>

                  {
                    selectedButton === 'skyload' && (
                      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="city">航空公司代码 <span className="text-rose-500">*</span></label>
                          <input id="city" className="form-input py-2 w-full" type="text" required />
                        </div>
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="pcode">提单结算代码 <span className="text-rose-500">*</span></label>
                          <input id="pcode" className="form-input py-2 w-full" type="text" required />
                        </div>
                      </div>
                    )
                  }

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="country">国家 <span className="text-rose-500">*</span></label>
                    <select id="country" className="form-select py-2 w-full" required>
                      <option>中国</option>
                      <option>美国</option>
                      <option>英国</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-sm w-full text-sm text-white bg-lime-500 group">
                    提交 <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </button>
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <input type="checkbox" className="form-checkbox text-lime-500 accent-lime-500  mt-0.5" defaultChecked />
                    <span className="text-sm text-slate-500 ml-3">填写本表即表示本人同意收集和使用本人的个人资料。</span>
                  </label>
                </div>
              </form>

          </div>
        </div>
      </section>


    </>
  )
}
