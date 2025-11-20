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

export default function Pricing() {
  const region = getRegion()

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Transparent Pricing</h2>
          <p className="mt-3 text-slate-600">Prices are adjusted based on your location to stay fair and accessible.</p>
          <p className="mt-1 text-sm text-slate-500">Detected region: <span className="font-semibold">{region}</span></p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                <span className="text-indigo-600 font-bold">{t.priceRange}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-500 transition-colors">Get Started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
