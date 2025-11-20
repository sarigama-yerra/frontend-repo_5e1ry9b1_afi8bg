import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">N</div>
          <span className="font-bold text-slate-900">NovaCode Studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-indigo-600 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-4 py-2 font-semibold shadow-sm hover:bg-indigo-500 transition-colors">
            Get Your Project
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-800">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-xl bg-indigo-600 text-white px-4 py-2 font-semibold text-center">
              Get Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
