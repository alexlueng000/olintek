import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 mx-auto max-w-6xl">

          {/* 1st block */}
          <div className="lg:max-w-xs text-center md:text-left mb-6 md:mb-0">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-md text-slate-800">自2016年以来，我们公司一直在开发高质量、可靠的软件，以满足航空货运企业的需求。我们是专业的算法与优化的软件开发专业公司。</div>
          </div>

          {/* 2nd block */}
          <div className="text-center md:text-left">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">乐羿科技有限公司</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">104  台北市南京西路1-1号6楼 </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">E-mail：service@olintek.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-black">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a className="text-black hover:text-blue-600 transition duration-150 ease-in-out" href="#0">
                联系我们
              </a>
            </li>
            <li>
              <a className="text-black hover:text-blue-600 transition duration-150 ease-in-out" href="#0">
                在线演示
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">Copyright © OLINTEK. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
