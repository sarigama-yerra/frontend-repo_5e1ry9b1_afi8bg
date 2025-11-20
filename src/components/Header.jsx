import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const themeStyles = {
  green: {
    brandBg: 'bg-emerald-600',
    brandText: 'text-emerald-600',
    button: 'bg-emerald-600 hover:bg-emerald-500',
    hover: 'hover:text-emerald-600',
    headerBg: 'supports-[backdrop-filter]:bg-white/60 bg-white/80',
  },
  blue: {
    brandBg: 'bg-indigo-600',
    brandText: 'text-indigo-600',
    button: 'bg-indigo-600 hover:bg-indigo-500',
    hover: 'hover:text-indigo-600',
    headerBg: 'supports-[backdrop-filter]:bg-white/60 bg-white/80',
  },
  dark: {
    brandBg: 'bg-slate-800',
    brandText: 'text-slate-200',
    button: 'bg-slate-800 hover:bg-slate-700',
    hover: 'hover:text-slate-200',
    headerBg: 'supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80',
  },
}

export default function Header({ theme = 'green', setTheme }) {
  const [open, setOpen] = useState(false)
  const styles = themeStyles[theme] || themeStyles.green

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 backdrop-blur border-b border-slate-200/60 ${styles.headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg ${styles.brandBg} text-white grid place-items-center font-bold`}>N</div>
          <span className="font-bold text-slate-900 dark:text-slate-100">NovaCode Studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`text-slate-700 transition-colors ${styles.hover}`}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className={`inline-flex items-center justify-center rounded-xl text-white px-4 py-2 font-semibold shadow-sm transition-colors ${styles.button}`}>
            Get Your Project
          </a>
          <div className="h-6 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-sm">
            <button aria-label="Green theme" onClick={() => setTheme && setTheme('green')} className={`px-2.5 py-1 rounded-md border text-slate-700 ${theme==='green' ? 'border-emerald-500 text-emerald-700' : 'border-slate-200 hover:border-emerald-400'}`}>Green</button>
            <button aria-label="Blue theme" onClick={() => setTheme && setTheme('blue')} className={`px-2.5 py-1 rounded-md border text-slate-700 ${theme==='blue' ? 'border-indigo-500 text-indigo-700' : 'border-slate-200 hover:border-indigo-400'}`}>Blue</button>
            <button aria-label="Dark theme" onClick={() => setTheme && setTheme('dark')} className={`px-2.5 py-1 rounded-md border text-slate-700 ${theme==='dark' ? 'border-slate-700 text-slate-900 bg-slate-200/60' : 'border-slate-200 hover:border-slate-400'}`}>Dark</button>
          </div>
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
            <a href="#contact" onClick={() => setOpen(false)} className={`block rounded-xl text-white px-4 py-2 font-semibold text-center ${styles.button}`}>
              Get Your Project
            </a>
            <div className="pt-2 flex items-center gap-2">
              <button onClick={() => { setTheme && setTheme('green'); setOpen(false) }} className="px-3 py-1 rounded-md border border-slate-200">Green</button>
              <button onClick={() => { setTheme && setTheme('blue'); setOpen(false) }} className="px-3 py-1 rounded-md border border-slate-200">Blue</button>
              <button onClick={() => { setTheme && setTheme('dark'); setOpen(false) }} className="px-3 py-1 rounded-md border border-slate-200">Dark</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
