'use client'

import { useState } from 'react'

import Logo from '../../../components/ui/logo'

import Image from 'next/image'
import Work from '@/public/images/reset-password-bg.jpg'

export default function Contact() {

  return (
    <>
      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-slate-500" aria-hidden="true">

        {/* Bg image */}
        <div className="absolute inset-0" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={Work} width={760} height={900} priority alt="Background" />
        </div>

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col">
          <div className="pt-32 px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">


              <div className="space-y-3">
                <p className="text-2xl text-white font-bold mt-8 md-20  leading-relaxed">OLINTEK 非常感谢您对本公司的支持与爱护，如果您是对我们的产品有任何疑问、意见或建议，或是相关问题需要替您解答，欢迎您将问题写在的 「 在线咨询表单 」，我们将有专人针对您的问题亲自与您洽谈，谢谢！</p>
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

              <h2 className="h3 font-playfair-display font-bold text-slate-900 mb-12">联系我们</h2>

              {/* Form */}
              <form>
                <div className="space-y-4">

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
                    <label className="block text-sm font-medium mb-1" htmlFor="email">咨询内容说明 <span className="text-rose-500">*</span></label>
                    <textarea className="form-input py-2 w-full h-20" required />
                  </div>

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
