'use client'

import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { sendContactEmail } from '@/utils/send_email'
import { useRouter } from 'next/navigation'

import Logo from '@/components/ui/logo'


export type ContactFormData = {
    company: string;
    position: string;
    department: string;
    email: string;
    name: string;
    phone: string;
    country: string;
    message: string;
}

export type SendContactEmailResponse = {
    message: string;
    status: number;
}

export default function Contact() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<ContactFormData>()
    const router = useRouter()

    const onSubmit = async (data: ContactFormData) => {
        console.log(data)
        try {
            const response = await sendContactEmail(data)
            if (response.status === 200) {
                router.push('/contact/success')
            } else {
                router.push('/404')
            }    

        } catch (error) {  
            console.log(error)
        }
    }

    return (
        <>

            <div className="w-full md:w-2/3 flex justify-center bg-[url(/images/request-bg.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white bg-opacity-40"></div>
                <div className="min-h-screen h-full">
                    <div className="relative px-5 sm:px-6 py-8">
                        <div className="w-full max-w-md mx-auto">
                        {/* Quote */}
                            <div className="max-w-full mx-auto text-center pb-12 md:pb-16 pt-60">
                                <p className="text-4xl font-extrabold text-black text-left pt-8">联系我们</p>
                                <div className='mt-4 w-full'>
                                        <p className="text-xl text-left text-black font-extrabold dark:text-gray-400">OLINTEK 非常感谢您对本公司的支持与爱护，如果您是对我们的产品有任何疑问、意见或建议，或是相关问题需要替您解答，欢迎您将问题写在的 「 在线咨询表单 」，我们将有专人针对您的问题亲自与您洽谈，谢谢！</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative hidden md:block md:w-1/3" aria-hidden="true">
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">


                    <div className="pt-32 pb-6 md:pt-20 md:pb-20">
                        <div className='flex items-center'>
                             <Logo />
                             <a className="text-md pl-4 font-medium text-lime-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="/">
                                返回首页 -&gt;
                            </a>
                        </div>

                        <div className='font-bold pt-4 pb-4 text-lg'>
                            在线咨询表单
                        </div>

                        {/* Contact form */}
                        <form className="max-w-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="w-full px-3">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">公司名称 <span className="text-red-600">*</span></label>
                            <input 
                                id="company" 
                                type="text" 
                                className="form-input w-full" 
                                placeholder="Enter your company name" 
                                required 
                                {...register('company', { required: true })}
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
                                {...register('position', { required: true })}
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
                                {...register('department', { required: true })}    
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
                                {...register('email', { required: true })}    
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
                                {...register('name', { required: true })}    
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
                                {...register('phone', { required: true })}
                            />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="w-full px-3">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="country">国家 <span className="text-red-600">*</span></label>
                            <select 
                                id="country" 
                                className="form-select w-full" 
                                required
                                {...register('country', { required: true })}
                            >
                                <option>中国</option>
                                <option>美国</option>
                                <option>英国</option>
                            </select>
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
                                {...register('message', { required: true })}    
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
            </section>
            </div>
        </>
    )
}
