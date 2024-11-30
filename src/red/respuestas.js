exports.success = function (req, res, mensaje, statusCode=200){
    const code = statusCode || 200;
    const mensajeOK = mensaje || '';
    res.status(code).send({
        error: false,
        code: statusCode,
        body: mensajeOK
    });
}

exports.success = function (req, res, mensaje, statusCode=500){
    const code = statusCode || 500;
    const mensajeError = mensaje || 'Error interno';
    res.status(code).send({
        error: true,
        code: statusCode,
        body: mensajeError
    });
}