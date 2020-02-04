const categoriasService = require('../services/categorias');


module.exports.reqLogger = (req, res, next) => {
    console.log(req)
    next()
};

module.exports.resLogger = (req, res, next) => {
    console.log(res)
    next()
};

module.exports.findById = (req, res, next) => {
    let resultado = categoriasService.findById(req.params.id);
    res.status(200).json(resultado)
};