import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "lucide-react"
import Carousel from "./Carousel"
import HomeInfo from "./HomeInfo"
import HomeInfoReversed from "./HomeInfoReversed"
import BenefitsSection from "./BenefitsSection"
import Newsletter from "./Newsletter" // 👈 Importamos el Newsletter
import FooterHenko from "./FooterHenko"; // 👈 Importamos el footer


import "./NavBar.css"

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState("")
  const [showSpecialties, setShowSpecialties] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const navigate = useNavigate()

  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replaceAll(" ", "-")
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setShowOptions(false)

    const formattedOption = removeAccents(option)

    if (["atencion-presencial", "atencion-por-videollamada", "diagnostico", "urgencias"].includes(formattedOption)) {
      setShowSpecialties(true)
    } else {
      setShowSpecialties(false)
      navigate(`/${formattedOption}`)
    }
  }

  const handleSpecialtySelect = (specialty) => {
    if (!selectedOption) return

    const formattedOption = removeAccents(selectedOption)
    const formattedSpecialty = removeAccents(specialty)

    navigate(`/${formattedOption}/${formattedSpecialty}`)

    setShowSpecialties(false)
    setSelectedOption("")
  }

  return (
    <div className="page-container">
      <header className="navbar">
        <div className="navbar-content">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wiri-nci61i9o9Ay5OhpLWMBPz5RvHF77gu.png"
            alt="Wiri Logo"
            className="logo"
          />
        </div>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">
            Bienvenido a la <span className="highlight">revolución</span> de la salud
          </h1>
          <p className="hero-subtitle">
            Turnos y estudios con profesionales de primer nivel para esta misma semana y a precios accesibles.
          </p>

          <div className="search-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Especialidad o nombre del profesional"
                className="search-input"
                onFocus={() => setShowOptions(true)}
              />
              <Search className="search-icon" />
            </div>

            {showOptions && (
              <div className="dropdown">
                {["Atención presencial", "Atención por videollamada", "Urgencias", "Diagnóstico"].map((option) => (
                  <div key={option} className="dropdown-item" onClick={() => handleOptionSelect(option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}

            {showSpecialties && (
              <div className="dropdown specialties-menu">
                {["Fonoaudiología", "Psicopedagogía"].map((specialty) => (
                  <div key={specialty} className="dropdown-item" onClick={() => handleSpecialtySelect(specialty)}>
                    {specialty}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <HomeInfo />
      <HomeInfoReversed />

      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Carousel />
        </div>
      </div>

      <div className="benefits-wrapper">
        <BenefitsSection />
      </div>

      {/* Sección de Newsletter */}
      <div className="newsletter-wrapper">
        <Newsletter />
      </div>
      <FooterHenko />
    </div>
    
  )
}

export default NavBar
