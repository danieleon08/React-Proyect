import { useState } from 'react'
import './CentralSection.css'

const sampleProjects = [
  { id: 1, title: 'Proyecto A', desc: 'Descripción corta del proyecto A' },
  { id: 2, title: 'Proyecto B', desc: 'Descripción corta del proyecto B' },
  { id: 3, title: 'Proyecto C', desc: 'Descripción corta del proyecto C' },
]

export default function CentralSection() {
  const [showProjects] = useState(true)

  return (
    <main className="central-section">
      <div className="hero">
        <div className="hero-text">
          <h1>Hola, soy Tu Nombre</h1>
          <p className="lead">Desarrollador Frontend — construyendo experiencias web accesibles y rápidas.</p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">Ver proyectos</a>
            <a className="btn" href="#contact">Contactar</a>
          </div>
        </div>
        <div className="hero-image" aria-hidden>
          <div className="avatar">TU</div>
        </div>
      </div>

      <section id="projects" className="projects">
        <h2>Proyectos destacados</h2>
        {showProjects ? (
          <div className="grid">
            {sampleProjects.map(p => (
              <article key={p.id} className="card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="card-actions">
                  <a className="link" href="#">Ver</a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>No hay proyectos para mostrar.</p>
        )}
      </section>
    </main>
  )
}
