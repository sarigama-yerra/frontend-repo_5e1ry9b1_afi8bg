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

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Expert engineering for every stage of your product — from landing page to full platform.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all bg-white">
              <s.icon className="w-10 h-10 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
