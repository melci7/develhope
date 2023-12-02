const express = require('express');
const planetController = require('./controllers/planets');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/planets', planetController.getAll);

router.get('/planets/:id', planetController.getOneById);

router.post('/planets', planetController.create);

router.put('/planets/:id', planetController.updateById);

router.delete('/planets/:id', planetController.deleteById);

router.post('/planets/:id/image', upload.single('image'), planetController.uploadImage);

module.exports = router;
