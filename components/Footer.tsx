export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-10 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-extrabold">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">TL</span>
              <span>Taman Langit</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Wisata alam keluarga dengan view terbaik Pangalengan.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Navigasi</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:underline" href="/destinations">Destinasi</a></li>
              <li><a className="hover:underline" href="/tickets">Tiket</a></li>
              <li><a className="hover:underline" href="/events">Event</a></li>
              <li><a className="hover:underline" href="/gallery">Galeri</a></li>
              <li><a className="hover:underline" href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Informasi</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:underline" href="/contact">Kontak</a></li>
              <li><a className="hover:underline" href="/contact">Kemitraan</a></li>
              <li><a className="hover:underline" href="/contact">Rombongan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Ikuti Kami</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="Instagram" className="rounded-lg border border-slate-200/60 p-2 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">IG</a>
              <a href="#" aria-label="TikTok" className="rounded-lg border border-slate-200/60 p-2 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">TT</a>
              <a href="#" aria-label="YouTube" className="rounded-lg border border-slate-200/60 p-2 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">YT</a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-6 text-xs text-slate-500 dark:border-slate-800 sm:flex-row">
          <p>© <span>{new Date().getFullYear()}</span> Taman Langit Pangalengan. All rights reserved.</p>
          <a href="#" className="hover:underline">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  )
}