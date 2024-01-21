'use client'


import { Dialog, Transition } from '@headlessui/react'
import { useState, useRef, Fragment } from 'react'

export default function LessonsContent() {  

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents the default link behavior
    setModalOpen(true);  // Opens the modal
  };


  return (
    <section className="bg-slate-100 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 ">

        <div className=''>
          
          <div className="pb-12 md:pb-20">

          <div className="max-w-3xl mx-auto">
            <div className="text-lg text-black mt-20">
              <h2 className="h3 font-playfair-display text-black mb-12 mt-12 text-center">课程视频</h2>
              <p className="">
              OLINTEK拥有顶尖的数学建模与优化技术的软件研发公司，我们提供十分快速简单的在线单点课程的培训，从最基本的观念到技巧的研究应用，完整而迅速地传递给你，让你从新手立刻变成高手，轻松使用我们的产品。
              </p>

            </div>
          </div>

          </div>
        </div>

        <div className="pb-12 md:pb-20 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className='w-full flex-col items-center bg-white  shadow-lg rounded-sm border border-slate-200 p-5 min-w-[20rem]'>
            <h1 className='text-2xl text-slate-800 dark:text-slate-100 font-semibold mb-4'>基本入门课程</h1>
            <ul className='w-full text-left'>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'>
                <a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>1. 运输代码数据导入</a>
              </li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'>
                <a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>2. 特货代码数据导入</a></li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'>
                <a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>3. 创建特货抵触隔离表</a></li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'>
                <a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>4. 航线航班数据导入</a></li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'>
                <a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>5. 基本数据导入</a></li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'>
                <a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>6. 创建货舱门收货尺寸表</a></li>
            </ul>
            
          </div>


          <div className='w-full flex-col items-center bg-white  shadow-lg rounded-sm border border-slate-200 p-5 min-w-[20rem]'>
            <h1 className='text-2xl text-slate-800 dark:text-slate-100 font-semibold mb-4'>高级应用课程</h1>
            <ul className='w-full text-left'>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'>
                <a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>1.  ULD的轮廓设计</a>
              </li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'><a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>2. 装载布局设计</a></li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'><a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>3. 装载布局检视</a></li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'><a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>4. 航班装载计划</a></li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'><a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>5. 货舱搭载检视</a></li>
              <li className='text-xl text-slate-600 dark:text-slate-300 font-medium mb-2'><a href="#" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>6. ULD装载检视</a></li>
            </ul>
          </div>
          
        </div>
      </div>

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={1920} height={1080} loop controls>
                  <source src='/videos/video.mp4' type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>
    </section>
  )
}