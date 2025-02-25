const nodemailer = require("nodemailer");

const enviarComprobante = async (datos) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tuemail@gmail.com", // Usa tu email
      pass: "tupassword", // Usa una contraseña segura (o App Password de Gmail)
    },
  });

  const mailOptions = {
    from: "tuemail@gmail.com",
    to: datos.email,
    subject: "Turno Confirmado - Clínica Henko",
    html: `
      <h2>TURNO CONFIRMADO</h2>
      <p>El turno de ${datos.nombre} ${datos.apellido} con ${datos.profesional} ha sido confirmado.</p>
      <h3>Detalles del turno:</h3>
      <p><strong>Fecha:</strong> ${datos.fecha}</p>
      <p><strong>Horario:</strong> ${datos.hora}</p>
      <p><strong>Servicio:</strong> ${datos.servicio}</p>
      <p><strong>Paciente:</strong> ${datos.nombre} ${datos.apellido}</p>
      <p><strong>Profesional:</strong> ${datos.profesional}</p>
      <p><strong>Dirección:</strong> Clínica Henko - Av. Siempre Viva 123</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo de confirmación enviado.");
  } catch (error) {
    console.error("Error al enviar correo:", error);
  }
};

module.exports = { enviarComprobante };
