import "./NavBar.css";

export default function HomeInfoReversed() {
  return (
    <main className="home-info-2">
      <div className="home-info-container-2">
        <div className="home-info-image-container-2">
          <div className="home-info-phone-wrapper-2">
            <img
              src="/home-info.png"
              alt="Digital Healthcare"
              className="home-info-image-2"
            />
          </div>
        </div>
        <div className="home-info-content-2">
          <h1 className="home-info-title-2">Cuidado personalizado para tu equipo</h1>
          <p className="home-info-description-2">
            Brindamos acceso inmediato a especialistas en salud para mantener a tu equipo sano y productivo.
          </p>
          <button className="home-info-button-2">SABER MÁS</button>
        </div>
      </div>
    </main>
  );
}
