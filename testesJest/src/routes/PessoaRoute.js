const express = require('express');
const router = express.Router();
const pessoaRoute = require('../controller/pessoaController')


router.get('/getUsuario', pessoaRoute.getUsuario);
router.put('/:id', pessoaRoute.put);
router.delete('/:id', pessoaRoute.delete);
router.post('/', pessoaRoute.post);

module.exports = router;