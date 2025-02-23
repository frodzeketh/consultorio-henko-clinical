require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Permite recibir JSON en las peticiones
app.use(cors()); // Habilita CORS

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((error) => console.error("🔴 Error al conectar a MongoDB:", error));

// Importar rutas (asegúrate de que 'routes/newsletter.js' existe)
const newsletterRoutes = require("./routes/newsletter");
app.use("/api/newsletter", newsletterRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
