'use client'

import { useState } from 'react'

interface AccordionProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function AccordionBasic({ children, title, isOpen, onClick }: AccordionProps) {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="px-5 py-4 rounded-sm dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <button
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={isOpen}
        onClick={onClick}
      >
        <div className="text-2xl text-black dark:text-slate-100 font-bold">{title}</div>
        <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <div className={`text-lg text-slate-500 ${!isOpen && 'hidden'}`}>
        {children}
      </div>
    </div>
  )
}
