import { ShieldCheck, Zap, Code2, Globe } from 'lucide-react'

const points = [
  { icon: Code2, title: 'Modern Stack', desc: 'MERN, Next.js, NestJS, and PostgreSQL for scalable, future-proof builds.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Efficient process and clear milestones to ship quickly.' },
  { icon: ShieldCheck, title: 'Clean & Scalable', desc: 'Readable code, best practices, and maintainable architecture.' },
  { icon: Globe, title: 'Fair Pricing', desc: 'Affordable and tailored for clients in the MENA region.' },
]

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose Me</h2>
          <p className="mt-3 text-slate-600">Premium engineering with a personal, freelance touch.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p.icon className="w-10 h-10 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
