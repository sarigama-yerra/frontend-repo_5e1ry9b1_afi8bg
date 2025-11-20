import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Here you could POST to a backend endpoint or email service.
    setTimeout(() => setStatus('Thanks! I will get back to you within 24 hours.'), 600)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Tell Me About Your Project</h2>
          <p className="mt-3 text-slate-600">Share a few details and get a tailored quote.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input required type="text" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input required type="email" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Project Details</label>
            <textarea required rows={5} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Describe your goals, timeline, and budget"></textarea>
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-500 transition-colors">Get a Quote</button>
            <span className="text-sm text-slate-500">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
