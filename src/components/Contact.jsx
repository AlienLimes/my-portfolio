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
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-slate-400 mb-8">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>

        <a 
          href="mailto:your@email.com" 
          className="inline-block px-8 py-3 rounded-full bg-orange-500 text-slate-900 font-semibold hover:bg-orange-400 transition-colors duration-300 mb-12"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-6 mb-12 text-slate-400">
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
                <Icon size={24} />
              </a>
            )
          })}
        </div>

        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
