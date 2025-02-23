import { useState } from "react"
import "./NavBar.css"

const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) return

    try {
      await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      setEmail("") // Limpiar el input después de enviar
    } catch (error) {
      console.error("Error al enviar el correo:", error)
    }
  }

  return (
    <div className="newsletter-container">
      <div className="newsletter-section">
        <h2 className="newsletter-title">¿No necesitás ningún turno?</h2>
        <p className="newsletter-description">
          Dejanos tu mail y recibí descuentos, ofertas exclusivas, información sobre salud y mucho más.
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            <span className="newsletter-arrow">→</span>
          </button>
        </form>
      </div>
      <div className="info-section">
        <h2 className="info-title">
          ¿O querés <span className="info-highlight">más información</span>?
        </h2>
        <p className="info-description">
          Contactanos a través de nuestros canales oficiales para que uno de nuestros Wiriers pueda darte una mano.
        </p>
        <div className="contact-info">
          <a href="tel:+5491168167431" className="contact-link">
            <span className="contact-icon">📱</span> + 54 9 11 6816 7431
          </a>
          <a href="/WiriSalud" className="contact-link">
            <span className="contact-icon">💬</span> Clinica Henko
          </a>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
