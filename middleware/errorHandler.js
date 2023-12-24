const errorHandler = (err, req, res, next) => {
    //verificar si el error tiene codigo de estado definido, sino establecerlo como predeterminado
    const statusCode = err.statusCode || 500;

    //construir objeto error para respuesta
    const errorResponse = {
        error: {
            message: err.message || "Error interno del servidor",
            stack: err.stack || "Internal_error",
        },
    };

    //Enviar respuesta de error en formato JSON
    res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;