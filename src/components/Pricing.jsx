import { motion } from 'framer-motion'

const tiers = [
  { name: 'Basic', priceRange: '$60–250', features: ['Single page', 'Responsive design', 'Basic SEO', 'Delivery 3–5 days'] },
  { name: 'Standard', priceRange: '$100–450', features: ['Up to 5 pages', 'CMS ready', 'Advanced SEO', 'Delivery 5–10 days'] },
  { name: 'Premium', priceRange: '$250–1200', features: ['Custom features', 'Integrations & auth', 'Performance optimizations', 'Delivery 7–21 days'] },
]

function getRegion() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (tz.includes('Africa') || tz.includes('Asia')) return 'MENA/Asia'
    if (tz.includes('Europe')) return 'Europe'
    if (tz.includes('America')) return 'Americas'
    return 'Global'
  } catch {
    return 'Global'
  }
}

const themeMap = {
  green: { section: 'from-white to-emerald-50', accent: 'text-emerald-600', border: 'border-slate-200', card: 'bg-white', heading: 'text-slate-900', sub: 'text-slate-600' },
  blue: { section: 'from-white to-indigo-50', accent: 'text-indigo-600', border: 'border-slate-200', card: 'bg-white', heading: 'text-slate-900', sub: 'text-slate-600' },
  dark: { section: 'from-slate-950 to-slate-900', accent: 'text-cyan-400', border: 'border-slate-800', card: 'bg-slate-900', heading: 'text-slate-100', sub: 'text-slate-400' },
}

export default function Pricing({ theme = 'green' }) {
  const region = getRegion()
  const t = themeMap[theme] || themeMap.green

  return (
    <section id="pricing" className={`py-24 bg-gradient-to-b ${t.section}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${t.heading}`}>Transparent Pricing</h2>
          <p className={`mt-3 ${t.sub}`}>Prices are adjusted based on your location to stay fair and accessible.</p>
          <p className="mt-1 text-sm text-slate-500">Detected region: <span className="font-semibold">{region}</span></p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-2xl border ${t.border} ${t.card} p-6 shadow-sm hover:shadow-xl transition-shadow`}>
              <div className="flex items-baseline justify-between">
                <h3 className={`text-lg font-semibold ${t.heading}`}>{tier.name}</h3>
                <span className={`${t.accent} font-bold`}>{tier.priceRange}</span>
              </div>
              <ul className={`mt-4 space-y-2 text-sm ${t.sub}`}>
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className={`${t.accent}`}>•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition-colors ${theme === 'dark' ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400' : t.accent.replace('text-', 'bg-') + ' text-white hover:brightness-110'}`}>Get Started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
