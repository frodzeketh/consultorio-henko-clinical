import "./NavBar.css"

const FooterHenko = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wirifooter-in3P1T9OvwKROU7lh2IzvWwmjUr9Wt.png"
          alt="Wiri Logo"
          className="footer-logo"
        />
        <p className="footer-tagline">La salud que merecés al precio que necesitás</p>
        <div className="social-icons">
          <a href="#" className="social-icon facebook">
            Facebook
          </a>
          <a href="#" className="social-icon instagram">
            Instagram
          </a>
          <a href="#" className="social-icon linkedin">
            LinkedIn
          </a>
          <a href="#" className="social-icon whatsapp">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h2 className="footer-title">¿Querés ser prestador?</h2>
        <p className="footer-description">
          La red de Henko está en constante crecimiento, sumando nuevos prestadores que quieren seguir construyendo este
          sistema de salud sustentable.
        </p>
        <button className="footer-button">Ver más</button>
      </div>

      <div className="footer-section">
        <nav className="footer-nav">
          <a href="#" className="footer-link">
            Reservar un turno
          </a>
          <a href="#" className="footer-link">
            Sobre nosotros
          </a>
          <a href="#" className="footer-link">
            Henko Plus
          </a>
          <a href="#" className="footer-link">
            Quiero ser prestador
          </a>
          <a href="#" className="footer-link">
            Blog
          </a>
          <a href="#" className="footer-link">
            Preguntas frecuentes
          </a>
          <a href="#" className="footer-link">
            Términos y condiciones
          </a>
          <a href="#" className="footer-link">
            Ayuda
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default FooterHenko

