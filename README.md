# 📬 node_mail

Servicio de envío de correos electrónicos usando Node.js y Gmail como proveedor SMTP, documentado con Swagger para facilitar su uso y pruebas.

## 🚀 Descripción

Este proyecto expone una API REST simple que permite enviar correos electrónicos desde un backend Node.js. Utiliza `nodemailer` para el envío de emails y `swagger-ui-express` para documentar la API. Puedes enviar tanto texto plano como contenido HTML, lo que lo hace flexible para múltiples casos de uso (notificaciones, confirmaciones, alertas, etc.).

---

## ⚙️ Tecnologías utilizadas

- **Node.js** – Entorno de ejecución del servidor.
- **Express.js** – Framework web minimalista.
- **Nodemailer** – Librería para el envío de correos.
- **dotenv** – Carga de variables de entorno desde `.env`.
- **Swagger UI + swagger-jsdoc** – Documentación interactiva de la API.

---

## 📌 Características principales

✅ Envío de correos electrónicos a través de Gmail  
✅ Soporte para texto plano y contenido HTML  
✅ Validación de campos requeridos (`email`, `message`)  
✅ Manejo de errores (errores del cliente y del servidor)  
✅ Documentación Swagger en tiempo real  
✅ Modularización limpia por capas (`routes`, `controllers`, `logic`, `config`)  
✅ Manejo de JSON inválido con respuesta clara
