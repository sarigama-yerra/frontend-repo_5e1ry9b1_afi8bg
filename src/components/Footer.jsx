export default function Footer({ theme = 'green' }) {
  const t = theme === 'dark' ? { section: 'bg-slate-950 border-slate-800', text: 'text-slate-400', link: 'text-slate-300 hover:text-cyan-400' } : { section: 'bg-white border-slate-200', text: 'text-slate-600', link: 'text-slate-700 hover:text-emerald-600' }
  return (
    <footer className={`py-12 border-t ${t.section}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className={`text-sm ${t.text}`}>© {new Date().getFullYear()} NovaCode Studio. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm">
          <a href="mailto:contact@novacodestudio.dev" className={`${t.link}`}>contact@novacodestudio.dev</a>
          <a href="#" className={`${t.link}`}>Twitter</a>
          <a href="#" className={`${t.link}`}>GitHub</a>
          <a href="#" className={`${t.link}`}>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
