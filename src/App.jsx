import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import TerminalLoader from './components/TerminalLoader'
import { profile, projects } from './portfolio'

function App() {
  // State to control the loading screen. 
  // It starts false, so the TerminalLoader shows first.
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {/* 1. SHOW LOADER: Only shows until isLoaded becomes true */}
      {!isLoaded && <TerminalLoader onComplete={() => setIsLoaded(true)} />}

      {/* 2. MAIN PAGE WRAPPER: Fades in once loading is complete */}
      <div className={`min-h-screen bg-[#f8f9fa] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] text-stone-800 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        
        <Navbar />
        
        <Hero />

        <main className="max-w-4xl mx-auto px-6 py-24">
          
          {/* ABOUT SECTION: Styled as a piece of paper with a binder clip */}
          <section id="about" className="mb-32 relative max-w-2xl mx-auto pt-8">
            
            {/* The Binder Clip Decor */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
              <div className="w-10 h-6 border-4 border-stone-400 rounded-t-md bg-transparent"></div>
              <div className="w-14 h-8 bg-stone-300 rounded-sm shadow-sm border border-stone-400 -mt-2"></div>
            </div>

            {/* The Paper */}
            <div className="bg-white p-10 md:p-14 shadow-md border border-stone-200 rounded-sm relative">
              {/* Tape Decor */}
              <div className="absolute -top-3 right-8 w-24 h-8 bg-yellow-100/60 -rotate-6 shadow-sm border border-yellow-200/50 backdrop-blur-sm"></div>

              <h2 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-6 text-center">About Me</h2>
              
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-stone-700 text-center italic">
                "{profile.about}"
              </p>
            </div>
          </section>

          {/* PROJECTS SECTION: This is where we will build the hanging string next! */}
          <section id="projects">
            <h2 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-8 text-center">Projects</h2>
            <ul className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <li key={project.title} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                  <h3 className="text-xl font-serif text-stone-900 mb-3">{project.title}</h3>
                  <p className="text-stone-500 mb-6 leading-relaxed">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
                    View project
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <Contact />
      </div>
    </>
  )
}

export default App
