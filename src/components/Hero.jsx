import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold ring-1 ring-indigo-200">
            Premium Freelance Development
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Build Your Dream Website With Expert Engineering
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            High-quality landing pages, websites, and apps built with modern full-stack technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-colors">
              Start Your Project
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-800 px-6 py-3 font-semibold hover:bg-slate-50 transition-colors">
              View Portfolio
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-slate-500 text-sm">
            <span>MERN</span>
            <span>Next.js</span>
            <span>NestJS</span>
            <span>PostgreSQL</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white border border-slate-200 p-6 shadow-xl">
            <div className="grid grid-cols-3 gap-3 h-full">
              <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400/80" />
              <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-300/80" />
              <div className="rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400" />
              <div className="rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400" />
              <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-300/80" />
              <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400/80" />
              <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-300/80" />
              <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400/80" />
              <div className="rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-indigo-500/10 blur-xl" />
        </motion.div>
      </div>
    </section>
  )
}
