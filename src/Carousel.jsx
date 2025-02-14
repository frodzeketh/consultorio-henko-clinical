import { useState } from "react";
import "./NavBar.css";

const services = {
  presencial: [
    { title: "Chequeo ginecológico anual", description: "Consulta ginecológica + Pap y Colpo.", image: "/placeholder.svg" },
    { title: "Apto físico", description: "Consulta cardiológica + electrocardiograma.", image: "/img/presencial-fono.jpg" },

    { title: "Consulta clínica", description: "Atención médica personalizada.", image: "/img/presencial-fono.jpg" },
    
  ],
  fonoaudiologia: [
    { title: "Audiometría", description: "Evaluación de capacidad auditiva.", image: "/placeholder.svg" },
    { title: "Terapia del lenguaje", description: "Mejora del habla.", image: "/placeholder.svg" },
    { title: "Evaluación infantil", description: "Diagnóstico temprano.", image: "/placeholder.svg" },
   
  ],
  psicopedagogia: [
    { title: "Evaluación cognitiva", description: "Diagnóstico del aprendizaje.", image: "/placeholder.svg" },
    { title: "Terapia educativa", description: "Apoyo en dificultades escolares.", image: "/placeholder.svg" },
    { title: "Orientación familiar", description: "Asesoramiento para padres.", image: "/placeholder.svg" },
    
  ],
};

const Carousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("presencial");

  return (
    <div className="carousel-container">
      <div className="tabs">
        {Object.keys(services).map((category) => (
          <button
            key={category}
            className={`tab-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="cards-container">
        {services[selectedCategory].map((service, index) => (
          <div key={index} className="card">
            <img src={service.image} alt={service.title} className="card-image" />
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
