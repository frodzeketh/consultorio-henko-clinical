import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Importamos los estilos del calendario
import "../NavBar.css"; // Se usa el CSS global
import fotoPsicopedagoga from "../img/foto-doctora.jpg";

export default function DoctoraPsiUno() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  // Horarios disponibles (puedes conectar esto con el backend más adelante)
  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  // Función para manejar el cambio de fecha en el calendario
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Ocultamos el calendario después de seleccionar una fecha
  };

  // Función para manejar la selección de un horario y redirigir a ReservaTurno.jsx
  const handleTimeClick = (time) => {
    navigate("/reserva", {
      state: {
        doctor: "Doctora Psicopedagoga 1",
        specialty: "Psicopedagogía",
        date: selectedDate.toLocaleDateString("es-ES"),
        time,
      },
    });
  };

  return (
    <div className="doctor-card">
      <div className="doctor-info-container">
        <div className="doctor-profile-container">
          <img 
            src={fotoPsicopedagoga} 
            alt="Doctor profile" 
            className="doctor-image-style"
          />
          <div className="doctor-rating">
            <span className="doctor-star">★</span>
            <span className="doctor-rating-value">4.75</span>
          </div>
        </div>

        <div className="doctor-details-container">
          <h2 className="doctor-name-style">Doctora Psicopedagoga 1</h2>
          <p className="doctor-specialty">Psicopedagogía</p>
          <p className="doctor-location">Avenida Corrientes 550 - piso 8 B, CABA.</p>
          <p className="doctor-price-style">$ 18.000</p>
        </div>

        <div className="doctor-distance">1.2 km</div>
      </div>

      {/* Muestra la fecha seleccionada y los horarios disponibles */}
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

      {/* Botón para mostrar el calendario */}
      <button className="doctor-show-more" onClick={() => setShowCalendar(!showCalendar)}>
        {showCalendar ? "Ocultar calendario" : "Mostrar más días"}
      </button>

      {/* Calendario para seleccionar una fecha futura */}
      {showCalendar && (
        <div className="doctor-calendar-container">
          <Calendar onChange={handleDateChange} value={selectedDate} minDate={new Date()} />
        </div>
      )}
    </div>
  );
}
