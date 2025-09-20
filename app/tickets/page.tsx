export const metadata = { title: 'Tiket & Harga' }
export default function Page() {
  return (
    <section className="bg-slate-50/60 py-12 dark:bg-slate-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Tiket & Harga</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Harga transparan. Gratis untuk anak &lt; 5 tahun bersama orang tua.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            <h3 className="text-lg font-semibold">Weekday</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Senin–Jumat</p>
            <div className="mt-4 text-3xl font-extrabold">Rp20.000</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Akses area utama</li>
              <li>✔ Spot foto</li>
              <li>✔ Diskon 10% untuk rombongan ≥ 10</li>
            </ul>
            <a href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Beli Sekarang</a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-2 ring-emerald-600 dark:bg-slate-900 dark:ring-emerald-700">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Paling Populer</div>
            <h3 className="text-lg font-semibold">Weekend</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Sabtu–Minggu &amp; Libur</p>
            <div className="mt-4 text-3xl font-extrabold">Rp25.000</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Akses penuh</li>
              <li>✔ Parkir terkelola</li>
              <li>✔ Diskon 10% untuk rombongan ≥ 10</li>
            </ul>
            <a href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Beli Sekarang</a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
            <h3 className="text-lg font-semibold">Paket Keluarga</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">4 orang</p>
            <div className="mt-4 text-3xl font-extrabold">Rp80.000</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ 4 tiket masuk</li>
              <li>✔ Voucher minuman (2)</li>
              <li>✔ Prioritas parkir</li>
            </ul>
            <a href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Beli Sekarang</a>
          </div>
        </div>
      </div>
    </section>
  )
}