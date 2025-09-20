export default function Page() {
  return (
    <section className="relative">
      <div className="relative">
        <div className="aspect-hero w-full bg-slate-200 dark:bg-slate-800">
          <div className="absolute inset-0">
            <img src="https://picsum.photos/seed/pangalengan-hero/2000/1125" alt="Panorama pegunungan Pangalengan" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/30 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Terbuka setiap hari · 06.00–18.00 WIB
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">Taman Langit Pangalengan</h1>
              <p className="mt-4 text-lg/7 text-slate-100/90">Nikmati sunrise di atas awan, trekking ringan, dan spot foto ikonik.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="/tickets" className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] hover:bg-emerald-700">Beli Tiket</a>
                <a href="/destinations" className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Lihat Destinasi</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-10 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">📸</div>
            <h3 className="text-lg font-semibold">Spot Foto Ikonik</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Jembatan kayu, gardu pandang — instagramable.</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">🌅</div>
            <h3 className="text-lg font-semibold">Sunrise di Atas Awan</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Lautan awan yang menakjubkan.</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">✅</div>
            <h3 className="text-lg font-semibold">Fasilitas Nyaman</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Mushola, toilet, parkir, warung.</p>
          </div>
        </div>
      </div>
    </section>
  )
}