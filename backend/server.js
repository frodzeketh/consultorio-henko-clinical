require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mercadopago = require("mercadopago");  // ✅ Mantén solo esta

const { enviarComprobante } = require("./emailSender");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((error) => console.error("🔴 Error al conectar a MongoDB:", error));

// Configurar MercadoPago

mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN);


// Importar rutas existentes
const newsletterRoutes = require("./routes/newsletter");
app.use("/api/newsletter", newsletterRoutes);

// Nueva ruta para crear un pago con MercadoPago
app.post("/api/pago", async (req, res) => {
  try {
    const { nombre, apellido, email, fecha, hora, servicio, profesional, precio } = req.body;

    const preference = {
      items: [
        {
          title: `${servicio} con ${profesional}`,
          quantity: 1,
          unit_price: parseFloat(precio),
          currency_id: "ARS",
        },
      ],
      payer: {
        name: nombre,
        surname: apellido,
        email: email,
      },
      back_urls: {
        success: "http://localhost:3000/pago-exitoso",
        failure: "http://localhost:3000/pago-fallido",
        pending: "http://localhost:3000/pago-pendiente",
      },
      auto_return: "approved",
      notification_url: "http://localhost:5000/webhook", // Webhook para MercadoPago
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id, init_point: response.body.init_point });
  } catch (error) {
    console.error("❌ Error al crear el pago:", error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook para recibir confirmación de pagos y enviar email
app.post("/webhook", async (req, res) => {
  console.log("📩 Webhook recibido:", req.body);

  if (req.body.type === "payment") {
    const paymentId = req.body.data.id;

    try {
      const payment = await mercadopago.payment.findById(paymentId);

      if (payment.body.status === "approved") {
        const datosTurno = {
          nombre: payment.body.payer.first_name || "Paciente",
          apellido: payment.body.payer.last_name || "Ejemplo",
          email: payment.body.payer.email || "paciente@example.com",
          fecha: "11 de marzo", // Ajustar según tu lógica de reservas
          hora: "14:00",
          servicio: "Fonoaudiología / Consulta",
          profesional: "Camila Paredes",
        };

        await enviarComprobante(datosTurno);
      }
    } catch (error) {
      console.error("❌ Error al verificar pago:", error);
    }
  }

  res.sendStatus(200);
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
