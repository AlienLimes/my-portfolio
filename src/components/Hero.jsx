import { profile, socials } from '../portfolio'
import { Mail, ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const iconMap = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: Mail,
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-6 pb-20">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>

      {/* The Frosted Glass Card */}
      <div className="relative z-10 max-w-3xl w-full p-10 md:p-14 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 text-center shadow-2xl">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          I'm {profile.name}.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          {profile.tagline}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10 text-slate-400">
          {socials.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors duration-200 hover:-translate-y-1 transform"
                aria-label={social.name}
              >
                <Icon size={28} />
              </a>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full border-2 border-orange-500 text-white font-semibold hover:bg-orange-500 hover:text-slate-900 transition-colors duration-300 flex items-center gap-2"
          >
            View Portfolio
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full border-2 border-slate-500 text-white font-semibold hover:bg-slate-500 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

      </div>

      {/* Scroll Down Arrow */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-3 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>

    </section>
  )
}
