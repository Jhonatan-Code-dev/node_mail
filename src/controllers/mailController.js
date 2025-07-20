const { sendMail } = require('../logic/emailService');

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleSendMail = async (req, res) => {
  const { email, message } = req.body || {};

  if (typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Los campos deben ser tipo texto (string)',
    });
  }

  if (!email.trim() || !message.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Email y mensaje no pueden estar vacíos',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'Formato de email no válido',
    });
  }

  try {
    await sendMail(email, message);
    res.json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno al enviar el correo',
    });
  }
};

module.exports = { handleSendMail };
