const mercadopago = require("mercadopago");

// Configurar MercadoPago con tu clave de acceso
mercadopago.configure({
  access_token: "TU_ACCESS_TOKEN", // Reemplázalo con tu Access Token de producción
});

const crearPago = async (req, res) => {
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
      notification_url: "http://tudominio.com/webhook", // Aquí recibirás las notificaciones de pago
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id, init_point: response.body.init_point });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearPago };
