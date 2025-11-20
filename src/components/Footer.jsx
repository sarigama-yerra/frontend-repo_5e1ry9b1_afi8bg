export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} NovaCode Studio. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm">
          <a href="mailto:contact@novacodestudio.dev" className="text-slate-700 hover:text-indigo-600">contact@novacodestudio.dev</a>
          <a href="#" className="text-slate-700 hover:text-indigo-600">Twitter</a>
          <a href="#" className="text-slate-700 hover:text-indigo-600">GitHub</a>
          <a href="#" className="text-slate-700 hover:text-indigo-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
