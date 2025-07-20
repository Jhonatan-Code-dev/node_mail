// src/config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Envío de Correos',
    version: '1.0.0',
    description: 'Documentación de la API para enviar correos con Node.js y Nodemailer',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // rutas a documentar
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
