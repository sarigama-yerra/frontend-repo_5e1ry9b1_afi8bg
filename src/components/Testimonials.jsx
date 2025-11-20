const testimonials = [
  { name: 'Amina K.', role: 'Startup Founder', quote: 'Delivered our landing page in record time with pixel-perfect quality. Conversions jumped 40%.' },
  { name: 'Omar S.', role: 'Product Lead', quote: 'Super clean codebase and smooth handover. The dashboard performance is excellent.' },
  { name: 'Lara B.', role: 'Marketing Manager', quote: 'Professional, clear communication, and great design sense. Highly recommended.' },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">What Clients Say</h2>
          <p className="mt-3 text-slate-600">Real feedback from happy customers.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-500">— {t.name}, {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
