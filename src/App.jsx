import './App.css'
import { profile, projects } from './portfolio'

function App() {
  return (
    <div className="app">
      <header>
        <h1>{profile.name}</h1>
        <p>{profile.tagline}</p>
      </header>

      <main>
        <section id="about">
          <h2>About</h2>
          <p>{profile.about}</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View project →
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
