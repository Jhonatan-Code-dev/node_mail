const express = require('express');
const router = express.Router();
const { handleSendMail } = require('../controllers/mailController');
/**
 * @swagger
 * /send:
 *   post:
 *     summary: Enviar correo electrónico
 *     description: Permite enviar un correo electrónico con contenido en texto plano o HTML.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - message
 *             properties:
 *               email:
 *                 type: string
 *                 example: ejemplo@correo.com
 *                 description: Dirección de correo del destinatario.
 *               message:
 *                 type: string
 *                 example: "<b>Hola desde el backend</b>"
 *                 description: Contenido del mensaje. Puede ser texto plano o HTML.
 *     responses:
 *       200:
 *         description: Correo enviado exitosamente.
 *       400:
 *         description: Email y mensaje son requeridos.
 *       500:
 *         description: Error al enviar el correo.
 */

router.post('/send', handleSendMail);

module.exports = router;