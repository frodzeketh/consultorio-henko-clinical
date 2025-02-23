import { useState } from "react";
import "./NavBar.css";

// Importa las imágenes correctamente
import fonoaudiologiaImg from "./img/fonoaudiologia-completa.png";
import psicopedagogiaIMG from "./img/evaluacion-psicopedagogica.png";
import estimulacionIMG from "./img/estimulacion-desarrollo.png";

const services = {
  presencial: [
    { title: "Evaluación fonoaudiológica completa", description: "Consulta con especialista, evaluación del habla, voz y lenguaje.", image: fonoaudiologiaImg },
    { title: "Evaluación psicopedagógica integral", description: "Consulta con especialista, diagnóstico de dificultades de aprendizaje y estrategias de mejora.", image: psicopedagogiaIMG },
    { title: "Estimulación del desarrollo infantil", description: "Consulta con especialista, evaluación y estrategias para potenciar el lenguaje y aprendizaje en niños.", image: estimulacionIMG },
  ],
  fonoaudiologia: [
    { title: "Audiometría", description: "Evaluación de capacidad auditiva.", image: fonoaudiologiaImg },
    { title: "Terapia del lenguaje", description: "Mejora del habla.", image: fonoaudiologiaImg },
    { title: "Evaluación infantil", description: "Diagnóstico temprano.", image: fonoaudiologiaImg },
  ],
  psicopedagogia: [
    { title: "Evaluación cognitiva", description: "Diagnóstico del aprendizaje.", image: fonoaudiologiaImg },
    { title: "Terapia educativa", description: "Apoyo en dificultades escolares.", image: fonoaudiologiaImg },
    { title: "Orientación familiar", description: "Asesoramiento para padres.", image: fonoaudiologiaImg },
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
            {/* Botón agregado dentro de cada tarjeta */}
            <button className="card-button">Reservar ahora</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
