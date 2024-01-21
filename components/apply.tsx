'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { sendApplyEmail } from '@/utils/send_email'

import Logo from '@/components/ui/logo'


import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';

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
        {/* left */}
        <div className="relative hidden md:block md:w-1/2 bg-slate-800" aria-hidden="true">

{/* Bg image */}
{/* <div className="absolute inset-0" data-aos="fade">
  <Image className="opacity-10 w-full h-full object-cover" src={PageBg} width={760} height={900} priority alt="Background" />
</div> */}

{/* Quote */}
<div className="min-h-screen h-full flex flex-col mt-40">
  <div className="px-5 sm:px-6">
    <div className="w-full max-w-lg mx-auto">
      {/* <h2 className="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">欢迎登机</h2> */}
        <p className="text-lg text-slate-300 mb-12">我们欢迎您试用我们的产品，并将我们的装载结果与您目前正在进行评估或手上现有的系统进行比较。同时也将我们的功能与竞争对手产品的功能进行比较，我们自信您对差异会感到惊讶。</p>

      <div>
        
      </div>
    </div>
  </div>
</div>

</div> 
        {/* right */}
        <div className="relative hidden md:block md:w-1/2" aria-hidden="true">
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="pt-32 pb-24 md:pt-20 md:pb-20">
                    <div className='flex justify-end items-center'>
                        <Logo />
                        {/* <a className="text-md pl-4 font-medium text-lime-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="/">
                            返回首页 -&gt;
                        </a> */}
                    </div>
                    {/* <div className='font-bold pt-4 pb-4 text-lg'>
                        试用申请表单
                    </div> */}
                    {/* Contact form */}
                    <form className="max-w-xl mx-auto mt-20" onSubmit={handleSubmit(onSubmit)}>
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

                        <div className="flex flex-wrap -mx-3 mb-5 mt-12">
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
                                <label className="block text-sm font-medium mb-1" htmlFor="billCode">航空公司代码编号 <span className="text-rose-500">*</span></label>
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
        </div>
        </>
    )
}
