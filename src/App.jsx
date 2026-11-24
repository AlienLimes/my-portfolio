import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact' 
import { profile, projects } from './portfolio'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-white border-b border-slate-800 pb-2">About</h2>
          <p className="text-lg text-slate-400 leading-relaxed">{profile.about}</p>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-bold mb-6 text-white border-b border-slate-800 pb-2">Projects</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.title} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-orange-500 hover:text-orange-400 font-medium">
                  View project &rarr;
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Contact /> 
    </div>
  )
}

export default App
