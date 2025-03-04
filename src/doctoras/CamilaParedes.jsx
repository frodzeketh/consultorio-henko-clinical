import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import "../NavBar.css"; 
import fotoFonoaudiologa from "../img/foto-doctora.jpg";

export default function CamilaParedes() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();

  // Formatear modalidad correctamente
  const modalidadRaw = location.state?.modalidad || "Atención Presencial";
  const modalidad = modalidadRaw
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleTimeClick = (time) => {
    navigate("/reserva", {
      state: {
        doctor: "Camila Paredes",
        specialty: "Fonoaudiología",
        date: selectedDate.toLocaleDateString("es-ES"),
        time,
        modalidad 
      },
    });
  };

  return (
    <div className="doctor-card">
      <div className="doctor-info-container">
        <div className="doctor-profile-container">
          <img 
            src={fotoFonoaudiologa} 
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
          <p className="doctor-specialty">Fonoaudiología / {modalidad}</p> {/* 🔹 Ahora correctamente formateado */}
          <p className="doctor-location">Avenida Callao 420 - piso 10 D, CABA.</p>
          <p className="doctor-price-style">$ 20.000</p>
        </div>

        <div className="doctor-distance">0.72 km</div>
      </div>

      <div className="doctor-appointment-slots">
        <h3 className="doctor-date">
          {selectedDate.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </h3>
        <div className="doctor-time-slots">
          {timeSlots.map((time) => (
            <button key={time} className="doctor-time-slot" onClick={() => handleTimeClick(time)}>
              {time}
            </button>
          ))}
        </div>
      </div>

      <button className="doctor-show-more" onClick={() => setShowCalendar(!showCalendar)}>
        {showCalendar ? "Ocultar calendario" : "Mostrar más días"}
      </button>

      {showCalendar && (
        <div className="doctor-calendar-container">
          <Calendar onChange={handleDateChange} value={selectedDate} minDate={new Date()} />
        </div>
      )}
    </div>
  );
}
