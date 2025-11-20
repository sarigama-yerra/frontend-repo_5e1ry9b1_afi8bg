import { useState } from 'react'

const themeMap = {
  green: { section: 'from-white to-emerald-50', heading: 'text-slate-900', sub: 'text-slate-600', input: 'focus:ring-emerald-500', button: 'bg-emerald-600 hover:bg-emerald-500 text-white' },
  blue: { section: 'from-white to-indigo-50', heading: 'text-slate-900', sub: 'text-slate-600', input: 'focus:ring-indigo-500', button: 'bg-indigo-600 hover:bg-indigo-500 text-white' },
  dark: { section: 'from-slate-950 to-slate-900', heading: 'text-slate-100', sub: 'text-slate-400', input: 'focus:ring-cyan-500 bg-slate-900 border-slate-700 text-slate-100 placeholder:text-slate-500', button: 'bg-cyan-500 hover:bg-cyan-400 text-slate-900' },
}

export default function Contact({ theme = 'green' }) {
  const [status, setStatus] = useState('')
  const t = themeMap[theme] || themeMap.green

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    setTimeout(() => setStatus('Thanks! I will get back to you within 24 hours.'), 600)
  }

  return (
    <section id="contact" className={`py-24 bg-gradient-to-b ${t.section}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${t.heading}`}>Tell Me About Your Project</h2>
          <p className={`mt-3 ${t.sub}`}>Share a few details and get a tailored quote.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className={`block text-sm font-medium ${t.sub}`}>Name</label>
            <input required type="text" className={`mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 ${t.input}`} placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className={`block text-sm font-medium ${t.sub}`}>Email</label>
            <input required type="email" className={`mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 ${t.input}`} placeholder="you@company.com" />
          </div>
          <div className="md:col-span-2">
            <label className={`block text-sm font-medium ${t.sub}`}>Project Details</label>
            <textarea required rows={5} className={`mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 ${t.input}`} placeholder="Describe your goals, timeline, and budget"></textarea>
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className={`rounded-xl px-6 py-3 font-semibold transition-colors ${t.button}`}>Get a Quote</button>
            <span className={`text-sm ${t.sub}`}>{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
