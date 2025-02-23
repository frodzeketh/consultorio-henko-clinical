import "./NavBar.css";

export default function HomeInfo() {
  return (
    <main className="home-info">
      <div className="home-info-container">
        <div className="home-info-content">
          <h1 className="home-info-title">Clinica digital Henko</h1>
          <p className="home-info-description">
          Cuidamos la salud física y mental de nuestros pacientes con atención. Agenda turnos fácilmente y accede a profesionales de la salud cuando más lo necesites.
          </p>
          <button className="home-info-button">CONTACTAR</button>
        </div>
        <div className="home-info-image-container">
          <div className="home-info-phone-wrapper">
            <img
              src="/home-info.png"
              alt="Digital Hospital Interface"
              className="home-info-image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
