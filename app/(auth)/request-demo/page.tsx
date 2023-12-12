'use client'

import { useState } from 'react'

import Logo from '../../../components/ui/logo'

import Image from 'next/image'
import Work from '@/public/images/reset-password-bg.jpg'

export default function RequestDemo() {

  const [selectedButton, setSelectedButton] = useState<string | null>('skyload');

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };  

  return (
    <>
      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-slate-500" aria-hidden="true">

        {/* Bg image */}
        <div className="absolute inset-0" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={Work} width={760} height={900} priority alt="Background" />
        </div>

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">


              <div className="space-y-3">
                <blockquote className="text-white font-bold mt-8 md-20">我们欢迎您试用我们的产品，并将我们的装载结果与您目前正在进行评估或手上现有的系统进行比较。同时也将我们的功能与竞争对手产品的功能进行比较，我们自信您对差异会感到惊讶。</blockquote>
              </div>

              {/* <h2 className="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">立即申请试用</h2> */}
              <h2 className="text-4xl text-white font-bold mb-4 mt-10">导入简单！ 免费试用</h2>
    
              <div className="flex flex-col items-start font-bold mt-4  p-6 rounded-lg shadow-2xl">

                <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                  <li>优势 1：完整的数据汇入模板，您所要做的就是按照字段说明与数据格式要求汇入数据，因此无需与我们讨论麻烦的需求定义。</li>
                  <li>优势 2：如果您在试用期间有任何问题，请立即询问我们。</li>
                  <li>优势 3：免费试用 “30天” 足以验证系统的可用性和有效性。</li>
                </ul>

                <p className="text-slate-300 mb-4">
                  您可以填写申请表单，告诉我们相关信息。我们将审核用户申请表，于3个工作日内将试用账号通过邮件发送给您。
                </p>

                <p className="text-slate-300 mb-4">
                  针对学术与教育用户，请与我们取得联系：<a href="mailto:service@olintek.com" className="text-blue-400 hover:text-blue-300">service@olintek.com</a>
                </p>

                <p className="text-slate-300 mb-4">
                  免费试用期间的授权数量限制信息<strong className='text-white'>（限SkyLoad iQ）</strong>
                </p>

                <ul className="list-disc list-inside text-slate-300 mb-4">
                  <li>登录使用者：2人（<label><span className="text-rose-500">*</span></label> 机场配载规划员，初期设置时只能注册1人）</li>
                  <li>机场配载规划员，如需2人以上时，请单独与我们联系。</li>
                </ul>

              </div>

              <div>
                
              </div>
            </div>
          </div>
        </div>

      </div> 

            {/* Content */}
      <div className="w-full md:w-1/2">

        <div className="min-h-screen h-full flex flex-col justify-center">

          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">

              {/* Site branding */}
              <div className="mb-6">
                {/* Logo */}
                <Logo />
              </div>

              <h2 className="h3 font-playfair-display font-bold text-slate-900 mb-12">试用申请</h2>

              {/* Form */}
              <form>
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

        </div>
      </div>   
    </>
  )
}
