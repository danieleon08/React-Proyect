import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a className="site-logo" href="#">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="48" height="48" rx="10" fill="url(#lg)" />
            <defs>
              <linearGradient id="lg" x1="0" x2="1">
                <stop offset="0" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="brand">Tu Nombre</span>
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Navegación principal">
          <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
        </nav>

        <div className="nav-actions">
          <a className="btn-primary" href="#contact">Contratar</a>
        </div>
      </div>
    </header>
  )
}
