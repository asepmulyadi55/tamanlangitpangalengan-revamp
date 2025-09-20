export const metadata = { title: 'Event' }
export default function Page() {
  const items = [
    {date:'Sab, 12 Okt 2025', title:'Sunrise Fun Run 5K', desc:'Lari ringan menyambut matahari terbit, rute hutan pinus.'},
    {date:'Min, 20 Okt 2025', title:'Acoustic on The Sky', desc:'Live acoustic di Sky Cafe, seat terbatas.'},
    {date:'Sab, 2 Nov 2025', title:'Workshop Foto Kabut', desc:'Belajar komposisi dan timing untuk foto kabut.'},
  ]
  return (
    <section className="bg-slate-50/60 py-12 dark:bg-slate-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Event Mendatang</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Jangan lewatkan acara seru di Taman Langit.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((e,i)=> (
            <article key={i} className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
              <div className="text-sm text-slate-500">{e.date}</div>
              <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{e.desc}</p>
              <a href="/contact" className="mt-3 inline-flex items-center text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300">Detail</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}