'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'


import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <div className='flex flex-col min-h-screen'>
      <Header mode='light' />
        <main className="flex-grow">
          {children}
        </main>
      <Footer />
    </div>
  )
}
