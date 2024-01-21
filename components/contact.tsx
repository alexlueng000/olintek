'use client'

import { useState } from 'react'

// import Logo from '../../../components/ui/logo'

import Link from 'next/link'
import Image from 'next/image'
import PageBg from '@/public/images/request-demo-bg.jpg'
import CustomerAvatar from '@/public/images/customer-avatar-04.jpg'
import Logo from '@/components/ui/logo'

export type ContactFormData = {
  company: string
  position: string
  department: string
  email: string
  name: string
  phone: string
  country: string
  message: string
  billCode?: string
}

export type SendContactEmailResponse = {
  success: boolean
  message: string
}

export default function RequestDemo() {

  const [selectedButton, setSelectedButton] = useState<string | null>('skyload');

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <>
      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-slate-800" aria-hidden="true">

        {/* Bg image */}
        {/* <div className="absolute inset-0" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={PageBg} width={760} height={900} priority alt="Background" />
        </div> */}

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col mt-40">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">
              <h2 className="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">联系我们</h2>
                <p className="text-lg text-slate-300 mb-12">OLINTEK 非常感谢您对本公司的支持与爱护，如果您是对我们的产品有任何疑问、意见或建议，或是相关问题需要替您解答，我们将有专人针对您的问题亲自与您洽谈，谢谢！</p>

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
              <div className="flex justify-end mb-6">
                {/* Logo */}
                <Logo />
                {/* <h3 className="h3 font-playfair-display text-slate-800 mb-12 ml-16">联系我们</h3> */}
              </div>

              

              {/* Form */}
            <form className="max-w-xl mx-auto" >
                
                
            
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="w-full px-3">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">公司名称 <span className="text-red-600">*</span></label>
                            <input 
                                id="company" 
                                type="text" 
                                className="form-input w-full" 
                                placeholder="Enter your company name" 
                                required 
                                // {...register('company', { required: true })}
                            />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">职称 <span className="text-red-600">*</span></label>
                            <input 
                                id="first-name" 
                                type="text" 
                                className="form-input w-full" 
                                placeholder="Enter your position" 
                                required 
                                // {...register('position', { required: true })}
                            />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">部门 <span className="text-red-600">*</span></label>
                            <input 
                                id="last-name" 
                                type="text" 
                                className="form-input w-full" 
                                placeholder="Enter your department" 
                                required
                                // {...register('department', { required: true })}    
                            />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="w-full px-3">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">邮箱 <span className="text-red-600">*</span></label>
                            <input 
                                id="company" 
                                type="text" 
                                className="form-input w-full" 
                                placeholder="Enter your email" 
                                required 
                                // {...register('email', { required: true })}    
                            />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">姓名 <span className="text-red-600">*</span></label>
                            <input 
                                id="first-name" 
                                type="text" 
                                className="form-input w-full" 
                                placeholder="Enter your name" 
                                required 
                                // {...register('name', { required: true })}    
                            />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">电话号码 <span className="text-red-600">*</span></label>
                            <input 
                                id="last-name" 
                                type="text" 
                                className="form-input w-full" 
                                placeholder="Enter your phone number" 
                                required 
                                // {...register('phone', { required: true })}
                            />
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="w-full px-3">
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium" htmlFor="message">咨询内容说明<span className="text-red-600">*</span></label>
                            </div>
                            <textarea 
                                id="message" 
                                rows={4} 
                                className="form-textarea w-full" 
                                placeholder="What do you want to build with Appy?"
                                required 
                                // {...register('message', { required: true })}    
                            ></textarea>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="w-full px-3">
                            <button className="btn text-white bg-lime-500 hover:bg-lime-600 w-full flex items-center">
                                <span>提交</span>
                                <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                                </svg>
                            </button>
                            </div>
                        </div>
                    </form>
                

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
