'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <button
      onClick={() => {
        const root = document.documentElement
        root.classList.toggle('dark')
        localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light')
      }}
      className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium border border-slate-200/70 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
      aria-label="Toggle tema"
    >
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364 6.364-1.06-1.06M6.697 6.697 5.636 5.636m12.728 0-1.06 1.061M6.697 17.303l-1.061 1.061"/></svg>
    </button>
  )
}
