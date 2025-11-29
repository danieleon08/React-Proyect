import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="brand">
          <div className="logo" aria-hidden>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="10" fill="url(#g)"/>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="brand-meta">
            <strong className="brand-name">Tu Nombre</strong>
            <span className="brand-tag">Frontend Developer</span>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Enlaces del pie de página">
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div className="footer-cta">
          <a className="btn-contact" href="#contact">Contratame</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <small className="copy">© {year} Tu Nombre — Todos los derechos reservados.</small>
          <div className="social" aria-hidden>
            <a href="#" aria-label="GitHub" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.6 5.6.6 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1 .1 1.6.7 1.9 1.1.1-.7.4-1.2.8-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2A11.3 11.3 0 0112 6.8c1 0 2 .1 2.9.3 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.9v2.8c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.4 5.6 18.3.5 12 .5z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.08 5.5 2.98 5.5 1.88 5.5 1 4.6 1 3.5 1 2.4 1.88 1.5 2.98 1.5 4.08 1.5 4.98 2.4 4.98 3.5zM.5 8.5h4.98V23H.5zM9.5 8.5h4.78v1.97h.07c.67-1.27 2.31-2.6 4.74-2.6 5.07 0 6 3.33 6 7.66V23h-4.98v-6.6c0-1.58 0-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V23H9.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
