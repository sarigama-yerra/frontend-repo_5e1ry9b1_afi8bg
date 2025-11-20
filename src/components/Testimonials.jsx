const testimonials = [
  { name: 'Amina K.', role: 'Startup Founder', quote: 'Delivered our landing page in record time with pixel-perfect quality. Conversions jumped 40%.' },
  { name: 'Omar S.', role: 'Product Lead', quote: 'Super clean codebase and smooth handover. The dashboard performance is excellent.' },
  { name: 'Lara B.', role: 'Marketing Manager', quote: 'Professional, clear communication, and great design sense. Highly recommended.' },
]

const themeMap = {
  green: { section: 'bg-white', border: 'border-slate-200', card: 'bg-white', heading: 'text-slate-900', sub: 'text-slate-600' },
  blue: { section: 'bg-white', border: 'border-slate-200', card: 'bg-white', heading: 'text-slate-900', sub: 'text-slate-600' },
  dark: { section: 'bg-slate-950', border: 'border-slate-800', card: 'bg-slate-900', heading: 'text-slate-100', sub: 'text-slate-400' },
}

export default function Testimonials({ theme = 'green' }) {
  const t = themeMap[theme] || themeMap.green
  return (
    <section className={`py-24 ${t.section}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${t.heading}`}>What Clients Say</h2>
          <p className={`mt-3 ${t.sub}`}>Real feedback from happy customers.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((tst) => (
            <div key={tst.name} className={`rounded-2xl border ${t.border} ${t.card} p-6 shadow-sm`}>
              <p className={`${t.heading.replace('text-', 'text-')}`}>“{tst.quote}”</p>
              <div className={`mt-4 text-sm ${t.sub}`}>— {tst.name}, {tst.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
