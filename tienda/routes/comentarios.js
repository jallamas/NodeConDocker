var express = require('express');
var router = express.Router();

const customMdw = require('../middleware/custom');
const controller = require('../controllers/comentariosController');


router.get('/:id', controller.findById);

module.exports = router;