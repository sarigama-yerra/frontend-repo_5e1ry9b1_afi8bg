import { ShieldCheck, Zap, Code2, Globe } from 'lucide-react'

const points = [
  { icon: Code2, title: 'Modern Stack', desc: 'MERN, Next.js, NestJS, and PostgreSQL for scalable, future-proof builds.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Efficient process and clear milestones to ship quickly.' },
  { icon: ShieldCheck, title: 'Clean & Scalable', desc: 'Readable code, best practices, and maintainable architecture.' },
  { icon: Globe, title: 'Fair Pricing', desc: 'Affordable and tailored for clients in the MENA region.' },
]

const themeMap = {
  green: { section: 'from-emerald-50 to-white', accent: 'text-emerald-600', border: 'border-slate-200', card: 'bg-white', heading: 'text-slate-900', sub: 'text-slate-600' },
  blue: { section: 'from-indigo-50 to-white', accent: 'text-indigo-600', border: 'border-slate-200', card: 'bg-white', heading: 'text-slate-900', sub: 'text-slate-600' },
  dark: { section: 'from-slate-950 to-slate-900', accent: 'text-cyan-400', border: 'border-slate-800', card: 'bg-slate-900', heading: 'text-slate-100', sub: 'text-slate-400' },
}

export default function WhyChoose({ theme = 'green' }) {
  const t = themeMap[theme] || themeMap.green
  return (
    <section className={`py-24 bg-gradient-to-b ${t.section}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${t.heading}`}>Why Choose Me</h2>
          <p className={`mt-3 ${t.sub}`}>Premium engineering with a personal, freelance touch.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className={`rounded-2xl border ${t.border} ${t.card} p-6`}>
              <p.icon className={`w-10 h-10 ${t.accent}`} />
              <h3 className={`mt-4 font-semibold ${t.heading}`}>{p.title}</h3>
              <p className={`mt-2 text-sm ${t.sub}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
