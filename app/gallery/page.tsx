export const metadata = { title: 'Galeri' }
const images = [
  {src:'https://picsum.photos/seed/pinus/1200/900', alt:'Kabut pinus'},
  {src:'https://picsum.photos/seed/camping/1200/900', alt:'Camping di ketinggian'},
  {src:'https://picsum.photos/seed/sunrise/1200/900', alt:'Sunrise keemasan'},
  {src:'https://picsum.photos/seed/cafe/1200/900', alt:'Kopi hangat di kafe'},
  {src:'https://picsum.photos/seed/valley/1200/900', alt:'Lembah hijau'},
  {src:'https://picsum.photos/seed/bridge/1200/900', alt:'Jembatan kayu'},
]
export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Galeri</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Potret suasana dari pengunjung.</p>
      </div>
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((g,i)=> (
          <img key={i} src={g.src} alt={g.alt} className="mb-4 w-full rounded-2xl object-cover ring-1 ring-slate-200/60 dark:ring-slate-800 break-inside-avoid" loading="lazy" />
        ))}
      </div>
    </section>
  )
}