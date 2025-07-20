const transporter = require('../config/mailer');

const sendMail = async (to, message) => {
  const mailOptions = {
    from: `"Servidor API" <${process.env.GMAIL_USER}>`,
    to,
    subject: 'Mensaje desde la API',
    html: message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendMail };
