'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  },[])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900 dark:text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)]">TL</span>
            <span className="hidden sm:inline">Taman Langit Pangalengan</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/destinations" className="hover:text-emerald-600">Destinasi</Link>
            <Link href="/tickets" className="hover:text-emerald-600">Tiket</Link>
            <Link href="/events" className="hover:text-emerald-600">Event</Link>
            <Link href="/gallery" className="hover:text-emerald-600">Galeri</Link>
            <Link href="/faq" className="hover:text-emerald-600">FAQ</Link>
            <Link href="/contact" className="hover:text-emerald-600">Kontak</Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/tickets" className="hidden sm:inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Beli Tiket</Link>
            <button onClick={()=>setOpen(v=>!v)} className="md:hidden inline-flex items-center justify-center rounded-xl p-2 border border-slate-200/70 dark:border-slate-800" aria-label="Buka menu">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm">
              <Link href="/destinations" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">Destinasi</Link>
              <Link href="/tickets" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">Tiket</Link>
              <Link href="/events" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">Event</Link>
              <Link href="/gallery" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">Galeri</Link>
              <Link href="/faq" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">FAQ</Link>
              <Link href="/contact" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">Kontak</Link>
              <Link href="/tickets" onClick={()=>setOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] hover:bg-emerald-700">Beli Tiket</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
