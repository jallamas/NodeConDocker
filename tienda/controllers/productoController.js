const productoService = require('../services/productos');


module.exports.reqLogger = (req, res, next) => {
    console.log(req)
    next()
};

module.exports.resLogger = (req, res, next) => {
    console.log(res)
    next()
};

module.exports.findAll = (req, res, next) => {
    let resultado = productoService.findAll();
    res.status(200).json(resultado)
};

module.exports.findById = (req, res, next) => {
    let resultado = productoService.findById(req.params.id);
    res.status(200).json(resultado)
};