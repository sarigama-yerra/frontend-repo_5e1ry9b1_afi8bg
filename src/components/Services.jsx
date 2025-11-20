import { Code2, Layout, LineChart, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Landing Pages',
    desc: 'High-converting, fast, and SEO-ready pages that turn clicks into clients.',
    icon: Layout,
  },
  {
    title: 'Business Websites',
    desc: 'Modern, responsive websites that showcase your brand and drive results.',
    icon: Layers,
  },
  {
    title: 'Dashboards',
    desc: 'Data-driven dashboards with clean UI and robust backend integrations.',
    icon: LineChart,
  },
  {
    title: 'Full-Stack Applications',
    desc: 'Custom apps built with MERN, Next.js, NestJS, and PostgreSQL.',
    icon: Code2,
  },
]

const themeMap = {
  green: { accent: 'text-emerald-600', card: 'bg-white', border: 'border-slate-200', heading: 'text-slate-900', sub: 'text-slate-600', section: 'bg-white' },
  blue: { accent: 'text-indigo-600', card: 'bg-white', border: 'border-slate-200', heading: 'text-slate-900', sub: 'text-slate-600', section: 'bg-white' },
  dark: { accent: 'text-cyan-400', card: 'bg-slate-900', border: 'border-slate-800', heading: 'text-slate-100', sub: 'text-slate-400', section: 'bg-slate-950' },
}

export default function Services({ theme = 'green' }) {
  const t = themeMap[theme] || themeMap.green
  return (
    <section id="services" className={`py-24 ${t.section}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${t.heading}`}>Services</h2>
          <p className={`mt-3 ${t.sub}`}>Expert engineering for every stage of your product — from landing page to full platform.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-2xl border ${t.border} p-6 hover:shadow-xl transition-all ${t.card}`}>
              <s.icon className={`w-10 h-10 ${t.accent.replace('text-', 'text-')}`} />
              <h3 className={`mt-4 font-semibold ${t.heading}`}>{s.title}</h3>
              <p className={`mt-2 text-sm ${t.sub}`}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
