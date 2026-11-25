export default function Navbar() {
  return (
    // Fixed floating "pill" navbar
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white/80 backdrop-blur-md border border-stone-200 shadow-sm rounded-full px-8 py-3 flex items-center gap-8">
        <span className="text-sm font-bold tracking-tight text-stone-800">Kriszti</span>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">About</a>
          <a href="#projects" className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">Projects</a>
          <a href="#contact" className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}
