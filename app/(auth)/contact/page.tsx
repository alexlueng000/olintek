'use client'

export default function Contact() {

  return (
    <>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <svg className="absolute top-0 right-0 transform translate-x-1/2 -mr-16 dark:opacity-40" width="800" height="502" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="102" r="400" fill="url(#heroglow_paint0_radial)" fillOpacity=".6" />
          <circle cx="209" cy="289" r="170" fill="url(#heroglow_paint1_radial)" fillOpacity=".4" />
          <defs>
            <radialGradient id="heroglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 149 251) scale(315.089)">
              <stop stopColor="#3ABAB4" />
              <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
            </radialGradient>
            <radialGradient id="heroglow_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -40 249) scale(133.913)">
              <stop stopColor="#84CC16" />
              <stop offset="1" stopColor="#84CC16" stopOpacity=".01" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-20 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h3 className="h3 font-bold font-red-hat-display mb-4">联系我们</h3>
              <p className="text-xl text-left text-gray-600 dark:text-gray-400">OLINTEK 非常感谢您对本公司的支持与爱护，如果您是对我们的产品有任何疑问、意见或建议，或是相关问题需要替您解答，欢迎您将问题写在的 「 在线咨询表单 」，我们将有专人针对您的问题亲自与您洽谈，谢谢！</p>
            </div>

            {/* Contact form */}
            <form className="max-w-xl mx-auto">
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">公司名称 <span className="text-red-600">*</span></label>
                  <input id="company" type="text" className="form-input w-full" placeholder="Enter your company name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">职称 <span className="text-red-600">*</span></label>
                  <input id="first-name" type="text" className="form-input w-full" placeholder="Enter your position" required />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">部门 <span className="text-red-600">*</span></label>
                  <input id="last-name" type="text" className="form-input w-full" placeholder="Enter your department" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">邮箱 <span className="text-red-600">*</span></label>
                  <input id="company" type="text" className="form-input w-full" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">姓名 <span className="text-red-600">*</span></label>
                  <input id="first-name" type="text" className="form-input w-full" placeholder="Enter your name" required />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">电话号码 <span className="text-red-600">*</span></label>
                  <input id="last-name" type="text" className="form-input w-full" placeholder="Enter your phone number" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="country">国家 <span className="text-red-600">*</span></label>
                  <select id="country" className="form-select w-full" required>
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
                  <textarea id="message" rows={4} className="form-textarea w-full" placeholder="What do you want to build with Appy?"></textarea>
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


    </>
  )
}
