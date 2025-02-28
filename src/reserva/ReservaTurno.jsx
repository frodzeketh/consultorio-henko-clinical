import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ReservaTurno = () => {
  const location = useLocation();
  const { date, time } = location.state || {};

  // Formatear la fecha correctamente
  const formattedDateTime = date
    ? new Date(date.split("/").reverse().join("-")).toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }) + `, ${time}`
    : "Fecha y hora no seleccionadas";

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    telefono: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservaData = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      dni: formData.dni,
      email: formData.email,
      telefono: formData.telefono,
      fecha: date,
      hora: time,
      servicio: "Fonoaudiología / Consulta",
      profesional: "Camila Paredes",
      precio: 200, // Precio total en ARS
    };

    try {
      const response = await fetch("http://localhost:5000/api/pago", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservaData),
      });

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point; // Redirige al usuario a MercadoPago
      } else {
        console.error("❌ Error: No se pudo obtener la URL de pago.");
      }
    } catch (error) {
      console.error("❌ Error al procesar el pago:", error);
    }
  };

  return (
    <div className="container-henko-reserva">
      <div className="header-henko">
        <div className="doctor-info-henko">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wirireserva-oJHzVCnGOnMG5JMKDOvjVP6WERwDix.png"
            alt="Doctor profile"
            className="doctor-image-henko"
          />
          <div className="doctor-details-henko">
            <h1>Camila Paredes</h1>
            <p>Clínica Henko - Av. Siempre Viva 123</p>
            <a href="#" className="como-llegar-henko">Como llegar</a>
          </div>
        </div>
      </div>

      <div className="appointment-details-henko">
        <p className="appointment-type-henko">Fonoaudiología / Consulta</p>
        <p className="appointment-date-henko">{formattedDateTime}</p>
      </div>

      <div className="costs-section-henko">
        <div className="cost-item-henko">
          <span>Consulta</span>
          <span>$20.000,00</span>
        </div>
        <div className="cost-item-henko">
          <span>Cargo de gestión</span>
          <span>$200,00</span>
        </div>
        <div className="cost-total-henko">
          <span>Total</span>
          <span>$20.200,00</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="patient-form-henko">
        <h2>Datos del paciente</h2>
        <div className="form-row-henko">
          <div className="form-group-henko">
            <label>Nombre</label>
            <input type="text" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} required />
          </div>
          <div className="form-group-henko">
            <label>Apellido</label>
            <input type="text" value={formData.apellido} onChange={(e) => setFormData({ ...formData, apellido: e.target.value })} required />
          </div>
          <div className="form-group-henko">
            <label>DNI</label>
            <input type="text" value={formData.dni} onChange={(e) => setFormData({ ...formData, dni: e.target.value })} required />
          </div>
        </div>

        <h3>¿A dónde te avisamos?</h3>
        <div className="form-row-henko">
          <div className="form-group-henko">
            <label>Correo electrónico</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          </div>
          <div className="form-group-henko phone-group-henko">
            <label>Número de celular</label>
            <div className="phone-input-container-henko">
              <div className="country-code-henko">
                <span>+54</span>
              </div>
              <input type="tel" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} placeholder="Ejemplo: +54 11 2222 2222" required />
            </div>
          </div>
        </div>

        <div className="form-actions-henko">
          <button type="button" className="btn-cancelar-henko">Cancelar</button>
          <button type="submit" className="btn-confirmar-henko">Reservar</button>
        </div>
      </form>
    </div>
  );
};

export default ReservaTurno;
