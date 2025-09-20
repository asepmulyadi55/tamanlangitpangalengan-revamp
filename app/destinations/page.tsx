export const metadata = { title: 'Destinasi' }
const cards = [
  { img:'https://picsum.photos/seed/pinus/1400/1050', alt:'Trekking hutan pinus', title:'Hutan Pinus', desc:'Jalur trekking ringan dengan udara sejuk.', tags:['Trekking','Foto'] },
  { img:'https://picsum.photos/seed/sunrise/1400/1050', alt:'Sunrise di pegunungan', title:'Sunrise Point', desc:'Spot terbaik melihat matahari terbit.', tags:['Sunrise','Foto'] },
  { img:'https://picsum.photos/seed/view/1400/1050', alt:'Gardu pandang kayu', title:'Gardu Pandang', desc:'Panorama 180° Pangalengan.', tags:['Panorama','Foto'] },
  { img:'https://picsum.photos/seed/cafe/1400/1050', alt:'Kafe outdoor', title:'Sky Cafe', desc:'Ngopi hangat dengan kabut.', tags:['Kuliner','Santai'] },
  { img:'https://picsum.photos/seed/camping/1400/1050', alt:'Area camping', title:'Camping Ground', desc:'Berkemah dengan fasilitas dasar.', tags:['Camping','Keluarga'] },
  { img:'https://picsum.photos/seed/bridge/1400/1050', alt:'Jembatan kayu', title:'Sky Bridge', desc:'Jembatan kayu dengan view lembah.', tags:['Ikonik','Foto'] },
]
export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Destinasi & Spot</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Pilih aktivitas favoritmu.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c,i)=> (
          <article key={i} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/60 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] dark:bg-slate-900 dark:ring-slate-800">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={c.img} alt={c.alt} loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{c.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {c.tags.map(t => <span key={t} className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}