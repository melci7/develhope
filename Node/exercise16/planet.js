const express = require('express');
const router = express.Router();
const planetsController = require('./controllers/planets');

router.get('/api/planets', planetsController.getAll);

router.get('/api/planets/:id', planetsController.getOneById);

router.post('/api/planets', planetsController.create);

router.put('/api/planets/:id', planetsController.updateById);

router.delete('/api/planets/:id', planetsController.deleteById);

module.exports = router;
