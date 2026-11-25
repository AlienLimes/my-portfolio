import { profile, socials } from '../portfolio'
import { Mail, ChevronDown, Star } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

// Map the string names from portfolio.js to the actual Icon components
const iconMap = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: Mail,
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      
      {/* 1. Washi Tape Decor (Top Left) */}
      <div className="absolute top-24 left-10 md:left-32 w-32 h-10 bg-sky-200/50 -rotate-12 shadow-sm border border-sky-300/30 backdrop-blur-sm z-20"></div>

      {/* 2. Decorative static stars */}
      <Star className="absolute top-1/4 left-1/4 text-yellow-300 w-8 h-8 rotate-12 opacity-60" fill="currentColor" />
      <Star className="absolute bottom-1/3 right-1/4 text-rose-300 w-6 h-6 -rotate-12 opacity-60" fill="currentColor" />
      <Star className="absolute top-1/3 right-1/3 text-sky-300 w-5 h-5 rotate-45 opacity-60" fill="currentColor" />

      <div className="max-w-3xl w-full text-center relative z-10">
        
        {/* Large Serif Heading */}
        <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-6">
          Hello, I'm <br />
          <span className="italic text-stone-700">{profile.name}</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-500 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        {/* 3. Handwritten Note & Doodle Arrow */}
        <div className="flex justify-center items-center gap-2 mb-12 text-stone-400 font-serif italic -rotate-2">
          <span className="text-sm">Scroll to see my work</span>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
            <path d="M7 13c4-2 8-2 12 0" />
            <path d="M13 17c2-1.5 4.5-2.5 7-2.5" />
            <path d="M13 17c2 1.5 4.5 2.5 7 2.5" />
          </svg>
        </div>

        {/* 4. Social Icons with white circular backgrounds */}
        <div className="flex justify-center gap-6 mb-16 text-stone-400">
          {socials.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white p-3 rounded-full shadow-sm border border-stone-100 hover:text-stone-900 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>

        {/* 5. Scroll Down Arrow */}
        <a 
          href="#about" 
          className="inline-flex items-center justify-center p-4 rounded-full bg-white shadow-sm hover:shadow-md text-stone-600 transition-all duration-300 animate-bounce border border-stone-200"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} />
        </a>

      </div>
    </section>
  )
}
