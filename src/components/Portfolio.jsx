import { motion } from 'framer-motion'

const projects = [
  { title: 'SaaS Landing', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Analytics Dashboard', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop' },
  { title: 'E-commerce UI', image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Portfolio Website', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Finance App', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Startup Homepage', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Portfolio</h2>
          <p className="mt-3 text-slate-600">A selection of projects showcasing clean UI, performance, and modern engineering.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <span className="text-sm text-indigo-600 font-medium">View Project</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
