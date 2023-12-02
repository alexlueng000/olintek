'use client'

import { useState } from 'react'

import Logo from '../../../components/ui/logo'

import Link from 'next/link'
import Image from 'next/image'
import PageBg from '@/public/images/request-demo-bg.jpg'
import CustomerAvatar from '@/public/images/customer-avatar-04.jpg'

export default function RequestDemo() {

  const [selectedButton, setSelectedButton] = useState<string | null>('skyload');

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };  

  return (
    <>
      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-slate-900" aria-hidden="true">

        {/* Bg image */}
        {/* <div className="absolute inset-0" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={PageBg} width={760} height={900} priority alt="Background" />
        </div> */}

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">
              <h2 className="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">立即申请试用</h2>
              <div className="space-y-3">
                <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                  <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                </svg>
                <blockquote className="text-slate-400 italic">我们欢迎您试用我们的产品，并将我们的装载结果与您目前正在进行评估或手上现有的系统进行比较。同时也将我们的功能与竞争对手产品的功能进行比较，我们自信您对差异会感到惊讶。</blockquote>
              </div>
              <div className="flex items-center mt-4">
                {/* <a href="#0">
                  <Image className="rounded-full shrink-0 mr-3" src={CustomerAvatar} width={32} height={32} alt="Customer Avatar 04" />
                </a> */}
                <div className="font-medium">

                  <p className="text-slate-100 mb-5">导入简单！ 免费试用</p>

                  <p className="text-slate-100 mb-5">您可以填写申请表单，告诉我们相关信息。我们将审核用户申请表，于3个工作日内将试用账号通过邮件发送给您。</p>

                  <p className="text-slate-100 mb-5">针对学术与教育用户，请与我们取得联系    service@olintek.com</p>

                  <p className="text-slate-100 mb-5">免费试用期间的授权数量限制信息  （限SkyLoad iQ） </p>

                  <p className="text-slate-100 mb-5">・登录使用者：2人（*机场配载规划员，初期设置时只能注册1人）</p>

                  <p className="text-slate-100 mb-5">*机场配载规划员，如需2人以上时，请单独与我们联系。</p>


                </div>
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

              <h2 className="h3 font-playfair-display text-slate-800 mb-12">试用申请</h2>

              {/* Form */}
              <form>
                <div className="space-y-4">

                  <div className='flex items-center space-x-4'>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">试用产品 <span className="text-rose-500">*</span></label>
                    <button className={`btn  ${selectedButton === 'skyload' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}  group`} onClick={() => handleButtonClick('skyload')}>
                      SkyLoad iQ <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                    </button>
                    <button className={`btn ${selectedButton === 'skycube' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}  group`} onClick={() => handleButtonClick('skycube')}>
                      SkyCube iQ <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
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

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="country">Country <span className="text-rose-500">*</span></label>
                    <select id="country" className="form-select py-2 w-full" required>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
                    Submit <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </button>
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <input type="checkbox" className="form-checkbox mt-0.5" defaultChecked />
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
