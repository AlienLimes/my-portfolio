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

        <main className="max-w-7xl mx-auto px-6 py-24">
          
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








                     {/* PROJECTS SECTION: The Hanging String */}
          <section id="projects" className="py-20 relative overflow-hidden">
            
            {/* The Organic String */}
            {/* Changed to z-0 so it sits behind the clips but above the background */}
            <div className="absolute top-[90px] left-0 w-full flex justify-center z-0 opacity-60 pointer-events-none">
              <svg viewBox="0 0 1200 100" className="w-full min-w-[1200px] h-24" preserveAspectRatio="none">
                {/* Gentler curve: dips slightly in the middle */}
                <path d="M 0,30 Q 600,70 1200,30" fill="transparent" stroke="#a8a29e" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <div className="max-w-[1100px] mx-auto px-4 relative z-10">
              <ul className="flex justify-center gap-8 pt-20">
                
                {projects.map((project, index) => (
                  <li key={project.title} className="relative group w-56 shrink-0">
                    
                    {/* The Clothespin */}
                    <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center drop-shadow-md">
                      <div className="w-2 h-6 border-2 border-stone-400 bg-stone-200 rounded-sm z-10"></div>
                      <div className="absolute top-1 w-4 h-6 bg-[#d4a373] rounded-sm rotate-6 border border-[#b5835a]"></div>
                      <div className="absolute top-1 w-4 h-6 bg-[#d4a373] rounded-sm -rotate-6 border border-[#b5835a]"></div>
                    </div>

                    {/* The Polaroid Card */}
                    <div className="bg-white p-3 pb-6 shadow-[0_8px_15px_-8px_rgba(0,0,0,0.15)] border border-stone-200 transform transition-transform duration-300 hover:scale-105 hover:-rotate-1">
                      
                      <div className="w-full h-32 bg-stone-100 rounded-sm mb-3 flex items-center justify-center border border-stone-200">
                         <span className="text-stone-400 text-xs font-mono">Project Image</span>
                      </div>

                      <h3 className="text-base font-serif font-bold text-stone-900 mb-1">{project.title}</h3>
                      <p className="text-xs text-stone-500 mb-3 line-clamp-2">{project.description}</p>
                      
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-[10px] font-bold text-stone-900 uppercase tracking-wider underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
                        View Project
                      </a>
                    </div>
                  </li>
                ))}

                {/* The Empty "Coming Soon" Card */}
                <li className="relative w-56 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <div className="w-2 h-6 border-2 border-stone-400 bg-stone-200 rounded-sm z-10"></div>
                    <div className="absolute top-1 w-4 h-6 bg-[#d4a373] rounded-sm rotate-6 border border-[#b5835a]"></div>
                    <div className="absolute top-1 w-4 h-6 bg-[#d4a373] rounded-sm -rotate-6 border border-[#b5835a]"></div>
                  </div>

                  <div className="bg-stone-50 border-2 border-dashed border-stone-300 p-4 h-[250px] flex flex-col items-center justify-center text-center">
                    <h3 className="text-base font-serif text-stone-500 mb-1">Next Project</h3>
                    <p className="text-xs text-stone-400">Currently thinking about what to make...</p>
                  </div>
                </li>

              </ul>
            </div>
          </section>


          

          











        </main>

        <Contact />
      </div>
    </>
  )
}

export default App
