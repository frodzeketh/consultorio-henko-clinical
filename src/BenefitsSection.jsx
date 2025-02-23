import "./NavBar.css";

const BenefitsSection = () => {
  return (
    <section className="benefits-container">
      <h1 className="benefits-title">
        Los <span className="benefits-highlight">beneficios</span> de Clinica Henko
      </h1>
      <div className="benefits-grid">
        <div className="benefits-card">
          <span className="benefits-icon">👨‍⚕️</span>
          <h2 className="benefits-text">Consultas médicas</h2>
        </div>
        <div className="benefits-card">
          <span className="benefits-icon">👩‍⚕️</span>
          <h2 className="benefits-text">Telemedicina</h2>
        </div>
        <div className="benefits-card">
          <span className="benefits-icon">💉</span>
          <h2 className="benefits-text">Estudios y tests</h2>
        </div>
        <div className="benefits-card">
          <span className="benefits-icon">🦷</span>
          <h2 className="benefits-text">Odontología</h2>
        </div>
        <div className="benefits-card">
          <span className="benefits-icon">💊</span>
          <h2 className="benefits-text">Descuentos en farmacias</h2>
        </div>
        <div className="benefits-card">
          <span className="benefits-icon">❤️</span>
          <h2 className="benefits-text">Psicología y salud mental</h2>
        </div>
      </div>
      <a href="#" className="benefits-view-all">
        Ver todos los servicios
      </a>
    </section>
  );
};

export default BenefitsSection;
