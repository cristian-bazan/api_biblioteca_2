const express = require('express');
const { auth } = require("express-oauth2-jwt-bearer");
const app = express();
app.use(express.json());

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: "http://localhost:3000/api/productos",
    issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
    tokenSigningAlg: "RS256",
    });

//Importar el Router de Libros
const libroRouter = require('./routes/libros');

//Importar el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

app.use('/libros', autenticacion,  libroRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});