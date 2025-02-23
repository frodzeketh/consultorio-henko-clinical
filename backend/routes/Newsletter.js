const express = require("express");
const router = express.Router();
const Email = require("../models/Email"); // Asegúrate de que el modelo se llama Email.js

// Ruta para guardar un correo en la base de datos
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "El correo es requerido" });
    }

    const nuevoEmail = new Email({ email });
    await nuevoEmail.save();

    res.status(201).json({ message: "Correo guardado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el correo", error });
  }
});

module.exports = router;
