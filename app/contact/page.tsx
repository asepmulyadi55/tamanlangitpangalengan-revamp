export const metadata = { title: 'Kontak & Lokasi' }
export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Kontak & Lokasi</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Untuk pemesanan tiket rombongan dan informasi lainnya.</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-1">📍</span>
              <div>
                <dt className="font-semibold">Alamat</dt>
                <dd>Jln. Raya Pangalengan, Bandung, Jawa Barat</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1">☎️</span>
              <div>
                <dt className="font-semibold">Telepon</dt>
                <dd><a className="text-emerald-700 hover:underline dark:text-emerald-300" href="tel:+6281234567890">+62 812-3456-7890</a></dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1">✉️</span>
              <div>
                <dt className="font-semibold">Email</dt>
                <dd><a className="text-emerald-700 hover:underline dark:text-emerald-300" href="mailto:info@tamanlangitpangalengan.com">info@tamanlangitpangalengan.com</a></dd>
              </div>
            </div>
          </dl>
          <form className="mt-8 grid gap-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">Nama</label>
              <input id="name" name="name" type="text" required className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 dark:border-slate-700 dark:bg-slate-900" placeholder="Nama kamu" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 dark:border-slate-700 dark:bg-slate-900" placeholder="email@domain.com" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone/WA</label>
                <input id="phone" name="phone" type="tel" className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 dark:border-slate-700 dark:bg-slate-900" placeholder="08xx" />
              </div>
            </div>
            <div>
              <label htmlFor="msg" className="mb-1 block text-sm font-medium">Pesan</label>
              <textarea id="msg" name="message" rows={4} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 dark:border-slate-700 dark:bg-slate-900" placeholder="Halo, saya ingin tanya tiket rombongan..."></textarea>
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] hover:bg-emerald-700">Kirim</button>
          </form>
        </div>
        <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200/60 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.25)] dark:ring-slate-800">
          <iframe title="Peta ke Taman Langit Pangalengan" className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.870214014994!2d107.512!3d-7.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5b3b9f0e2f1%3A0x0000000000000000!2sPangalengan!5e0!3m2!1sid!2sid!4v1680000000000"></iframe>
        </div>
      </div>
    </section>
  )
}