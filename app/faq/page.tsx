export const metadata = { title: 'FAQ' }
export default function Page() {
  return (
    <section className="bg-slate-50/60 py-12 dark:bg-slate-900/20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Pertanyaan Umum</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Informasi yang sering ditanyakan pengunjung.</p>
        </div>
        <div className="space-y-3">
          <details className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 open:ring-emerald-600 dark:bg-slate-900 dark:ring-slate-800">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              Jam buka?
              <span className="ml-4 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Setiap hari pukul 06.00–18.00 WIB. Datang lebih awal untuk sunrise.</div>
          </details>
          <details className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 open:ring-emerald-600 dark:bg-slate-900 dark:ring-slate-800">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              Akses kendaraan?
              <span className="ml-4 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Bisa motor & mobil. Tersedia area parkir. Disarankan kendaraan prima karena tanjakan.</div>
          </details>
          <details className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 open:ring-emerald-600 dark:bg-slate-900 dark:ring-slate-800">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              Apakah bisa camping?
              <span className="ml-4 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Bisa. Sewa tenda/alat terbatas. Hubungi kontak untuk ketersediaan.</div>
          </details>
        </div>
      </div>
    </section>
  )
}