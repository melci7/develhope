const express = require('express');
const planetController = require('./controllers/planets');

const router = express.Router();

router.get('/planets', planetController.getAll);

router.get('/planets/:id', planetController.getOneById);

router.post('/planets', planetController.create);

router.put('/planets/:id', planetController.updateById);

router.delete('/planets/:id', planetController.deleteById);

module.exports = router;
