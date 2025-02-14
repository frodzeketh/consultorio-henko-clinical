import "./NavBar.css";

export default function HomeInfo() {
  return (
    <main className="home-info">
      <div className="home-info-container">
        <div className="home-info-content">
          <h1 className="home-info-title">El hospital digital para tus empleados</h1>
          <p className="home-info-description">
            Todos tus empleados tendrán un profesional de la salud a su disposición 24/7 para ellos. Cuida de su salud
            mental y física.
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
