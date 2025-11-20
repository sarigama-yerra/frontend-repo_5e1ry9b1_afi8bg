import { motion } from 'framer-motion'

const themeMap = {
  green: {
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    badgeRing: 'ring-emerald-200',
    primaryBtn: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20',
    gradientFrom: 'from-emerald-50',
    blobA: 'bg-emerald-200/50',
    blobB: 'bg-teal-200/50',
    cardGlow: 'bg-emerald-500/10',
    tile1: 'from-emerald-500 to-emerald-400/80',
    tile2: 'from-teal-400 to-teal-300/80',
    tile3: 'from-emerald-400 to-teal-400',
    heading: 'text-slate-900',
    sub: 'text-slate-600',
    border: 'border-slate-200',
    card: 'bg-white',
  },
  blue: {
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700',
    badgeRing: 'ring-indigo-200',
    primaryBtn: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20',
    gradientFrom: 'from-indigo-50',
    blobA: 'bg-indigo-200/50',
    blobB: 'bg-cyan-200/50',
    cardGlow: 'bg-indigo-500/10',
    tile1: 'from-indigo-500 to-indigo-400/80',
    tile2: 'from-cyan-400 to-cyan-300/80',
    tile3: 'from-indigo-400 to-cyan-400',
    heading: 'text-slate-900',
    sub: 'text-slate-600',
    border: 'border-slate-200',
    card: 'bg-white',
  },
  dark: {
    badgeBg: 'bg-slate-800',
    badgeText: 'text-slate-100',
    badgeRing: 'ring-slate-700',
    primaryBtn: 'bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-cyan-500/20',
    gradientFrom: 'from-slate-900',
    blobA: 'bg-cyan-500/10',
    blobB: 'bg-emerald-500/10',
    cardGlow: 'bg-cyan-400/10',
    tile1: 'from-slate-700 to-slate-600',
    tile2: 'from-slate-600 to-slate-500',
    tile3: 'from-cyan-500 to-emerald-400',
    heading: 'text-slate-100',
    sub: 'text-slate-400',
    border: 'border-slate-800',
    card: 'bg-slate-900',
  },
}

export default function Hero({ theme = 'green' }) {
  const t = themeMap[theme] || themeMap.green

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl ${t.blobA}`}
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl ${t.blobB}`}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${t.gradientFrom} via-white to-white`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className={`inline-flex items-center gap-2 rounded-full ${t.badgeBg} ${t.badgeText} px-3 py-1 text-xs font-semibold ring-1 ${t.badgeRing}`}>
            Premium Freelance Development
          </span>
          <h1 className={`mt-6 text-4xl md:text-5xl font-extrabold tracking-tight ${t.heading}`}>
            Build Your Dream Website With Expert Engineering
          </h1>
          <p className={`mt-4 text-lg ${t.sub}`}>
            High-quality landing pages, websites, and apps built with modern full-stack technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg ${t.primaryBtn}`}>
              Start Your Project
            </a>
            <a href="#portfolio" className={`inline-flex items-center justify-center rounded-xl border ${t.border} px-6 py-3 font-semibold ${theme==='dark' ? 'text-slate-100 hover:bg-slate-900' : 'text-slate-800 hover:bg-slate-50'} transition-colors`}>
              View Portfolio
            </a>
          </div>
          <div className={`mt-8 flex items-center gap-4 text-sm ${t.sub}`}>
            <span>MERN</span>
            <span>Next.js</span>
            <span>NestJS</span>
            <span>PostgreSQL</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <motion.div
            className={`aspect-[4/3] rounded-2xl ${t.card} ${t.border} border p-6 shadow-xl`}
            animate={{ rotate: [0, 0.8, -0.8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="grid grid-cols-3 gap-3 h-full">
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile1}`} animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }} />
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile2}`} animate={{ y: [0, 6, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile3}`} animate={{ y: [0, -4, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} />
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile3}`} animate={{ y: [0, 5, 0] }} transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }} />
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile2}`} animate={{ y: [0, -7, 0] }} transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }} />
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile1}`} animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile2}`} animate={{ y: [0, -5, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile1}`} animate={{ y: [0, 4, 0] }} transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }} />
              <motion.div className={`rounded-xl bg-gradient-to-br ${t.tile3}`} animate={{ y: [0, -6, 0] }} transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }} />
            </div>
          </motion.div>
          <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl blur-xl ${t.cardGlow}`} />
        </motion.div>
      </div>
    </section>
  )
}
