import { useState } from "react";
import "../NavBar.css"; // Se usa el CSS global
import fotoFonoaudiologa from "../img/foto-doctora.jpg";

<img src={fotoFonoaudiologa} alt="Fonoaudióloga" />


export default function CamilaParedes() {
  const [showCalendar, setShowCalendar] = useState(false);

  const timeSlots = ["15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15"];

  return (
    <div className="doctor-card">
      <div className="doctor-info-container">
        <div className="doctor-profile-container">
        
            <img src={fotoFonoaudiologa} alt="Fonoaudióloga" 
            alt="Doctor profile"
            className="doctor-image-style"
            />

          <div className="doctor-rating">
            <span className="doctor-star">★</span>
            <span className="doctor-rating-value">4.71</span>
          </div>
        </div>

        <div className="doctor-details-container">
          <h2 className="doctor-name-style">Camila Paredes</h2>
          <p className="doctor-specialty">Fonoaudiología</p>
          <p className="doctor-location">Avenida Callao 420 - piso 10 D, CABA.</p>
          <p className="doctor-price-style">$ 20.000</p>
        </div>

        <div className="doctor-distance">0.72 km</div>
      </div>

      <div className="doctor-appointment-slots">
        <h3 className="doctor-date">Martes, 25 de febrero de 2025</h3>
        <div className="doctor-time-slots">
          {timeSlots.map((time) => (
            <button key={time} className="doctor-time-slot">
              {time}
            </button>
          ))}
        </div>
      </div>

      <button className="doctor-show-more" onClick={() => setShowCalendar(!showCalendar)}>
        Mostrar más días
      </button>

      {showCalendar && (
        <div className="doctor-calendar-container">
          <div className="doctor-calendar-placeholder"></div>
        </div>
      )}
    </div>
  );
}
