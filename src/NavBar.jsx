import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "lucide-react"
import Carousel from "./Carousel"
import HomeInfo from "./HomeInfo"
import HomeInfoReversed from "./HomeInfoReversed";



import "./NavBar.css"

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState("")
  const [showSpecialties, setShowSpecialties] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const navigate = useNavigate()

  // Función para limpiar acentos y formatear URL
  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replaceAll(" ", "-")
  }

  // Manejar selección de opciones principales (Atención presencial, etc.)
  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setShowOptions(false) // Ocultar menú principal

    const formattedOption = removeAccents(option)

    if (["atencion-presencial", "atencion-por-videollamada", "diagnostico", "urgencias"].includes(formattedOption)) {
      setShowSpecialties(true) // Mostrar menú de especialidades
    } else {
      setShowSpecialties(false)
      navigate(`/${formattedOption}`) // Redirigir si no requiere especialidad
    }
  }

  // Manejar selección de especialidad y redirigir
  const handleSpecialtySelect = (specialty) => {
    if (!selectedOption) return

    const formattedOption = removeAccents(selectedOption)
    const formattedSpecialty = removeAccents(specialty)

    // Redirigir a la página con la especialidad seleccionada
    navigate(`/${formattedOption}/${formattedSpecialty}`)

    // Resetear estados después de la selección
    setShowSpecialties(false)
    setSelectedOption("")
  }

  return (
    <div className="page-container">
      {/* Navbar con solo el logo */}
      <header className="navbar">
        <div className="navbar-content">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wiri-nci61i9o9Ay5OhpLWMBPz5RvHF77gu.png"
            alt="Wiri Logo"
            className="logo"
          />
        </div>
      </header>

      {/* Sección principal con el título y el input de búsqueda */}
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">
            Bienvenido a la <span className="highlight">revolución</span> de la salud
          </h1>
          <p className="hero-subtitle">
            Turnos y estudios con profesionales de primer nivel para esta misma semana y a precios accesibles.
          </p>

          {/* Input de búsqueda */}
          <div className="search-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Especialidad o nombre del profesional"
                className="search-input"
                onFocus={() => setShowOptions(true)} // Mostrar menú al hacer clic
              />
              <Search className="search-icon" />
            </div>

            {/* Menú de opciones principales (Atención presencial, etc.) */}
            {showOptions && (
              <div className="dropdown">
                {["Atención presencial", "Atención por videollamada", "Urgencias", "Diagnóstico"].map((option) => (
                  <div key={option} className="dropdown-item" onClick={() => handleOptionSelect(option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}

            {/* Menú de especialidades (si se seleccionó una opción válida) */}
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
      
      {/* Sección de información adicional */}
      
      <HomeInfo />
      <HomeInfoReversed />
      
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default NavBar
