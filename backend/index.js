const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { nombre, email, empresa, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // puedes cambiarlo por otro SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.DEST_EMAIL,
      subject: 'Nuevo mensaje de contacto',
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Empresa: ${empresa || 'No especificada'}
        Mensaje: ${mensaje}
      `,
    });

    res.status(200).json({ ok: true, mensaje: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({ ok: false, mensaje: 'Hubo un error al enviar el mensaje.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});