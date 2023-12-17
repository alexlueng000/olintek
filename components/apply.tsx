'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { sendApplyEmail } from '@/utils/send_email'

import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/metrize/arrowRight'
import { blockMenu } from 'react-icons-kit/metrize/blockMenu'
import { set } from 'date-fns'


export type ApplyFormData = {
    company: string
    position: string
    department: string
    email: string
    name: string
    phone: string
    country: string
    selectProduct: string
    airlineCode?: string
    billCode?: string
}

export type SendApplyEmailResponse = {
    message: string;
    status: number;
}

const Spinner = () => {
    return (
      <div className="border-4 border-t-transparent border-lime-500 rounded-full w-6 h-6 animate-spin"></div>
    );
  };

export default function RequestDemo() {

    const [ selectedButton, setSelectedButton ] = useState<string>('skyload');
    const [ submitting, setSubmitting ] = useState<boolean>(false);
    

    const handleButtonClick = (buttonId: string) => {
        setSelectedButton(buttonId);
    };  

    const { register, handleSubmit, setValue } = useForm<ApplyFormData>();
    const router = useRouter();

    const onSubmit = async (data: ApplyFormData) => {
        console.log(data);

        setSubmitting(true);
        
        try {
            const { message, status }: SendApplyEmailResponse = await sendApplyEmail(data);
            if (status === 200) {
                router.push('/request-demo/success');
            } else {
                router.push('/404');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    useEffect(() => {
        setValue('selectProduct', selectedButton);
    }, [selectedButton, setValue]);


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
                    <form className="max-w-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" {...register('selectProduct')} />

                        <div className='flex items-center space-x-4'>
                            <label className="block text-sm font-medium mb-1" >试用产品 <span className="text-rose-500">*</span></label>
                            <button className={`btn font-bold  ${selectedButton === 'skyload' ? 'bg-lime-500 text-white' : 'bg-white text-black'}  group`} onClick={() => handleButtonClick('skyload')}>
                            SkyLoad iQ 
                            </button>
                            <button className={`btn font-bold ${selectedButton === 'skycube' ? 'bg-lime-500 text-white' : 'bg-white text-black'}  group`} onClick={() => handleButtonClick('skycube')}>
                            SkyCube iQ 
                            </button>
                        </div>

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
                        {
                            selectedButton === 'skyload' && (
                            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                <div className="sm:w-1/2">
                                <label className="block text-sm font-medium mb-1" htmlFor="airlineCode">航空公司代码 <span className="text-rose-500">*</span></label>
                                <input 
                                    id="airlineCode" 
                                    className="form-input py-2 w-full" 
                                    type="text" 
                                    required 
                                    {...register('airlineCode', { required: true })}    
                                />
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block text-sm font-medium mb-1" htmlFor="billCode">提单结算代码 <span className="text-rose-500">*</span></label>
                                <input 
                                    id="billCode" 
                                    className="form-input py-2 w-full" 
                                    type="text" 
                                    required
                                    {...register('billCode', { required: true })}    
                                />
                                </div>
                            </div>
                            )
                        }
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

                        <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="w-full px-3">
                            <button 
                                className="btn text-white bg-lime-500 hover:bg-lime-600 w-full flex items-center"
                                disabled={submitting}
                            >
                                {submitting ? (<Spinner />) :

                                (<><span>提交</span>
                                <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                                </svg></>)
                                }
                            </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>


        </>
    )
}
