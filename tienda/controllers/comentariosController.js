const comentariosService = require('../services/comentarios');


module.exports.reqLogger = (req, res, next) => {
    console.log(req)
    next()
};

module.exports.resLogger = (req, res, next) => {
    console.log(res)
    next()
};

module.exports.findById = (req, res, next) => {
    let resultado = comentariosService.findById(req.params.id);
    res.status(200).json(resultado)
};