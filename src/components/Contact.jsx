import { profile, socials } from '../portfolio'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const iconMap = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: Mail,
}

export default function Contact() {
  return (
    <footer id="contact" className="py-20 px-6 text-center relative">
      <div className="max-w-2xl mx-auto bg-white p-10 md:p-14 shadow-md border border-stone-200 rounded-sm relative">
        
        {/* A little piece of tape decor for the footer */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-100/60 rotate-2 shadow-sm border border-rose-200/50 backdrop-blur-sm"></div>

        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Let's Connect</h2>
        <p className="text-stone-500 mb-8">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>

        <a 
          href="mailto:your@email.com" // <-- Update this later
          className="inline-block px-8 py-3 rounded-full bg-stone-800 text-white font-medium hover:bg-stone-700 transition-colors duration-300 mb-12 shadow-sm"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-6 mb-8 text-stone-400">
          {socials.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="bg-stone-50 p-3 rounded-full border border-stone-200 hover:text-stone-900 hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>

        <p className="text-xs text-stone-400">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
