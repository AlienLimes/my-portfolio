export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center gap-8">
        <a href="#about" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">About</a>
        <a href="#projects" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Portfolio</a>
        <a href="#contact" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  )
}
