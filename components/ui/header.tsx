import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header({ mode = 'dark' }: {
  mode?: string
}) {
  return (
    <header className={`sticky top-0 w-full z-50 bg-white ${mode !== 'light' && 'dark'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 sticky top-0">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow ">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              
                <Dropdown title="我们的产品">
                  {/* <Link href="/pricing" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 
                  dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">我们的产品</Link> */}
                  <li>
                    <Link href="/products/skyload_iq" className="font-bold text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Skyload iQ</Link>
                  </li>
                  <li>
                    <Link href="/products/skycube_iq" className="font-bold text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">SkyQube iQ</Link>
                  </li>
                  <li>
                    <Link href="/products/skyoptimizer" className="font-bold text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">SkyOptimizer</Link>
                  </li>
                </Dropdown>
              
              <li>
                <Link href="/about" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">我们的公司</Link>
              </li>
              <li>
                <Link href="/contact" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">我们的支持</Link>
              </li>
              {/* 1st level: hover */}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <Dropdown title="CN">
                {/* 2nd level: hover */}
                <li>
                  <Link href="/404" className="font-bold text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">EN</Link>
                </li>
                <li>
                  <Link href="/support" className="font-bold text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">JP</Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/request-demo" className="font-medium text-black-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group">
                  试用申请 <span className="tracking-normal text-black-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
